import Image from 'next/image';
import React from 'react';
import heroImg from "../../../public/images/image.png"

const HomeBanner = () => {
    return (
       <main className='h-auto md:px-8'>
        <div className='flex flex-col md:flex-row gap-10 md:gap-10 items-center md:items-start'>

            <div className='flex flex-col gap-4 md:gap-8 justify-start pt-8 md:pt-12 text-center md:text-left'>
            <h1 className='font-bold text-xl md:text-2xl leading-8 md:leading-10 tracking-wide'>DIGITAL MARKETING AGENCY <br/> THAT GROWS COMPANIES</h1>
            <p className='text-xl md:text-base'>We are a full services digital agency that helps companies attract, convert, and retain more customers. Our integrated, customized solutions maximize ROI for our clients.</p>
            <button className='bg-orange-500 transition-transform transform hover:scale-105 hover:bg-orange-400 w-32 md:w-40 h-12 md:h-14 sm:justify-center justify-center items-center text-center'>Learn More</button>
            </div>

            <div className='w-full md:w-auto '>
            <Image src={heroImg} layout='responsive' height={500} width={500} alt='hero image'/>
            </div>

        </div>
       </main>
    );
}

export default HomeBanner;