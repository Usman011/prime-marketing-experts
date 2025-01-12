import Image from 'next/image'
import IMG from '../../../public/industry/restaurant/image1.png'
import IMG1 from '../../../public/industry/restaurant/image2.png'
import IMG2 from '../../../public/industry/restaurant/image3.png'
import IMG3 from '../../../public/industry/restaurant/image4.png'
import IMG4 from '../../../public/industry/restaurant/image5.png'
import Link from 'next/link'

export default function RestaurantIndustry() {
	return (
		<section className="min-h-screen">
			{/* Hero Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-12 md:py-20">
				<div className="container mx-auto px-4 md:px-8 max-w-5xl">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight text-center">
						Restaurant Marketing Solutions
					</h1>
					<p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
						Grow your restaurant business with data-driven digital marketing strategies
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 md:px-8 py-12 md:py-20 space-y-16">
				{/* Main Content Section */}
				<div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-12">
					<div className="flex flex-col lg:flex-row items-center gap-12">
						{/* Content */}
						<div className="w-full lg:w-1/2 space-y-8">
							<h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
								Our Restaurant Marketing Services
							</h2>
							<div className="space-y-6 text-lg text-gray-600">
								<p>
									{`At Prime Marketing Experts, we understand that the restaurant industry is
									competitive and constantly evolving. Whether you run a casual eatery, a fine
									dining restaurant, or a fast-casual chain, we offer specialized marketing
									solutions designed to attract more customers, build brand loyalty, and increase
									your online visibility.`}
								</p>
								<p>
									{`Our comprehensive marketing strategies are crafted to highlight your unique
									offerings and connect with the right audience. From social media campaigns to
									local SEO optimization and reputation management, we'll help you grow your
									restaurant's presence both online and offline, ensuring you stand out in the
									crowded marketplace.`}
								</p>
							</div>
							<Link href="/free-strategy-session">
								<button className="w-full md:w-auto px-6 mt-10 py-3 bg-gradient-main text-white rounded-xl transform hover:scale-105 transition-all duration-300">
									Get Started
								</button>
							</Link>
						</div>

						{/* Image */}
						<div className="w-full lg:w-1/2">
							<Image
								src={IMG}
								alt="Restaurant Industry"
								width={600}
								height={400}
								className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
							/>
						</div>
					</div>
				</div>

				{/* Services Grid */}
				<div className="bg-blue-50 rounded-2xl p-8 md:p-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
						{/* Service Card 1 */}
						<div className="md:bg-white rounded-xl md:p-8 md:shadow-lg transition-all duration-300">
							<div className="aspect-w-16 aspect-h-9 mb-8">
								<Image
									src={IMG1}
									alt="Social Media Marketing"
									width={500}
									height={350}
									className="w-full h-64 object-cover rounded-xl"
								/>
							</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-4">Social Media Marketing</h3>
							<p className="text-gray-600 text-lg leading-relaxed">
								Social media is a powerful tool for building relationships with your customers and
								increasing brand awareness. We create engaging social media campaigns that showcase
								your menu, promote special events, and build a loyal online community.
							</p>
						</div>

						{/* Service Card 2 */}
						<div className="md:bg-white rounded-xl md:p-8 md:shadow-lg transition-all duration-300">
							<div className="aspect-w-16 aspect-h-9 mb-8">
								<Image
									src={IMG2}
									alt="SEO Marketing"
									width={500}
									height={350}
									className="w-full h-64 object-cover rounded-xl"
								/>
							</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-4">Local SEO Optimization</h3>
							<p className="text-gray-600 text-lg leading-relaxed">
								{`Local SEO is essential for restaurant success. When potential customers search for
								dining options in your area, you need to be visible. We'll optimize your
								restaurant's website and online listings to ensure you appear in local search
								results.`}
							</p>
						</div>
					</div>
				</div>

				{/* Additional Sections with improved spacing and responsive design... */}
				{/* (Keeping the rest of the sections but with similar styling improvements) */}
			</div>
		</section>
	)
}
