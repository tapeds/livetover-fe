'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import NextImage from '@/components/NextImage';

function page() {
  return (
    <>
      <Navbar />
      <main className=' flex min-h-screen items-center justify-center bg-cream-2'>
        <div className='absolute left-20 flex flex-row'>
          <div>
            <div className='flex items-center justify-center gap-2'>
              <div className='flex items-center justify-center gap-2'>
                <NextImage
                  src='/line.png'
                  alt='line'
                  width={140}
                  height={21}
                  className='max-w-full '
                />

                <h3 className='font-lemonMilk text-sm font-medium text-brown-1 sm:text-lg'>
                  with
                </h3>
                <NextImage
                  src='/logo.svg'
                  alt='logo'
                  width={103}
                  height={20}
                  className='max-w-full'
                />
                <h3 className='font-lemonMilk text-sm font-medium text-brown-1 sm:text-lg'>
                  there will be
                </h3>
              </div>
            </div>

            <h1 className='font-poppins text-6xl font-bold text-brown-1 sm:text-7xl'>
              No Food Left
            </h1>

            <div className='flex items-center justify-center rounded-full bg-brown-1'>
              <h1 className='flex items-center justify-center font-poppins text-6xl font-bold text-orange-1 sm:text-7xl'>
                Behind!
              </h1>
            </div>
          </div>

          <div className=' ml-7 hidden flex-row gap-7 sm:block'>
            <NextImage
              src='/emoji.png'
              alt='emoji'
              width={103}
              height={20}
              className='mt-9 max-w-full'
            />
          </div>
        </div>

        <div className='ml-7 hidden flex-row gap-7 lg:block'>
          <NextImage
            src='/old.png'
            alt='thumbsup'
            width={800}
            height={600}
            className='absolute top-10 z-0 max-w-full'
          />
        </div>
      </main>
    </>
  );
}

export default page;
