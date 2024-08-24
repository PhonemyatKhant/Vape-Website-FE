import Image from 'next/image'
import React from 'react'

const ProductCard = ({ discount, image, name, price, points }: {
  discount?: boolean, image: string, name: string, price: number, points: number
}) => {
  return (
    <div className='flex  flex-col items-center  justify-between'>
      <div className='min-w-[180px] h-[180px] overflow-hidden text-center bg-customGrey  flex flex-col justify-between items-center rounded-[10px]'>
        {discount && <span className='bg-red-500 text-xs font-semibold text-white px-[10px] py-[2px]'>25% Off</span>}
        <Image width={160} height={160} src={image} alt='yellow vape' className="object-contain" />
      </div>


      <div className="text-center py-[11px]">
        <p >{name} </p>
        <p className=" font-semibold">{price} MMK</p>
        <p className="text-xs line-through">{price} MMK</p>
        <p className="text-yellow-500  text-sm flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-1"
          >
            <path d="M12 17.75l-6.5 3.58 1.24-7.22-5.24-5.12 7.24-1.05L12 1l3.26 6.92 7.24 1.05-5.24 5.12 1.24 7.22z" />
          </svg>
          {points} Points
        </p>
      </div>
    </div>
  )
}

export default ProductCard