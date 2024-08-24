'use client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './embla/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

import '../components/embla/embla.css'

const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Test = () => {
  return (
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  )
}

export default Test