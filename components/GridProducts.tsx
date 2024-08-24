import React from 'react';
import Button from './Button'; // Assuming you have a Button component
import Image from 'next/image';

export function GridProducts() {
  return (
    <section className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">

        {/* Membership Program (3 columns, 2 rows on large screens) */}
        <div className=" relative col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2 bg-customBlack text-white p-6 rounded-lg flex flex-col ">
          <div>
            <div className="mb-6">
              <div >
                <Image
                  src="/img_icons.png"
                  alt="Icons"
                  width={300}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2 text-start ">Membership Program</h2>
            <p className="text-lg mb-4 text-start max-w-[50%]">Be a Vape Pi member and get our special exclusive offers</p>
            <div className='text-start'>
              <Button
                className={
                  ' w-[80px] py-[6px] bg-black border border-white  rounded-[15px] bg-opacity-40 backdrop-blur-sm text-white'
                }
                text='View'
              />
            </div>
          </div>
          <div className='absolute w-fit h-fit bottom-0 right-0'>
          <Image
                  src="/img_vapes.png"
                  alt="Icons"
                  width={300}
                  height={100}
              style={{ objectFit: 'cover' }}
              className=' h-full w-[160px]'
                />
          </div>
        </div>

        {/* Devices (1 column, 2 rows on large screens) */}
        <div className="col-span-1 row-span-2 relative lg:col-span-1 lg:row-span-2 bg-customBlack text-white p-6 rounded-lg flex flex-col justify-end items-start">
          <div className="flex justify-center  items-center h-full">
            <Image
              src="/img_vape_1.png"
              alt="Disposable"
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-20 backdrop-blur-md flex  justify-between p-4">
            <div className=' text-start max-w-[70%]'>
              <h3 className="font-semibold mb-1">Devices</h3>
              <p className="text-xs mb-2">Find the best for you here</p>
            </div>
            <span className="ml-1">&gt;</span>
          </div>
        </div>

        {/* Pods (1 column, 1 row on large screens) */}
        <div className="row-span-1 col-span-1 bg-customBlack text-white p-3 rounded-lg relative overflow-hidden">
          <div className="flex justify-center  items-center h-full">
            <Image
              src="/img_vape2.png"
              alt="Disposable"
              width={70}
              height={70}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-20 backdrop-blur-md flex  justify-between p-4">
            <div className=' text-start max-w-[70%]'>
              <h3 className="font-semibold mb-1">Pods</h3>
              <p className="text-xs mb-2">Variety of choices available</p>
            </div>
            <span className="ml-1">&gt;</span>
          </div>
        </div>

        {/* Disposable (1 column, 1 row on large screens) */}
        <div className="row-span-1 col-span-1 bg-customBlack text-white p-3 rounded-lg relative overflow-hidden">
          <div className="flex justify-center  items-center h-full">
            <Image
              src="/img_vape3.png"
              alt="Disposable"
              width={70}
              height={70}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full  bg-black bg-opacity-20 backdrop-blur-md flex  justify-between p-4">
            <div className=' text-start max-w-[70%]'>
              <h3 className="font-semibold mb-1">Disposable</h3>
              <p className="text-xs mb-2">Easy, clean & superb flavor</p>
            </div>
            <span className="ml-1">&gt;</span>
          </div>
        </div>

      </div>
    </section>
  );
}
