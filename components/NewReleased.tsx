'use client'
import Button from './Button'
import { BigCarousel } from './BigCarousel'
import Image from 'next/image'
import ItemsShowCase from './ItemsShowCase'

const NewReleased = () => {
  return (
    <section className='mb-[45px] overflow-hidden text-center max-w-[1200px] w-full px-[25px] max-sm:px-[15px] mx-auto ' id='best-deals'>
      <div className='py-[30px]'>
        <h2 className='text-4xl  font-bold pb-1'><span className='text-red-400'>New</span> Released</h2>
        <h3 className='text-xl'>Try Our Latest Flovor Here</h3>
      </div>

      <div className='grid grid-cols-1 place-items-center gap-[6px] mb-[20px] sm:grid-cols-2 lg:grid-cols-4 '>
        <div className='bg-customYellow overflow-hidden text-white w-full h-[178px] rounded-[10px] col-span-1 relative'>
          <div className='absolute bottom-0 left-0 text-start p-4 max-w-[60%] bg-customYellow bg-opacity-50 backdrop-blur-md'>
            <p className='text-sm'>
              Strawberry Yogurt with
              Refreshing Flavor
              Nic 3 Percent
            </p>
            <p className='text-sm mt-1'>30,000 MMK</p>
          </div>
          <Image
            src="/img_yellow_vape.png"
            alt="Disposable"
            width={150}
            height={150}
            style={{ objectFit: 'contain' }}
            className='absolute right-0 bottom-0'
          />
        </div>


        <div className='bg-customRed overflow-hidden text-white w-full h-[178px] rounded-[10px] col-span-1 relative'>
          <div className='absolute bottom-0 left-0 text-start p-4 max-w-[60%] bg-customRed bg-opacity-50 backdrop-blur-md'>
            <p className='text-sm'>
              Strawberry Yogurt with
              Refreshing Flavor
              Nic 3 Percent
            </p>
            <p className='text-sm mt-1'>30,000 MMK</p>
          </div>
          <Image
            src="/img_pink_vape.png"
            alt="Disposable"
            width={150}
            height={150}
            style={{ objectFit: 'contain' }}
            className='absolute right-0 bottom-0'
          />
        </div>

        <div className='bg-customBlue overflow-hidden text-white w-full h-[178px] rounded-[10px] col-span-1 relative'>
          <div className='absolute bottom-0 left-0 text-start p-4 max-w-[60%] bg-customBlue bg-opacity-50 backdrop-blur-md'>
            <p className='text-sm'>
              Strawberry Yogurt with
              Refreshing Flavor
              Nic 3 Percent
            </p>
            <p className='text-sm mt-1'>30,000 MMK</p>
          </div>
          <Image
            src="/img_blue_vape.png"
            alt="Disposable"
            width={110}
            height={110}
            style={{ objectFit: 'contain' }}
            className='absolute right-0 bottom-0'
          />
        </div>


        <div className='bg-customGreen overflow-hidden text-white w-full h-[178px] rounded-[10px] col-span-1 relative'>
          <div className='absolute bottom-0 left-0 text-start p-4 max-w-[60%] bg-customGreen bg-opacity-50 backdrop-blur-md'>
            <p className='text-sm'>
              Strawberry Yogurt with
              Refreshing Flavor
              Nic 3 Percent
            </p>
            <p className='text-sm mt-1'>30,000 MMK</p>
          </div>
          <Image
            src="/img_green_vape.png"
            alt="Disposable"
            width={110}
            height={110}
            style={{ objectFit: 'contain' }}
            className='absolute right-0 bottom-0'
          />
        </div>




      </div>

     
      <Button className={'w-[240px] mb-[55px] py-[6px] bg-customGrey rounded-[15px]'} text='View More &rsaquo;' />

      <BigCarousel />

      <ItemsShowCase title='Devices' image='/img_vape_1.png' desc='Find the best for you here'/>
    </section>
  )
}

export default NewReleased