import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import elara from '../../public/Elara-white.svg';
import leaf from '../../public/Leaf Light Elara Technologies.svg';
import vector from '../../public/Elara Technologies Pattern.svg';
import resVector from '../../public/Elara Technologies 2.svg';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='relative min-h-screen overflow-y-hidden xl:min-h-[1250px] w-full bg-blue px-[24px] py-[100px] overflow-x-hidden'>
        <div className='max-w-[1280px] mx-auto flex flex-col gap-[64px] lg:gap-[90px]'>
            <div className='w-full flex justify-between items-center'>
                <Link href={`/`}>
                    <Image width={281.21} height={32.92} className='object-cover' src={elara} alt='Elara Solutions'></Image>
                </Link>

                <div className='hidden lg:flex justify-between items-center bg-white/[8%] gap-[12px] xl:w-[783.66px] h-[80px] rounded-[40px] p-[24px]'>
                    <Image width={32} height={32} className='object-cover' src={leaf} alt='Leaf'></Image>
                    <p className=' font-normal font-instrument leading-6 text-[1rem] text-white'>We deliver precision IT solutions that drive results—on time, every time.</p>
                    <button className='w-[144px] h-[56px] bg-green rounded-[28px] text-blue text-[1rem] font-normal font-instrument leading-[24px] flex justify-center items-center '>Contact us</button>
                </div>
            </div>

            
            <div className='flex flex-col lg:flex-row justify-between items-start lg:py-[42px] gap-[42px]'>
                <div className='flex flex-col justify-start items-start gap-[32px] xl:w-[207px]'>
                    <h1 className='text-green text-[1.375rem] font-semibold font-instrument leading-[35.2px]'>Contact us</h1>
                    <div className='flex flex-col justify-center items-start gap-[4px]'>
                        <h2 className='text-grayTwo leading-[25.2px] text-[1.125rem] font-bold font-instrument'>Head - Office</h2>
                        <p className='text-[1rem] leading-[28.8px] font-light font-instrument text-grayTwo'>Elara Solutions GmbH</p>
                        <p className='text-[1rem] leading-[28.8px] font-light font-instrument text-grayTwo'>Zeller Str. 3c</p>
                        <p className='text-[1rem] leading-[28.8px] font-light font-instrument text-grayTwo'>97082 Würzburg</p>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[4px]'>
                        <h2 className='text-grayTwo leading-[25.2px] text-[1.125rem] font-bold font-instrument'>Africa - Subsidiary</h2>
                        <p className='text-[1rem] leading-[28.8px] font-light font-instrument text-grayTwo'>Elara Technical Services Ltd</p>
                        <p className='text-[1rem] leading-[28.8px] font-light font-instrument text-grayTwo'>No. 1b Jide Sawyerr Drive</p>
                        <p className='text-[1rem] leading-[28.8px] font-light font-instrument text-grayTwo'>Lekki Phase 1, Lagos, Nigeria</p>
                    </div>
                    <div className='flex justify-center items-center gap-[20px] w-[100px]'>
                        <div className='bg-gray gap-[10px] p-[8px] rounded-[36px] w-[40px] flex justify-center items-center h-[40px]'>
                            <FaInstagram className='text-green text-[1.3rem]' />
                        </div>
                        <div className='bg-gray gap-[10px] p-[8px] rounded-[36px] w-[40px] flex justify-center items-center h-[40px]'>
                        <FaLinkedin className='text-green text-[1.3rem]' />
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-[955.04px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start justify-between gap-[36px] lg:gap-[90px] text-white'>
                    <div className='flex flex-col justify-center items-start gap-[24px] w-full'>
                        <h1 className='text-green text-[1.375rem] font-semibold font-instrument leading-[35.2px]'>Company</h1>
                        <ul className='flex flex-col justify-center items-start gap-[16px]'>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Home</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>About us</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Contact us</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Careers</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Case studies</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[24px] w-full'>
                        <h1 className='text-green text-[1.375rem] font-semibold font-instrument leading-[35.2px]'>Services</h1>
                        <ul className='flex flex-col justify-center items-start gap-[16px]'>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Application Development</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Cloud Development</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Data Architecture</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Product Development</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Mobile Application</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>IT Consulting</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Cloud Computing</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Security</li>
                            <li className='font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Data Strategy</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[24px] w-full'>
                        <h1 className='text-green text-[1.375rem] font-semibold font-instrument leading-[35.2px]'>Technologies</h1>
                        <ul className='flex flex-col justify-center items-start gap-[16px]'>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Frontend Technologies</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Backend Technologies</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Mobile Technologies</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Cloud Technologies</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Data Technologies</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Security Technologies</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-[24px] w-full'>
                        <h1 className='text-green text-[1.375rem] font-semibold font-instrument leading-[35.2px]'>Products</h1>
                        <ul className='flex flex-col justify-center items-start gap-[16px]'>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Core Banking</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Retail Banking</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Corporate Banking</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Agency Banking</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Lending Services</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Loan Engine</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Lifestyle Services</li>
                            <li className=' font-normal font-instrument text-[1rem] leading-[28px] text-gray w-full'>Ticketing Services</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-[24px]'>
                <p className='text-white text-[1rem] leading-[24px] font-normal font-instrument '>&copy; 2024 elarasolutions</p>
                <ul className='flex justify-center font-instrument items-center text-white gap-[23px] text-[1rem] leading-[24px]  list-none'>
                    <li>Legal Notice</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <Image className='absolute z-[5px] top-[1535px] lg:top-[884.98px] w-full h-[357px] hidden md:flex object-cover' src={vector} alt='Footer Vector'></Image>
        <Image className='absolute z-[5px] top-[1695px] sm:top-[1595px] w-full flex md:hidden object-cover' src={resVector} alt='Footer Vector'></Image>
    </footer>
  )
}

export default Footer