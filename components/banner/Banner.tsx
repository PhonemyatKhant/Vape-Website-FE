'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Button from '../Button'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from '../embla/EmblaCarouselDotButton'
import { useCallback } from 'react'
import styles from './Banner.module.css'
import Navbar from '../Navbar'

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={`${styles.embla} relative w-full`}>
      <Navbar />
      <div className={`${styles.blurBg} h-20 w-full`}></div>
      <div className={`${styles.embla__viewport} h-[558px] text-white`} ref={emblaRef}>
        <div className={`${styles.embla__container} h-full`}>

          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className={`${styles.embla__slide} flex flex-col py-[40px] items-center justify-end bg-[url('/img_guy_vaping.jpg')] bg-cover bg-center`}
            >
              <h2 className=' pb-[15px] text-2xl font-light'>The Best Look</h2>
              <p className=' max-md:text-3xl pb-[30px] text-5xl font-bold'>Anytime Anywhere</p>
              <p className=' pb-[10px] text-lg font-light'>Starts from 10,000 MMK</p>
              <Button
                className={
                  'w-[80px] py-[6px] bg-customBlack rounded-[15px] bg-opacity-40 backdrop-blur-sm text-white'
                }
                text='View'
              />
            </div>
          ))}

        </div>
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-5 py-16 rounded-[10px] m-4 backdrop-blur-sm  cursor-pointer "
        onClick={scrollPrev}
        aria-label="Previous Slide"
      >
        &larr;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-5 py-16  rounded-[10px] m-4 backdrop-blur-sm cursor-pointer"
        onClick={scrollNext}
        aria-label="Next Slide"
      >
        &rarr;
      </button>

      {/* Dot Navigation */}
      <div className="flex justify-center space-x-2 mt-4 mb-[55px]">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            className={`w-2 h-2 rounded-full  ${selectedIndex === index ? 'bg-customBlack' : 'bg-gray-300'
              }`}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
