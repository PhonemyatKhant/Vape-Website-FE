'use client'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './carouselAlign/EmblaCarouselAlign'
import { EmblaOptionsType } from 'embla-carousel'



import './carouselAlign/emblaAlign.css'
import { products } from '@/data/data'

const OPTIONS: EmblaOptionsType = { align: 'start' }
const SLIDE_COUNT = 6
const SLIDES = products

const CarouselAlign = () => {
  return (
    <> <EmblaCarousel slides={SLIDES} options={OPTIONS} /></>
  )
}

export default CarouselAlign