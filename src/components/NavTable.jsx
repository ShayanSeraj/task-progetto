import React from 'react'
import { CalendarDaysIcon, ChevronDownIcon, FunnelIcon, MagnifyingGlassIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function NavTable({title}) {
  return (
    <nav className='flex items-center justify-between'>
            <div>
                <h2 className='font-semibold'>{title}</h2>
            </div>
            <div className='flex'>
                <div className='flex items-center justify-center border border-black-10 rounded-md w-44 mr-2 p-2 h-7'>
                    <label>
                        <MagnifyingGlassIcon className='icon-style mr-2' />
                    </label>
                    <input type="text" placeholder='Search' className='w-32 placeholder:text-sm outline-none'/>
                </div>
                <button className='flex items-center justify-center text-black-50 p-2 w-16 h-7 border border-black-20 rounded-md mr-2'>
                    <FunnelIcon className='icon-style mr-1'/>
                    <span className='text-xs'>Filter</span>
                </button>
                <button className='flex items-center justify-center text-black-50 p-2 w-16 h-7 border border-black-20 rounded-md mr-2'>
                    <CalendarDaysIcon className='icon-style mr-1'/>
                    <span className='text-xs'>Filter</span>
                </button>
                <button className='flex items-center justify-center text-black-50 p-2 w-16 h-7 border border-black-20 rounded-md mr-2'>
                    <PaperAirplaneIcon className='icon-style mr-1'/>
                    <span className='text-xs'>Share</span>
                </button>
                <button className='flex items-center justify-center text-black-50 p-2 w-24 h-7 border border-black-20 rounded-md mr-2'>
                    <span className='text-xs'>Bulk Action</span>
                    <ChevronDownIcon className='h-3 w-3 sm:h-2 sm:w-2 cursor-pointer transition-all duration-100 active:scale-110 leading-tight ml-1'/>
                </button>
            </div>
        </nav>
  )
}
