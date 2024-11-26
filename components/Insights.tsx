'use client'

import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Image1 from '../public/images/carousel/image02.png'
import Image2 from '../public/images/eventmangement/image.png'
import Image4 from '../public/images/section02.jpg'
import Image3 from '../public/images/section_04.webp'

const carouselItemsData = [
	{
		buttonText: 'Our Philosophy',
		title: 'Our Philosophy',
		description: [
			"We envision a world where every brand has the opportunity to thrive. We do not care if you are a small ecommerce store or a medium-sized real estate firm. Our solutions are based on your needs and requirements. Nor on anyone else's. By harnessing the power and range of digital marketing, we aim to bridge the gap between businesses and their customers, fostering lasting relationships built on trust and engagement.",
		],
		linkText: 'Learn More',
		linkHref: '/about',
		imageUrl: Image2,
	},
	{
		buttonText: 'Our Values',
		title: 'Our Values',
		description: [
			'Integrity: We believe in transparency and honesty in all our dealings.',
			'Innovation: We continuously seek new ideas and approaches to stay ahead in the ever-evolving marketing landscape.',
      'Collaboration: We work closely with our clients, valuing their input and insights to achieve common goals.'
		],
		linkText: 'Learn More ',
		linkHref: '/about',
		imageUrl: Image1,
	},
	{
		buttonText: 'Our Team ',
		title: 'Our Team ',
		description: [
			'Our team is composed of passionate professionals with diverse backgrounds in marketing, design, and technology. Each member brings unique skills and perspectives, allowing us to craft comprehensive strategies that cater to our clients’ specific needs.',
		],
		linkText: 'Learn More ',
		linkHref: '/about',
		imageUrl: Image4,
	},
	{
		buttonText: 'Careers at Prime Marketing Experts',
		title: 'Careers',
		description: [
			'Our digital marketing agency is made up of elite marketers, designers, developers, and data analysts. For us, it is not just a job — it is a driving passion. And that passion has led to some of the best work on the web.',
		],
		linkText: 'Learn More',
		linkHref: '/about',
		imageUrl: Image3,
	},
]

export default function Insight() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const [selectedIndex, setSelectedIndex] = useState(0)

	const scrollTo = useCallback(
		(index: number) => {
			if (emblaApi) emblaApi.scrollTo(index)
		},
		[emblaApi],
	)

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi, setSelectedIndex])

	useEffect(() => {
		if (!emblaApi) return
		const handleSelect = () => onSelect()
		emblaApi.on('select', handleSelect)
		return () => {
			emblaApi.off('select', handleSelect)
		}
	}, [emblaApi, onSelect])

	return (
		<div className="container py-12 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className=" text-3xl md:text-3xl font-extrabold text-center mb-12 text-gray-900">
					Explore Prime Marketing Experts
				</h2>
				<div className=" hidden md:flex items-center justify-center mb-8 flex-wrap">
					{carouselItemsData.map((item, index) => (
						<Button
							key={index}
							variant={selectedIndex === index ? 'default' : 'outline'}
							className={`m-2 transition-all duration-300 ${selectedIndex === index ? 'bg-gradient-main hover:bg-[#ff962c]' : ''}`}
							onClick={() => scrollTo(index)}
						>
							{item.buttonText}
						</Button>
					))}
				</div>
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{carouselItemsData.map((item, index) => (
							<div className="flex-[0_0_100%] min-w-0 md:px-5" key={index}>
								<Card className="border-none shadow-lg p-4 bg-white rounded-2xl overflow-hidden">
									<CardContent className="p-0">
										<div className="flex flex-col lg:flex-row">
											<div className="lg:w-1/2 p-8 lg:p-12">
												<h3 className="text-3xl font-bold mb-4 text-gray-900">{item.title}</h3>
												{item.description.map((paragraph, idx) => (
													<p key={idx} className="text-gray-600 mb-4">
														{paragraph}
													</p>
												))}
												<Button
													asChild
													className={`mt-4  justify-center items-center ${selectedIndex === index ? 'bg-gradient-main hover:bg-[#ff962c]' : ''}`}
												>
													<a href={item.linkHref}>{item.linkText}</a>
												</Button>
											</div>
											<div className="lg:w-1/2 xl:h-96">
												<Image
													src={item.imageUrl}
													alt={item.title}
													className="w-full h-full object-cover"
													width={800}
													height={800}
												/>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-center mt-8 gap-4">
					<Button variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()}>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()}>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	)
}
