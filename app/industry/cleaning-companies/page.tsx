import Image from 'next/image'
import Link from 'next/link'
import IMG from '../../../public/industry/cleaning/image.png'
import IMG1 from '../../../public/images/vedio-seo/image.png'
import IMG2 from '../../../public/images/Marketing/content-marketing/image1.png'
import IMG3 from '../../../public/images/Marketing/Social Media Marketing/image2.png'
import IMG4 from '../../../public/images/Marketing/email marketing/image3.png'
import IMG5 from '../../../public/images/section_01.jpg'

export default function CleaningCompanies() {
	return (
		<section className="min-h-screen">
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-12 md:py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center">
						Cleaning Company Marketing Solutions
					</h1>
					<p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
						Grow your cleaning business with data-driven digital marketing strategies
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
				{/* Hero Section */}
				<div className="flex flex-col lg:flex-row items-center gap-12 rounded-xl shadow-lg hover:shadow-xl p-6 sm:p-8 lg:p-12 transition-all duration-300 mb-16">
					{/* Left Side - Content */}
					<div className="w-full lg:w-1/2 space-y-6 transform transition duration-500">
						<h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
							Our Cleaning Company Marketing Services
						</h1>
						<p className="text-gray-600">
							We leverage a combination of digital marketing strategies and industry-specific
							expertise to help you stand out, connect with the right customers, and grow your
							brand.
						</p>
						<p className="text-gray-600">
							At Prime Marketing Experts, we understand that the cleaning industry is highly
							competitive and that your business needs a strong, effective marketing strategy to
							attract new customers and retain loyal clients. Whether you offer residential,
							commercial, or specialized cleaning services, we provide tailored marketing solutions
							designed to boost visibility, build trust, and drive high-quality leads for your
							cleaning business.
						</p>
						<div className="pt-4">
							<Link href="/free-strategy-session">
								<button className="px-8 py-4 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
									Get Started
								</button>
							</Link>
						</div>
					</div>

					{/* Right Side - Image */}
					<div className="w-full lg:w-1/2 transform transition duration-500 hover:scale-105">
						<Image
							src={IMG}
							alt="Cleaning Industry"
							width={600}
							height={400}
							className="rounded-xl shadow-xl object-cover w-full h-[400px] transition duration-500 hover:scale-105"
						/>
					</div>
				</div>

				{/* Cleaning Services Section */}
				<div className="bg-blue-50 rounded-xl my-16 py-12 px-6 sm:px-8 lg:px-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
						Our Tailored Cleaning Marketing Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								img: IMG1,
								title: 'Local SEO for Cleaning Companies',
								alt: 'Local SEO',
								content:
									'Local SEO is crucial for cleaning businesses, as most clients are searching for services near them. We optimize your website to ensure it ranks highly in local search results, making it easier for customers to find your cleaning services. By improving your local visibility, we help drive more foot traffic, phone calls, and online inquiries.',
								showOnMobile: true,
							},
							{
								img: IMG3,
								title: 'Social Media Strategy & Management',
								alt: 'Social Media Marketing',
								content:
									'Social media is a great tool for showcasing your cleaning services and building trust with potential clients. We create engaging social media campaigns that highlight your services, share cleaning tips, promote seasonal offers, and share customer testimonials. Platforms like Facebook, Instagram, and LinkedIn help you engage with your community and attract more clients.',
								showOnMobile: true,
							},
							{
								img: IMG4,
								title: 'Targeted Paid Ads Campaigns',
								alt: 'Paid Advertising',
								content:
									'Paid advertising can drive quick, measurable results for your cleaning business. We help you run targeted Google Ads and Facebook Ads campaigns that attract customers actively searching for cleaning services. Our approach ensures that your ad spend is maximized to bring in qualified leads and boost conversions.',
								showOnMobile: true,
							},
							{
								img: IMG5,
								title: 'Reputation Management',
								alt: 'Reputation Management',
								content:
									"Your online reputation is critical to your cleaning business's success. We help you monitor and manage your customer reviews across platforms like Google, Yelp, and Facebook. By responding to reviews, encouraging satisfied customers to leave feedback, and addressing negative reviews professionally, we help you build a trustworthy and positive online presence.",
								showOnMobile: false,
							},
							{
								img: IMG2,
								title: 'Content Marketing for Cleaning Services',
								alt: 'Content Marketing',
								content:
									'Content marketing helps position your cleaning business as an expert in the field and attracts customers looking for valuable information. We create SEO-optimized blog posts, cleaning tips, and video tutorials that resonate with your target audience. By educating potential customers, we increase your visibility and drive traffic to your website.',
								showOnMobile: false,
							},
							{
								img: IMG,
								title: 'Email Marketing Campaigns',
								alt: 'Email Marketing',
								content:
									"Email marketing allows you to stay connected with your clients and encourage repeat business. We create email campaigns to keep customers engaged, offer seasonal promotions, and remind them of your cleaning services. Whether it's a special discount or helpful cleaning tips, our email marketing strategies are designed to keep your customers coming back.",
								showOnMobile: false,
							},
						].map((service, index) => (
							<div
								key={index}
								className={`flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
									!service.showOnMobile ? 'hidden md:flex' : 'flex'
								}`}
							>
								<Image
									src={service.img}
									alt={service.alt}
									width={400}
									height={300}
									className="w-full h-56 object-cover"
								/>
								<div className="p-6 flex flex-col flex-grow">
									<h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
									<p className="text-gray-600 flex-grow">{service.content}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Why Choose Us Section */}
				<div className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 lg:p-12 my-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
						Why Cleaning Businesses Choose Prime Marketing Experts
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: 'Industry Expertise',
								content:
									'Our team specializes in the cleaning industry, understanding its unique needs and challenges, and delivering results-driven marketing solutions.',
							},
							{
								title: 'Custom-Tailored Strategies',
								content:
									'We create marketing plans that are specifically designed for your business, helping you target the right customers with the right message.',
							},
							{
								title: 'Proven Results',
								content:
									'Our strategies deliver measurable results, from increased online visibility to higher lead generation and conversion rates.',
							},
							{
								title: '24/7 Support',
								content:
									'We offer around-the-clock support, ensuring that your marketing campaigns run smoothly and any questions are addressed promptly.',
							},
							{
								title: 'Full Transparency',
								content:
									"We provide full transparency in our marketing efforts, sharing regular reports and performance metrics to ensure you're always in the loop.",
							},
							{
								title: 'Affordable Packages',
								content:
									'Our marketing solutions are affordable, scalable, and tailored to meet the needs of cleaning businesses of all sizes.',
							},
						].map((item, index) => (
							<div
								key={index}
								className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-100 transition-all duration-300"
							>
								<h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
								<p className="text-gray-600">{item.content}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Call-to-Action Section */}
			<div className="bg-orange-500 mt-20 py-12 px-6 lg:px-12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 container mx-auto">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left leading-tight max-w-2xl">
						Ready to Grow Your Cleaning Business?
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
