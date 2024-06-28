'use client'

import React from 'react'

const Header = () => {
  return (
   <main className='py-[20px]'>
    <div className='grid grid-rows-1 grid-cols-3 place-items-center gap-5'>
        <div className='flex flex-col justify-center items-center w-[250px] h-[100px] bg-blue-200 rounded-lg border border-black'>
            <div className='font-bold'>Total Tasks</div> 
            <div className='text-6xl font-mono font-bold'>04</div>
        </div>
        <div className='flex flex-col justify-center items-center w-[250px] h-[100px] bg-green-200 rounded-lg border border-black'>
            <div className='font-bold'>Total Tasks</div> 
            <div className='text-6xl font-mono font-bold'>02</div>
        </div>
        <div className='flex flex-col justify-center items-center w-[250px] h-[100px] bg-orange-200 rounded-lg border border-black'>
            <div className='font-bold'>Total Tasks</div> 
            <div className='text-6xl font-mono font-bold'>02</div>
        </div>
    </div>
   </main>
  )
}

export default Header
