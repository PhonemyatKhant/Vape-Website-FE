'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Button from './Button'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'

export function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='embla'>
      <div className="embla__viewport h-[558px] text-white" ref={emblaRef}>
        <div className="embla__container h-full">

          {[...Array(3)].map((_, index) => <div
            className="embla__slide flex flex-col py-[40px] items-center justify-end bg-[url('/img_guy_vaping.jpg')] bg-cover bg-center"
          >
            <h2 className=' pb-[15px] text-3xl font-light'>The Best Look</h2>
            <p className=' pb-[30px] text-6xl font-bold'>Anytime Anywhere</p>
            <p className=' pb-[10px] text-xl font-light'>Starts form 10,000 MMK</p>
            <Button
              className={
                'w-[80px] py-[6px] bg-customBlack rounded-[15px] bg-opacity-40 backdrop-blur-sm text-white'
              }
              text='View'
            />
          </div>)}

        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  )
}
