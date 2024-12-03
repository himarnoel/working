import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { products } from '@/raw-data/data'
import Image from 'next/image'
import Link from 'next/link'

const OurProducts = () => {
  return (
    <section className='bg-graySeven w-full min-h-screen py-[160px] gap-[48px] flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-center gap-[24px] w-[328px] md:w-[812px] font-instrument'>
            <h2 className='uppercase text-greenTwo font-semibold text-[1.125rem] md:text-[1rem] leading-[12px]'>our products</h2>
            <h1 className='text-[1.5rem] md:text-[2rem] leading-[31.2px] md:leading-[41.6px] font-semibold text-blue'>Discover our solutions to empower your business to scale efficiently and operate seamlessly in a digital-first world.</h1>
        </div>
        <div className='py-[21.4px] md:py-[40px] px-[23.54px] md:px-[44px] xl:min-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[12.84px] md:gap-[24px] justify-items-center place-items-center'>
            {
                products.map((product, index) => (

                    <div key={index} className='relative w-[331.7px] md:w-full lg:w-[620px] h-[267.5px] md:h-full lg:h-[500px] rounded-[6.42px] md:rounded-[12px]'>
                        <Image src={product.img} className='absolute rounded-[6.42px] md:rounded-[12px]' alt={product.name}></Image>
                        <div className='relative z-10 py-[41.73px] md:py-[80px] px-[25.68px] md:px-[30px] flex flex-col justify-center items-center text-center gap-[2.14px] md:gap-[4px] w-full'>
                            <h2 className='uppercase text-green text-[0.535rem] md:text-[1rem] font-medium leading-[24px] font-instrument'>products</h2>
                            <h1 className='text-white font-medium leading-[23.54px] md:leading-[44px] text-[1.204rem] md:text-[2.25rem] font-manrope'>{product.name}</h1>
                        </div>
                        <Link href={product.route} className='absolute top-3 right-3 flex justify-center items-center w-[21.4px] md:w-[39.77px] h-[21.4px] md:h-[39.77px] rounded-full z-10 bg-white'>
                            <BsArrowUpRight className='text-blue text-[1rem] md:text-[1.25rem]' />
                        </Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default OurProducts