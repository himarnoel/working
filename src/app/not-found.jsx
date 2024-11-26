import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import error from '../../public/404 Error Broken Robot.svg';

const NotFound = () => {
  return (
    <section className='w-full flex justify-center items-center h-[900px] bg-white py-[32px] px-[64px] text-center'>
        <div className='w-full lg:w-[522px] h-[566px] flex flex-col justify-center items-center gap-[24px]'>
            <Image width={394.24} height={320} className='object-cover' src={error} alt='Broken Robot'></Image>
            <h1 className='text-blue leading-6 md:leading-9 text-[1.5rem] md:text-[2.25rem] font-semibold'>Page not found</h1>
            <p className='text-blueTwo leading-[19.6px] md:leading-[27px] text-[.875rem] md:text-[1.125rem] font-normal w-[185px] md:w-[394px]'>The page you requested for could not be found. Please go back to homepage</p>
            <Link className='bg-greenTwo cursor-pointer w-[239px] h-[52px] px-[16px] flex justify-center items-center text-white leading-[19.6px] text-[.875rem] font-light rounded-xl' href={`/`}>Back to Home Page</Link>
        </div>
    </section>
  )
}

export default NotFound