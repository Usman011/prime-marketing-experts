'use client'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import backgroundImage from '../../../public/images/section05.jpg' // Replace with your background image
import backgroundImage1 from '../../../public/images/section02.jpg' // Replace with your background image
import backgroundImage2 from '../../../public/images/section6.jpg' // Replace with your background image
import { motion } from 'framer-motion'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import React from 'react'
import Link from 'next/link'
import { AnimateLeft } from '@/components/common/animate'

const HomeBanner = () => {
	return (
		<main className="flex flex-col items-center justify-center w-full h-[100vh]  relative">
			
			   <div className="flex w-full h-full absolute top-0 left-0 z-50 items-center bg-full-shade">
				<div className="container">
					<div className="max-w-[700px]">
					
						<div className="font-bold text-5xl leading-[60px] uppercase text-white">
						Driving Excellence With Superior Marketing Solutions

						</div>
						
						<div className="mt-5 text-gray-200 ">
						We are a full service relationship-driven marketing firm. We craft connections, to drive results with integrated, customized solutions that maximize ROI for our clients.
                        We are focused on serving Small and Medium size businesses that need quality and affordable marketing solutions to help them grow and compete effectively in today`s complex digital landscape. 
						</div>
						<Link href="/marketing-services/">
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

