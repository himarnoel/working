'use client'

import React, { useEffect, useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import TechnologiesMenu from './TechnologiesMenu'
import ServicesMenu from './ServicesMenu'
import ProductsMenu from './ProductsMenu'

const SelectedMenu = ({ selectedLink, setSelectedLink }) => {
    const [shouldRender, setShouldRender] = useState(selectedLink);

    useEffect(() => {
        if (selectedLink) {
            setShouldRender(true);
        } else {
            setTimeout(() => setShouldRender(false), 300); // Make sure to match the animation duration
        }
    }, [selectedLink]);

    if (!shouldRender) return null;

    return (
        <aside
            className={`${
                selectedLink ? 'fade-in' : 'fade-out'
            } bg-blue w-[375px] h-screen absolute right-0 top-[0%] z-50`}
        >
            <div
                onClick={() => setSelectedLink('')}
                className="cursor-pointer flex justify-start items-start gap-[8px] text-white border-b border-[#3F3873] h-[72px] leading-[20px] text-[1.25rem] iMedium font-medium p-[24px]"
            >
                <IoArrowBackOutline />
                {selectedLink}
            </div>
            {selectedLink === 'Technologies' && <TechnologiesMenu />}
            {selectedLink === 'Services' && <ServicesMenu />}
            {selectedLink === 'Products' && <ProductsMenu />}
        </aside>
    );
};

export default SelectedMenu;
