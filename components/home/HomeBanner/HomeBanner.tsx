'use client'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import backgroundImage from '../../../public/images/section05.jpg' // Replace with your background image
import backgroundImage1 from '../../../public/images/section02.jpg' // Replace with your background image
import backgroundImage2 from '../../../public/images/section6.jpg' // Replace with your background image

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import React from 'react'
import Link from 'next/link'

const HomeBanner = () => {
	return (
		<main className="flex flex-col items-center justify-center w-full h-[100vh] relative">
			<div className="flex w-full h-full absolute top-0 left-0 z-50 items-center bg-full-shade">
				<div className="container">
					<div className="max-w-[700px] ">
						<div className="font-bold text-5xl leading-[60px] uppercase text-white">
							Digital Marketing Agency that grow companies
						</div>
						<div className="mt-5 text-gray-200 ">
							We are a full service digital agency that helps companies attract, convert, and retain
							more customers. Our integrated, customized solutions maximize ROI for our clients
						</div>
						<Link href="https://www.primemarketingexperts.com/digital-marketing-services/">
							<div className="py-4 px-8 bg-gradient-main inline-block rounded-lg text-white font-medium mt-10">
								Learn More
							</div>
						</Link>
					</div>
				</div>
			</div>
			<Carousel plugins={[Autoplay({ delay: 5000 })]} className="w-full h-full">
				<CarouselContent>
					<CarouselItem>
						<div className="relative w-full h-[100vh]">
							<Image
								src={backgroundImage}
								alt="Hero Background"
								layout="fill"
								objectFit="cover"
								className="object-center md:object-cover"
								priority
							/>
						</div>
					</CarouselItem>

					<CarouselItem>
						<div className="relative w-full h-[100vh]">
							<Image
								src={backgroundImage1}
								alt="Hero Background"
								layout="fill"
								objectFit="cover"
								className="object-center md:object-cover"
								priority
							/>
						</div>
					</CarouselItem>

					<CarouselItem>
						<div className="relative w-full h-[100vh]">
							<Image
								src={backgroundImage2}
								alt="Hero Background"
								layout="fill"
								objectFit="cover"
								className="object-center md:object-cover"
								priority
							/>
						</div>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</main>
	)
}

export default HomeBanner

// import React from 'react';
// import Image from 'next/image';
// import backgroundImage from '../../../public/images/section05.jpg'; // Replace with your background image

// const HomeBanner = () => {
//     return (
//         <main className="flex flex-col  items-center justify-center w-full h-[100vh]">
//             <div className="relative w-full h-screen">
//                 <Image
//                     src={backgroundImage}
//                     alt="Hero Background"
//                     layout="fill"
//                     objectFit="cover"
//                     className="absolute inset-0  opacity-30"
//                 />
//                 <div className="flex items-center justify-start w-full h-full bg-black bg-opacity-10 z-60">
//                     <div className="text-left text-black gap-8 px-6 py-20 sm:px-10 md:pl-20 md:pr-10 lg:pr-20 max-w-3xl">
//                         <p className="text-xl sm:text-xl md:text-xl font-bold tracking-tighter leading-relaxed mb-6">
//                             At the core of Prime Marketing Experts’ work are three key pillars:
//                             fostering strong partnerships, conducting thorough research, and
//                             delivering tangible outcomes.
//                         </p>
//                         <p className="text-lg sm:text-x md:text-sm leading-relaxed">
//                             Our expertise spans Search Engine Marketing, website optimization, and Social
//                             Media campaigns, empowering businesses since 2017 in Boston.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default HomeBanner;
