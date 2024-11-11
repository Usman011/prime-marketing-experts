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
		//   <section className="flex flex-col md:flex-row items-center mt-auto md:mt-20 gap-12 w-full max-w-7xl mx-auto p-8 md:p-12 bg-gray-50 shadow-lg rounded-lg">
		//   {/* Left Side: Image */}
		//   <div className="w-full md:w-11/12 flex justify-center">
		//     <Image
		//       src={sampleImage}
		//       alt="Sample Image"
		//       width={500}
		//       height={700}
		//       className="rounded-lg object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
		//     />
		//   </div>

		//   {/* Right Side: Text Content */}
		//   <div className="w-full  flex flex-col space-y-8">
		//     <div className="text-center md:text-left">
		//       <h2 className="text-3xl font-extrabold text-gray-900 transition-transform duration-500 transform hover:scale-105">
		//         Frequently Asked Questions
		//       </h2>
		//     </div>

		//     <div className="accordion space-y-4">
		//       {accordionData.map((item, index) => (
		//         <div
		//           className="accordion-item border  rounded-lg shadow-sm transition-transform duration-300 hover:shadow-md hover:scale-105"
		//           key={index}
		//         >
		//           <h3>
		//             <button
		//               type="button"
		//               className=" w-full text-lg   rounded-b-2xl font-semibold py-5 px-auto md:px-6 flex items-center justify-between text-gray-800 bg-gray-50 hover:bg-gray-50 focus:outline-none  focus:bg-orange-400 transition-all duration-300"
		//               aria-expanded={openIndex === index}
		//               onClick={() => toggleAccordion(index)}
		//               aria-controls={`accordion-content-${index}`}
		//             >
		//               <span>{item.question}</span>
		//               {openIndex === index ? (
		//                 <MdExpandLess className="text-2xl transition-transform duration-300 transform rotate-180" />
		//               ) : (
		//                 <MdExpandMore className="text-2xl transition-transform duration-300" />
		//               )}
		//             </button>
		//           </h3>
		//           <div
		//             id={`accordion-content-${index}`}
		//             className={`px-2 md:px-6  md:pb-auto  text-gray-700 bg-white transition-all duration-500 ease-in-out ${
		//               openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
		//             } overflow-hidden`}
		//             role="region"
		//             aria-labelledby={`accordion-button-${index}`}
		//           >
		//             <p className="text-base leading-relaxed">
		//               {item.answer}
		//             </p>
		//           </div>
		//         </div>
		//       ))}
		//     </div>
		//   </div>
		// </section>
	)
}

export default InfoSection
