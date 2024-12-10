import Image from 'next/image'
import React from 'react'
import one from '../../../../public/assets/career/pOne.svg';
import two from '../../../../public/assets/career/pTwo.svg';
import three from '../../../../public/assets/career/pThree.svg';
import four from '../../../../public/assets/career/pFour.svg';
import five from '../../../../public/assets/career/pFive.svg';
import elara from '../../../../public/assets/career/elara.svg';

const CareerHero = () => {
  return (
    <section className='bg-graySeven h-full xl:h-[960px] w-full pt-[150px] pb-[120px] lg:pb-[88px] flex flex-col justify-between items-center overflow-hidden gap-10'>
        <div className='w-[328px] sm:w-[80%] xl:w-[1145.48px] mx-auto gap-[24px] flex flex-col justify-start items-start'>
            <div className='w-[328px] sm:w-full flex flex-col xl:flex-row justify-start items-start xl:items-center gap-[16px] lg:gap-[38.4px] font-bold leading-[43.2px] sm:leading-[115.2px] text-[2.25rem] sm:text-[5.7rem] text-blue'>
                Working at <Image className='w-[307.54px] sm:w-[80%] xl:w-[615.08px] h-[36px] sm:h-full xl:h-[72px] object-cover' src={elara} alt='Elara Solutions'></Image>
            </div>
            <p className='w-full xl:w-[955px] leading-[22.4px] sm:leading-[28.8px] text-[.875rem] sm:text-[1rem] font-normal text-grayThirteen'>
                Become a catalyst for change with us, as we disrupt the norm and set the bar to evolve into the agency defining the landscape of the future." In our vibrant workspace, we cultivate an environment that thrives on creativity, collaboration, and forward-thinking. 
                As a collective force, we are not content with the ordinary; we are dedicated to reshaping the narrative and crafting a narrative that  resonates with the pulse of tomorrow's demands.
            </p>
        </div>
        <div className='flex justify-center items-center gap-[5px] lg:gap-[32px]'>
            <div className='relative overflow-hidden'>
                <Image src={one} alt='Employee' className='hidden lg:flex w-[240px] h-[200px] object-cover rounded-[20px] relative'></Image>
                <div className='bg-grayEighteen w-full hidden lg:flex h-full rounded-[20px] absolute'></div>
            </div>
            <div className='relative overflow-hidden'>
                <Image src={two} alt='Employee' className='object-cover w-[128px] sm:w-[320px] h-[128px] sm:h-[320px] rounded-[24px]'></Image>
                <div className='bg-red w-full h-full rounded-[20px] absolute'></div>
            </div>
            <div className='relative overflow-hidden'>
                <Image src={three} alt='Employee' className='w-[120px] sm:w-[240px] h-[100px] sm:h-[200px] rounded-[24px] object-cover'></Image>
                <div className='bg-blackTwo w-full h-full rounded-[20px] absolute'></div>
            </div>
            <div className='relative overflow-hidden'>
                <Image src={four} alt='Employee' className='w-[128px] sm:w-[320px] h-[128px] sm:h-[320px] rounded-[24px] object-cover'></Image>
                <div className='w-full h-full rounded-[20px] absolute bg-grayNinteen'></div>
            </div>
            <div className='relative overflow-hidden'>
                <Image src={five} alt='Employee' className='hidden lg:flex w-[240px] h-[200px] rounded-[24px] object-cover'></Image>
                <div className='w-full h-full rounded-[20px] hidden lg:flex absolute bg-yellow'></div>
            </div>
        </div>
    </section>
  )
}

export default CareerHero