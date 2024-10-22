import React from 'react'
import { TryForFreeButton } from '../comman/Elements'

function Landing() {
    return (
        <div className='w-2/3 flex flex-col items-center justify-end gap-10 text-textColor h-screen'>
            <div className='font-bold text-7xl text-center'>#1 most used  <br/> AI tool for advertising</div>
            <div className='w-2/3 text-xl text-center text-textColor/80'>Generate <span className='font-semibold'>ad banners, texts, photoshoots,</span> and <span className='font-semibold'>videos</span> that outperform those of your competitors.</div>
            <TryForFreeButton/>
        </div>
    )
}

export default Landing

