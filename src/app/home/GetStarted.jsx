import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../../public/assets/home/Contents.svg';

const GetStarted = () => {
  return (
    <section className='bg-greenTwo py-[96px] w-full xl:h-[688px] px-[46px]'>
        <div className='gap-[64px] flex flex-col lg:flex-row justify-between items-center max-w-[1200px] mx-auto'>
            <div className='w-full md:w-[488px] flex flex-col justify-center items-start gap-[40px]'>
                <h1 className='w-full text-white lg:w-[319px] font-semibold leading-[48px] text-[2.5rem] font-instrument'>Get Started with Elara Solutions</h1>
                <p className='text-gray font-normal text-[1.125rem] leading-[25.2px] w-full font-instrument'>
                    Are you ready to transform your banking services through agency banking? Contact us today to learn how Elara Solutions can help you build a robust agency banking platform that meets the needs of your customers and drives business success.
                </p>
                <Link href={`/`} className='w-[240px] py-[16px] gap-[10px] px-[40px] flex justify-center items-center rounded-lg h-[56px] bg-white text-blue text-base font-normal'>Get started today</Link>
            </div>

            <Image width={560} height={496} className='object-cover' src={img} alt=''></Image>
        </div>
    </section>
  )
}

export default GetStarted