import React from 'react'

import imgProfile from '../assets/image/profile.jpg'
import { IconArrowDown, IconHome, IconNotificatin } from './icons/Icons'
import { useNavigate } from 'react-router-dom'

export default function NavBar({title}) {

    const navigate = useNavigate()

  return (
   <nav className='bg-white w-full h-[84px] flex flex-col'>
        <div className='my-1 py-3 px-5 flex items-center justify-between h-[55px] shadow-sm'>
            <div className='text-black-60 font-medium'>
                Inventory
            </div>
            <div className='flex items-center justify-center'>
                <div className='mx-2.5 h-8 bg-secondary-20 py-3 px-1.5 rounded-lg flex items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <span className='flex items-center justify-center'>Shayan's Shop</span>
                        <span className='flex items-center justify-center ml-2 mt-1'><IconArrowDown /></span>
                    </div>
                </div>
                <div className='mx-2 my-auto items-center justify-center'>
                    <IconNotificatin />
                </div>
                <div className='h-8 w-8 mx-2'>
                    <img className='rounded-lg object-cover h-8 w-8' src={imgProfile} alt="profile" />
                </div>
            </div>
        </div>
        <div className='h-[21px] px-5 py-1 flex items-center'>
            <div className='flex items-center justify-start'>
                <IconHome /> <span className='ml-2 text-black-30'>/</span><span className={`ml-2 ${title ? 'text-primary-100 cursor-pointer' : 'text-black-30'} `} onClick={()=>navigate('/')}>Inventory</span>
                {title ? (<><span className='ml-2 text-black-30'>/</span><span className='ml-2 text-black-30'>{title}</span></>) : ''}
            </div>
        </div>
   </nav>
  )
}
