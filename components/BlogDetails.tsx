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
		<div className='container px-2 md:px-12 mb-10'>
			
			<div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-28 flex-col text-center'>
		     <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
		    Blog Details
	        </h1> 
	       
				
			</div>
			{!loading && blog ? (
				<div className="bg-gray-50 p-2 md:p-5">
					<div className="pt-5">
						
						{/* <div className=" text-base md:text-lg text-gray-500 mt-2">{`By ${blog.authorName || ''}`}</div> */}
					</div>
					{blog?.imageUrl && (
						<div className="w-full flex justify-center items-center">
						<Image
						  src={blog?.imageUrl || ''}
						  alt={'No Image'}
						  width={1000}
						  height={800}
						  className="w-full object-cover max-h-[500px]"
						/>
					  </div>
					  
					)}
					 <div className=" text-xl md:text-3xl font-bold  mt-5">{blog.title || ''}</div> 
					<div className="editor-content py-10">
						
						<div
							className="mt-1 text-sm text-gray-700 "
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
