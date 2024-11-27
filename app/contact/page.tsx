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
		<section className="container py-16 bg-gradient-to-br from-blue-50 to-purple-50">
			<div className="max-w-7xl mx-auto px-auto sm:px-6 lg:px-8">
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
								<div className="md:px-5 pt-5">
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
