'use client'

import Image from 'next/image'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Button from './Button'
import { products } from '@/data/data'
import EmblaCarousel from './carouselAlign/EmblaCarouselAlign'

const ItemsShowCase = ({ title, image, desc }: { title: string, image: string, desc: string }) => {


  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <div className='max-w-[1200px] w-full px-[25px] max-sm:px-[15px] mx-auto mb-[26px] mt-[44px]'>
      <div className='bg-customBlack rounded-[10px]  p-[20px] pr-0  relative  flex items-center justify-between'>

        {/*flex left */}
        <div className='flex  w-1/3 items-center justify-center gap-1'>
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            style={{ objectFit: 'contain' }}
            className='w-[200px] h-[200px]'
          />
          <div className=' text-white'>
            <h2 className="text-3xl font-semibold mb-2 text-start ">{title} </h2>
            <p className="text-lg mb-4 text-start max-w-[50%]">{desc} </p>
          </div>
        </div>
        {/*flex right */}

        <EmblaCarousel emblaRef={emblaRef} slides={products} />

        {/* Next Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-5 py-16  rounded-[10px] m-4 backdrop-blur-sm"
          onClick={scrollNext}
          aria-label="Next Slide"
        >
          &rarr;
        </button>
      </div>
    </div>
  )
}

export default ItemsShowCase