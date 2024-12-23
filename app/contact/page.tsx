'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Send } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { InputField } from '@/components/common/InputFeild'
import { useForm } from 'react-hook-form'
import { Form } from '../../components/ui/form'
import { INPUT_TYPES } from '@/constants'

export default function Contact() {
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
		<section className="pt-10 md:py-20 w-full bg-gradient-to-br from-blue-50 to-purple-50">
			<div className="container max-md:p-0">
				<div className="max-md:px-7">
					<h2 className="md:text-4xl text-3xl font-bold mb-2 text-center">Get in Touch</h2>
					<p className="text-center text-gray-600 mb-6 md:mb-12 ">
						Prime Marketing Experts is looking forward to sparking growth in your business!
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-8 items-start">
					<div className="max-md:px-8 h-full flex items-center">
						<div className="">
							<div className="md:p-6">
								<h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
								<ul className="space-y-4">
									<li className="flex items-start">
										<MapPin className="w-6 h-6 text-[--main] mr-4 mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold text-gray-700">Visit Us:</p>
											<p className="text-[--main]">
												74 Northeastern Blvd Bldg 12a Ste 101 Nashua, NH 03062
											</p>
										</div>
									</li>
									<li className="flex items-start">
										<Mail className="w-6 h-6 text-[--main] mr-4 mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold text-gray-700">Mail Us:</p>
											<a
												href="mailto:hello@primemarketingexperts.com"
												className="text-[--main] hover:underline"
											>
												hello@primemarketingexperts.com
											</a>
										</div>
									</li>
									<li className="flex items-start">
										<Phone className="w-6 h-6 text-[--main] mr-4 mt-1 flex-shrink-0" />
										<div>
											<p className="font-semibold text-gray-700">Phone Us:</p>
											<a href="tel:+16176511457" className="text-[--main] hover:underline">
												(617) 651-1457
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<Card className="bg-white backdrop-blur-sm md:shadow-xl border-none max-md:rounded-none">
						<CardContent className="max-md:rounded-none pb-10 max-md:px-8">
							<div className="pt-10 md:px-5">
								<h3 className="text-2xl font-bold text-gray-800">Send us a message</h3>
								<div className="text-gray-500 text-sm">
									Fill in the details for your new blog post. Click submit when you are done.
								</div>
								<div className="mt-5 md:mt-10">
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
												<InputField label="" name="company" placeholder="Enter your Company name" />
												<InputField
													label=""
													name="message"
													placeholder="Enter your Message here"
													multiline
												/>
											</div>
											<div className="flex justify-end">
												<Button
													className="mt-5 bg-blue-900 text-white hover:bg-orange-400"
													variant="default"
													type="submit"
												>
													Submit
												</Button>
											</div>
										</form>
									</Form>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
