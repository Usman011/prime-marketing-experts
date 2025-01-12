import Image from 'next/image'
import Link from 'next/link'
import IMG1 from '../../../public/images/vedio-seo/image.png'
import React from 'react'

const Page = () => {
	return (
		<section className="">
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Video SEO
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Discover the latest insights, trends, and strategies in video SEO, digital visibility,
						and business growth.
					</p>
				</div>
			</div>

			<div className="flex flex-col bg-blue-50 p-2 md:p-6 gap-10 container my-20">
				<div className="flex flex-col ">
					<h1 className="font-bold text-4xl">Video SEO</h1>
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
						<div className="space-y-8 w-full lg:w-7/12 mt-8">
							<p>
								Video is one of the most powerful marketing mediums to improve your online presence,
								but you can’t just upload one into Youtube or your website expect it to be shown to
								many people. To achieve the best results, videos require their own genuine strategy
								separate from your main SEO strategy. Video SEO optimizes the rankings of video
								content within Google, Bing, Yahoo, and video search results. We strategically can
								help you ultimately drive more website traffic, as opposed to driving it to your
								video hosting provider.
							</p>
							<p>
								We implement video schema to get videos indexed and improve visibility within search
								engines. Our team then integrates keyword-rich metadata, which includes titles,
								descriptions, cards, custom thumbnails, transcripts, tags, and captions, to attract
								a relevant audience over time. We also then integrate the same link building
								strategies that we use with blog articles, info-graphics, and white papers to
								further improve the ranking of your video content.
							</p>
						</div>
						<div className="mt-12">
							<Image
								src={IMG1}
								alt="Market Research"
								layout="responsive"
								className="border-1 rounded"
								width={1200}
								height={1000}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Page
