import React from 'react'
import { products } from '@/data/data'
import ProductCard from './ProductCard'
import Button from './Button'
import { GridProducts } from './GridProducts'

const BestDeals = () => {
  return (
    <section
      className="mb-[55px] text-center max-w-[1200px] w-full px-[25px] max-sm:px-[15px] mx-auto overflow-x-hidden"
      id="best-deals"
    >
      <div className="pb-[30px]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-1">Best Deals</h2>
        <h3 className="text-base sm:text-lg">Just For You</h3>
      </div>

      <div className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-[4px] pb-[19px]">
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

      <Button
        className="w-full sm:w-[240px] mb-[55px] py-[10px] bg-customGrey rounded-[15px] text-lg sm:text-base"
        text="View More &rsaquo;"
      />

      <GridProducts />
    </section>
  )
}

export default BestDeals
