'use client'

import { BlogType } from '@/types'
import firebaseService from '@/utils/firebase.utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const BlogDetails = ({ id }: { id: string }) => {
	const [blog, setBlog] = useState<BlogType | null>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getBlogById = async () => {
			setLoading(true)
			try {
				const data = await firebaseService.getDocumentById('blogs', id)
				setBlog(data as BlogType)
			} catch (err: any) {
				console.log(err)
			} finally {
				setLoading(false)
			}
		}
		getBlogById()
	}, [id])

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<div className="relative w-16 h-16">
						<div className="absolute top-0 left-0 w-full h-full border-4 border-orange-200 rounded-full"></div>
						<div className="absolute top-0 left-0 w-full h-full border-4 border-orange-500 rounded-full animate-spin border-t-transparent"></div>
					</div>
					<p className="text-gray-600 font-medium animate-pulse">Loading blog post...</p>
				</div>
			</div>
		)
	}

	if (!blog) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<h2 className="text-2xl font-medium text-gray-600">Blog post not found</h2>
			</div>
		)
	}

	return (
		<article>
			{/* Header Section with light gradient background */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-10 md:py-16 mb-12">
				<div className="container mx-auto px-4">
					<div className=" max-w-5xl mx-auto">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:!leading-[68px]">
							{blog.title}
						</h1>
						<p className="md:text-lg text-gray-600 mb-6 mx-auto md:!leading-[36px] ">
							{blog.description}
						</p>
						<p className="md:text-lg text-gray-600 mx-auto">
							{blog.authorName && (
								<span className="flex items-center justify-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
									<span>{blog.authorName}</span>
								</span>
							)}
						</p>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="  max-w-5xl mx-auto px-4 py-10">
				<div className="mx-auto">
					{/* Featured Image */}
					{blog.imageUrl && (
						<div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden">
							<Image src={blog.imageUrl} alt={blog.title} fill className="object-cover" priority />
						</div>
					)}

					{/* Content */}
					<div className="prose prose-lg max-w-none">
						<div
							className="blog-content"
							dangerouslySetInnerHTML={{ __html: blog.content || '' }}
						/>
					</div>
				</div>
			</div>
		</article>
	)
}

export default BlogDetails
