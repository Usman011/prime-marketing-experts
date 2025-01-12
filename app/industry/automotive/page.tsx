// /pages/automotive.js
import Image from 'next/image'
import IMG from '../../../public/industry/automation/imag1.png'
import IMG1 from '../../../public/industry/automation/image2.png'
import IMG2 from '../../../public/industry/automation/image3.png'
import IMG3 from '../../../public/industry/automation/image4.png'
import Link from 'next/link'

const AutomotivePage = () => {
	return (
		<section className="automotive-page gap-20">
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Automotive Marketing Solutions
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Drive your automotive business forward with data-driven digital marketing strategies
					</p>
				</div>
			</div>

			<div className=" container mt-10">
				{/* Hero Section */}
				<div className="container my-10 py-10 mx-auto grid grid-cols-1 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6  lg:grid-cols-2 gap-10 items-center">
					{/* Left Content */}
					<div className="text-content">
						<h1 className="text-3xl md:text-4xl font-extrabold -600 mb-6 leading-tight">
							Our Automotive Marketing Services
						</h1>

						<p className="text-gray-700 mb-4 leading-relaxed">
							At Prime Marketing Experts, we understand the unique challenges and opportunities
							within the automotive industry. Whether you’re a dealership, a parts manufacturer, or
							a service provider, our marketing solutions are designed to drive results and help
							your automotive brand stand out in a competitive market.
						</p>
						<p className="text-gray-700 mb-6 leading-relaxed">
							Our data-driven strategies and industry-specific expertise ensure that your marketing
							efforts will connect you with the right customers, increase sales, and build long-term
							brand loyalty. From increasing foot traffic to boosting online engagement, we offer
							comprehensive services that fuel your growth.
						</p>
						<div className="flex items-center gap-4">
							<Link href="/contact">
								<button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
									Get Started
								</button>
							</Link>
						</div>
					</div>

					{/* Right Image */}
					<div className="relative">
						<Image
							src={IMG}
							alt="Automotive Marketing"
							width={600}
							height={400}
							className="rounded-lg shadow-xl transform hover:scale-105 transition"
						/>
					</div>
				</div>

				<div className="container my-10 py-10 grid grid-cols-1  bg-blue-50 p-2 md:p-6 lg:grid-cols-2 gap-8  items-center">
					{/* Right Image */}
					<div className="relative">
						<Image
							src={IMG1}
							alt="Automotive Marketing"
							width={600}
							height={400}
							className="rounded-lg shadow-xl transform hover:scale-105 transition"
						/>
					</div>
					{/* Left Content */}
					<div className="text-content">
						<h1 className="text-3xl md:text-4xl font-extrabold -600 mb-6 leading-tight">
							Dealership Marketing
						</h1>

						<p className="text-gray-700 mb-4 leading-relaxed">
							As an automotive dealership, your goal is to attract more qualified leads and convert
							them into customers. We help you do this by leveraging targeted campaigns that
							highlight your inventory, promotions, and dealership services. Our marketing
							strategies will increase foot traffic to your showroom and drive online leads.
						</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li className="mb-2">Targeted online advertising for specific vehicle models </li>
							<li className="mb-2">Lead generation strategies </li>
							<li>Special offers and promotions marketing </li>
						</ul>
					</div>
				</div>

				<div className="container my-10 py-10 mx-auto px-0 md:px-4 grid grid-cols-1 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 lg:grid-cols-2 gap-10 items-center">
					{/* Left Content */}
					<div className="text-content">
						<h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
							Local SEO for Automotive Businesses
						</h1>

						<p className="text-gray-700 mb-4 leading-relaxed">
							Local search optimization is crucial for automotive businesses to ensure that
							customers can easily find your dealership, service center, or parts store when
							searching online. We optimize your website and listings on platforms like Google My
							Business to improve your rankings in local search results, helping you capture nearby
							leads and customers.
						</p>
						<ul className="list-disc pl-6 text-gray-700">
							<li className="mb-2">Local SEO strategies to enhance visibility </li>
							<li className="mb-2">Optimizing online maps and directories </li>
							<li>Creating location-specific landing pages </li>
						</ul>
					</div>

					{/* Right Image */}
					<div className="relative">
						<Image
							src={IMG2}
							alt="Automotive Marketing"
							width={600}
							height={400}
							className="rounded-lg shadow-xl transform hover:scale-105 transition"
						/>
					</div>
				</div>

				<div className="container mx-auto px-0 md:px-4 my-10 py-10 grid grid-cols-1 bg-blue-50 lg:grid-cols-2 gap-10 items-center">
					{/* Right Image */}
					<div className="relative">
						<Image
							src={IMG3}
							alt="Automotive Marketing"
							width={600}
							height={400}
							className="rounded-lg shadow-xl transform hover:scale-105 transition"
						/>
					</div>
					{/* Left Content */}
					<div className="text-content">
						<h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
							Paid Advertising Campaigns
						</h1>

						<p className="text-gray-700 mb-4 leading-relaxed">
							Paid advertising is an effective way to reach potential customers who are actively
							searching for automotive products or services. We design and manage paid campaigns
							across Google Ads, Facebook Ads, and display networks to ensure your messages reach
							qualified leads and drive sales.
						</p>
						<p className="text-gray-700 mb-6 leading-relaxed">
							Stay connected with your customers by sending personalized email campaigns that
							provide valuable content, exclusive offers, and updates on new arrivals. Whether it’s
							reminding customers about vehicle maintenance or promoting special events, email
							marketing ensures your customers stay engaged and loyal.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-orange-500 mt-20 py-12 px-6 lg:px-12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 container mx-auto">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left leading-tight max-w-2xl">
						Ensuring Safety and Success Through Expertise
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

export default AutomotivePage
