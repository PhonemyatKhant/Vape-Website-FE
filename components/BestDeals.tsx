import React from 'react'
import { products } from '@/data/data'
import ProductCard from './ProductCard'
import Button from './Button'
import { GridProducts } from './GridProducts'


const BestDeals = () => {
  return (
    <section className='mb-[55px] text-center max-w-[1200px] w-full px-[25px] max-sm:px-[15px] mx-auto ' id='best-deals'>
      <div className='pb-[30px]'>
        <h2 className='text-5xl  font-bold pb-1'>Best Deals</h2>
        <h3 className='text-lg'>Just For You</h3>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6  gap-[6px] pb-[19px]'>
        {products.map((product, index) => (
         <ProductCard
            key={index}
            discount={true}
            name={product.name}
            price={product.price}
            points={product.points}
            image={product.image}
          />
        ))}
      </div>
      <Button className={'w-[240px] mb-[55px] py-[6px] bg-customGrey rounded-[15px]'} text='View More &rsaquo;' />

      <GridProducts />
    </section>

  )
}

export default BestDeals