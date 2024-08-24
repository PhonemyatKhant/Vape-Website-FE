import React from 'react'
import Button from './Button'
import { BigCarousel } from './BigCarousel'

const NewReleased = () => {
  return (
    <section className='mb-[45px] overflow-hidden text-center max-w-[1200px] w-full px-[25px] max-sm:px-[15px] mx-auto ' id='best-deals'>
      <div className='py-[30px]'>
        <h2 className='text-4xl  font-bold pb-1'><span className='text-red-400'>New</span> Released</h2>
        <h3 className='text-xl'>Try Our Latest Flovor Here</h3>
      </div>
      <div className='grid grid-cols-1 place-items-center gap-[6px] mb-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <div className='bg-customBlack w-[274px] h-[178px] rounded-[10px]  col-span-1'></div>
        <div className='bg-customBlack w-[274px] h-[178px] rounded-[10px] col-span-1'></div>
        <div className='bg-customBlack w-[274px] h-[178px] rounded-[10px] col-span-1'></div>
        <div className='bg-customBlack w-[274px] h-[178px] rounded-[10px] col-span-1'></div>

      </div>
      <Button className={'w-[240px] mb-[55px] py-[6px] bg-customGrey rounded-[15px]'} text='View More &rsaquo;' />

      <BigCarousel/>
    </section>
  )
}

export default NewReleased