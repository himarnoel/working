import Image from 'next/image'
import React from 'react'
import kite from '../../../../public/assets/career/kite.svg';
import square from '../../../../public/assets/career/square.svg';
import circle from '../../../../public/assets/career/vCircle.svg';
import wKite from '../../../../public/assets/career/white-kite.svg';

const OurValues = () => {
  return (
    <section className='py-[120px] w-full bg-white min-h-screen gap-[80px] flex flex-col justify-center items-center'>
        <div className='max-w-[1240px] mx-auto gap-[40px] lg:gap-[88px] flex flex-col justify-center items-center'>
            <div className='w-[328px] lg:w-full flex flex-col justify-center items-center gap-[10px] text-center'>
                <h1 className='font-bevan font-normal leading-[38.4px] lg:leading-[57.6px] text-[2rem] lg:text-[3rem] text-grayTwenty'>Our Values</h1>
                <p className='text-blueTen leading-[21px] lg:leading-[24px] font-normal text-[.875rem] lg:text-[1rem] lg:w-[760px]'>
                    At Elara Solutions, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
                </p>
            </div>
            <div className='w-full gap-[40px] lg:gap-y-[64px] lg:gap-x-[40px] grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center'>
                <div className='bg-blue w-[328px] md:w-[95%] xl:w-[600px] h-[320px] md:h-[400px] rounded-[8px] lg:rounded-[16px] py-[56px] lg:py-[60px] px-[16px] xl:px-[64px] lg:gap-[32px] gap-[16px] lg:px] flex flex-col justify-center items-center text-center'>
                    <Image className='object-cover w-[56px] lg:w-[80px] h-[56px] lg:h-[80px]cover' src={kite} alt='Object'></Image>
                    <h1 className='font-instrument text-[1.125rem] lg:text-[1.5rem] text-grayTwentyOne font-semibold'>Innovation</h1>
                    <p className='leading-[19.6px] lg:leading-[25.2px] font-normal lg:text-[1.125rem] text-[.875rem] text-grayTwentyTwo'>We push the boundaries of what's possible by continuously developing new, future-focused IT solutions.</p>
                </div>
                <div className='bg-graySeven w-[328px] md:w-[95%] xl:w-[600px] h-[320px] md:h-[400px] rounded-[8px] lg:rounded-[16px] py-[56px] lg:py-[60px] px-[16px] xl:px-[64px] gap-[16px] lg:gap-[32px] flex flex-col justify-center items-center text-center border border-grayFifteen'>
                    <Image className='object-cover w-[56px] lg:w-[80px] h-[56px] lg:h-[80px]' src={square} alt='Object'></Image>
                    <h1 className='font-instrument text-[1.125rem] lg:text-[1.5rem] text-blue font-semibold'>Reliability</h1>
                    <p className='leading-[19.6px] lg:leading-[25.2px] font-normal lg:text-[1.125rem] text-[.875rem] text-blue'>Our clients trust us to deliver on time, every time, with an uncompromising commitment to quality and security.</p>
                </div>
                <div className='bg-graySeven w-[328px] md:w-[95%] xl:w-[600px] h-[320px] md:h-[400px] rounded-[8px] lg:rounded-[16px] py-[56px] lg:py-[60px] px-[16px] xl:px-[64px] gap-[16px] lg:gap-[32px] flex flex-col justify-center items-center text-center border border-grayFifteen'>
                    <Image className='object-cover w-[56px] lg:w-[80px] h-[56px] lg:h-[80px]' src={circle} alt='Object'></Image>
                    <h1 className='font-instrument text-[1.125rem] lg:text-[1.5rem] text-greenTwo font-semibold'>Top-Notch Technology</h1>
                    <p className='leading-[19.6px] lg:leading-[25.2px] font-normal lg:text-[1.125rem] text-[.875rem] text-blue'>Leveraging the most advanced tools and platforms to build sustainable, high-performance digital ecosystems.</p>
                </div>
                <div className='bg-greenTwo w-[328px] md:w-[95%] xl:w-[600px] h-[320px] md:h-[400px] rounded-[8px] lg:rounded-[16px] py-[56px] lg:py-[60px] px-[16px] xl:px-[64px] gap-[16px] lg:gap-[32px] flex flex-col justify-center items-center text-center border border-grayFifteen'>
                    <Image className='object-cove w-[56px] lg:w-[80px] h-[56px] lg:h-[80px]r' src={wKite} alt='Object'></Image>
                    <h1 className='font-instrument text-[1.125rem] lg:text-[1.5rem] text-grayTwentyOne font-semibold'>Top-Notch Technology</h1>
                    <p className='leading-[19.6px] lg:leading-[25.2px] font-instrument font-normal text-[.875rem] lg:text-[1.125rem] text-grayTwentyTwo'>We are dedicated to helping businesses transform digitally, optimizing operations, and unlocking new growth opportunities.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurValues