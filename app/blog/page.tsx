import BlogList from '@/components/BlogList'
import Link from 'next/link'
import React from 'react'

const Page = () => {
	return (
		<section className="px-2">
			{/* Header */}

			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-10 md:py-16">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:!leading-[68px] text-center">
						Insights & Resources
					</h1>
					<p className="md:text-lg text-gray-600 mb-6 mx-auto md:!leading-[36px] text-center">
						Discover the latest insights, trends, and strategies in digital marketing, technology,
						and business growth.
					</p>
				</div>
			</div>

			<BlogList showAll />
		</section>
	)
}

export default Page
