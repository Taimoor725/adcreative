import Navbar from '@/components/comman/Navbar'
import Landing from '@/components/home/Landing'
import React from 'react'
import { PosterCards, PrograssCard, InsightScoreCard, TraficCrad, ConversionScore, AnalysisCard } from "@/components/comman/Elements"
import GenerateAdCreatives from '@/components/home/GenerateAdCreatives'


function Page() {
  return (
    <div className='overflow-x-hidden h-auto'>
      <div className='bg-BG flex flex-col items-center relative h-[150vh]'>
        <Navbar />
        <Landing />
        {/* <----these all are absolutes-----> */}
        <PosterCards Posterimages={Posterimages} />
        <PrograssCard />
        <InsightScoreCard percentage={45} />
        <TraficCrad />
        <ConversionScore />
        <AnalysisCard />
        {/* <----------------------> */}
      </div>
      <div className='h-[300vh] bg-[red]'>
        <GenerateAdCreatives/>
      </div>
    </div>
  )
}
export default Page








const Posterimages = [
  { src: "/home/childgrot.webp", left: 1, top: 2, size: [170, 170] },
  { src: "/home/lawncare.webp", left: 11, top: 22, size: [170, 170] },
  { src: "/home/cloudsass.webp", left: -4, top: 38, size: [170, 170] },
  { src: "/home/perfume.webp", left: 9, top: 47, size: [300, 300] },
  { src: "/home/pettoys.webp", left: 12, top: 67, size: [180, 180] },
  { src: "/home/noddles.webp", left: 0, top: 69, size: [150, 150] },
  { src: "/home/chess.avif", left: -1, top: 18, size: [170, 170] },
];