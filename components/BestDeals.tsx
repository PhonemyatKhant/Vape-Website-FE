import React from 'react'
import { products } from '@/data/data'
import ProductCard from './ProductCard'
import Button from './Button'

const BestDeals = () => {
  return (
    <section className='my-[40px] text-center max-w-[1200px] px-[25px] max-sm:px-[15px] mx-auto ' id='best-deals'>
      <div className='py-[30px]'>
        <h2 className='text-4xl  font-bold pb-1'>Best Deals</h2>
        <h3 className='text-xl'>Just For You</h3>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6  gap-[6px] pb-[19px]'>
        {products.map(product => (
          <ProductCard
            key={product.name}
            discount={true}
            name={product.name}
            price={product.price}
            points={product.points}
            image={product.image}
          />
        ))}
      </div>
      <Button className={'w-[240px] py-[6px] bg-customGrey rounded-[15px]'} text='View More &rsaquo;' />

      <div className='  mx-auto  grid gap-[6px] grid-cols-1  md:grid-cols-3 lg:grid-cols-5'>
        <div className=' h-[359px]  col-span-3  row-span-2 rounded-[10px] bg-customBlack'>
          <p>Be a vape Pi member and get our special exclusive offers</p>
          <Button text='View'/>
        </div>
        <div className='  row-span-2 rounded-[10px] bg-customBlack'></div>
        <div className='  rounded-[10px] bg-customBlack'></div>
        <div className='  rounded-[10px] bg-customBlack'></div>
      </div>
    </section>

  )
}

export default BestDeals