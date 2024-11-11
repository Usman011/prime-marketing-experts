'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, User, Calendar } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const blog_data = [
	{
		id: 1,
		title: 'A detailed step by step guide to manage your lifestyle',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..',
		image: '/placeholder.svg?height=400&width=600&text=Lifestyle',
		category: 'Lifestyle',
		author: 'Alex Bennett',
	},
]

export default function BlogList() {
	const [hoveredId, setHoveredId] = useState<number | null>(null)

	return (
		<div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-4xl font-extrabold text-center text-gray-900 pb-10"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Trending Articles
				</motion.h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blog_data.map((post) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							whileHover={{ y: -5 }}
							onHoverStart={() => setHoveredId(post.id)}
							onHoverEnd={() => setHoveredId(null)}
							className=" cursor-pointer"
						>
							<Card className="overflow-hidden h-full flex flex-col bg-white/80 backdrop-blur-sm border-none shadow-lg">
								<div className="relative">
									<img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
									<Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
										{post.category}
									</Badge>
								</div>
								<CardContent className="flex-grow p-6">
									<h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
									<p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
								</CardContent>
								<CardFooter className="border-t p-6 bg-gray-50">
									<div className="flex items-center justify-between w-full">
										<div className="flex items-center space-x-2">
											<Avatar>
												<AvatarImage src="/placeholder.svg" alt={post.author} />
												<AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
											</Avatar>
											<span className="text-sm font-medium">{post.author}</span>
										</div>
										<AnimatePresence>
											{hoveredId === post.id && (
												<motion.div
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													exit={{ opacity: 0, x: -20 }}
													transition={{ duration: 0.2 }}
												>
													<Button variant="ghost" size="sm" className="text-primary">
														Read More
														<ChevronRight className="ml-2 h-4 w-4" />
													</Button>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>
				<div className="flex justify-center mt-10">
					<Button className="bg-[#ff7e00] hover:bg-[#ff962c]">Read More Blogs</Button>
				</div>
			</div>
		</div>
	)
}
