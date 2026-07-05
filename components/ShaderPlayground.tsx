'use client'

import { useEffect, useRef, useState } from 'react'

type ShaderPlaygroundProps = {
  title: string
  initialCode: string
  language: string
}

type ShaderControls = {
  horizontalPhase: number
  shrinkAmount: number
  patternScale: number
}

type CompileResult = {
  program: WebGLProgram | null
  error?: string
}

const defaultControls: ShaderControls = {
  horizontalPhase: 0.55,
  shrinkAmount: 0.24,
  patternScale: 6.4,
}

const vertexShaderSource = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

function makeFragmentShaderSource(userCode: string) {
  const shaderBody = userCode.includes('void mainImage')
    ? userCode
    : `void mainImage(out vec4 fragColor, in vec2 fragCoord) {
${userCode}
}`

  return `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_horizontalPhase;
uniform float u_shrinkAmount;
uniform float u_patternScale;
varying vec2 v_uv;

${shaderBody}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, v_uv * u_resolution.xy);
  gl_FragColor = color;
}
`
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type)

  if (!shader) {
    return { shader: null, error: 'Unable to create shader.' }
  }

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const error = gl.getShaderInfoLog(shader) ?? 'Unknown shader compile error.'
    gl.deleteShader(shader)
    return { shader: null, error }
  }

  return { shader, error: undefined }
}

function createProgram(
  gl: WebGLRenderingContext,
  fragmentSource: string,
): CompileResult {
  const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)

  if (!vertex.shader) {
    return { program: null, error: vertex.error }
  }

  const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource)

  if (!fragment.shader) {
    gl.deleteShader(vertex.shader)
    return { program: null, error: fragment.error }
  }

  const program = gl.createProgram()

  if (!program) {
    gl.deleteShader(vertex.shader)
    gl.deleteShader(fragment.shader)
    return { program: null, error: 'Unable to create shader program.' }
  }

  gl.attachShader(program, vertex.shader)
  gl.attachShader(program, fragment.shader)
  gl.linkProgram(program)

  gl.deleteShader(vertex.shader)
  gl.deleteShader(fragment.shader)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const error = gl.getProgramInfoLog(program) ?? 'Unknown program link error.'
    gl.deleteProgram(program)
    return { program: null, error }
  }

  return { program }
}

function resizeCanvas(canvas: HTMLCanvasElement, gl: WebGLRenderingContext) {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
  const width = Math.max(1, Math.floor(canvas.clientWidth * pixelRatio))
  const height = Math.max(1, Math.floor(canvas.clientHeight * pixelRatio))

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
  }

  gl.viewport(0, 0, canvas.width, canvas.height)
}

function renderHighlightedCode(source: string) {
  return source.split('\n').map((line, index) => {
    const commentIndex = line.indexOf('//')

    if (commentIndex === -1) {
      return <div key={`line-${index}`}>{line || ' '}</div>
    }

    const codePart = line.slice(0, commentIndex)
    const commentPart = line.slice(commentIndex)

    return (
      <div key={`line-${index}`}>
        {codePart}
        <span className="text-[#8fb0ff]">{commentPart}</span>
      </div>
    )
  })
}

