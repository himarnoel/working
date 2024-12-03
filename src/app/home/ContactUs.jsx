import PhoneInput from '@/components/PhoneInput'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

const ContactUs = () => {
  return (
    <section className='w-full min-h-screen bg-gray flex flex-col py-[100px] justify-center items-center gap-[2px]'>
        <div className='max-w-[1285px] mx-auto xl:h-[820px] flex flex-col justify-center items-center gap-[24px]'>
            <div className='w-[343px] md:w-full xl:w-[1221px] flex flex-col justify-center items-center text-center gap-[24px] font-instrument'>
                <h2 className='text-greenTwo text-[.75rem] leading-[12px] font-semibold font-instrument'>Contact us</h2>
                <h1 className='w-full text-blue font-semibold leading-[44px] md:leading-[60px] text-[2.25rem] md:text-[3rem]'>Get in touch</h1>
                <p className='md:w-[641px] text-blueThree text-[.875rem] md:text-[1rem] leading-[18.2px] md:leading-[24px] font-normal font-instrument'>
                    We&apos;d love to hear from you. Please fill out this form.
                </p>
            </div>

            <form className='max-w-[1280px] mx-auto lg:h-[516px] gap-[64px] px-[32px] flex flex-col justify-center items-center' action="">
                <div className='w-full lg:w-[480px] gap-[24px] flex flex-col justify-center items-center'>
                    <div className='flex flex-col lg:flex-row justify-center items-start gap-[32px] w-full'>
                        <input className='w-full lg:w-[224px] h-[44px] gap-[6px] flex justify-center items-start px-[14px] py-[10px] border border-grayNine rounded-lg font-instrument placeholder:text-blueThree font-normal placeholder:font-normal text-base placeholder:text-base' type="text" name="" id="" placeholder='First Name' />
                        <input className='w-full lg:w-[224px] h-[44px] gap-[6px] flex justify-center items-start px-[14px] py-[10px] border border-grayNine rounded-lg font-instrument placeholder:text-blueThree font-normal placeholder:font-normal text-base placeholder:text-base' type="text" name="" id="" placeholder='Last Name' />
                    </div>
                    <input className='w-full h-[44px] gap-[6px] flex justify-center items-start px-[14px] py-[10px] border border-grayNine rounded-lg font-instrument placeholder:text-blueThree font-normal placeholder:font-normal text-base placeholder:text-base' type="text" name="" id="" placeholder='olivia@untitledui.com' />
                    <PhoneInput/>

                    <div className="flex flex-col justify-center items-start gap-[6px] w-full">
                        <label
                        htmlFor="message"
                        className="font-instrument font-medium text-[.875rem] leading-[20px] text-blueSeven"
                        >
                            Message
                        </label>
                        
                        <textarea className='className="outline-none bg-transparent font-instrument rounded-lg py-[10px] px-[14px] placeholder:text-blueThree font-normal border border-grayNine placeholder:font-normal text-md placeholder:text-md w-full h-[128px] outline-none' placeholder='How can we help you?' name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className='flex justify-start items-center gap-[12px] w-full'>
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className='font-normal text-base text-blueThree'
                        >
                            You agree to our friendly <span className='underline'>privacy policy</span>.
                        </label>
                    </div>
                    <button className='flex justify-center items-center rounded-lg w-full h-[48px] text-gray font-medium text-base bg-blue py-[12px] px-[20px] gap-[8px] border border-blue' type="submit">Send message</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactUs