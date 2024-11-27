import { cases } from '@/raw-data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const page = () => {
    
  return (
    <section className='bg-grayThree py-[120px] min-h-screen px-6'>
        <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-[104px] min-h-screen'>
            <h1 className='w-[224px] md:w-[528px] text-blue gap-[8px] font-normal text-[2rem] md:text-[3rem] leading-[38.4px] md:leading-[67.2px] text-center font-bevan'>Our Case studies</h1>
            <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center gap-x-[32px] gap-y-[104px]'>
                {
                    cases.map((caseItem, index) => (
                        <div key={index} className='bg-white w-full xl:w-[584px] h-[516px] pb-[16px] md:pb-[32px] gap-[32px] flex flex-col justify-center items-start rounded-bl-[4px] md:rounded-bl-[16px] rounded-br-[4px] md:rounded-br-[16px]'>
                            <Image width={584} height={280} className='rounded-tl-[4px] md:rounded-tl-[16px] h-[280px] w-full rounded-tr-[4px] md:rounded-tr-[16px] object-cover' src={caseItem.img} alt={caseItem.title}></Image>
                            <div className='px-4 md:px-6 gap-[16px] flex flex-col border border-gray justify-center items-start w-full'>
                                <h1 className='text-blue leading-[23.4px] lg:leading-[31.2px] font-instrument text-[1.125rem] lg:text-[1.45rem] font-semibold'>{caseItem.title}</h1>
                                <p className='text-blueThree leading-[16.8px] lg:leading-[24px] font-instrument text-[.75rem] lg:text-[1rem] font-normal'>{caseItem.text}</p>
                                <Link href={`/case-studies/1`} className='text-greenTwo flex justify-center items-center gap-[8px] leading-[24px] text-[.875rem] lg:text-[1rem] font-medium font-instrument'>
                                    Read post
                                    <MdOutlineArrowOutward />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default page