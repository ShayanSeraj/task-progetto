import React from 'react'
import TableHeade from './TableHeade'
import TableBody from './TableBody'

import NavTable from './NavTable'
import { useSelector } from 'react-redux'


export default function InventoryItems({title , headTable}) {

  const data = useSelector((state)=>state.products.products)


  return (
    <div className='py-6 px-3'>
        <NavTable title={title}/>
        <div>
            <table className='my-5 border-y-[1px] border-gray min-w-full text-center table-auto'>
               <TableHeade headTable={headTable}/>
               <TableBody data={data}/>
            </table>
        </div>
    </div>
  )
}
