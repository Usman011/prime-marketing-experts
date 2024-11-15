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
				console.log('::::blog', data)
			} catch (err: any) {
				console.log(err)
			} finally {
				setLoading(false)
			}
		}
		getBlogById()
	}, [])

	return (
		<div>
			<div className="  py-10 bg-gray-100 ">
				<div className="container h-96 flex items-center justify-center">
					<div className=" text-2xl md:text-4xl font-bold ">Blog Details</div>
				</div>
			</div>
			{!loading && blog ? (
				<div className="container">
					<div className="pt-5">
						<div className=" text-xl md:text-3xl font-bold  mt-5">{blog.title || ''}</div>
						<div className=" text-base md:text-lg text-gray-500 mt-2">{`By ${blog.authorName || ''}`}</div>
					</div>
					{blog?.imageUrl && (
						<div className="flex justify-center items-center">
							<Image
								src={blog?.imageUrl || ''}
								alt={'No Image'}
								width={800}
								height={800}
								className="object-contain max-h-96 aspect-square "
							/>
						</div>
					)}
					<div className="editor-content py-10">
						<div
							className="mt-1 text-sm text-gray-700 border p-5 rounded-2xl"
							dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
						/>
					</div>
				</div>
			) : (
				<div className="container py-20 text-2xl text-center">Blog Not Found</div>
			)}
		</div>
	)
}

export default BlogDetails
