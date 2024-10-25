"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react';



export const AnalysisCard = () => {
    return (
        <div className='absolute top-[69%] right-0 '>
            <div class="w-48 h-52 bg-white rounded-xl shadow-md flex flex-col items-center justify-around py-4">
                <p class="text-sm font-bold text-gray-800">Ad Fatigue Analysis</p>

                <div class="w-full flex justify-center">
                    <img src="/cardsavgs/graph.svg" alt="Ad Fatigue Chart" class="w-full " />
                </div>

                <p class="text-xs text-gray-600 text-center px-4 ">
                    Your ads typically start experiencing ad fatigue after about 14 days.
                </p>
            </div>
        </div>

    )
}


export const ConversionScore = () => {
    return (
        <div className='absolute top-[47%] right-[-3%]'>
            <div class=" w-[300px] h-[180px] bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2">
                <div class="flex items-center space-x-2">
                    <Image src={"/cardsavgs/speedmeter.svg"} width={20} height={20} />
                    <p class="text-xs text-gray-700 font-medium">
                        Conversion Score <span class="text-gray-400">96/100</span>
                    </p>
                </div>

                <p class="text-pink-600 font-semibold text-base">
                    Google Package: Performance Max Ads
                </p>

                <p class="text-xs text-gray-600">
                    Automate ad design, track competitors, and boost conversions effortlessly
                    with AdCreative.ai.
                </p>
                <div className='flex items-center justify-between'>
                    <div class="flex space-x-2 mt-2">
                        <div class="w-6 h-4 bg-gray-200 rounded-full"></div>
                        <div class="w-6 h-4 bg-gray-200 rounded-full"></div>
                        <div class="w-6 h-4 bg-gray-200 rounded-full"></div>
                        <div class="w-6 h-4 bg-gray-200 rounded-full"></div>
                    </div>

                    <p class="text-xs text-gray-400 text-right">93 chars</p>
                </div>
            </div>
        </div>

    )
}


export const TraficCrad = () => {
    return (
        <div className=' absolute top-52 right-[-11.8%] bg-white rounded-xl move-right-container'>
            <div className='w-40 h-44 flex flex-col items-center justify-between '>
                <div className='font-bold text-base text-brDarkBlue pt-4'>Trafic Channal</div>
                <Image src={"/cardsavgs/diffgraph.svg"} width={200} height={100} alt='1' />
            </div>
        </div>
    )
}


export const InsightScoreCard = ({ percentage }) => {
    const [displayPercentage, setDisplayPercentage] = useState(0);

    useEffect(() => {
        let start = 0;
        const interval = setInterval(() => {
            if (start < percentage) {
                start++;
                setDisplayPercentage(start);
            } else {
                clearInterval(interval);
            }
        }, 20);
        return () => clearInterval(interval);
    }, [percentage]);

    return (
        <div className="absolute top-52 right-0 move-right-container">
            <div className="flex flex-col items-center justify-around bg-white rounded-xl shadow-lg p-2 w-36 h-48  relative">
                <p className="mt-2 text-xs font-bold text-gray-800">Creative Insight Score</p>
                <div className="relative w-32 h-32">
                    <img
                        src="/cardsavgs/circle.svg"
                        alt=""
                        className="absolute w-full h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                    />
                    <img
                        src="/cardsavgs/guage.svg"
                        alt=""
                        className="absolute w-24 h-24 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold text-pink-500">{displayPercentage}%</h1>
                        <p className="text-sm font-medium text-gray-600">Normal</p>
                    </div>
                </div>
                <div className='flex w-full text-[4px] gap-2 justify-center'>
                    <div className='text-brDarkBlue/60 font-bold'>VERY POOR</div>
                    <div className='text-brDarkBlue/60 font-bold'>POOR</div>
                    <div className='text-brDarkBlue font-bold'>NORMAL</div>
                    <div className='text-brDarkBlue/60 font-bold'>GOOD</div>
                    <div className='text-brDarkBlue/60 font-bold'>EXECLENT</div>

                </div>
            </div>
        </div>

    );
};


export const PrograssCard = () => {
    return (
        <div className='absolute top-2 right-[-11%] move-right-container'>
            <div className='w-40 h-44 bg-white rounded-xl justify-center gap-4 flex flex-col items-center relative'>
                <div className='w-[90%] text-center font-extrabold text-sm'>Creative Performance Score</div>
                <img src="/cardsavgs/meter.svg" alt="load" className='w-[5.5rem] h-[5.5rem]  rotate-[85deg]' />
                <div className='text-brPink text-lg font-extrabold absolute top-1/2'>97</div>
                <div className='text-sm font-semibold text-brDarkBlue/80 absolute top-[65%]'>Normal</div>
            </div>
        </div>
    )
}



export const PosterCards = ({ Posterimages }) => {
    return (
        <div className='absolute h-full w-full z-0 overflow-hidden scale-image-container'>
            {
                Posterimages.map((item, index) => {
                    return (
                        <Image
                            key={index}
                            src={item.src}
                            width={item.size[0]}
                            height={item.size[1]}
                            alt="poster"
                            className="object-cover absolute"
                            style={{ left: `${item.left}%`, top: `${item.top}%` }}
                        />
                    )
                })
            }
        </div>
    );
};


export const ScrollX = ({ Images }) => {
    return (
        <div className="slider z-10 mt-5">
            <div className="slide-track">
                <div className="slide">
                    <img src="/icons/home/amazo.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/aws.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/greenpeace.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/leovo.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/linkedi.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/microsoft.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/pwc.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/redbull.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/renault.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/starbugs.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/tiffany.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/tripadvisor.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/walmart.svg" alt="" />
                </div>





                <div className="slide">
                    <img src="/icons/home/amazo.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/aws.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/greenpeace.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/leovo.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/linkedi.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/microsoft.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/pwc.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/redbull.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/renault.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/starbugs.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/tiffany.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/tripadvisor.svg" alt="" />
                </div>
                <div className="slide">
                    <img src="/icons/home/walmart.svg" alt="" />
                </div>
            </div>
        </div>
    )
}





export const TryForFreeButton = () => {
    return (
        <button className="flex gap-2 z-10 bg-brPink text-white font-semibold px-6 py-5 rounded-2xl items-center shadow-2xl shadow-brPink/60 hover:shadow-brDarkBlue/60 hover:bg-brDarkBlue relative">
            <div className='text-base font-bold'>Try For Free Now</div>
            <Image src="icons/layers.svg" width={24} height={24} alt="button icon" />
            <div className="absolute inset-0 bg-white opacity-5 pointer-events-none"></div>
        </button>
    )
}




