'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { Swiper as SwiperInstance } from 'swiper'

// Define types for carousel data
interface CarouselItem {
	buttonText: string
	title: string
	description: string[]
	linkText: string
	linkHref: string
	imageUrl: string
}

const carouselItemsData: CarouselItem[] = [
	{
		buttonText: 'Our philosophy',
		title: 'Our philosophy',
		description: [
			"We envision a world where every brand has the opportunity to thrive. We do not care if you are a small e-commerce store or a medium-sized real estate firm. Our solutions are based on your needs and requirements. Nor on anyone else's. By harnessing the power and range of digital marketing, we aim to bridge the gap between businesses and their customers, fostering lasting relationships built on trust and engagement.",
		],
		linkText: 'Learn More',
		linkHref: '/about',
		imageUrl: '/images/eventmanagement/image.png',
	},
	{
		buttonText: 'Our Values',
		title: 'Our Values',
		description: [
			'Integrity: We believe in transparency and honesty in all our dealings.',
			'Innovation: We continuously seek new ideas and approaches to stay ahead in the ever-evolving marketing landscape.',
			'Collaboration: We work closely with our clients, valuing their input and insights to achieve common goals.',
		],
		linkText: 'Learn More',
		linkHref: '/about',
		imageUrl: '/images/carousel/image02.png',
	},
	{
		buttonText: 'Our Team',
		title: 'Our Team',
		description: [
			"Our team is composed of passionate professionals with diverse backgrounds in marketing, design, and technology. Each member brings unique skills and perspectives, allowing us to craft comprehensive strategies that cater to our clients' specific needs.",
		],
		linkText: 'Learn More',
		linkHref: '/about',
		imageUrl: '/images/section02.jpg',
	},
	{
		buttonText: 'Careers at Prime Marketing Experts',
		title: 'Careers',
		description: [
			"We're always looking for great web developers and marketers. To apply, please send your resume and work samples to hello@primemarketingexperts.com and we'll be in touch.",
		],
		linkText: 'Learn More',
		linkHref: '/contact',
		imageUrl: '/images/section_04.webp',
	},
]

const SwiperNavButtons = () => {
	const swiper = useSwiper()
	return (
		<div className="z-10 flex justify-center items-center w-full mt-10">
			<div className="space-x-4">
				<Button
					variant="outline"
					size="icon"
					className="bg-white hover:bg-gray-100"
					onClick={() => swiper.slidePrev()}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					size="icon"
					className="bg-white hover:bg-gray-100"
					onClick={() => swiper.slideNext()}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>
		</div>
	)
}

export default function Insight() {
	const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
	const [activeIndex, setActiveIndex] = useState<number>(0)

	return (
		<div className="w-full overflow-hidden py-10 bg-gray-50">
			<div className="container">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
					Explore Prime Marketing Experts
				</h2>
				<div className="hidden md:flex items-center justify-center mb-8 flex-wrap">
					{carouselItemsData.map((item, index) => (
						<Button
							key={index}
							variant={activeIndex === index ? 'default' : 'outline'}
							className={`m-2 transition-all duration-300 ${
								activeIndex === index
									? 'bg-gradient-to-r from-orange-400 to-pink-600 text-white'
									: ''
							}`}
							onClick={() => swiper?.slideTo(index)}
						>
							{item.buttonText}
						</Button>
					))}
				</div>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={30}
					slidesPerView={1}
					pagination={{ clickable: true }}
					onSwiper={setSwiper}
					onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
					className="mySwiper relative"
				>
					{carouselItemsData.map((item, index) => (
						<SwiperSlide key={index}>
							<div className=" flex justify-center">
								<Card className="border max-w-5xl rounded-2xl overflow-hidden bg-white">
									<CardContent className="p-0">
										<div className="flex flex-col lg:flex-row ">
											<div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center items-start">
												<h3 className="text-3xl font-bold mb-4 text-gray-900">{item.title}</h3>
												{item.description.map((paragraph, idx) => (
													<p key={idx} className="text-gray-600 mb-4">
														{paragraph}
													</p>
												))}
												<Button
													asChild
													className="mt-4 bg-gradient-to-r from-orange-400 to-pink-600 text-white hover:from-orange-500 hover:to-pink-700"
												>
													<a href={item.linkHref}>{item.linkText}</a>
												</Button>
											</div>
											<div className="lg:w-1/2">
												<Image
													src={item.imageUrl}
													alt={item.title}
													className="w-full object-cover h-full md:h-[450px]"
													width={800}
													height={600}
													unoptimized
												/>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</SwiperSlide>
					))}
					<SwiperNavButtons />
				</Swiper>
			</div>
		</div>
	)
}
