"use client"
import React from 'react'
import { TryForFreeButton , ScrollX} from '../comman/Elements'
import Image from 'next/image'

function Landing() {
    return (
        <div className='w-2/3 flex flex-col items-center  text-textColor relative'>
            <div className='w-full flex flex-col items-center justify-end gap-10 h-screen'>
                <div className='font-bold text-7xl text-center'>#1 most used  <br /> AI tool for advertising</div>
                <div className='w-2/3 text-xl text-center text-textColor/80'>Generate <span className='font-semibold'>ad banners, texts, photoshoots,</span> and <span className='font-semibold'>videos</span> that outperform those of your competitors.</div>
                <TryForFreeButton/>
            </div>
            <ScrollX Images={Images}/>
        </div>
    )
}

export default Landing

const Images = [
    "icons/home/leovo.svg",
    "icons/home/greenpeace.svg",
    "/icons/home/renault.svg",
    "icons/home/amazo.svg",
    "/icons/home/starbugs.svg",
    "icons/home/linkedi.svg",
    "icons/home/microsoft.svg",
    "icons/home/redbull.svg",
    "icons/home/redit.svg",
    "icons/home/tiffany.svg",
    "icons/home/tripadvisor.svg",
    "/icons/home/aws.svg",
    "/icons/home/pwc.svg",
    "icons/home/walmart.svg",


];



