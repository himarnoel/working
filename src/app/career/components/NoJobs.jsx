import Link from 'next/link'
import React from 'react'
import vector from '../../../../public/assets/career/Group 2185.svg';
import arrow from '../../../../public/assets/career/arrow.svg';
import th from '../../../../public/assets/career/th.svg';
import Image from 'next/image';

const NoJobs = () => {
  return (
    <section className='bg-white w-full lg:h-[700px] flex justify-center items-center py-[122px] px-[56px] xl:p-[122px] overflow-hidden'>
        <div className='relative w-[328px] md:w-[1200px] h-[706px] lg:h-[480px] rounded-[20px] lg:rounded-[40px] bg-blueEleven flex flex-col md:flex-row justify-between items-center gap-10 py-[24px] lg:py-[46px] px-[16px] lg:px-[64px]'>
            <div className='w-[300px] lg:w-[521px] h-[296px] flex flex-col justify-center items-start gap-[16px] lg:gap-[24px]'>
                <h1 className='w-[208px] text-white font-semibold leading-[28.8px] lg:leading-[48px] text-[1.5rem] lg:text-[2.5rem] lg:w-[442px] font-instrument'>Don&apos;t see a job posting you&apos;re looking for?</h1>
                <p className='w-full lg:w-[412px] leading-[21px] lg:leading-[25.6px] text-[.875rem] lg:text-[1rem] font-normal text-gray font-instrument'>
                    &quot;We&apos;re continuously on the lookout for exceptional individuals with unique talents to enrich our team. If you believe you possess that special something, we invite you to share your résumé and cover letter with us.&quot;
                </p>
                <Link className='w-[200px] md:w-[240px] h-[48px] bg-white py-[15.5px] md:py-[11px] flex justify-center items-center gap-[10px] text-blue leading-[16.8px] md:leading-[25.6px] text-[.875rem] md:text-[1rem] font-normal rounded-lg' href={`/career`}>Send Resume</Link>
            </div>
            <div className='w-[281.6px] lg:w-[352px] h-[281.6px] lg:h-[352px] rounded-full bg-green relative gap-[12px] flex justify-center items-center'>
                <Image src={th} alt='Thunder Bolt Icon' className='w-[52px] h-[75.64px] object-cover lg:absolute lg:top-[135px] lg:left-[60px]'></Image>
                <Image src={arrow} alt='Arrow Icon' className='w-[108.03px] h-[64.63px] object-cover lg:absolute lg:top-[135px] lg:right-[60px]'></Image>
            </div>
            <Image src={vector} alt='Vector' className='object-cover w-full h-full absolute top-0 left-0'></Image>
        </div>
    </section>
  )
}

export default NoJobs