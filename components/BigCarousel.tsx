'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Button from './Button'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'

export function BigCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='pb-[44px]'>
      <div className='embla1 relative'>
        <div className=" embla__viewport1 h-[237px] text-white" ref={emblaRef}>
          <div className="embla__container1 h-full">

            {[...Array(3)].map((_, index) => <div
              className="embla__slide1 mr-4 flex flex-col py-[40px] items-center justify-end bg-[url('/img_guy_vaping.jpg')] bg-cover bg-center"
            >
              <p className='  pb-[15px] text-5xl font-bold'>Try New Flavor</p>
              <p className='  pb-[30px] text-xl font-light'>Citrus Monster</p>
              <Button
                className={
                  'w-[80px] py-[6px] bg-customBlack rounded-[15px] bg-opacity-40 backdrop-blur-sm text-white'
                }
                text='View'
              />
            </div>)}

          </div>
        </div>
        {/* Previous Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-5 py-16 rounded-[10px] m-4 backdrop-blur-sm"
          onClick={scrollPrev}
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-5 py-16  rounded-[10px] m-4 backdrop-blur-sm"
          onClick={scrollNext}
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}
