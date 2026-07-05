'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ProjectImageCarouselProps = {
  images: string[]
  projectTitle: string
}

export default function ProjectImageCarousel({
  images,
  projectTitle,
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

  const lightbox =
    expandedImage && typeof document !== 'undefined'
      ? createPortal(
          <div
            className="animate-lightbox-fade fixed inset-0 z-[999] bg-black/55 p-3 backdrop-blur-[2px] sm:p-5"
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
              <div className="flex w-full max-w-4xl shrink-0 items-center justify-between gap-4 rounded-[0.9rem] border border-white/10 bg-[#181818]/82 px-4 py-2 shadow-[0_16px_45px_rgba(0,0,0,0.4)]">
                <p className="text-xs uppercase tracking-[0.24em] text-white/56">
                  {projectTitle} gallery
                </p>
                <button
                  type="button"
                  className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm uppercase tracking-[0.16em] text-white/82 transition hover:bg-white/14 hover:text-white"
                  onClick={() => setExpandedImage(null)}
                >
                  Close
                </button>
              </div>

              <div className="relative h-[50vh] w-full max-w-4xl overflow-hidden rounded-[1.1rem] border border-white/14 bg-[#080808]/90 shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-black/55 px-3 py-2 text-sm text-white/82 backdrop-blur-sm transition hover:border-orange-300/35 hover:bg-black/75 hover:text-white"
                aria-label="Show previous image"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-black/55 px-3 py-2 text-sm text-white/82 backdrop-blur-sm transition hover:border-violet-300/35 hover:bg-black/75 hover:text-white"
                aria-label="Show next image"
              >
                Next
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-9 bg-gradient-to-r from-orange-300 to-violet-300'
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
