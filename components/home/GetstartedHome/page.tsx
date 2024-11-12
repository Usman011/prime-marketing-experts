'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import sampleImage from '../../../public/images/section_01.jpg' // Replace with your image
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

interface AccordionItem {
	question: string
	answer: string
}

const accordionData: AccordionItem[] = [
	{
		question: 'What is your strategy for starting a new project?',
		answer:
			'We begin with an initial discovery phase to understand your requirements. Then, we develop a tailored approach based on those insights.',
	},
	{
		question: 'How do you measure the success of your campaigns?',
		answer:
			'We measure the success of our campaigns by monitoring various key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and return on investment (ROI).',
	},
	{
		question: 'What is the pricing structure of your services?',
		answer:
			'Our pricing structure is determined based on the services selected and the overall complexity of the project. We will be happy to offer a customized estimate after discussing your requirements.',
	},
	{
		question: 'What makes XSuite different from other agencies?',
		answer:
			'XSuite distinguishes itself from other agencies by prioritizing customization, ensuring data security, delivering top-tier performance, and maintaining transparent communication.',
	},
]

const InfoSection: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}
	return (
		<div className="mt-10">
			<div className="container mx-auto px-4 py-8 mt-5">
				<h1 className="text-4xl font-extrabold text-center mb-3">Frequently Asked Questions</h1>
				<p className="text-base text-center mb-12 text-gray-600">
					Discover how we are revolutionizing the industry with our cutting-edge solutions
				</p>
				<div className="flex flex-col lg:flex-row h-full gap-8 border p-5 md:p-10 border-gray-200 rounded-lg shadow-lg">
					<div className="lg:w-1/2">
						<Image
							src={sampleImage}
							alt="FAQ Illustration"
							className="rounded-lg shadow-md w-full h-auto object-cover"
						/>
					</div>
					<div className="lg:w-1/2 h-auto flex items-center">
						<Accordion type="single" collapsible className="w-full space-y-4">
							{accordionData.map((item, index) => (
								<AccordionItem
									value={`item-${index}`}
									key={index}
									className=" border border-gray-200 rounded-lg px-5 py-2"
								>
									<AccordionTrigger>{item.question}</AccordionTrigger>
									<AccordionContent>{item.answer}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</div>
			)
}

export default InfoSection
