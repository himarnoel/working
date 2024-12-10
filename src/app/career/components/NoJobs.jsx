import Link from 'next/link'
import React from 'react'
import vector from '../../../../public/assets/career/Group 2185.svg';
import arrow from '../../../../public/assets/career/arrow.svg';
import th from '../../../../public/assets/career/th.svg';
import Image from 'next/image';

const NoJobs = () => {
  return (
    <section className='bg-white w-full lg:h-[700px] flex justify-center items-center p-[122px] overflow-hidden'>
        <div className='relative w-[1200px] h-[480px] rounded-[40px] bg-blueEleven flex flex-col md:flex-row justify-between items-center gap-10 py-[46px] px-[64px]'>
            <div className='w-[521px] h-[296px] gp-[24px] flex flex-col justify-center items-start gap-[24px]'>
                <h1 className='text-white font-semibold leading-[48px] text-[2.5rem] w-[442px] font-instrument'>Don&apos;t see a job posting you&apos;re looking for?</h1>
                <p className='w-[412px] leading-[25.6px] text-[1rem] font-normal text-gray font-instrument'>
                    &quot;We&apos;re continuously on the lookout for exceptional individuals with unique talents to enrich our team. If you believe you possess that special something, we invite you to share your résumé and cover letter with us.&quot;
                </p>
                <Link className='w-[240px] h-[48px] bg-white py-[11px] flex justify-center items-center gap-[10px] text-blue leading-[25.6px] text-[1rem] font-normal rounded-lg' href={`/career`}>Send Resume</Link>
            </div>
            <div className='w-[352px] h-[352px] rounded-full bg-green relative'>
                <Image src={th} alt='Thunder Bolt Icon' className='object-cover absolute top-[135px] left-[60px]'></Image>
                <Image src={arrow} alt='Arrow Icon' className='object-cover absolute top-[135px] right-[60px]'></Image>
            </div>
            <Image src={vector} alt='Vector' className='object-cover w-full h-full absolute top-0 left-0'></Image>
        </div>
    </section>
  )
}

export default NoJobs