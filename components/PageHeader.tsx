import React from 'react'

interface PageHeaderProps {
	title: string
	description: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
	return (
		<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
			<div className="container mx-auto px-4 max-w-4xl">
				<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
					{title}
				</h1>
				<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
					{description}
				</p>
			</div>
		</div>
	)
}

export default PageHeader
