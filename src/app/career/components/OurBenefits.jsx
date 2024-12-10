import { ourBenefits } from '@/raw-data/data'
import Image from 'next/image'
import React from 'react'

const OurBenefits = () => {
  return (
    <section className='py-[120px] w-full bg-white min-h-screen gap-[80px] flex flex-col justify-center items-center'>
        <div className='max-w-[1280px] mx-auto gap-[90px] flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center gap-[10px] text-center'>
                <h1 className='font-bevan font-normal leading-[57.6px] text-[3rem] text-blue'>Our Benefits</h1>
                <p className='text-blueTen leading-[24px] font-normal text-[1rem] w-[760px]'>
                    At Elara Solutions, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.               
                </p>
            </div>

            <div className='w-full gap-y-[64px] gap-x-[30px] grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center'>
                {
                    ourBenefits.map((benefit) => (
                        <div key={benefit.id} className='w-[625px] min-h-[276px] bg-blue rounded-[16px] p-[40px] gap-[24px] flex flex-col justify-start items-start'>
                            <div className='gap-[14px] flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center'>
                                <div className='w-[76px] h-[76px] flex justify-center items-center bg-blue border border-blueFive rounded-[16px] gap-[10px]'>
                                    <Image width={28} height={28} className='object-cover' src={benefit.img} alt={benefit.name}></Image>
                                </div>
                                <h1 className='font-instrument leading-[42px] font-medium text-[1.75rem] text-white'>{benefit.name}</h1>
                            </div>
                            <p className='text-grayEleven text-base font-normal'>{benefit.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OurBenefits