'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, User, Calendar, Loader2 } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import firebaseService from '@/utils/firebase.utils'
import { DocumentData } from 'firebase/firestore'
import Link from 'next/link'

export default function BlogList() {
	const [hoveredId, setHoveredId] = useState<number | null>(null)
	const [blogs, setBlogs] = useState<DocumentData[]>([])
	const [loading, setLoading] = useState(true)

	console.log('blogs', blogs)

	useEffect(() => {
		setLoading(true)
		const getBlogs = async () => {
			const allBlogs = await firebaseService.getDocuments('blogs')
			setBlogs(allBlogs)
			setLoading(false)
		}
		getBlogs()
	}, [])

	return (
		<div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2 className="text-4xl font-extrabold text-center text-gray-900 pb-10 md:pb-14">
					Trending Articles
				</motion.h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{loading ? (
						<div className="h-60 w-full flex justify-center items-center md:col-span-2 lg:col-span-3 ">
							<Loader2 className="w-10 h-10 ml-2 animate-spin" />
						</div>
					) : (
						blogs.slice(0, 3).map((blog) => (
							<motion.div
								key={blog.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								whileHover={{ y: -5 }}
								onHoverStart={() => setHoveredId(blog.documentId)}
								onHoverEnd={() => setHoveredId(null)}
								className=" cursor-pointer"
							>
								<Card className="overflow-hidden h-full flex flex-col bg-white/80 backdrop-blur-sm border-none shadow-lg">
									<div className="relative">
										{blog.imageUrl ? (
											<img
												src={blog.imageUrl}
												alt={blog.title}
												className="w-full h-60 object-cover"
											/>
										) : (
											<div className="bg-gray-300 h-60 w-full flex justify-center items-center">
												<div className="text-white text-4xl font-bold">400 x 400</div>
											</div>
										)}
										<Badge className="absolute top-4 left-4 py-2 bg-primary text-primary-foreground">
											{blog.category || 'Category'}
										</Badge>
									</div>
									<CardContent className="flex-grow p-6">
										<h3 className="text-xl font-bold mb-2 line-clamp-2">{blog.title || ''}</h3>
										<p className="text-muted-foreground mb-4 line-clamp-3">
											{blog.description || ''}
										</p>
									</CardContent>
									<CardFooter className="border-t p-6 bg-gray-50">
										<div className="flex items-center justify-between w-full">
											<div className="flex items-center space-x-2">
												<Avatar>
													<AvatarImage src="/placeholder.svg" alt={blog.authorName} />
													<AvatarFallback>{blog.authorName.charAt(0)}</AvatarFallback>
												</Avatar>
												<span className="text-sm font-medium">{blog.authorName || ''}</span>
											</div>
											<AnimatePresence>
												{hoveredId === blog.documentId && (
													<motion.div
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														exit={{ opacity: 0, x: -20 }}
														transition={{ duration: 0.2 }}
													>
														<Link href={`/blog/${blog.documentId}`}>
															<Button variant="ghost" size="sm" className="text-primary">
																Read More
																<ChevronRight className="ml-2 h-4 w-4" />
															</Button>
														</Link>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									</CardFooter>
								</Card>
							</motion.div>
						))
					)}
				</div>
				<div className="flex justify-center mt-10 md:mt-14 ">
					<Button className="bg-[#ff7e00] hover:bg-[#ff962c]">Read More Blogs</Button>
				</div>
			</div>
		</div>
	)
}
