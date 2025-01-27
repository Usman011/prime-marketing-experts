'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import firebaseService from '@/utils/firebase.utils'
import { DocumentData } from 'firebase/firestore'
import { ArrowRightIcon, ChevronRight, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function BlogList({ showAll }: { showAll?: boolean }) {
	const [blogs, setBlogs] = useState<DocumentData[]>([])
	const [loading, setLoading] = useState(true)
	const allBlogs = showAll ? blogs : blogs.slice(0, 3)

	useEffect(() => {
		setLoading(true)
		const getBlogs = async () => {
			const data = await firebaseService.getDocuments('blogs')
			setBlogs(data)
			setLoading(false)
		}
		getBlogs()
	}, [])

	return (
		<>
			<div className="pt-4">
				<div className="container">
					<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
						{showAll ? '' : 'Trending Articles'}
					</h2>
					{loading ? (
						<div className="flex justify-center items-center h-60">
							<Loader2 className="w-10 h-10 animate-spin text-primary" />
						</div>
					) : (
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{allBlogs.map((blog, index) => (
								<Link href={`/blog/${blog.slug}`} key={blog.slug || index}>
									<Card className="overflow-hidden h-full flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-[1.03]">
										<div className="relative aspect-video">
											{blog.imageUrl ? (
												<Image src={blog.imageUrl} alt={blog.title} fill className="object-cover" />
											) : (
												<div className="absolute inset-0 bg-gray-200 flex justify-center items-center">
													<span className="text-gray-400 text-lg font-medium">No image</span>
												</div>
											)}
										</div>
										<CardContent className="flex-grow p-6">
											<div className="flex justify-between items-start">
												<div className="flex-1 pr-4">
													<h3 className="text-xl font-bold mb-4 text-gray-900 line-clamp-2 leading-[32px] ">
														{blog.title || ''}
													</h3>
													<p className="text-gray-600 line-clamp-3 text-sm leading-[24px]">
														{blog.description || ''}
													</p>
												</div>
											</div>
										</CardContent>
										<CardFooter>
											<div className="text-sm font-semibold w-full text-orange-600 flex justify-end items-center gap-3 ">
												Read More <ArrowRightIcon className="w-4 h-4" />
											</div>
										</CardFooter>
									</Card>
								</Link>
							))}
						</div>
					)}
					{!showAll && (
						<div className="flex justify-center mt-12">
							<Link href="/blog">
								<Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-colors px-6 py-4 rounded-lg">
									View All Articles
									<ChevronRight className="w-5 h-5 ml-2" />
								</Button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
