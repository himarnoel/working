import Image from 'next/image'
import React from 'react'
import talents from '../../../../public/assets/career/nurture.svg'

const NurtureTalents = () => {
  return (
    <section className='py-[40px] lg:py-[112px] px-[23.5px] lg:px-[64px] gap-[59px] lg:gap-[91px] lg:h-[864px] max-w-[1251px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='w-[328px] lg:w-[520px] flex flex-col justify-center items-start gap-[24px]'>
            <h1 className='w-[254px] lg:w-[399px] text-black font-bold text-[1.75rem] lg:text-[2.75rem] leading-[36.4px] lg:leading-[57.2px] font-instrument'>
              Nurturing Talent, Shaping Tomorrow
            </h1>
            <p className='w-full text-black leading-[22.4px] lg:leading-[25.6px] font-normal text-[.875rem] lg:text-[1rem] font-instrument'>
            Embrace growth with us through our paid internship initiative, celebrating and nurturing diverse talents in brand, content, and media within a progressive and supportive  atmosphere. 
            Step into the realm of the next-generation advertising agency, gaining invaluable real-world skills to propel your career forward. As a valued member of our team, you'll seamlessly integrate into our dynamic culture, actively shadowing, learning, and collaborating with colleagues of diverse backgrounds and skill sets.
            </p>
        </div>
        <div className='relative overflow-hidden'>
            <Image className='rounded-[12.26px] lg:rounded-[24px] w-[328px] md:w-full lg:w-[640px] h-[328px] lg:h-[640px] object-cover' src={talents} alt='Finding Talents'></Image>
            <div className='w-full h-full absolute bg-grayTwentyThree rounded-[12.26px] lg:rounded-[24px]'></div>
        </div>
    </section>
  )
}

export default NurtureTalents