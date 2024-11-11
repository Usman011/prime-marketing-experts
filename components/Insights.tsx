'use client'

import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Image1 from '../public/images/carousel/image02.png'
import Image2 from '../public/images/eventmangement/image.png'
import Image3 from '../public/images/section_04.webp'

const carouselItemsData = [
	{
		buttonText: 'Our Culture',
		title: 'Life at Prime Marketing Experts',
		description: [
			'Our team of over 500 experts is one of the largest performance digital marketing agencies in the world. We have partnered with the best including Google, Facebook, Bing, and others, to deliver impactful digital marketing services to our clients.',
			'You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.',
		],
		linkText: 'Discover Industry-Specific Solutions',
		linkHref: '/industry-specific',
		imageUrl: Image2,
	},
	{
		buttonText: 'Our Awards',
		title: 'Our Awards',
		description: [
			'In addition to our thousands of testimonials and 775+ third-party reviews, WebFX has earned national recognition from respected organizations throughout the design, marketing, and business sectors.',
			'You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.',
		],
		linkText: 'Our Awards',
		linkHref: '/industry-specific',
		imageUrl: Image1,
	},
	{
		buttonText: 'Community Impact',
		title: 'Paying it Forward',
		description: [
			'Through Prime Marketing Experts Builds program, we have launched a new project each year to help give back to others around the globe. We have built schools in Ghana and Guatemala and water wells in Kenya. Our goal is to directly improve the lives of 5,000 people across the world by 2024.',
			'You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.',
		],
		linkText: 'Learn More About FXBuilds',
		linkHref: '/industry-specific',
		imageUrl: Image2,
	},
	{
		buttonText: 'Careers at Prime Marketing Experts',
		title: 'Careers',
		description: [
			'Our digital marketing agency is made up of elite marketers, designers, developers, and data analysts. For us, it is not just a job — it is a driving passion. And that passion has led to some of the best work on the web.',
			'You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.',
		],
		linkText: 'View Open Positions',
		linkHref: '/industry-specific',
		imageUrl: Image3,
	},
]

export default function InteractiveCarousel() {
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
		<div className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
					Explore Prime Marketing Experts
				</h2>
				<div className="flex items-center justify-center mb-8 flex-wrap">
					{carouselItemsData.map((item, index) => (
						<Button
							key={index}
							variant={selectedIndex === index ? 'default' : 'outline'}
							className={`m-2 transition-all duration-300 ${selectedIndex === index ? 'bg-[#ff7e00] hover:bg-[#ff962c]' : ''}`}
							onClick={() => scrollTo(index)}
						>
							{item.buttonText}
						</Button>
					))}
				</div>
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{carouselItemsData.map((item, index) => (
							<div className="flex-[0_0_100%] min-w-0 px-5" key={index}>
								<Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden">
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
													className={`mt-4 ${selectedIndex === index ? 'bg-[#ff7e00] hover:bg-[#ff962c]' : ''}`}
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
