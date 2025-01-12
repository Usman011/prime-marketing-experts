import Image from 'next/image'
import IMG1 from '../../../public/industry/tourism/image1.png'
import IMG2 from '../../../public/industry/tourism/image2.png'
import IMG3 from '../../../public/industry/tourism/image3.png'
import IMG4 from '../../../public/industry/tourism/image4.png'
import IMG5 from '../../../public/industry/tourism/image5.png'
import IMG6 from '../../../public/industry/tourism/image6.png'
import IMG7 from '../../../public/industry/tourism/image7.png'
import Link from 'next/link'

export default function TourismPage() {
	const destinations = [
		{
			id: 1,
			name: 'Travel Blogs and Content Marketing',
			description:
				'We use storytelling to highlight your destination. Through engaging blogs, travel guides, and videos, we position your business as a go-to resource, bringing in more organic traffic.',
			image: IMG5,
		},
		{
			id: 2,
			name: 'Reputation Management for Tourism Brands',
			description:
				'Trust is key in tourism. We manage reviews and feedback across platforms like TripAdvisor and Google to maintain your positive image and boost credibility.',
			image: IMG6,
		},
		{
			id: 3,
			name: 'Influencer Marketing for Travel Brands',
			description:
				'Collaborating with travel influencers expands your reach and connects your brand with new audiences. We ensure the right influencers promote your services authentically.',
			image: IMG7,
		},
	]

	return (
		<section className=" text-gray-800">
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Tourism Marketing Solutions
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Discover the latest insights, trends, and strategies in tourism marketing to grow your
						business and attract more travelers.
					</p>
				</div>
			</div>

			<div className="container mt-10">
				{/* Services Section */}
				<div className="relative pb-10 mb-10  flex items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 justify-start md:justify-auto p-2 md:p-6">
					<div className="container mx-auto px-0 md:px-12 flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-3/5 text-center md:text-left">
							<h1 className="text-3xl md:text-4xl md:text-auto text-start font-bold text-gray-800 mb-6 leading-tight">
								Our Tourism Marketing Services
							</h1>
							<p className="text-gray-700  text-start md:auto mb-6">
								At Prime Marketing Experts, we know the tourism industry is dynamic and highly
								competitive. Whether you’re a travel agency, tour operator, or destination marketing
								organization, we provide customized solutions to make your brand stand out. Our
								strategies attract more travelers, boost visibility, and strengthen your presence in
								the global market.
							</p>
							<p className=" text-start md:auto text-gray-700">
								Our team combines creativity with expertise to design campaigns that drive
								results—turning interest into bookings and travelers into loyal customers.
							</p>
							<div className="flex gap-4 justify-center md:justify-start">
								<Link href="/free-strategy-session" className="my-6">
									<button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
										Get Started
									</button>
								</Link>
							</div>
						</div>
						<div className="md:w-2/5">
							<Image
								src={IMG1}
								alt="Travel Adventure"
								className="w-full rounded-lg shadow-lg"
								priority
							/>
						</div>
					</div>
				</div>

				{/* Destination Marketing Section */}
				<div className="py-10 my-10 bg-blue-50">
					<div className="container mx-auto px-2 md:px-12 flex flex-col md:flex-row gap-12">
						<div className="md:w-1/2">
							<Image
								src={IMG4}
								alt="Company History"
								width={600}
								height={400}
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div className="md:w-1/2 text-start md:text-left">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Destination Marketing</h2>
							<p className="text-lg text-gray-700 leading-relaxed text-start md:auto">
								Promote your city, region, or country to travelers worldwide with our strategic
								campaigns. We spotlight your destination`s unique culture, attractions, and
								experiences to inspire visitors. Through storytelling and immersive content, we help
								showcase what makes your destination unforgettable.
							</p>
							<ul className="list-disc pl-6 space-y-2  text-start md:auto pt-6">
								<li>Highlighting landmarks and experiences</li>
								<li>Targeted international campaigns</li>
								<li>Establishing a distinct verbal brand identity</li>
								<li>Partnering with travel influencers and bloggers</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Social Media Marketing Section */}
				<div className="py-10 my-10 text-lg text-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6">
					<div className="container mx-auto px-0 md:px-12 flex flex-col md:flex-row items-center gap-12">
						<div className="md:w-1/2 text-start md:text-left">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
								Social Media Marketing for Tourism
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed  text-start md:auto mb-6">
								Social media connects you to travelers in real time. We create inspiring campaigns
								on platforms like Instagram, Facebook, Twitter, and YouTube to spark wanderlust and
								grow engagement.
							</p>
							<ul className="list-disc pl-6 text-gray-700  text-start md:auto">
								<li className="mb-2">Beautiful visual content to capture attention</li>
								<li className="mb-2">Community engagement with travel enthusiasts</li>
								<li>Targeted advertising to reach the right audience</li>
							</ul>
						</div>
						<div className="md:w-1/2">
							<Image
								src={IMG3}
								alt="Hidden Gems"
								width={600}
								height={400}
								className="w-full rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>

				{/* Destinations Section */}
				<div className="py-10 my-10 bg-blue-50">
					<div className="container mx-auto px-0 md:px-12">
						<h2 className="text-3xl md:text-4xl font-bold text-start mb-12">
							Tourism Marketing Services by Prime Marketing Experts
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{destinations.map((destination) => (
								<div
									key={destination.id}
									className="bg-white rounded-lg shadow-lg p-2 md:p-4 overflow-hidden transition-transform transform hover:scale-105"
								>
									<Image
										src={destination.image}
										alt={destination.name}
										width={400}
										height={300}
										className="w-full h-48 object-cover"
									/>
									<div className="p-1 md:p-6">
										<h3 className="text-xl font-bold">{destination.name}</h3>
										<p className="text-gray-600 mt-2">{destination.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-orange-500 mt-20 py-12 px-6 lg:px-12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 container mx-auto">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left leading-tight max-w-2xl">
						Ready to Boost Your Tourism Business? Get a Free Consultation Now
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
