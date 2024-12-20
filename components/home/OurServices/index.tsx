'use client'

import React, { useState } from 'react'
import { servicesData } from '@/constants'
import Link from 'next/link'

type ServiceCardProps = {
	icon: React.ReactNode
	title: string
	description: string
	link: string
}

export default function OurServices() {
	const [showMore, setShowMore] = useState(false)
	const initialCardsToShow = 6
	const displayedServices = showMore ? servicesData : servicesData.slice(0, initialCardsToShow)

	return (
		<>
			<section className="py-auto w-full overflow-hidden  py-10 md:py-20  text-gray-900">
				<div className=" container">
					<h2 className="text-3xl md:text-4xl font-bold text-start md:text-center mb-2">
						Our Services
					</h2>
					<p className="text-base text-gray-500 max-w-96 md:max-w-4xl w-[100%] text-center mx-auto mb-8 mt-5">
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

					{servicesData.length > initialCardsToShow && (
						<div className="flex justify-center mt-14">
							<button
								onClick={() => setShowMore((prev) => !prev)}
								className="px-6 py-2 bg-gradient-main text-white font-medium rounded-md hover:bg-orange-700 transition duration-300"
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
		<div className="bg-white cursor-pointer  hover:text-black p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transform transition duration-500 hover:scale-105 ">
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
