import CaseStudiesList from '@/components/CaseStudiesList'
import React from 'react'

const Page = () => {
	return (
		<section className="">
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Case Studies
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Discover our success stories and learn how we&apos;ve helped businesses achieve their
						goals through innovative solutions.
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-8">
				<CaseStudiesList showAll />
			</div>
		</section>
	)
}

export default Page
