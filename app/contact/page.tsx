// import Link from 'next/link'
// import React from 'react'
// import { FaLocationDot } from 'react-icons/fa6'
// import { MdEmail } from 'react-icons/md'
// import { FaPhoneAlt } from 'react-icons/fa'

// const ContactPage = () => {
// 	return (
// 		<>
// 			<section className=" container">
// 				{/* Contact Us Header */}
// 				<div className="flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20  lg:ml-auto w-full h-52 flex-col  text-center">
// 					<h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
// 						Contact Us
// 					</h1>
// 					<div className="flex gap-6 justify-center mt-4">
// 						<Link href="/">
// 							<p className="text-gray-500 hover:text-gray-800">Home</p>
// 						</Link>
// 						<ul className="list-disc">
// 							<li>Contact Us</li>
// 						</ul>
// 					</div>
// 				</div>

// 				{/* Contact Info and Form Section */}
// 				<div className="flex flex-col lg:flex-row justify-center  items-start  lg:items-center mt-10 mx-6 lg:mx-10 gap-12">
// 					{/* Contact Info */}
// 					<div className="lg:w-1/2 p-4 ">
// 						<h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
// 						<p className="mb-8 text-lg">
// 							Prime Marketing Experts is looking forward to sparking growth in your business!
// 						</p>

// 						<div className="flex flex-col gap-8">
// 							{/* Location */}
// 							<div className="flex gap-6 items-center">
// 								<FaLocationDot className="w-6 h-6 text-orange-500" />
// 								<div className="flex flex-col">
// 									<h3 className="text-xl font-semibold">Visit Us:</h3>
// 									<p>2 Burlington Woods #100, Burlington, MA, 01803</p>
// 								</div>
// 							</div>

// 							{/* Email */}
// 							<div className="flex gap-6 items-center">
// 								<MdEmail className="w-6 h-6 text-blue-600" />
// 								<div className="flex flex-col">
// 									<h3 className="text-xl font-semibold">Mail Us:</h3>
// 									<p>hello@primemarketingexperts.com</p>
// 								</div>
// 							</div>

// 							{/* Phone */}
// 							<div className="flex gap-6 items-center">
// 								<FaPhoneAlt className="w-6 h-6 text-green-400" />
// 								<div className="flex flex-col">
// 									<h3 className="text-xl font-semibold">Phone Us:</h3>
// 									<p>(617) 651-1457</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Contact Form */}
// 					<div className="lg:w-1/2 p-4">
// 						<h1 className="text-3xl font-bold mb-6">Contact Us Now</h1>
// 						<form className="space-y-4 p-6 bg-white rounded-lg shadow-lg">
// 							{/* First Name */}
// 							<div className="flex flex-col">
// 								<label className="text-gray-700 mb-1">First Name*</label>
// 								<input
// 									type="text"
// 									className="block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4"
// 								/>
// 							</div>

// 							{/* Last Name */}
// 							<div className="flex flex-col">
// 								<label className="text-gray-700 mb-1">Last Name*</label>
// 								<input
// 									type="text"
// 									className="block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4"
// 								/>
// 							</div>

// 							{/* Email */}
// 							<div className="flex flex-col">
// 								<label className="text-gray-700 mb-1">Email*</label>
// 								<input
// 									type="email"
// 									className="block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4"
// 								/>
// 							</div>

// 							{/* Phone Number */}
// 							<div className="flex flex-col">
// 								<label className="text-gray-700 mb-1">Number*</label>
// 								<input
// 									type="text"
// 									className="block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4"
// 								/>
// 							</div>

// 							{/* Company Name */}
// 							<div className="flex flex-col">
// 								<label className="text-gray-700 mb-1">Company Name*</label>
// 								<input
// 									type="text"
// 									className="block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4"
// 								/>
// 							</div>

// 							{/* Message */}
// 							<div className="flex flex-col">
// 								<label className="text-gray-700 mb-1">Message</label>
// 								<textarea className="block w-full h-32 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4"></textarea>
// 							</div>

// 							{/* Submit Button */}
// 							<button className="bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-400 hover:to-orange-600 w-60 h-12 md:h-14 flex justify-center items-center text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out">
// 								Submit
// 							</button>
// 						</form>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	)
// }

// export default ContactPage

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { InputField } from '@/components/common/InputFeild'
import { useForm } from 'react-hook-form'
import { Form } from '../../components/ui/form'
import { INPUT_TYPES } from '@/constants'

