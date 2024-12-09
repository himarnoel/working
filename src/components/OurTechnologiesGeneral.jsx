import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";


const OurTechnologiesGeneral = ({tech, techTitle}) => {
  return (
    <section className='pt-[160px] pb-[120px] lg:py-[160px] xl:px-[54px] gap-[48px] lg:gap-[80px] flex flex-col justify-center items-center w-full bg-grayThree'>
        <h1 className='w-[207px] lg:w-[370px] gap-[16px] flex justify-center items-center text-center text-blue font-bold leading-10 lg:leading-[67.2px] text-[2rem] lg:text-[3.5rem]'>{techTitle}</h1>
        <div className='w-full xl:min-w-[1320px] mx-auto py-[150px] px-[76px] xl:rounded-[40px] bg-blue h-full xl:h-[3300px] grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center gap-[40px] lg:gap-y-[40px] lg:gap-x-[24px]'>
            {
                tech.map((t) => (
                    <div key={t.id} className='border border-blueFive bg-blueSix gap-[24px] lg:gap-[16px] py-[40px] xl:py-[64px] px-[16px] xl:px-[24px] 2xl:px-[30px] rounded-[16px] w-[328px] md:w-full xl:w-[590px] 2xl:w-[608px] h-[759px] lg:h-full xl:h-[740px] flex flex-col justify-between items-start font-instrument'>
                        <div className='flex flex-col justify-start items-start gap-[16px] w-full'>
                            <div className='w-[176px] flex justify-start items-center gap-[16px]'>
                                <div className='bg-grayEleven border border-blueFive gap-[10px] py-[12px] rounded-[10px] w-[64px] h-[64px] flex justify-center items-center'>
                                    <Image width={32} height={32} className='object-cover' src={t.img} alt={t.tech}></Image>
                                </div>
                                {
                                    t.imgTwo ? (<div className='bg-grayEleven border border-blueFive gap-[10px] py-[12px] rounded-[10px] w-[64px] h-[64px] flex justify-center items-center'>
                                        <Image width={32} height={32} className='object-cover' src={t.imgTwo} alt={t.tech}></Image>
                                    </div>) : ('')
                                }
                            </div>
                            <div className='flex flex-col justify-center items-start gap-[24px]'>
                                <h1 className='font-semibold leading-[28.8px] lg:leading-[43.2px] text-[1.5rem] lg:text-[2.25rem] text-white'>{t.tech}</h1>
                                <p className='text-white font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[28.8px]'>{t.parOne}</p>
                                <ul className='list-disc px-3 flex flex-col justify-start items-start gap-[24px]'>
                                    {
                                        t.list.map((desc, index) => (
                                            <li key={index} className='text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[28.8px] text-white font-normal'>{desc}</li>
                                        ))
                                    }
                                </ul>
                                <p className='text-white font-normal text-[.875rem] lg:text-[1rem] leading-[22.4px] lg:leading-[28.8px]'>{t.parTwo}</p>
                            </div>
                        </div>
                        <Link className='border-b border-b-white w-[144px] h-[40px] gap-[10px] flex justify-start items-center py-[4px] px-[2px] text-white font-instrument font-normal leading-[30px] text-[1.125rem]' href={t.route}>
                            Learn More <IoMdArrowForward />
                        </Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default OurTechnologiesGeneral