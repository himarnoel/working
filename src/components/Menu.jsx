'use client'

import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import SelectedMenu from './SelectedMenu';
import { links } from '@/raw-data/data';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const Menu = ({ menu, setMenu, selectedLink, setSelectedLink }) => {

  const [shouldRender, setShouldRender] = useState(menu);

  // if (!shouldRender) return null;
  // useEffect(() => {
  //   if (menu) {
  //     setShouldRender(true);
  //   } else {
  //     setTimeout(() => setShouldRender(false), 300);
  //   }
  // }, [menu]);

  // if (!shouldRender) return null;

  const pathname = usePathname();

  return (
    <aside
      className={`${
        menu ? 'fade-in' : 'fade-out'
      } flex flex-col justify-start py-[100px] items-center xl:hidden absolute top-[96px] right-0 bg-white z-40 w-[375px] gap-[100px] h-screen p-3 shadow-[10px_0px_30px_rgba(0,0,0,0.1)]`}
    >
      <div className='flex flex-col justify-center relative items-start gap-[48px] w-[328px]'>
        {links.map(
          (link, index) => (
            <Link
              href={link.route}
              onClick={() => setSelectedLink(link.name)} 
              key={index}
              className='group flex justify-between items-start relative w-full duration-200 text-blueTwo cursor-pointer hover:text-greenTwo leading-[16px] text-[1rem]'
            >
              <p className='font-medium font-instrument'>{link.name}</p>
              {['Products', 'Technologies', 'Services'].includes(link.name) && (
                <IoIosArrowForward />
              )}
            </Link>
          )
        )}
      </div>
      <div className="flex items-center justify-center h-screen">
        <Link href={`/contact-us`} className={pathname === '/' ? `relative w-[328px] h-[56px] overflow-hidden rounded-lg hidden xl:flex justify-center items-center py-[17px] gap-[34px] bg-white text-blue text-[.875rem] leading-[30px] z-10 font-instrument font-normal` : `relative w-[174px] h-[56px] overflow-hidden rounded-lg hidden xl:flex justify-center items-center py-[17px] gap-[34px] bg-blue text-white text-[.875rem] leading-[30px] z-10 font-instrument font-normal`}>
          Get in Touch
        </Link>
      </div>


      {/* Only render SelectedMenu if selectedLink has a value */}
      {selectedLink === 'Technologies' || selectedLink === 'Services' || selectedLink === 'Products' ? (<SelectedMenu selectedLink={selectedLink} setSelectedLink={setSelectedLink} /> ): ''}
    </aside>
  );
};

export default Menu;