export default function Contact() {
	const [isHovered, setIsHovered] = useState(false)

	const [loading, setLoading] = useState(false)

	const method = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			company: '',
			message: '',
		},
	})
	const { handleSubmit, reset } = method

	const onSubmit = async (data: {
		firstName: string
		lastName: string
		email: string
		phoneNumber: string
		company: string
		message: string
	}) => {
		setLoading(true)
		try {
			reset()
		} catch (error: any) {
			console.log('message', error.message)
		}
		setLoading(false)
	}

	return (
		<section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-4xl  font-bold text-center pb-2"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Get in Touch
				</motion.h2>
				<motion.p
					className="text-base text-center text-gray-600 mb-12"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Prime Marketing Experts is looking forward to sparking growth in your business!
				</motion.p>
				<div className="grid md:grid-cols-2 gap-8 items-start">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="h-full flex items-center"
					>
						<Card className=" bg-transparent  border-none">
							<CardContent className="p-6">
								<h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
								<ul className="space-y-4">
									<motion.li className="flex items-start" whileHover={{ scale: 1.05 }}>
										<MapPin className="w-6 h-6 text-[--main] mr-4 mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold text-gray-700">Visit Us:</p>
											<p className="text-[--main]">
												2 Burlington Woods #100, Burlington, MA, 01803
											</p>
										</div>
									</motion.li>
									<motion.li className="flex items-start" whileHover={{ scale: 1.05 }}>
										<Mail className="w-6 h-6 text-[--main] mr-4 mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold text-gray-700">Mail Us:</p>
											<a
												href="mailto:hello@primemarketingexperts.com"
												className=" text-[--main] hover:underline"
											>
												hello@primemarketingexperts.com
											</a>
										</div>
									</motion.li>
									<motion.li className="flex items-start" whileHover={{ scale: 1.05 }}>
										<Phone className="w-6 h-6 text-[--main] mr-4 mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold text-gray-700">Phone Us:</p>
											<a href="tel:+16176511457" className=" text-[--main] hover:underline">
												(617) 651-1457
											</a>
										</div>
									</motion.li>
								</ul>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<Card className="bg-white/80 backdrop-blur-sm shadow-xl border-none">
							<CardContent className="p-6">
								<div className="px-5 pt-5">
									<h3 className="text-2xl font-bold mb-2 text-gray-800">Send Us a Message</h3>
									<div className="text-gray-500 text-sm">
										Fill in the details for your new blog post. Click submit when you are done.
									</div>
									<div className="mt-10">
										<Form {...method}>
											<form onSubmit={handleSubmit(onSubmit)}>
												<div className="space-y-4">
													<InputField label="" name="firstName" placeholder="Enter First Name" />
													<InputField label="" name="lastName" placeholder="Enter Last Name" />
													<InputField
														label=""
														name="email"
														type={INPUT_TYPES.EMAIL}
														placeholder="Enter your Email"
													/>
													<InputField
														label=""
														name="phoneNumber"
														placeholder="Enter your Phone number"
													/>
													<InputField
														label=""
														name="company"
														placeholder="Enter your Company name"
													/>

													<InputField
														label=""
														name="message"
														placeholder="Enter your Message here"
														multiline
													/>
												</div>
												<div className="flex justify-end">
													<Button className="mt-5" variant="default" type="submit">
														Submit
													</Button>
												</div>
											</form>
										</Form>
									</div>
								</div>
								{/* <form className="space-y-4">
									<div>
										<Label htmlFor="name">Name</Label>
										<Input id="name" placeholder="Your Name" />
									</div>
									<div>
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" placeholder="your@email.com" />
									</div>
									<div>
										<Label htmlFor="message">Message</Label>
										<Textarea id="message" placeholder="How can we help you?" rows={4} />
									</div>
									<Button
										type="submit"
										className="w-full"
										onMouseEnter={() => setIsHovered(true)}
										onMouseLeave={() => setIsHovered(false)}
									>
										Send Message
										<motion.div
											className="inline-block ml-2"
											animate={{ x: isHovered ? 5 : 0 }}
											transition={{ type: 'spring', stiffness: 300, damping: 10 }}
										>
											<Send className="h-4 w-4" />
										</motion.div>
									</Button>
								</form> */}
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
