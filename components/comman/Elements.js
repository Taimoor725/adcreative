import Image from 'next/image'


export const TryForFreeButton=()=>{
    return(
        <button className="flex gap-2 bg-brPink text-white font-semibold px-6 py-5 rounded-2xl items-center shadow-2xl shadow-brPink/60 hover:shadow-brDarkBlue/60 hover:bg-brDarkBlue relative">
            <div className='text-base font-bold'>Try For Free Now</div>
            <Image src="icons/layers.svg" width={24} height={24} alt="button icon" />
            <div className="absolute inset-0 bg-white opacity-5 pointer-events-none"></div>
        </button>
     )
}