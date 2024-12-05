'use client';

import React, { useState } from 'react';
import logo from '../images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import DropMenu from './DropMenu';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { links } from '@/raw-data/data';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  return (
    <nav className='bg-white z-50 sticky top-0 py-[20px] xl:py-[24px] px-[24px] xl:px-[100px] flex justify-between items-center h-[96px] w-full'>
      <Link href={`/`}>
        <Image
          width={200.87}
          height={23.51}
          className='object-cover'
          src={logo}
          alt='Elara Solutions Logo'
        />
      </Link>
      <div className='hidden xl:flex justify-between relative items-center gap-[32px] min-w-[590px]'>
        {links.map(
          (link, index) => (
            <Link
              href={link.route}
              onClick={() => {
                setSelectedLink((prevLink) => prevLink === link.name ? '' : link.name);
              }}
              key={index}
              className='group flex font-medium justify-center items-center gap-[2px] duration-200 text-blueTwo cursor-pointer hover:text-greenTwo  leading-[16px]'
            >
              <div className='group flex flex-col justify-center items-center relative'>
                <p className='text-[1rem] font-instrument'>
                  {link.name}
                </p>
                <span className="absolute bottom-[-18px] h-[3px] rounded-lg bg-greenTwo w-[120px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 left-1/2 -translate-x-1/2"></span>
              </div>
              {
                ['Products', 'Technologies', 'Services'].includes(link.name) && (
                  <MdOutlineKeyboardArrowDown
                    className={`${selectedLink === link.name ? 'rotate-[180deg]' : 'rotate-0'} duration-200`}
                  />
                )
              }
            </Link>
          )
        )}
      </div>
      <Link href={`/contact-us`} className="relative group w-[174px] h-[56px] overflow-hidden rounded-lg hidden xl:flex justify-center items-center py-[17px] gap-[34px] bg-blue text-white text-[.875rem] leading-[30px] after:content-[''] after:absolute after:bg-greenTwo after:w-0 after:h-full after:top-0 after:left-0 after:transition-all after:duration-300 after:z-[1px] hover:after:w-full hover:after:left-0 transition-colors">
        <span className="z-10 relative transition-colors font-instrument group-hover:text-blue font-normal">
          Get in Touch
        </span>
      </Link>

      <div onClick={() => setMenu((prev) => !prev)} className='flex flex-col justify-center items-end w-[32px] h-[32px] xl:hidden gap-[6px] cursor-pointer'>
        <div className={`bg-blue w-full h-[2.5px] rounded-lg ${menu ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
        <div className={`bg-blue w-full h-[2.5px] rounded-lg duration-200 ${menu ? 'opacity-0 -translate-x-[100px]' : 'opacity-100 translate-x-0'}`}></div>
        <div className={`bg-blue w-[50%] h-[2.5px] rounded-lg transition-transform ${menu ? '-rotate-45 -translate-y-[10px] w-full' : ''}`}></div>
      </div>

      {
        menu && (<Menu menu={menu} setMenu={setMenu} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />)
      }

      {
        ['Technologies', 'Services', 'Products'].includes(selectedLink) && (<DropMenu links={true} setLinks={() => {}} currentLink={selectedLink} setCurrentLink={() => {}} />)
      }
    </nav>
  );
};

export default Navbar;
