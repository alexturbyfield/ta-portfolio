'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ProjectImageCarouselProps = {
  images: string[]
  projectTitle: string
  variant?: 'default' | 'onion'
}

export default function ProjectImageCarousel({
  images,
  projectTitle,
  variant = 'default',
}: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const activeImage = images[activeIndex]

  useEffect(() => {
    if (!expandedImage) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setExpandedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [expandedImage])

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1))
  }

  function showNext() {
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1))
  }

  const previousIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
  const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

  const lightbox =
    expandedImage && typeof document !== 'undefined'
      ? createPortal(
          <div
            className="animate-lightbox-fade fixed inset-0 z-[999] bg-[rgba(11,16,12,0.42)] p-3 backdrop-blur-[2px] sm:p-5"
            role="dialog"
            aria-modal="true"
            aria-label={`${projectTitle} expanded gallery image`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setExpandedImage(null)
              }
            }}
          >
            <div className="animate-lightbox-panel flex min-h-full flex-col items-center justify-center gap-3">
              <div className="flex w-full max-w-4xl shrink-0 items-center justify-between gap-4 rounded-[1rem] border border-[rgba(220,231,191,0.14)] bg-[linear-gradient(145deg,rgba(34,46,31,0.86),rgba(43,47,37,0.78)_55%,rgba(33,43,40,0.78))] px-4 py-2 shadow-[0_16px_45px_rgba(0,0,0,0.28)]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#efe1a9]/62">
                  {projectTitle} gallery
                </p>
                <button
                  type="button"
                  className="rounded-full border border-[rgba(220,231,191,0.18)] bg-[rgba(220,231,191,0.08)] px-4 py-2 text-sm uppercase tracking-[0.16em] text-[#f3efdf] transition hover:border-[rgba(220,231,191,0.28)] hover:bg-[rgba(220,231,191,0.14)]"
                  onClick={() => setExpandedImage(null)}
                >
                  Close
                </button>
              </div>

              <div className="relative h-[50vh] w-full max-w-4xl overflow-hidden rounded-[1.1rem] border border-[rgba(220,231,191,0.14)] bg-[rgba(20,28,22,0.92)] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
                <Image
                  src={expandedImage}
                  alt={`${projectTitle} expanded gallery image`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <div className="space-y-4">
        {variant === 'onion' ? (
          <div className="relative overflow-hidden rounded-[1.45rem] border border-[rgba(220,231,191,0.14)] bg-[linear-gradient(155deg,rgba(31,42,29,0.82),rgba(35,38,29,0.75)_58%,rgba(27,39,37,0.8))] px-3 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.24)] sm:px-5">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-4xl">
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-0 top-1/2 z-10 hidden h-[78%] w-[28%] -translate-x-[18%] -translate-y-1/2 overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/40 opacity-70 transition hover:opacity-95 md:block"
                aria-label="Show previous image"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={images[previousIndex]}
                    alt={`${projectTitle} gallery image ${previousIndex + 1}`}
                    fill
                    sizes="28vw"
                    className="object-cover opacity-88 blur-[0.2px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15))]" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setExpandedImage(activeImage)}
                className="group absolute inset-x-[8%] top-0 z-20 block h-full overflow-hidden rounded-[1.4rem] border border-white/14 bg-black text-left shadow-[0_24px_70px_rgba(0,0,0,0.42)] md:inset-x-[14%]"
                aria-label={`Expand ${projectTitle} gallery image ${activeIndex + 1}`}
              >
                <div
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={image} className="relative h-full w-full shrink-0">
                      <Image
                        src={image}
                        alt={`${projectTitle} gallery image ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 720px, 92vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.14)_42%,rgba(0,0,0,0.64)_100%)]" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/12 bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/76 backdrop-blur-sm">
                  Tap for detail
                </div>
                <div className="absolute bottom-4 right-4 rounded-full border border-white/12 bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/76 backdrop-blur-sm">
                  {activeIndex + 1} / {images.length}
                </div>
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-0 top-1/2 z-10 hidden h-[78%] w-[28%] translate-x-[18%] -translate-y-1/2 overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/40 opacity-70 transition hover:opacity-95 md:block"
                aria-label="Show next image"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={images[nextIndex]}
                    alt={`${projectTitle} gallery image ${nextIndex + 1}`}
                    fill
                    sizes="28vw"
                    className="object-cover opacity-88 blur-[0.2px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15))]" />
                </div>
              </button>
            </div>
            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="rounded-full border border-[rgba(220,231,191,0.16)] bg-[rgba(19,27,20,0.68)] px-3 py-2 text-sm text-[#f3efdf]/84 backdrop-blur-sm transition hover:border-[rgba(205,223,139,0.32)] hover:bg-[rgba(19,27,20,0.82)] hover:text-white"
                  aria-label="Show previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-full border border-[rgba(220,231,191,0.16)] bg-[rgba(19,27,20,0.68)] px-3 py-2 text-sm text-[#f3efdf]/84 backdrop-blur-sm transition hover:border-[rgba(141,194,215,0.32)] hover:bg-[rgba(19,27,20,0.82)] hover:text-white"
                  aria-label="Show next image"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[1.25rem] border border-white/12 bg-black shadow-[0_18px_55px_rgba(0,0,0,0.32)]">
            <button
              type="button"
              onClick={() => setExpandedImage(activeImage)}
              className="group relative block aspect-video w-full overflow-hidden text-left"
              aria-label={`Expand ${projectTitle} gallery image ${activeIndex + 1}`}
            >
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={image} className="relative h-full w-full shrink-0">
                    <Image
                      src={image}
                      alt={`${projectTitle} gallery image ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 680px, 92vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/10 opacity-80" />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/12 bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/76 backdrop-blur-sm">
                Click to expand
              </div>
              <div className="absolute bottom-4 right-4 rounded-full border border-white/12 bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/76 backdrop-blur-sm">
                {activeIndex + 1} / {images.length}
              </div>
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-[rgba(220,231,191,0.16)] bg-[rgba(19,27,20,0.68)] px-3 py-2 text-sm text-[#f3efdf]/84 backdrop-blur-sm transition hover:border-[rgba(205,223,139,0.32)] hover:bg-[rgba(19,27,20,0.82)] hover:text-white"
                  aria-label="Show previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-[rgba(220,231,191,0.16)] bg-[rgba(19,27,20,0.68)] px-3 py-2 text-sm text-[#f3efdf]/84 backdrop-blur-sm transition hover:border-[rgba(141,194,215,0.32)] hover:bg-[rgba(19,27,20,0.82)] hover:text-white"
                  aria-label="Show next image"
                >
                  Next
                </button>
              </>
            )}
          </div>
        )}

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-9 bg-gradient-to-r from-[#efe1a9] via-[#cddf8b] to-[#8dc2d7]'
                    : 'w-2 bg-white/22 hover:bg-white/45'
                }`}
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        )}
      </div>

      {lightbox}
    </>
  )
}
