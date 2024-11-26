import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'

const ProductsMenu = () => {
  return (
    <div className='p-[24px] flex flex-col justify-start items-start gap-[24px] w-full xl:w-[1202px] xl:h-[248px] xl:grid xl:grid-cols-4 xl:justify-items-center xl:place-items-center xl:gap-[40px]'>
        <div className='flex justify-between items-center w-full text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Core Banking</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Retail Banking</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Corporate Banking</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Agency Banking</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Lending Services</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Loan Engine</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Lifestyle Services</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
        <div className='flex justify-between items-center w-full text-green font-medium iMedium leading-[28.8px] text-[1.125rem]'>
            <p>Ticketing Services</p>
            <IoArrowForwardOutline></IoArrowForwardOutline>
        </div>
    </div>
  )
}

export default ProductsMenu