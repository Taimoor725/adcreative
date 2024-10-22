import Navbar from '@/components/comman/Navbar'
import Landing from '@/components/home/Landing'
import React from 'react'

function page() {
  return (
    <div className='w-screen bg-BG flex flex-col items-center relative'>
        <Navbar/>
        <Landing/>
    </div>
  )
}

export default page


