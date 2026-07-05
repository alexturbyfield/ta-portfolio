import { readdir } from 'node:fs/promises'
import path from 'node:path'
import ArtGalleryClient from './ArtGalleryClient'

const imageExtensions = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
])

const videoExtensions = new Set([
  '.mp4',
  '.mov',
])

const videoExtensionPriority = ['.mp4', '.mov']

const artTitles: Record<string, string> = {
  'Alien Field.jpg': 'Alien Field',
  'Bakery.jpg': 'Bakery',
  'ECC-View1-PrintRes-24x36.jpg': 'ECC View I',
  'ECC-View2-PrintRes-24x36-fixed-again.jpg': 'ECC View II',
  'EYTImg.png': 'EYT Field',
  'Fiat.jpg': 'Fiat',
  'Field Unity.PNG': 'Voiceball Stadium',
  'LevelUp.mov': 'Level Up',
  'LevelUp.mp4': 'Level Up',
  'Mandissolve.mp4': 'Mandalorian Dissolve',
  'MandolorianBody.png': 'Mandalorian',
  'Pinball Field.PNG': 'Pinball',
  'PinballFieldReal_000.png': 'Pinball Field',
  'Radish.mov': 'Radish',
  'RecordField_000.png': 'Record Field',
  'seaMonster.jpg': 'Sea Monster',
  'Shaymin.mp4': 'Shaymin',
  'SmokeAndDancer.png': 'UMF Projection Art',
  'StarField_000.png': 'Star Field',
  'SYSTEMS_WEB.png': 'Systems',
  'TigerLilly.jpg': 'Tiger Lily',
  'vader.jpg': 'Vader',
  'VB_KeyArt_02.png': 'Voiceball Key Art',
  'Voiceball Logo.png': 'Voiceball Logo',
  'winter_scene.jpg': 'Winter Scene',
  'wormhole.jpg': 'Wormhole',
}

const artNotes: Record<string, string[]> = {
  'LevelUp.mp4': [
    'My work on this piece included UI, animation, and VFX.',
    'Michelle Hung provided illustration and art direction.',
  ],
  'Radish.mov': [
    'My work on this piece included shaders and 3D modeling.',
    'Kyle Olson provided the concept.',
  ],
  'Shaymin.mp4': [
    'My work on this piece included shaders, animation, camera work, and architecture.',
    'Craig Kitzmann created the 3D art, layout, concept work, and painting.',
  ],
}

const featuredMediaOrder = [
  'Shaymin.mp4',
  'LevelUp.mp4',
  'Mandissolve.mp4',
]

function formatTitle(filename: string) {
  if (artTitles[filename]) {
    return artTitles[filename]
  }

  const withoutExtension = filename.replace(/\.[^.]+$/, '')

  return withoutExtension
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildFeaturedOrdering<T extends { kind: 'image' | 'video'; src: string }>(items: T[]) {
  const videos = items
    .filter((item) => item.kind === 'video')
    .sort((left, right) => {
      const leftName = decodeURIComponent(left.src.split('/').pop() ?? '')
      const rightName = decodeURIComponent(right.src.split('/').pop() ?? '')
      const leftIndex = featuredMediaOrder.indexOf(leftName)
      const rightIndex = featuredMediaOrder.indexOf(rightName)

      if (leftIndex === -1 && rightIndex === -1) {
        return leftName.localeCompare(rightName)
      }

      if (leftIndex === -1) {
        return 1
      }

      if (rightIndex === -1) {
        return -1
      }

      return leftIndex - rightIndex
    })
  const images = items.filter((item) => item.kind === 'image')
  const ordered: T[] = []

  while (videos.length > 0) {
    const nextVideo = videos.shift()

    if (nextVideo) {
      ordered.push(nextVideo)
    }

    const nextImage = images.shift()

    if (nextImage) {
      ordered.push(nextImage)
    }
  }

  return [...ordered, ...images]
}

export default async function ArtPage() {
  const artDirectory = path.join(process.cwd(), 'public', 'images', 'art')
  const files = await readdir(artDirectory)

  const preferredVideoFiles = new Set(
    Object.values(
      files
        .filter((file) => videoExtensions.has(path.extname(file).toLowerCase()))
        .reduce<Record<string, string>>((selected, file) => {
          const extension = path.extname(file).toLowerCase()
          const basename = file.slice(0, -extension.length)
          const current = selected[basename]

          if (!current) {
            selected[basename] = file
            return selected
          }

          const currentExtension = path.extname(current).toLowerCase()

          if (
            videoExtensionPriority.indexOf(extension) <
            videoExtensionPriority.indexOf(currentExtension)
          ) {
            selected[basename] = file
          }

          return selected
        }, {}),
    ),
  )

  const media = buildFeaturedOrdering(
    files
    .filter((file) => {
      const extension = path.extname(file).toLowerCase()

      if (imageExtensions.has(extension)) {
        return true
      }

      if (videoExtensions.has(extension)) {
        return preferredVideoFiles.has(file)
      }

      return false
    })
    .sort((left, right) => left.localeCompare(right))
    .map((file) => ({
      src: `/images/art/${encodeURIComponent(file)}`,
      title: formatTitle(file),
      notes: artNotes[file],
      kind: videoExtensions.has(path.extname(file).toLowerCase())
        ? ('video' as const)
        : ('image' as const),
    })),
  )

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-orange-300/10 bg-[#181818]/92 px-6 py-8 shadow-[0_36px_100px_rgba(0,0,0,0.34)] sm:px-8 md:px-10 lg:px-12 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,154,76,0.14)_0%,transparent_34%,rgba(145,104,255,0.12)_70%,transparent_100%),linear-gradient(24deg,transparent_8%,rgba(255,154,76,0.07)_42%,transparent_68%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(140,215,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(140,215,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative space-y-8">
        <div className="space-y-4">
          <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.34em] text-orange-100/58">
            Selected Art
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            Artwork, studies,
            <br />
            and visual worlds
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-300/78 sm:text-lg">
            A broader look at the art side of my work, from environment and
            concept-driven pieces to game-adjacent visual development. Click
            any image for a closer view.
          </p>
        </div>

        <ArtGalleryClient media={media} />
      </div>
    </section>
  )
}
