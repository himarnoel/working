import { industries } from '@/raw-data/data'
import Image from 'next/image'
import React from 'react'

const IndustriesWeServe = () => {
  return (
    <section className='bg-blue py-[100px] px-[40px]'>
        <div className='max-w-[1280px] mx-auto gap-[40px] md:gap-[64px] flex flex-col justify-center items-center'>
            <div className='w-[328px] md:w-[681px] flex flex-col justify-center items-center text-center gap-[12px] font-instrument'>
                <h1 className='w-[213px] md:w-full lg:w-[687px] text-white font-bold leading-10 md:leading-[70px] text-[2rem] md:text-[3.5rem]'>Industries We Serve</h1>
                <p className='w-[328px] md:w-[641px] text-neutral-300 text-[.875rem] md:text-[1rem] leading-[18.2px] md:leading-[24px] font-normal'>
                    At Elara Solutions, we follow a structured development process to ensure the successful implementation of our Loan Engine solutions:
                </p>
            </div>

            <div className='w-full gap-[16px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:h-[360px] justify-items-center place-items-center'>
                {
                    industries.map((industry, index) => (
                        <div key={index} className='bg-blueSix border border-blueFive w-[328px] md:w-[308px] h-[300px] md:h-[360px] rounded-[8px] py-[56px] px-[16px] gap-[32px] flex flex-col justify-center items-start'>
                            <div className='flex flex-col justify-center items-start gap-[24px]'>
                                <div className='flex flex-col justify-center items-start gap-[16px]'>
                                    <div className='flex justify-center items-center p-[20px] gap-[10px] rounded-lg w-[64px] h-[64px] border border-blueThree bg-blueFive'>
                                        <Image width={24} height={24} src={industry.img} alt={industry.name} className='object-cover'></Image>
                                    </div>
                                    <p className='min-w-[155px] font-instrument font-semibold leading-[24px] md:leading-[28.8px] text-[1.25rem] md:text-[1.5rem] text-white'>{industry.name}</p>
                                </div>
                                <p className='font-instrument font-normal text-[.875rem] md:text-[1.125rem] leading-[21px] md:leading-[27px] text-gray'>{industry.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default IndustriesWeServe