'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Button from '../Button'
import { useCallback } from 'react'
import styles from './BigCarousel.module.css'

export function BigCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative max-w-[1200px] w-full h-full px-[25px] max-sm:px-[15px] mx-auto">
      <div className={`${styles.embla}  relative`}>
        <div className={`${styles.embla__viewport} h-[237px] text-white`} ref={emblaRef}>
          <div className={`${styles.embla__container} h-full`}>
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`${styles.embla__slide} rounded-[10px] flex flex-col py-[40px] items-center justify-end bg-purple-500 bg-cover bg-no-repeat bg-center`}
                
              >
                <p className="pb-[5px] text-4xl font-bold">Try New Flavor</p>
                <p className="pb-[10px] text-xl font-light">Citrus Monster</p>
                <Button
                  className="w-[80px] py-[6px] bg-customBlack rounded-[15px] bg-opacity-40 backdrop-blur-sm text-white"
                  text="View"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-5 py-16 rounded-[10px] m-4 backdrop-blur-sm"
          onClick={scrollNext}
          aria-label="Next Slide"
        >
          &rarr;
        </button>
      </div>
    </div>
  )
}
