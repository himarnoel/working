'use client'

import React, { useState } from 'react';
import logo from '../images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    
  return (
    <nav className='bg-white z-50 sticky top-0 py-[20px] xl:py-[24px] px-[24px] xl:px-[100px] flex justify-between items-center h-[96px] w-full shadow-lg'>
      <Link href={`/`}>
        <Image
            width={200.87}
            height={23.51}
            className='object-cover'
            src={logo}
            alt='Elara Solutions Logo'
        />
      </Link>
      <div className='hidden xl:flex justify-between relative items-center gap-[32px] w-[559px]'>
        {['About Us', 'Technologies', 'Services', 'Products', 'Case studies'].map(
          (link, index) => (
            <div
              key={index}
              className='group flex flex-col justify-center items-center relative'
            >
              <p className='duration-200 text-blueTwo cursor-pointer hover:text-greenTwo iMedium leading-[16px] text-[1rem]'>
                {link}
              </p>
              <span className="absolute bottom-[-18px] h-[3px] rounded-lg bg-greenTwo w-[120px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 left-1/2 -translate-x-1/2"></span>
            </div>
          )
        )}
      </div>
      <button className='bg-blue text-white w-[174px] h-[48px] rounded-lg hidden xl:flex justify-center items-center py-[17px] gap-[10px] iLight text-[.875rem] leading-[14px]'>
        Get in Touch
      </button>

      <div onClick={() => setMenu((prev) => !prev)} className='flex flex-col justify-center items-end w-[32px] h-[32px] xl:hidden gap-[6px] cursor-pointer'>
        <div className={`bg-blue w-full h-[2.5px] rounded-lg ${menu ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
        <div className={`bg-blue w-full h-[2.5px] rounded-lg duration-200 ${menu ? 'opacity-0 -translate-x-[100px]' : 'opacity-100 translate-x-0'}`}></div>
        <div className={`bg-blue w-[50%] h-[2.5px] rounded-lg transition-transform ${menu ? '-rotate-45 -translate-y-[10px] w-full' : ''}`}></div>
      </div>

      {
        menu && (<Menu menu={menu} setMenu={setMenu} />)
      }
    </nav>
  );
};

export default Navbar;
