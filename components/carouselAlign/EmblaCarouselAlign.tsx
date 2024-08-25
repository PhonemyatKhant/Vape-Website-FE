

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'

import styles from './EmblaCarouselAlign.module.css'
import DisplayCard from '../DisplayCard'

type PropType = {
  slides: { image: string, name: string, price: number, points: number }[]
  options?: EmblaOptionsType
  emblaRef?: any

}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, emblaRef, } = props

  return (
    <div className={`${styles.embla}  relative  w-full  `}>
      <div className={`${styles.embla__viewport}  text-white`} ref={emblaRef}>
        <div className={`${styles.embla__container} h-full`}>

          {slides.map((product, index) => (
            <div key={index} className={`${styles.embla__slide}`} >
              <DisplayCard


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
  )
}

export default EmblaCarousel
