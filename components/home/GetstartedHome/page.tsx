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
import { AnimateRight } from '@/components/common/animate'
import { motion } from 'framer-motion'


interface AccordionItem {
	question: string
	answer: string
}

const accordionData: AccordionItem[] = [
	
	{
		question: 'How can we generate more sales-qualified leads and revenue?',
		answer:'Are you looking to generate more leads and drive more revenue? Execute customizes revenue marketing tactics to generate more high-quality sales lead and boost overall sales? ',
	},
	{
		question: 'Why is my website not attracting enough potential customers?',
		answer:
			'Does your business find getting qualified leads into your pipeline to be a challenge? Boost your leads generation potential with our tailored digital marketing strategies and website development services designed to meet your specific business requirements.',
	},
	{
		
		question: 'Why is our marketing and sales data not interconnected?',
		answer:
			'We use marketing automation and CRM technology to align your sales and marketing efforts and maximize your return on investment for each sales qualified lead (SQL). This will help you organize your data, so salespeople can analyze efforts for better result and reports.  ',
	},
	{
		question: 'Why does our website get very little traffic?',
		answer:
			"When your website has low traffic,your're missing out on potential business opportunities.We provide customizable SEO services, as well as Social Media and Search Engine PPC advertising, to enhance your website visibility on search engines and attract more visitors",
	},
	{
		question: 'Why does managing digital campaigns take so much time?',
		answer:'We help your company use latest advertising strategies and technology to make the most of your advertising budget. Our experts will optimize your advertising budget by targeting ads,creating engaging graphics, and distributing your budget effectively across platforms',
	},
	
]

const InfoSection: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}
	return (
		
	
			
			<div className="mx-auto container overflow-hidden p-2 md:px-4 py-8 mt-5  rounded-lg ">
			
				<h1 className="text-3xl font-bold text-start md:text-center mb-3">FAQ</h1>
				<p className="text-base text-start md:text-center mb-12 text-gray-600">
					Prime Marketing Experts solves your digital marketing and website bottlenecks.
				</p>
				<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
				<div className="flex flex-col lg:flex-row h-full gap-8 border p-2  md:p-10 ">
					<div className="lg:w-1/2">
						<Image
							src={sampleImage}
							alt="FAQ Illustration"
							className="rounded-lg shadow-md pt-6 w-full h-auto object-cover"
						/>
					</div>
					<div className="lg:w-1/2 h-auto flex items-center">
						<Accordion type="single" collapsible className="w-full space-y-4">
							{accordionData.map((item, index) => (
								<AccordionItem
									value={`item-${index}`}
									key={index}
									className=" border border-gray-200 rounded-lg px-2 md:px-5 py-2"
								>
									<AccordionTrigger className='text-start'>{item.question}</AccordionTrigger>
									<AccordionContent>{item.answer}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
				</motion.div>
				
			</div>
			

			)
}

export default InfoSection
