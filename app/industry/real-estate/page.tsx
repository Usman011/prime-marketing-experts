import Image from 'next/image'
import IMG from '../../../public/industry/image.png'
import Link from 'next/link'

const RealEstatePage = () => {
	return (
		<section className="min-h-screen">
			{/* Hero Section */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-12 md:py-20">
				<div className="container mx-auto px-4 max-w-5xl">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center">
						Real Estate Marketing Solutions
					</h1>
					<p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
						Grow your real estate business with data-driven digital marketing strategies
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 space-y-20">
				{/* Intro Section */}
				<div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								Real Estate Marketing Services by Prime Marketing Experts
							</h2>

							<div className="space-y-4 text-gray-700">
								<p className="leading-relaxed">
									The real estate market is highly competitive, and to stand out, real estate
									professionals need a marketing strategy that not only captures attention but also
									converts leads into clients. At Prime Marketing Experts, we specialize in crafting
									tailored marketing strategies designed specifically for real estate professionals.
								</p>
								<p className="leading-relaxed">
									{`Our comprehensive real estate marketing services ensure that your properties reach
									the right audience, engage potential buyers, and drive more qualified traffic to
									your listings. From SEO-optimized property listings to social media campaigns,
									we've got the tools and expertise to help you thrive in the real estate market.`}
								</p>
							</div>

							<div className="pt-4">
								<Link href="/free-strategy-session">
									<button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
										Get Started
									</button>
								</Link>
							</div>
						</div>

						<div className="relative">
							<Image
								src={IMG}
								alt="Real Estate Marketing"
								width={800}
								height={600}
								className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
							/>
						</div>
					</div>
				</div>

				{/* Services Section */}
				<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-10 space-y-10">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
						Our Real Estate Marketing Services
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: 'Email Marketing',
								description:
									'Email marketing is an effective way to nurture relationships with potential buyers, sellers, and clients. We design targeted email campaigns that keep your audience engaged with property updates, market insights, and special offers.',
							},
							{
								title: 'Reputation Management',
								description:
									'Your online reputation is critical in the real estate industry, where trust and credibility are everything. We help you manage and enhance your online reputation by encouraging positive reviews and responding to client feedback.',
							},
							{
								title: 'Content Marketing',
								description:
									'Content marketing is a powerful way to build authority and trust with your audience while improving SEO rankings. We create high-quality, informative content that provides value to your potential clients.',
							},
							{
								title: 'Paid Advertising (PPC)',
								description:
									'Paid advertising is an effective way to get immediate exposure for your property listings and services. We manage Google Ads, Facebook Ads, and other paid campaigns that target specific buyer personas.',
							},
							{
								title: 'Social Media Marketing',
								description:
									'Social media is a powerful tool for real estate professionals to engage with their audience and showcase properties. We create and manage targeted social media campaigns to connect with buyers and sellers.',
							},
							{
								title: 'SEO Optimization',
								description:
									'We help your website rank higher on search engines for relevant real estate keywords, making it easier for potential clients to find your listings through both on-page and off-page techniques.',
							},
							{
								title: 'Website Design & Development',
								description:
									'Your website is your digital storefront. We create custom, responsive websites designed to showcase your properties, provide relevant real estate information, and convert visitors into leads.',
							},
							{
								title: 'Local SEO Optimization',
								description:
									"Local SEO is essential for real estate success. We'll optimize your website and online listings to ensure you appear in local search results, on Google Maps, and in local directories.",
							},
							{
								title: 'Video Marketing',
								description:
									'Showcase your real estate services through professional video marketing. We create high-quality video content to promote your services and build trust with your audience.',
							},
						].map((service, index) => (
							<div
								key={index}
								className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 space-y-4 transform hover:scale-105 transition-all duration-300"
							>
								<h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
								<p className="text-gray-700">{service.description}</p>
							</div>
						))}
					</div>
				</div>

				{/* Features Section */}
				<div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-10 space-y-10">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
						Why Choose Prime Marketing Experts?
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: 'Market Insights',
								description:
									'Leverage real-time market data to position your listings effectively and stay ahead of the competition.',
							},
							{
								title: 'Customized Strategies',
								description:
									'Every property is unique, and so is our approach. We create personalized campaigns to meet your specific goals.',
							},
							{
								title: 'Global Reach',
								description:
									'Expand your business beyond local boundaries with marketing techniques that attract international buyers.',
							},
						].map((feature, index) => (
							<div
								key={index}
								className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 text-center space-y-4 transform hover:scale-105 transition-all duration-300"
							>
								<h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
								<p className="text-gray-700">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default RealEstatePage
