'use client'

import { useState } from 'react'
import {
	BarChart,
	BrickWall,
	Dumbbell,
	Eraser,
	Hospital,
	MapPinHouse,
	Pyramid,
	Salad,
	ScanBarcode,
	Target,
	Users,
	Workflow,
} from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'

const gridItemsData = [
	{
		icon: <MapPinHouse />,
		title: 'Real Estate',
	},
	{
		icon: <Workflow />,
		title: 'Automotive',
	},
	{
		icon: <Salad />,
		title: 'Restaurants',
	},
	{
		icon: <ScanBarcode />,
		title: 'Retail',
	},
	{
		icon: <Eraser />,
		title: 'Cleaning Companies',
	},
	{
		icon: <Dumbbell />,
		title: 'Gyms',
	},
	{
		icon: <BrickWall />,
		title: 'Construction',
	},
	{
		icon: <Pyramid />,
		title: 'Tourism',
	},
	{
		icon: <Hospital />,
		title: 'Healthcare',
	},
]

const serveData = {
	title: 'Who We Serve',
	subtitle:
		'We offer superior marketing tailored for small to medium-sized businesses that deserve Fortune 500 quality they can trust.',
	content: {
		title: 'Marketing for the Small to Medium Business Owner',
		text: 'PM is dedicated to helping SMBs achieve their marketing goals with top-notch, industry-specific strategies. We focus on providing exceptional service that fits within their budget.',
		link: {
			href: '/industry-specific',
			text: 'Discover Industry-Specific Solutions',
		},
	},
}

const features = [
	{
		icon: Users,
		title: 'Tailored Strategies',
		description: 'Customized marketing plans for your unique business needs',
	},
	{
		icon: BarChart,
		title: 'Data-Driven Approach',
		description: 'Leverage analytics to maximize your marketing ROI',
	},
	{
		icon: Target,
		title: 'Industry Expertise',
		description: 'Specialized knowledge across various business sectors',
	},
]

export const WhoWeServeSection = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div>
			<div className="bg-blue-50 w-auto md:w-auto px:auto md:px-8">
				<section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-center mb-12"
						>
							<h2 className="text-4xl  font-bold ">{serveData.title}</h2>
							<p className="text-base text-gray-600 max-w-3xl mx-auto mt-3">{serveData.subtitle}</p>
						</motion.div>

						<div className="grid md:grid-cols-2 gap-12 items-center">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<h3 className="text-3xl font-bold mb-6 text-gray-800">{serveData.content.title}</h3>
								<p className="text-lg text-gray-600 mb-8">{serveData.content.text}</p>
								<div>
									<Button className="bg-[#ff7e00] hover:bg-[#ff962c]">
										<Link href={serveData.content.link.href} className="flex gap-3 items-center">
											{serveData.content.link.text}
											<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
										</Link>
									</Button>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="grid gap-6"
							>
								{features.map((feature, index) => (
									<Card key={index} className="overflow-hidden">
										<CardContent className="p-6">
											<motion.div
												whileHover={{ scale: 1.05 }}
												transition={{ type: 'spring', stiffness: 300 }}
												className="flex items-start"
											>
												<div className="flex-shrink-0 mr-4">
													<div className="p-3 bg-gradient-main rounded-full">
														<feature.icon className="h-6 w-6 text-white" />
													</div>
												</div>
												<div>
													<h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
													<p className="text-gray-600">{feature.description}</p>
												</div>
											</motion.div>
										</CardContent>
									</Card>
								))}
							</motion.div>
						</div>
					</div>
				</section>
			</div>

			<div className=" py-20">
				<h2 className="text-4xl font-extrabold text-center text-gray-900">Industries We Served</h2>
				<p className="text-base text-gray-600 max-w-3xl mx-auto mt-3 pb-10 text-center">
					Empowering diverse industries with customized, results-driven marketing solutions tailored
					to their unique needs and goals.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container">
					{gridItemsData.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card
								className="overflow-hidden cursor-pointer transition-all duration-300"
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
							>
								<CardContent className="p-6">
									<div className="flex flex-col items-center text-center">
										<div className="mb-4 p-4 rounded-full bg-gradient-main">
											<motion.div
												animate={{
													scale: hoveredIndex === index ? 1.2 : 1,
													rotate: hoveredIndex === index ? 360 : 0,
												}}
												transition={{ duration: 0.3 }}
												className="text-white"
											>
												{item.icon}
												{/* {item.icon && <item.icon size={32} className="text-blue-600" />} */}
											</motion.div>
										</div>
										<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
										<p className="text-gray-600 text-sm">
											Specialized solutions for {item.title.toLowerCase()} industry
										</p>
									</div>
								</CardContent>
								<div
									className="h-1 w-full bg-gradient-to-r from-yellow-500 to-orange-500 transform origin-left transition-transform duration-300 ease-in-out"
									style={{
										transform: `scaleX(${hoveredIndex === index ? 1 : 0})`,
									}}
								/>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}
