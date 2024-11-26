import React from 'react'
import TechnologiesMenu from './TechnologiesMenu'
import ServicesMenu from './ServicesMenu'
import ProductsMenu from './ProductsMenu'
import SelectedMenu from './SelectedMenu'

const DropMenu = ({ links, setLinks, currentLink, setCurrentLink }) => {
    console.log('Current', currentLink);
    console.log("Links", links)
  return (
    <nav className={`${links ? 'fadein' : 'fadeout'} bg-blue w-full absolute left-0 right-0 top-[100%] h-[560px] hidden xl:flex p-[50px] justify-center items-start`}>
        {currentLink === 'Technologies' && (<TechnologiesMenu />)}
        {currentLink === 'Services' && (<ServicesMenu />)}
        {currentLink === 'Products' && (<ProductsMenu />)}
    </nav>
  )
}

export default DropMenu