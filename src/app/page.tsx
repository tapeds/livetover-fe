'use client';

import React, { useRef } from 'react';
import NextImage from '@/components/NextImage';
import Button from '@/components/buttons/Button';
import Card from '@/app/landing/Card';
import Banner from '@/components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

import 'swiper/css';
import 'swiper/css/navigation';
import Layout from '@/layouts/Layout';

function Page() {
  const swiperRef = useRef();

  return (
    <Layout withNavbar withFooter>
      <main>
        <section className='relative z-10 flex min-h-screen items-center bg-cream-2 px-10 max-lg:justify-center lg:px-20 min-[1450px]:px-40'>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center gap-5 lg:flex-row lg:items-end'>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-center gap-2'>
                  <div className='flex flex-row items-center justify-center gap-2 max-md:gap-2 md:flex-row'>
                    <div className='flex items-center justify-center gap-2'>
                      <div className='hidden h-1.5 w-[100px] rounded-full bg-brown-1 md:block lg:w-[130px]' />

                      <h3 className='font-lemonMilk text-sm font-medium text-brown-1 sm:text-lg'>
                        with
                      </h3>
                      <NextImage
                        src='/logo.svg'
                        alt='logo'
                        width={103}
                        height={20}
                        className='mb-1.5 max-w-full'
                      />
                    </div>
                    <h3 className='font-lemonMilk text-sm font-medium text-brown-1 sm:text-lg'>
                      there will be
                    </h3>
                  </div>
                </div>

                <h1 className='text-center font-poppins text-5xl font-bold text-brown-1 sm:text-7xl'>
                  No Food Left
                </h1>

                <div className='flex items-center justify-center rounded-full bg-brown-1 px-10 py-2'>
                  <h1 className='flex items-center justify-center font-poppins text-6xl font-bold text-orange-1 sm:text-7xl'>
                    Behind!
                  </h1>
                </div>
              </div>
              <NextImage
                src='/emoji.png'
                alt='emoji'
                width={103}
                height={20}
                className='mb-5 w-[80px] md:w-[103px]'
              />
            </div>
            <NextImage
              src='/old.png'
              alt='thumbsup'
              width={800}
              height={600}
              className='absolute right-0 z-0 w-[400px] max-lg:hidden min-[1450px]:w-[600px]'
            />
          </div>
          <NextImage
            src='/triangle.svg'
            alt='triangle'
            width={1437}
            height={596}
            className='absolute -bottom-4 -z-50 max-w-full lg:right-0 lg:m-0 lg:p-0'
          />
        </section>
        <section>
          <Banner />
        </section>
        <section
          id='todaysoffer'
          className='flex min-h-screen w-full items-center justify-center bg-cream-2 py-20'
        >
          <div className='flex w-full flex-col items-center justify-center gap-10 px-10 lg:px-40'>
            <h2 className='font-poppins text-7xl font-bold text-[#4E372B]'>
              Today&apos;s Offers
            </h2>
            <div className='w-full'>
              <Swiper
                onSwiper={(swiper) => {
                  // @ts-expect-error swiperRef is not null
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    centeredSlides: true,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  1440: {
                    slidesPerView: 4,
                  },
                }}
                modules={[Navigation]}
                loop
              >
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <div className='mt-5 flex items-center justify-between'>
                  <div
                    className='rounded-full border-[4px] border-brown-1 p-2 text-xl text-brown-1'
                    //@ts-expect-error swiperRef is not null
                    onClick={() => swiperRef.current.slidePrev()}
                  >
                    <FaArrowLeft />
                  </div>
                  <div
                    className='rounded-full border-[4px] border-brown-1 p-2 text-xl text-brown-1'
                    //@ts-expect-error swiperRef is not null
                    onClick={() => swiperRef.current.slideNext()}
                  >
                    <FaArrowRight />
                  </div>
                </div>
              </Swiper>
            </div>
            <Button className='w-full text-lg md:text-3xl'>
              Search More Options
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Page;
