'use client'
import React, { useState } from 'react'
import { FaLaptop, FaBullhorn, FaChartLine, FaCogs } from 'react-icons/fa'
import { GiAutomaticSas } from 'react-icons/gi'
import { MdBarChart } from 'react-icons/md'
import Link from 'next/link'

type ServiceCardProps = {
	icon: React.ReactNode
	title: string
	description: string
	link: string
}

export default function HomeServicesPage() {
	const [showMore, setShowMore] = useState(false)

	const services = [
		{
			icon: <FaLaptop className="text-orange-600 text-4xl" />,
			title: 'Website Development',
			description:
				'Our full-service website development services fit the unique needs of each business and is planned to maximize your results of other marketing initiatives.',
			link: '/Technology/web-development',
		},
		{
			icon: <GiAutomaticSas className="text-orange-600 text-4xl" />,
			title: 'Marketing Automation',
			description:
				'We increase your sales productivity by using an integrated technology platform with synergistic marketing initiatives to spark your sales growth.',
			link: '/marketing/marketing-automation',
		},
		{
			icon: <FaCogs className="text-orange-600 text-4xl" />,
			title: 'Search Engine Advertising',
			description:
				'We deploy ROI-maximizing processes to strategically implement and manage your Search Engine Advertising Campaigns.',
			link: '/marketing/search-engine-advertising',
		},
		{
			icon: <FaChartLine className="text-orange-600 text-4xl" />,
			title: 'SEO Services',
			description:
				'We deploy an integrated, comprehensive strategy to help you raise your search engine rankings for your targeted keywords.',
			link: '/marketing/vedio-seo',
		},
		{
			icon: <FaBullhorn className="text-orange-600 text-4xl" />,
			title: 'Social Media Marketing',
			description:
				'We provide social media posting and sponsored ad management services. Our AI-assisted system ensures that we post the right content at the right time!',
			link: 'marketing/social-media-marketing',
		},
		{
			icon: <MdBarChart className="text-orange-600 text-4xl" />,
			title: 'Text Message Marketing',
			description:
				'Our full-service text message marketing solution that efficiently reaches your customers, as an average of 98% of them are read.',
			link: '/marketing/text-message-marketing',
		},
		{
			icon: <FaLaptop className="text-orange-600 text-4xl" />,
			title: 'Content Marketing',
			description: 'Some description here...',
			link: '/marketing/content-marketing',
		},
		{
			icon: <GiAutomaticSas className="text-orange-600 text-4xl" />,
			title: 'Branding',
			description: 'Some description here...',
			link: '/marketing/branding',
		},
		{
			icon: <MdBarChart className="text-orange-600 text-4xl" />,
			title: 'Text Message Marketing',
			description: 'Some description here...',
			link: '/marketing/text-message-marketing',
		},
		{
			icon: <FaChartLine className="text-orange-600 text-4xl" />,
			title: 'Marketing Plans',
			description: 'Some description here...',
			link: '/marketing/marketing-plans',
		},
		{
			icon: <FaBullhorn className="text-orange-600 text-4xl" />,
			title: 'Inbound Marketing',
			description: 'Some description here...',
			link: '/marketing/inbound-marketing',
		},
	]

	// Control the number of cards to display
	const initialCardsToShow = 6
	const displayedServices = showMore ? services : services.slice(0, initialCardsToShow)

	return (
		<>
			<section className="py-auto md:py-16 px-6  text-gray-900">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-2">Our Services</h2>
					<p className="text-base text-gray-500 text-center max-w-96 md:max-w-4xl w-[100%] mx-auto mb-8">
						Prime Marketing Experts is a digital marketing and website services company focused on
						helping small and medium-sized businesses in the Boston area prosper. Since 2017, we’ve
						served hundreds of companies and thousands of clients, offering a wide range of
						marketing, branding, and advertising solutions.
					</p>

					<div className=" pt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
						{displayedServices.map((service, index) => (
							<ServiceCard
								key={index}
								icon={service.icon}
								title={service.title}
								description={service.description}
								link={service.link}
							/>
						))}
					</div>

					{services.length > initialCardsToShow && (
						<div className="flex justify-center mt-14">
							<button
								onClick={() => setShowMore((prev) => !prev)}
								className="px-6 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition duration-300"
							>
								{showMore ? 'Show Less' : 'Show More'}
							</button>
						</div>
					)}
				</div>
			</section>
		</>
	)
}

function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
	return (
		<div className="bg-white hover:bg-orange-100  hover:text-black p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transform transition duration-500 hover:scale-105 ">
			<div className="flex items-center justify-center mb-4">{icon}</div>
			<h4 className="text-xl font-semibold mb-2 text-center">{title}</h4>
			<p className="text-gray-700 text-sm text-center mb-4">{description}</p>
			<div className="flex justify-center">
				<Link href={link}>
					<button className="relative inline-flex items-center justify-center px-4 py-2 text-orange-600 font-medium group">
						<span className="absolute inset-0 w-full h-full border-b-2 border-orange-600 transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
						<span className="relative">Read More</span>
					</button>
				</Link>
			</div>
		</div>
	)
}
