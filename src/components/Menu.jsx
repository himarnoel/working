import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import SelectedMenu from './SelectedMenu';

const Menu = ({ menu, setMenu }) => {
  const [shouldRender, setShouldRender] = useState(menu);
  const [selectedLink, setSelectedLink] = useState('');

  useEffect(() => {
    if (menu) {
      setShouldRender(true);
    } else {
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [menu]);

  if (!shouldRender) return null;

  return (
    <aside
      className={`${
        menu ? 'fade-in' : 'fade-out'
      } flex flex-col justify-start py-[100px] items-center xl:hidden fixed top-[9.1%] right-0 bg-white z-40 w-[375px] gap-[100px] h-screen p-3 shadow-[10px_0px_30px_rgba(0,0,0,0.1)]`}
    >
      <div className='flex flex-col justify-center relative items-start gap-[48px] w-[328px]'>
        {['About Us', 'Technologies', 'Services', 'Products', 'Case studies'].map(
          (link, index) => (
            <div
              onClick={() => setSelectedLink(link)} 
              key={index}
              className='group flex justify-between items-start relative w-full duration-200 text-blueTwo cursor-pointer hover:text-greenTwo leading-[16px] text-[1rem]'
            >
              <p className='iMedium'>{link}</p>
              {['Products', 'Technologies', 'Services'].includes(link) && (
                <IoIosArrowForward />
              )}
            </div>
          )
        )}
      </div>
      <button className='bg-blue text-white w-[328px] h-[56px] rounded-lg flex justify-center items-center py-[17px] gap-[34px] iLight text-[.875rem] leading-[14px]'>
        Get in Touch
      </button>

      {/* Only render SelectedMenu if selectedLink has a value */}
      {selectedLink === 'Technologies' || selectedLink === 'Services' || selectedLink === 'Products' ? (<SelectedMenu selectedLink={selectedLink} setSelectedLink={setSelectedLink} /> ): ''}
    </aside>
  );
};

export default Menu;
