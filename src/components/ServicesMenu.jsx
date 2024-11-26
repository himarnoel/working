import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'

const ServicesMenu = () => {
  return (
    <div className='p-[24px] flex flex-col justify-start items-start gap-[24px] xl:gap-[48px] w-full xl:w-[1202px] xl:grid xl:grid-cols-4 xl:justify-items-center xl:place-items-center xl:h-[408px]'>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Application Development</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Mobile Development</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Data Strategy</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Cloud Development</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>IT Consulting</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>UI/UX Design</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Product Development</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Cloud Computing</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Data Architecture</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full xl:w-[270px] text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Security</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
    </div>
  )
}

export default ServicesMenu