export default function ShaderPlayground({
  title,
  initialCode,
  language,
}: ShaderPlaygroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const previewRef = useRef<HTMLPreElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const statusRef = useRef<HTMLParagraphElement>(null)
  const [source, setSource] = useState(initialCode)
  const [compiled, setCompiled] = useState({ code: initialCode, version: 0 })
  const [controls, setControls] = useState<ShaderControls>(defaultControls)
  const [isEditingCode, setIsEditingCode] = useState(false)
  const controlsRef = useRef<ShaderControls>(defaultControls)

  controlsRef.current = controls

  function runShader() {
    if (statusRef.current) {
      statusRef.current.textContent = 'Compiling shader...'
    }

    setCompiled((current) => ({
      code: source,
      version: current.version + 1,
    }))
  }

  function resetShader() {
    if (statusRef.current) {
      statusRef.current.textContent = 'Resetting shader...'
    }

    setSource(initialCode)
    setControls(defaultControls)
    setCompiled((current) => ({
      code: initialCode,
      version: current.version + 1,
    }))
  }

  function syncScroll(
    sourceElement: HTMLTextAreaElement | HTMLPreElement | null,
    targetElement: HTMLTextAreaElement | HTMLPreElement | null,
  ) {
    if (!sourceElement || !targetElement) {
      return
    }

    targetElement.scrollTop = sourceElement.scrollTop
    targetElement.scrollLeft = sourceElement.scrollLeft
  }

  useEffect(() => {
    if (!isEditingCode || !textareaRef.current || !previewRef.current) {
      return
    }

    syncScroll(previewRef.current, textareaRef.current)
    textareaRef.current.focus()
  }, [isEditingCode])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const activeCanvas: HTMLCanvasElement = canvas

    const gl = activeCanvas.getContext('webgl', {
      alpha: false,
      antialias: true,
      depth: false,
      stencil: false,
    })

    if (!gl) {
      if (statusRef.current) {
        statusRef.current.textContent =
          'WebGL is unavailable in this browser, so the shader cannot run here.'
      }
      return
    }

    const activeGl: WebGLRenderingContext = gl

    const fragmentSource = makeFragmentShaderSource(compiled.code)
    const { program, error } = createProgram(activeGl, fragmentSource)

    if (!program) {
      activeGl.clearColor(0.03, 0.03, 0.03, 1)
      activeGl.clear(activeGl.COLOR_BUFFER_BIT)

      if (statusRef.current) {
        statusRef.current.textContent = `Compile error: ${error}`
      }
      return
    }

    const positions = activeGl.createBuffer()

    if (!positions) {
      activeGl.deleteProgram(program)

      if (statusRef.current) {
        statusRef.current.textContent = 'Unable to create preview geometry.'
      }
      return
    }

    activeGl.bindBuffer(activeGl.ARRAY_BUFFER, positions)
    activeGl.bufferData(
      activeGl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      activeGl.STATIC_DRAW,
    )

    const positionLocation = activeGl.getAttribLocation(program, 'a_position')
    const timeLocation = activeGl.getUniformLocation(program, 'u_time')
    const resolutionLocation = activeGl.getUniformLocation(
      program,
      'u_resolution',
    )
    const horizontalPhaseLocation = activeGl.getUniformLocation(
      program,
      'u_horizontalPhase',
    )
    const shrinkAmountLocation = activeGl.getUniformLocation(
      program,
      'u_shrinkAmount',
    )
    const patternScaleLocation = activeGl.getUniformLocation(
      program,
      'u_patternScale',
    )
    const startTime = performance.now()
    let animationFrame = 0

    function render(now: number) {
      resizeCanvas(activeCanvas, activeGl)
      const liveControls = controlsRef.current

      activeGl.clearColor(0.03, 0.03, 0.03, 1)
      activeGl.clear(activeGl.COLOR_BUFFER_BIT)
      activeGl.useProgram(program)
      activeGl.bindBuffer(activeGl.ARRAY_BUFFER, positions)
      activeGl.enableVertexAttribArray(positionLocation)
      activeGl.vertexAttribPointer(positionLocation, 2, activeGl.FLOAT, false, 0, 0)
      activeGl.uniform1f(timeLocation, (now - startTime) * 0.001)
      activeGl.uniform2f(
        resolutionLocation,
        activeCanvas.width,
        activeCanvas.height,
      )

      if (horizontalPhaseLocation) {
        activeGl.uniform1f(horizontalPhaseLocation, liveControls.horizontalPhase)
      }

      if (shrinkAmountLocation) {
        activeGl.uniform1f(shrinkAmountLocation, liveControls.shrinkAmount)
      }

      if (patternScaleLocation) {
        activeGl.uniform1f(patternScaleLocation, liveControls.patternScale)
      }

      activeGl.drawArrays(activeGl.TRIANGLE_STRIP, 0, 4)

      animationFrame = window.requestAnimationFrame(render)
    }

    resizeCanvas(activeCanvas, activeGl)
    animationFrame = window.requestAnimationFrame(render)

    if (statusRef.current) {
      statusRef.current.textContent =
        'Running live. Edit the code, then press Run shader.'
    }

    return () => {
      window.cancelAnimationFrame(animationFrame)
      activeGl.deleteBuffer(positions)
      activeGl.deleteProgram(program)
    }
  }, [compiled.code, compiled.version])

  return (
    <div className="mt-7 overflow-hidden rounded-[1.35rem] border border-orange-300/18 bg-[#0d0d0d] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#181818] px-4 py-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-orange-100/62">
            {title}
          </p>
          <p className="mt-1 text-xs text-white/48">
            Browser-safe WebGL preview of the production shader idea.
          </p>
        </div>
        <span className="rounded-full border border-violet-300/18 bg-violet-300/[0.08] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-violet-100/72">
          {language}
        </span>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-black shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <canvas
              ref={canvasRef}
              className="h-[220px] w-full bg-black md:h-[250px]"
            />
            <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/12 bg-black/45 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/68 backdrop-blur-sm">
              Live Preview
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-orange-300/16 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.24em] text-orange-100/62">
                Live Controls
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/42">
                tweak the wave
              </p>
            </div>

            <div className="space-y-4">
              <label className="block">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm text-white/78">
                  <span>Horizontal phase</span>
                  <span className="font-mono text-xs text-orange-100/70">
                    {controls.horizontalPhase.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.15"
                  max="1.25"
                  step="0.01"
                  value={controls.horizontalPhase}
                  onChange={(event) =>
                    setControls((current) => ({
                      ...current,
                      horizontalPhase: Number(event.target.value),
                    }))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/12 accent-orange-300"
                />
              </label>

              <label className="block">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm text-white/78">
                  <span>Shrink amount</span>
                  <span className="font-mono text-xs text-orange-100/70">
                    {controls.shrinkAmount.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.08"
                  max="0.34"
                  step="0.01"
                  value={controls.shrinkAmount}
                  onChange={(event) =>
                    setControls((current) => ({
                      ...current,
                      shrinkAmount: Number(event.target.value),
                    }))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/12 accent-violet-300"
                />
              </label>

              <label className="block">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm text-white/78">
                  <span>Pattern scale</span>
                  <span className="font-mono text-xs text-orange-100/70">
                    {controls.patternScale.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="3.2"
                  max="10.0"
                  step="0.05"
                  value={controls.patternScale}
                  onChange={(event) =>
                    setControls((current) => ({
                      ...current,
                      patternScale: Number(event.target.value),
                    }))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/12 accent-orange-200"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="flex min-h-[360px] flex-col">
          <div className="flex flex-1 flex-col overflow-hidden rounded-[1.2rem] border border-violet-300/18 bg-[#080808]">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.24em] text-violet-100/62">
                Shader Code
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/42">
                click to edit
              </p>
            </div>
            <div className="relative min-h-[320px] flex-1">
              {!isEditingCode && (
                <button
                  type="button"
                  onClick={() => setIsEditingCode(true)}
                  className="absolute inset-0 overflow-auto text-left"
                  aria-label="Open shader editor"
                >
                  <pre
                    ref={previewRef}
                    className="h-full w-full overflow-auto p-4 font-mono text-[11px] leading-5 whitespace-pre text-orange-50/88"
                  >
                    {renderHighlightedCode(source)}
                  </pre>
                </button>
              )}

              {isEditingCode && (
                <textarea
                  ref={textareaRef}
                  value={source}
                  onChange={(event) => setSource(event.target.value)}
                  onBlur={() => {
                    syncScroll(textareaRef.current, previewRef.current)
                    setIsEditingCode(false)
                  }}
                  onScroll={() => syncScroll(textareaRef.current, previewRef.current)}
                  spellCheck={false}
                  wrap="off"
                  className="absolute inset-0 min-h-[320px] w-full resize-none overflow-auto bg-transparent p-4 font-mono text-[11px] leading-5 text-orange-50/88 outline-none selection:bg-orange-300/25"
                  aria-label="Editable shader code"
                />
              )}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={runShader}
              className="rounded-full border border-orange-200/30 bg-orange-300/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-50 transition hover:border-orange-200/55 hover:bg-orange-300/22"
            >
              Run shader
            </button>
            <button
              type="button"
              onClick={resetShader}
              className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/68 transition hover:border-violet-200/35 hover:bg-violet-300/12 hover:text-white"
            >
              Reset
            </button>
          </div>

          <p
            ref={statusRef}
            aria-live="polite"
            className="mt-3 min-h-5 text-xs leading-5 text-white/54"
          >
            Compiling shader...
          </p>
        </div>
      </div>
    </div>
  )
}
