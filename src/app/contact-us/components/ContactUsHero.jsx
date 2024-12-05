import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { HiPhone } from "react-icons/hi2";
import { MdEmail } from 'react-icons/md';
import { TiLocation } from "react-icons/ti";


const ContactUsHero = () => {
  return (
    <section className='bg-white w-full min-h-screen py-[96px] flex flex-col justify-center items-center gap-[64px]'>
        <div className='max-w-[1280px] mx-auto px-[32px] gap-[32px]'>
            <div className='gap-[16px] flex flex-col justify-center items-center text-center'>
                <p className='text-greenTwo font-semibold text-base'>Contact us</p>
                <h1 className='font-bevan font-normal leading-[60px] text-[3rem] text-blue'>We&apos;d love to hear from you</h1>
                <p className='font-normal leading-[30px] text-[1.25rem] text-blueTwo'>Our friendly team is always here to chat.</p>
            </div>
        </div>

        <div className='gap-[64px] max-w-[1280px] mx-auto flex flex-col justify-center items-center'>
            <div className='gap-[24px] w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className='w-[628px] h-[324px] bg-blue gap-[64px] p-[32px] rounded-[16px] flex flex-col justify-center items-start'>
                    <div className='w-[56px] h-[56px] bg-blueFive rounded-[4px] flex justify-center items-center'>
                        <HiPhone className='text-greenTwo text-[1.25rem]' />
                    </div>
                    <div className='w-full xl:w-[564px] flex flex-col justify-center items-start gap-[20px]'>
                        <div className='w-full flex flex-col justify-center items-start gap-[8px]'>
                            <h1 className='font-instrument leading-[30px] text-[1.5rem] font-bold text-white'>Call us</h1>
                            <p className='font-normal leading-[30px] text-[1rem] text-gray'>Operating hours: Mon-Fri; 8am to 5pm.</p>
                        </div>
                        <div className='w-full flex justify-start items-center gap-[20px]'>
                            <div className='w-[215px] bg-blueSix rounded-[6px] py-[14px] flex justify-center items-center gap-[14px] h-[52px] border border-blueFive'>
                                <HiPhone className='text-greenTwo text-[1.25rem]' />
                                <p className='text-base font-normal font-instrument text-white'>+49 931 76026500</p>
                            </div>
                            <div className='w-[215px] bg-blueSix rounded-[6px] py-[14px] flex justify-center items-center gap-[14px] h-[52px] border border-blueFive'>
                                <HiPhone className='text-greenTwo text-[1.25rem]' />
                                <p className='text-base font-normal font-instrument text-white'>+49 931 76026500</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[628px] h-[324px] bg-blue gap-[64px] p-[32px] rounded-[16px] flex flex-col justify-center items-start'>
                    <div className='w-[56px] h-[56px] bg-blueFive rounded-[4px] flex justify-center items-center'>
                        <MdEmail className='text-greenTwo text-[1.25rem]' />
                    </div>
                    <div className='w-full xl:w-[564px] flex flex-col justify-center items-start gap-[20px]'>
                        <div className='w-full flex flex-col justify-center items-start gap-[8px]'>
                            <h1 className='font-instrument leading-[30px] text-[1.5rem] font-bold text-white'>Chat to support</h1>
                            <p className='font-normal leading-[30px] text-[1rem] text-gray'>We&apos;re here to help.</p>
                        </div>
                        <div className='w-full flex justify-start items-center gap-[20px]'>
                            <div className='w-[264px] bg-blueSix rounded-[6px] py-[14px] flex justify-center items-center gap-[14px] h-[52px] border border-blueFive'>
                                <MdEmail className='text-greenTwo text-[1.25rem]' />
                                <p className='text-base font-normal font-instrument text-white'>info@elara-solutions.com</p>
                            </div>
                            <div className='w-[264px] bg-blueSix rounded-[6px] py-[14px] flex justify-center items-center gap-[14px] h-[52px] border border-blueFive'>
                                <MdEmail className='text-greenTwo text-[1.25rem]' />
                                <p className='text-base font-normal font-instrument text-white'>info@elara-solutions.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='gap-[24px] w-full flex flex-col lg:flex-row justify-center items-center'>
                <div className='w-[628px] h-[324px] bg-blue gap-[24px] p-[32px] rounded-[16px] flex flex-col justify-center items-start'>
                    <div className='w-[56px] h-[56px] bg-blueFive rounded-[4px] flex justify-center items-center'>
                        <TiLocation className='text-greenTwo text-[1.25rem]' />
                    </div>
                    <div className='w-full xl:w-[564px] flex flex-col justify-center items-start gap-[20px]'>
                        <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                            <h1 className='font-instrument leading-[30px] text-[1.5rem] font-bold text-white'>Stay connected on Social media</h1>
                            <p className='font-normal leading-[30px] text-[1rem] text-gray'>Follow us on any of our social media platforms</p>
                            <div className='flex justify-between items-center gap-[10px]'>
                                <div className='w-[52px] bg-blueSix rounded-[6px] py-[16px] flex justify-center items-center gap-[10px] h-[52px] border border-blueFive'>
                                    <FaFacebook className='text-greenTwo text-[1.25rem]' />
                                </div>
                                <div className='w-[52px] bg-blueSix rounded-[6px] py-[16px] flex justify-center items-center gap-[10px] h-[52px] border border-blueFive'>
                                    <FaTwitter className='text-greenTwo text-[1.25rem]' />
                                </div>
                                <div className='w-[52px] bg-blueSix rounded-[6px] py-[16px] flex justify-center items-center gap-[10px] h-[52px] border border-blueFive'>
                                    <FaLinkedin className='text-greenTwo text-[1.25rem]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[628px] h-[324px] bg-blue gap-[24px] p-[32px] rounded-[16px] flex flex-col justify-center items-start'>
                    <div className='w-[56px] h-[56px] bg-blueFive rounded-[4px] flex justify-center items-center'>
                        <TiLocation className='text-greenTwo text-[1.25rem]' />
                    </div>
                    <div className='w-full xl:w-[564px] flex flex-col justify-center items-start gap-[20px]'>
                        <div className='w-full flex flex-col justify-center items-start gap-[20px]'>
                            <h1 className='font-instrument leading-[30px] text-[1.5rem] font-bold text-white'>Visit us</h1>
                            <div className='flex justify-between items-center gap-[8px]'>
                                <div className='w-[272px] bg-blueSix rounded-[6px] py-[14px] px-[16px] flex flex-col justify-center items-start gap-[4px] h-[127px] border border-blueFive'>
                                    <h1 className='text-green font-bold text-[1.125rem] leading-[25.2px] font-instrument'>Africa - Subsidiary</h1>
                                    <p className='font-instrument font-normal text-[1rem] leading-[22.4px] text-grayTwo'>Elara Technical Services Ltd</p>
                                    <p className='font-instrument font-normal text-[1rem] leading-[22.4px] text-grayTwo'>No. 1b Jide Sawyerr Drive Lekki 
                                    Phase 1, Lagos, Nigeria</p>
                                </div>
                                <div className='w-[272px] bg-blueSix rounded-[6px] py-[14px] px-[16px] flex flex-col justify-center items-start gap-[4px] h-[127px] border border-blueFive'>
                                    <h1 className='text-green font-bold text-[1.125rem] leading-[25.2px] font-instrument'>Head - Office</h1>
                                    <p className='font-instrument font-normal text-[1rem] leading-[22.4px] text-grayTwo'>Elara Solutions GmbH</p>
                                    <p className='font-instrument font-normal text-[1rem] leading-[22.4px] text-grayTwo'>Zeller Str. 3c 97082 Würzburg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default ContactUsHero