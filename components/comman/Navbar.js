"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function Navbar() {
    return (
        <div className='w-[90%] h-[5.5rem] bg-white rounded-xl fixed top-6 flex  justify-between px-7'>
            <Image src={"logo.svg"} width={120} height={120} />
            <NavSection/>
            <TryFreeSection/>
            <div>ABC</div>
            {/* <GenrateCol/> */}
        </div>
    )
}

export default Navbar





// const FeaturesPage = () => {
//     const categories = [
//         {
//             title: 'GENERATE',
//             items: [
//                 { name: 'Ad Creatives', description: 'Generate conversion-focused ad creatives', icon: 'ad-icon' },
//                 { name: 'Product Photoshoots', description: 'Elevate your product photos to stunning e-commerce visuals', icon: 'photoshoot-icon' },
//                 { name: 'Text & Headlines', description: 'Generate texts high-conversion-rate text', icon: 'text-icon' },
//                 { name: 'Stock Image Generation', description: 'Generate premium stock images for all commercial uses', icon: 'stock-image-icon' },
//                 { name: 'Ad Package', description: 'Generate strategies, ad creatives, texts, and target audiences', icon: 'package-icon' }
//             ]
//         },
//         {
//             title: 'ANALYSE',
//             items: [
//                 { name: 'Creative Insight', description: 'Identify your top-performing creatives', icon: 'insight-icon' },
//                 { name: 'Competitor Insight', description: 'Gain insights from your competitors’ websites', icon: 'competitor-icon' },
//                 { name: 'Ad Inspiration Gallery', description: 'You are one click away from your next winning ad inspiration.', icon: 'gallery-icon', new: true }
//             ]
//         },
//         {
//             title: 'PREDICT',
//             items: [
//                 { name: 'Creative Scoring', description: 'Create authentic, user-generated content style ads', icon: 'scoring-icon', renewed: true }
//             ]
//         },
//         {
//             title: 'AUTOMATE',
//             items: [
//                 { name: 'Template Builder', description: 'Generate creatives using the custom templates you have built', icon: 'builder-icon' }
//             ]
//         }
//     ]

//     return (
//         <div className="w-full h-full p-10">
//             <div className="grid grid-cols-4 gap-6">
//                 {categories.map((category, index) => (
//                     <div key={index} className="space-y-4">
//                         <h3 className="text-brPink font-bold">{category.title}</h3>
//                         {category.items.map((item, idx) => (
//                             <div key={idx} className="flex items-start space-x-2">
//                                 <div className="w-6 h-6">
//                                     {/* Replace with your own icons */}
//                                     <img src={`/icons/${item.icon}.svg`} alt={item.name} className="w-full h-full" />
//                                 </div>
//                                 <div>
//                                     <p className={`font-semibold ${item.renewed ? 'text-yellow-500' : item.new ? 'text-green-500' : 'text-black'}`}>{item.name}</p>
//                                     <p className="text-sm text-gray-600">{item.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }



const GenrateCol=()=>{
    const GenrateCards=[
        { name: 'Ad Creatives', description: 'Generate conversion-focused ad creatives', icon: '/icons/navicons/rocket.svg', active:true},
        { name: 'Product Photoshoots', description: 'Elevate your product photos to stunning e-commerce visuals', icon: '/icons/navicons/cloths.svg' , active:true},
        { name: 'Text & Headlines', description: 'Generate texts high-conversion-rate text', icon: '/icons/navicons/text.svg' , active:true},
        { name: 'Stock Image Generation', description: 'Generate premium stock images for all commercial uses', icon: '/icons/navicons/gallary.svg' , active:true},
        { name: 'Ad Package', description: 'Generate strategies, ad creatives, texts, and target audiences', icon: '/icons/navicons/layers.svg' , active:false},
        { name: 'Video Generation ', description: 'Generate conversion-focused videos', icon: '/icons/navicons/play.svg', active:false},
        { name: 'Social Posts', description: 'Generate engagement-focused social media post creatives', icon: '/icons/navicons/like.svg' , active:false},
        { name: 'User-Generated Video', description: 'Create engeging, videos that reflect user experiences', icon: '/icons/navicons/person.svg' , active:false},
        { name: 'Stock Video', description: 'Generate unique and commercially safe stock videos', icon: '/icons/navicons/videoPrem.svg' , active:false},
        { name: 'E-Commerce Photoshoot', description: 'Fit your product photos onto Al generated models', icon: '/icons/navicons/cloths.svg' , active:false},
    ]

    return(
        <button className='flex flex-col'>
            <div className='text-brPink text-lg font-normal'>Genrate</div>
            <div className='grid grid-rows-5 grid-flow-col gap-5'>
                {
                    GenrateCards.map((items)=>{
                        return(
                            <NavCard icon={items.icon} name={items.name} description={items.description} active={items.active}/>
                        )
                    })
                }
            </div>
        </button>
    )
}



const NavCard = ({ icon, name, description, active }) => {
    return (
        <div className="flex w-64 items-start">
            {/* <div className="w-6 h-6">
                <img src={icon} alt={name} className="w-full h-full" style={{fill:"red"}}/>
            </div> */}
            <Image src={icon} width={18} height={18} className='fill-brDarkBlue'/>
            <div className='flex flex-col items-start'>
                <div className='text-brDarkBlue font-semibold text-base'>{name}</div>
                <div className="text-sm text-brDarkBlue/60 font-light">{description}</div>
            </div>
        </div>
    )
}


export const NavButton = () => {
    return (
        <button className="flex bg-[#FDE9F0] text-brPink hover:text-white font-semibold px-5 py-3 rounded-xl items-center hover:shadow-2xl hover:shadow-brPink hover:bg-brPink relative">
            <div className='text-[15px] font-bold'>Try For Free Now</div>
        </button>
    )
}



const TryFreeSection = () => {
    return (
        <div className='flex items-center gap-2'>
            <div className='p-3 hover:bg-BG rounded-xl text-sm font-semibold text-brDarkBlue/60'>Login</div>
            <NavButton />
        </div>
    )
}

const NavSection = () => {
    const NavOptions = [{
        name: "Home",
        icon: false,
        color: true,
    },
    {
        name: "Features",
        icon: true,
        color: false,
    }, {
        name: "Use Cases",
        icon: true,
        color: false,
    }, {
        name: "Enterprise",
        icon: false,
        color: false,
    }, {
        name: "Pricing",
        icon: false,
        color: false,
    },
    ]
    return (
        <div className='flex w-[40%] justify-between items-center'>
            {NavOptions.map((item, keys) => {
                return (
                    <NavOption name={item.name} icon={item.icon} color={item.color} />)
            })
            }
        </div>
    )
}

const NavOption = ({ icon, name, color }) => {
    const [rotate, setRotate] = useState(false)

    return (
        <div
            className={`flex items-center font-semibold text-sm p-3 rounded-xl hover:bg-BG ${color ? "text-brLightPink" : "text-brDarkBlue/60"}`}
            onMouseEnter={() => setRotate(true)}
            onMouseLeave={() => setRotate(false)}
        >
            <div>{name}</div>
            {icon && (
                <div className={`transition-all ${rotate ? "rotate-180 " : "rotate-0"}`}>
                    <Image src={"icons/arrowdown.svg"} width={20} height={20} alt='arrow' />
                </div>
            )}
        </div>
    )
}
