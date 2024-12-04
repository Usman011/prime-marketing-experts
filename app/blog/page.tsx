import BlogList from '@/components/BlogList'
import Link from 'next/link'
import React from 'react'

const Page = () => {
	return (
		<section className='container mx-auto px-2'>
     
		{/* Header */}
	 <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-28 flex-col text-center'>
		<h1 className='font-semibold-600 text-3xl md:text-4xl leading-10 md:leading-10 tracking-wide'>
		All blogs
	   </h1> 
	 </div>

		<BlogList showAll />
			</section>
		
	)
}

export default Page
