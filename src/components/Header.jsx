import Image from 'next/image'
import React from 'react'
import dp from "../images/dp.jpeg"
const Header = () => {
  return (
    <div className='w-full'>
        <div className="w-full py-6 flex items-center border-b border-b-[#D0D3D9] bg-white  justify-between px-4">
         <span className='text-xl font-semibold'>   Dashboard</span>
        <Image src={dp}  className='w-[2.6rem] rounded-full'/>
        </div>
    </div>
  )
}

export default Header