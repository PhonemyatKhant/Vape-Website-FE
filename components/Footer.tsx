import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoCallOutline, IoLocationOutline, IoReloadOutline, IoShieldOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <section id="footer ">
      <footer className='max-w-[1200px] pt-[50px] w-full px-[25px] max-sm:px-[15px] mx-auto'>
        {/*grid container */}
        <div className='grid gap-[20px] grid-cols-1  md:grid-cols-3 lg:grid-cols-4 pb-[56px]'>
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Customer Service</h2>
            </li>
            <li > <Link href="" className='font-normal text-sm flex items-start gap-3 mb-[15px]'><span> <IoShieldOutline /></span><h2> Terms & Privary Policy</h2></Link></li>
            <li >  <Link href="" className='font-normal text-sm flex items-start gap-3 mb-[15px]' ><span><IoReloadOutline /></span><h2> Return Policy</h2></Link></li>
          </ul>
          {/*col1 end */}
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Customer Service</h2>
            </li>
            <li className='mb-[15px]'>
              <input readOnly className=' mr-2' radioGroup='language' type="radio" id="option1" name="language" />
              <label htmlFor="option1" className='font-normal text-sm'>  Myanmar &#40;Unicode&#41; </label>
            </li>
            <li  className='mb-[15px]'>
              <input readOnly className=' mr-2' radioGroup='language' type="radio" id="option2" name="language" />
              <label htmlFor="option2" className='font-normal text-sm'>   Myanmar &#40;Zawgyi&#41;</label>
            </li>
            <li className='mb-[15px]'>
              <input readOnly className=' mr-2' radioGroup='language' type="radio" id="option3" name="language" checked />
              <label htmlFor="option3" className='font-normal text-sm'>   English (Default)</label>
            </li>
          </ul>
          {/*col2 end */}
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Contact Us</h2>
            </li>
            <li className='mb-[21px] flex items-start gap-4 font-normal text-sm'><span><IoLocationOutline /></span><h2>Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun Tsp, Yangon.</h2></li>
            <li className='mb-[21px] flex items-start gap-4 font-normal text-sm'><span><IoCallOutline /> </span><h2> 00458489458</h2></li>
          </ul>
          {/*col 3 end*/}
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Download Our App</h2>
            </li>
            <li>
              <Image src='/img_qr.png' width={100} height={100} alt='Qr Code' />
            </li>
          </ul>
          {/*col 4end */}
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Payment</h2>
            </li>
            <li className='flex items-center gap-4'>
              <Image src='/img_kbz.png' width={60} height={60} alt='Qr Code' />
              <Image src='/img_wave.png' width={60} height={60} alt='Qr Code' />
            </li>
          </ul>
          {/*col 5 end */}
          <ul >
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Follow Us On</h2>
            </li>
            <li className='flex items-center gap-4'>
              <Image className=' cursor-pointer' src='/fb.svg' width={40} height={40} alt='Qr Code' />
              <Image className=' cursor-pointer' src='/insta.svg' width={40} height={40} alt='Qr Code' />
              <Image className=' cursor-pointer' src='/viber.svg' width={40} height={40} alt='Qr Code' />
              <Image className=' cursor-pointer' src='/tele.svg' width={40} height={40} alt='Qr Code' />
              <Image className=' cursor-pointer' src='/twitter.svg' width={40} height={40} alt='Qr Code' />
            </li>

          </ul>
          {/*col6 end*/}
        </div>
        <h3 className='text-center mb-[17px] font-normal text-sm'>&copy; Copyright 2023 C by D Co.&; Ltd., All rights reserved.</h3>
      </footer>

    </section>
  )
}

export default Footer