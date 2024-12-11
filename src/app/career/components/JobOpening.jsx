import Link from 'next/link'
import React from 'react'
import { MdLocationOn } from "react-icons/md";
import pin from '../../../../public/assets/career/Pin.svg';
import Image from 'next/image';
import { FiClock } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

const JobOpening = () => {
  return (
    <section className='pt-[120px] pb-[120px] lg:pb-[160px] px-[23.5px] lg:px-[64px] gap-[40px] lg:gap-[64px] flex flex-col justify-center items-center bg-grayTwentyThree'>
        <h1 className='text-blue font-bold leading-[38.4px] lg:leading-[67.2px] text-[2rem] lg:text-[3.5rem] font-instrument'>Job Openings</h1>
        <div className='max-w-[1312px] mx-auto gap-[28px] lg:gap-[32px] lg:h-[936px] flex flex-col justify-center items-center'>
            {
                Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className='shadow-md shadow-grayTwentyFour w-[328px] sm:w-full md:h-[210px] rounded-[8px] gap-[32px] p-[32px] flex flex-col justify-center items-start bg-white border border-graySixteen'>
                        <div className='w-full flex flex-col justify-start items-start gap-[24px]'>
                            <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-[12px]'>
                                <div className='flex justify-start items-center gap-[16px]'>
                                    <h1 className='text-blue font-bold leading-[28px] md:leading-[33.6px] text-[1.25rem] md:text-[1.5rem] font-instrument'>Job Title</h1>
                                    <div className='w-[84px] md:w-[96px] h-[26px] md:h-[29px] border border-greenTwo bg-greenTwo/[16%] py-[4px] flex justify-center items-center gap-[10px] rounded-[4px] text-greenTwo text-[.75rem] md:text-[.875rem] leading-[18px] md:leading-[21px] font-normal font-instrument'>Department</div>
                                </div>
                                <Link className='gap-[8px] font-instrument flex justify-center items-center h-[24px] w-[112px] font-normal text-[.875rem] leading-[21px] md:text-base text-greenTwo' href={`/career`}>
                                    Apply Now
                                    <IoIosArrowForward />
                                </Link>
                            </div>
                            <p className='text-blueTwo font-normal leading-[18px] text-[.75rem] md:text-base font-instrument'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                            </p>
                        </div>
                        <div className='gap-[24px] flex justify-start items-center md:w-[302px]'>
                            <div className='gap-[12px] flex justify-start items-center'>
                                <Image className='object-cover w-[20px] md:w-[32px] h-[20px] md:h-[32px]' src={pin} alt='Pin Icon'></Image>
                                <p className='text-[.75rem] md:text-[1.125rem] leading-[18px] md:leading-[27px] font-normal text-blueTwo font-instrument'>Location</p>
                            </div>
                            <div className='gap-[12px] flex justify-start items-center'>
                                <FiClock className='text-greenTwo text-[1rem] md:text-[1.5rem]' />
                                <p className='text-[.75rem] md:text-[1.125rem] leading-[18px] md:leading-[27px] font-normal text-blueTwo font-instrument'>Contract Type</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default JobOpening