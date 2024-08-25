import Image from 'next/image'
import React from 'react'

const DisplayCard = ({ discount, image, name, price, points }: {
  discount?: boolean, image: string, name: string, price: number, points: number
}) => {
  return (

    <div className='cursor-pointer min-w-[180px] min-h-[180px]'>
      <div className=' overflow-hidden  bg-customGrey  flex justify-center items-center rounded-[10px]'>

        <Image width={160} height={160} src={image} alt='yellow vape' className="object-center " />
      </div>


      <div className="text-center py-[11px]">
        <p className=' font-light' >{name} </p>
        <p className=" font-medium">{price} MMK</p>
        <p className="text-xs line-through font-medium">{price} MMK</p>
        <p className="text-yellow-500  text-sm flex items-center justify-center font-medium">
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
      </div></div>

  )
}

export default DisplayCard