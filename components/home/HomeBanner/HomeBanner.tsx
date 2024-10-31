import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../../public/images/section05.jpg'; // Replace with your background image

const HomeBanner = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full h-[100vh]">
            <div className="relative w-full h-screen">
                <Image
                    src={backgroundImage}
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover" 
                    className="absolute inset-0 z-10 opacity-30" 
                />
                <div className="flex items-center justify-start w-full h-full bg-black bg-opacity-10 z-20">
                    <div className="text-left text-black gap-8 px-6 py-20 sm:px-10 md:pl-20 md:pr-10 lg:pr-20 max-w-3xl">
                        <p className="text-xl sm:text-xl md:text-xl font-bold tracking-tighter leading-relaxed mb-6">
                            At the core of Prime Marketing Experts’ work are three key pillars:
                            fostering strong partnerships, conducting thorough research, and
                            delivering tangible outcomes.
                        </p>
                        <p className="text-lg sm:text-x md:text-sm leading-relaxed">
                            Our expertise spans Search Engine Marketing, website optimization, and Social
                            Media campaigns, empowering businesses since 2017 in Boston.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomeBanner;
