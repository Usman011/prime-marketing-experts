import Link from 'next/link'
import React from 'react'
import IMG1 from '../../../public/images/Marketing/E-Commerce Digital Marketing Services/image1.png'
import IMG2 from '../../../public/images/Marketing/E-Commerce Digital Marketing Services/image2.png'
import Image from 'next/image'

const Page = () => {
	return (
		<section className="">
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						E-Commerce Digital Marketing Services
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Discover the latest insights, trends, and strategies in e-commerce marketing, digital
						advertising, and business growth.
					</p>
				</div>
			</div>

			<div className="space-y-10 container mt-10">
				<div className="flex flex-col  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
					<h1 className="font-bold text-3xl md:text-4xl">
						Driving ROI Through Comprehensive E-Commerce Marketing Services
					</h1>
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
						<div className="space-y-8 w-full lg:w-11/12">
							<p>
								More than ever, consumers are shifting their shopping habits to online stores. As
								your bricks and mortar store has a certain amount of customers, you have an
								opportunity to find many more customers online by not being constrained by geography
								and offering a 24/7, convenient digital shopping experience.
							</p>
							<p>
								Our E-Commerce Digital Marketing Services achieves exceptional ROI by deploying the
								comprehensive marketing strategy through infusing creativity and the latest
								marketing technology. Through this, we help our clients increase brand recognition,
								conversion rate, and revenue.
							</p>
							<p>
								We maximize results by providing an integrated approach to our strategy, and offer
								expertise in{' '}
								<Link href="/Technology/web-development" className="text-blue-600">
									website development
								</Link>
								,{' '}
								<Link href="/marketing/seo-web-design" className="text-blue-600">
									SEO
								</Link>
								,{' '}
								<Link href="/marketing/seo-web-design" className="text-blue-600">
									search engine ads
								</Link>
								,{' '}
								<Link href="/marketing/content-marketing" className="text-blue-600">
									content marketing
								</Link>
								,{' '}
								<Link href="/email-marketing" className="text-blue-600">
									email marketing
								</Link>
								, and more!
							</p>
						</div>
						<div className="w-full mt-10 h-full">
							<Image
								src={IMG1}
								alt="Market Research"
								layout="responsive"
								width={1200}
								height={1000}
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col bg-blue-50 p-2 md:p-6 space-y-6">
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
						<div className="w-full mt-14 h-full">
							<Image
								src={IMG2}
								alt="Market Research"
								layout="responsive"
								width={1200}
								height={1000}
							/>
						</div>
						<div className="space-y-8 w-full lg:w-11/12">
							<h1 className="font-bold text-3xl md:text-4xl text-start">
								E-Commerce SEO Solutions
							</h1>
							<p>
								We’re experts in ranking our clients beyond large online stores like Amazon by
								defining user intent comprehensively. Our team combines in-depth research with years
								of experience to surpass your sales growth goals through moving your business up in
								search results.
							</p>
							<p>
								Our thorough process infuses SEO-optimized content creation strategies to help you
								achieve maximum outreach. This includes optimizing product descriptions and images,
								in addition to writing blog articles. We also promote that content through
								Influencers and Backlink creation.
							</p>
							<p>
								Whether your online store is based on BigCommerce, Woo commerce, or any major
								platform, we can help you increase your search rankings.
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col mb-10 space-y-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 justify-start">
					<h1 className="font-bold text-3xl md:text-4xl">Why Our E-Commerce Marketing Service?</h1>
					<div className="space-y-6">
						<p>
							Our clients experience tremendous success with our e-commerce marketing services
							because we are very different from what other usual marketing agencies:
						</p>
						<ul className="list-disc pl-5 space-y-2">
							<li>
								Our team operates based on a proven e-Commerce marketing framework. We hold each
								team member accountable for executing their pieces of the agreed-to strategy and
								statement of work.
							</li>
							<li>
								We communicate all information about our actions, reasons, and intentions behind it.
							</li>
							<li>
								We work in the best interest of our clients. Often this collaboration pushes limits
								with faster growth.
							</li>
							<li>
								We have an organized and dependable team that knows their work and delivers the best
								performance.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-orange-500 mt-20 py-12 px-6 lg:px-12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 container mx-auto">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left leading-tight max-w-2xl">
						Attract, Convert, and Retain More Customers Today
					</h2>
					<Link href="/contact">
						<button className="bg-white px-8 py-3 text-sm text-orange-500 rounded-md shadow-md transition-all duration-200 font-semibold tracking-wide border border-orange-500 hover:bg-orange-600 hover:text-white hover:border-white hover:shadow-lg active:transform active:scale-95">
							CONTACT NOW
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Page
