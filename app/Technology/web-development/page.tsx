import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import IMG1 from '../../../public/images/website-mobile-app-development/image1.png'
import IMG2 from '../../../public/images/website-mobile-app-development/image2.png'
import IMG3 from '../../../public/images/website-mobile-app-development/image3.png'
import IMG4 from '../../../public/images/website-mobile-app-development/image4.png'

const Page = () => {
	return (
		<section className="px-2 min-h-screen">
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Web Development
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Discover the latest insights, trends, and strategies in web development, technology, and
						business growth.
					</p>
				</div>
			</div>

			<div className="mt-8 md:mt-16 container">
				{/* Website Development Section */}
				<div className="flex flex-col mb-12 space-y-6 border-b border-gray-100">
					<h2 className="font-bold text-2xl md:text-4xl text-gray-900">Website Development</h2>
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
						<div className="space-y-4 lg:w-1/2">
							<p>
								Our results-driven, engaging website development services portray businesses in the
								best light! Our highly-experienced team of web developers will build your new
								website to serve as a foundation for search engine optimization initiatives and
								build your company’s brand. We also ensure functions with mainstream logic, and
								evoke a high level of creativity.
							</p>
							<p>
								We use proven and practical website development technologies, and utilize all major
								CMS platforms, including WordPress, Drupal, Woo-commerce, Shopify, Magento and
								Joomla.
							</p>
						</div>
						<div className="lg:w-1/2">
							<Image
								src={IMG1}
								alt="Website Development"
								className="rounded-lg w-full h-auto"
								priority
							/>
						</div>
					</div>
					<p>
						Our firm has an easy process for your business to start your website development
						project. We can scale our services to customize the website as simple or as innovative
						as per your vision! We can also recommend solutions during each phase of the development
						process that will help service your website visitors to an unparalleled extent.
					</p>
					<p>
						Our creative team provides logo design services to make it easy for you to ensure the
						success of launching the most polished website experience on desktop and mobile.
					</p>
					<p>
						We offer a support plan, which includes secure website hosting and maintenance services.
						If you wish, we can make it easy for your staff to edit the website on select platforms.
						We assist clients in securing and managing domain names and SSL certificates.
					</p>
					<p>
						We can integrate video content, and we provide dedicated video hosting. A dedicated
						video host maintains the website experience by routing videos from a separate service,
						which also minimizes buffering time.
					</p>
				</div>

				{/* Creative & Engaging Website Design */}
				<div className="flex flex-col bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-8 my-12 space-y-6">
					<div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
						<div className="lg:w-1/2">
							<Image src={IMG2} alt="Website Design" className="rounded-lg w-full h-auto" />
						</div>
						<div className="lg:w-1/2 space-y-4">
							<h2 className="font-bold text-2xl md:text-4xl text-gray-900">
								Creative & Engaging Website Design
							</h2>
							<p>
								We create engaging custom website design to help you maintain a professional
								business image, whether you are a b2b, b2c, nonprofit, a social network, or an
								independent consultant. Our creative team will enhance your digital appearance
								through infusing branding strategy and creating interactive features consistent with
								the latest UX and UI trends.
							</p>
							<p>
								Our talented team provides website design services that appeal to your targeted
								customer within 7 seconds of visiting it, while being complementary to your website
								content. We customize our website design services to be fully custom for those who
								wish to invest in an exceptional and unique website. If preferred, we can use a
								stock theme to make our services more affordable to small businesses and independent
								consultants.
							</p>
						</div>
					</div>
				</div>

				{/* E-Commerce Section */}
				<div className="flex flex-col my-12 space-y-6 border-b border-gray-100">
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
						<div className="space-y-4 lg:w-1/2 text-center">
							<h2 className="font-bold text-2xl md:text-4xl text-gray-900 text-center">
								E-Commerce Website Development
							</h2>
							<p>
								As a{' '}
								<Link
									href="/marketing/e-commerce-digital-marketing-services"
									className="text-blue-600"
								>
									top e-commerce Website Development Company
								</Link>
								, we help clients deliver exceptional online shopping experiences through providing
								website development, design, hosting, and maintenance services. We set up your
								online store, host & maintain it, and implement enhancements that help increase
								conversion.
							</p>
							<p>
								Our team emphasizes that all websites must have a clear path to action. We follow
								shopping cart management best practices. With a very intuitive UI/UX, you will see
								more completed purchases with a higher average order value.
							</p>
							<p>
								Learn more about our digital marketing and advertising services for{' '}
								<Link
									href="/marketing/e-commerce-digital-marketing-services"
									className="text-blue-600"
								>
									E-Commerce businesses
								</Link>
								.
							</p>
						</div>
						<div className="lg:w-1/2 flex justify-center">
							<Image src={IMG3} alt="E-Commerce Development" className="rounded-lg w-full h-auto" />
						</div>
					</div>
				</div>

				{/* Why Website Design Section */}
				<div className="flex flex-col bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-8 space-y-6">
					<div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
						<div className="lg:w-1/2">
							<Image
								src={IMG4}
								alt="Small Business Website Design"
								className="rounded-lg w-full h-auto"
							/>
						</div>
						<div className="lg:w-1/2 space-y-4">
							<h2 className="font-bold text-2xl md:text-4xl text-gray-900">
								Why is Website Design an Amazing Investment for Small Businesses?
							</h2>
							<p>
								Building a new website is an exceptional investment for small businesses as it helps
								people find your business, much like how the “yellow pages” worked many years ago.
								While small businesses can start by providing an overview of their services and
								contact information to visitors on a basic website, a blog can be incorporated into
								the website to help build trust with the community. Web apps can be developed to
								facilitate online ordering for a restaurant. Engaging with a{' '}
								<Link href="/Technology/web-development" className="text-blue-600">
									top Small Business Website Design Company
								</Link>{' '}
								like Prime Marketing Experts will also help in lifting your{' '}
								<Link href="/marketing/video-seo" className="text-blue-600">
									search engine optimization
								</Link>{' '}
								initiatives.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* CTA Section */}
			<div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl my-12 p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
				<div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
					<div className="space-y-4 max-w-2xl">
						<h2 className="font-bold text-white text-2xl md:text-4xl text-center lg:text-left leading-tight">
							Ready to Transform Your Online Presence?
						</h2>
						<p className="text-orange-100 text-lg text-center lg:text-left">
							Contact us today to start building your dream website
						</p>
					</div>
					<Link href="/contact">
						<button className="bg-white px-8 py-4 rounded-lg font-bold text-orange-600 hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
							GET STARTED
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}
export default Page
