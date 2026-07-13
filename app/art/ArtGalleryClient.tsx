'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ArtGalleryClientProps = {
  media: Array<{
    src: string
    title: string
    notes?: string[]
    kind: 'image' | 'video'
  }>
}

export default function ArtGalleryClient({ media }: ArtGalleryClientProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const activeMedia = activeIndex !== null ? media[activeIndex] : null

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {media.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative block overflow-hidden rounded-[1.35rem] border border-[rgba(220,231,191,0.14)] bg-[linear-gradient(155deg,rgba(31,42,29,0.88),rgba(36,39,31,0.82)_58%,rgba(28,39,37,0.84))] text-left shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-[rgba(205,223,139,0.26)] active:scale-[0.995]"
          >
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] xl:aspect-[4/5]">
              {item.kind === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.74)_100%)]" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/72">
                {item.kind === 'video' ? 'Motion' : 'Artwork'}
              </p>
              <p className="mt-1 text-sm text-white/90">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {activeMedia &&
        createPortal(
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(11,16,12,0.42)] p-6 backdrop-blur-[3px]"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-3 top-3 z-10 rounded-full border border-[rgba(220,231,191,0.18)] bg-[rgba(18,27,20,0.7)] px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-[#f3efdf]/84 transition hover:bg-[rgba(18,27,20,0.82)]"
              >
                Close
              </button>

              <div className="overflow-hidden rounded-[1.5rem] border border-[rgba(220,231,191,0.14)] bg-[linear-gradient(155deg,rgba(29,40,28,0.94),rgba(35,38,31,0.88)_58%,rgba(27,39,37,0.9))] shadow-[0_28px_100px_rgba(0,0,0,0.34)]">
                <div className="relative h-[72vh] min-h-[320px] w-full">
                  {activeMedia.kind === 'image' ? (
                    <Image
                      src={activeMedia.src}
                      alt={activeMedia.title}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  ) : (
                    <video
                      src={activeMedia.src}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
                <div className="border-t border-white/10 px-5 py-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#efe1a9]/58">
                    {activeMedia.kind === 'video' ? 'Motion' : 'Artwork'}
                  </p>
                  <p className="mt-2 text-base text-white/88">{activeMedia.title}</p>
                  {activeMedia.notes && activeMedia.notes.length > 0 ? (
                    <div className="mt-4 space-y-2 text-sm leading-7 text-slate-300/78">
                      {activeMedia.notes.map((note) => (
                        <p key={note}>{note}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
