'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
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

  const [topRow, bottomRow] = useMemo(() => {
    const top = media.filter((_, index) => index % 2 === 0)
    const bottom = media.filter((_, index) => index % 2 === 1)
    return [top, bottom]
  }, [media])

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
      <div className="sm:hidden">
        <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3">
          {media.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block w-[min(82vw,22rem)] shrink-0 snap-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#151515] text-left shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition active:scale-[0.99]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {item.kind === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="82vw"
                    className="object-cover transition duration-300 group-active:scale-[1.01]"
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition duration-300 group-active:scale-[1.01]"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.76)_100%)]" />
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
      </div>

      <div className="hidden overflow-x-auto pb-2 sm:block">
        <div className="grid min-w-max grid-rows-2 gap-4">
          {[topRow, bottomRow].map((rowMedia, rowOffset) => (
            <div key={`row-${rowOffset}`} className="flex gap-4">
              {rowMedia.map((item, rowIndex) => {
                const originalIndex = rowOffset + rowIndex * 2

                return (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActiveIndex(originalIndex)}
                    className="group relative block overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#151515] text-left shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-orange-300/20"
                  >
                    <div className="relative h-[250px] w-[320px] overflow-hidden">
                      {item.kind === 'image' ? (
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          sizes="320px"
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
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.72)_100%)]" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/72">
                        {item.kind === 'video' ? 'Motion' : 'Artwork'}
                      </p>
                      <p className="mt-1 text-sm text-white/90">{item.title}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {activeMedia &&
        createPortal(
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/68 p-6 backdrop-blur-[3px]"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-3 top-3 z-10 rounded-full border border-white/14 bg-black/42 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/82 transition hover:bg-black/58"
              >
                Close
              </button>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#101010] shadow-[0_28px_100px_rgba(0,0,0,0.5)]">
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
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-orange-100/52">
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
