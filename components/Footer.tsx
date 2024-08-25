import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section id="footer ">
      <footer className='max-w-[1200px] w-full px-[25px] max-sm:px-[15px] mx-auto'>
        {/*grid container */}
        <div className='grid grid-cols-1 lg:grid-cols-4 pb-[56px]'>
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Customer Service</h2>
            </li>
            <li > <Link href="" className='flex items-start gap-4'><span>&gt;</span><h2> Terms & Privary Policy</h2></Link></li>
            <li >  <Link href="" className='flex items-start gap-4' ><span>&gt;</span><h2> Return Policy</h2></Link></li>
          </ul>
          {/*col1 end */}
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Customer Service</h2>
            </li>
            <li>
              <input radioGroup='language' type="radio" id="option1" name="language" />
              <label htmlFor="option1"> Myanmar &#40;Unicode&#41; </label>
            </li>
            <li>
              <input radioGroup='language' type="radio" id="option2" name="language" />
              <label htmlFor="option2"> Myanmar &#40;Zawgyi'&#41;</label>
            </li>
            <li>
              <input radioGroup='language' type="radio" id="option3" name="language" checked />
              <label htmlFor="option3"> English (Default)</label>
            </li>
          </ul>
          {/*col2 end */}
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Contact Us</h2>
            </li>
            <li className='flex items-start gap-4'><span>&gt;</span><h2>Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun Tsp, Yangon.</h2></li>
            <li className='flex items-start gap-4'><span>&gt;</span><h2>00458489458</h2></li>
          </ul>
          {/*col 3 end*/}
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Download Our App</h2>
            </li>
            <li>
              <Image src='/img_blue_vape.png' width={50} height={50} alt='Qr Code' />
            </li>
          </ul>
          {/*col 4end */}
          <ul>
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Payment</h2>
            </li>
            <li className='flex items-center gap-4'>
              <Image src='/img_blue_vape.png' width={50} height={50} alt='Qr Code' />
              <Image src='/img_blue_vape.png' width={50} height={50} alt='Qr Code' />
            </li>
          </ul>
          {/*col 5 end */}
          <ul >
            <li>
              <h2 className=' text-lg font-normal pb-[25px]'>Follow Us On</h2>
            </li>
            <li className='flex items-center gap-4'>
              <Image src='/img_blue_vape.png' width={50} height={50} alt='Qr Code' />
              <Image src='/img_blue_vape.png' width={50} height={50} alt='Qr Code' />
              <Image src='/img_blue_vape.png' width={50} height={50} alt='Qr Code' />
              <Image src='/img_blue_vape.png' width={50} height={50} alt='Qr Code' />
              <Image src='/img_blue_vape.png' width={50} height={50} alt='Qr Code' />
            </li>

          </ul>
          {/*col6 end*/}
        </div>
        <h3 className='text-center mb-[17px]'>&copy; Copyright 2023 C by D Co., Ltd. All rights reserved.</h3>
      </footer>

    </section>
  )
}

export default Footer