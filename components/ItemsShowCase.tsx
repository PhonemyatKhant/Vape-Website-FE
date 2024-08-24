import Image from 'next/image'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Button from './Button'
import { products } from '@/data/data'
import ProductCard from './ProductCard'

const ItemsShowCase = ({ title, image, desc }: { title: string, image: string, desc: string }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <div className='bg-customBlack rounded-[10px] overflow-hidden py-[27px] flex items-center justify-between'>
      <div className='flex min-w-[400px] items-center justify-center gap-4'>
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
      <div>
        <div className="embla2">
          <div className="embla__viewport2" ref={emblaRef}>
            <div className="embla__container2">
              {products.map((product) => (
                <div className="embla__slide1" key={product.name}>
                  <ProductCard
                    key={product.name}

                    name={product.name}
                    price={product.price}
                    points={product.points}
                    image={product.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ItemsShowCase