import Image from 'next/image'
import IMG from '../../../public/industry/construction/image1.png'
import IMG1 from '../../../public/industry/construction/image2.png'

export default function CleaningCompanies() {
	return (
		<section className="min-h-screen">
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-12 md:py-16">
				<div className="container mx-auto px-4 max-w-5xl">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center">
						Construction Marketing Solutions
					</h1>
					<p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
						Build your construction business with data-driven digital marketing strategies
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16 space-y-12 ">
				<div className="flex flex-col lg:flex-row rounded-2xl p-8 items-center gap-12 border border-gray-200">
					<div className="w-full lg:w-1/2 space-y-6">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
							Build a Stronger Future with Strategic Marketing for Construction
						</h1>
						<div className="space-y-4">
							<p className="text-lg md:text-xl text-gray-700">
								In an increasingly competitive market, construction companies need marketing
								strategies that help them stand out and win more projects. At Prime Marketing
								Experts, we specialize in crafting custom marketing solutions that help construction
								businesses elevate their brand, attract quality leads, and convert them into
								clients.
							</p>
							<p className="text-lg md:text-xl text-gray-700">
								{`Whether you're a general contractor, a specialty contractor, or a large-scale
								developer, we offer comprehensive marketing strategies designed to highlight your
								expertise, build trust with your audience, and generate more project inquiries.`}
							</p>
						</div>
					</div>

					{/* Right Side - Image */}
					<div className="w-full lg:w-1/2">
						<div className="relative overflow-hidden rounded-2xl">
							<Image
								src={IMG}
								alt="Construction Marketing"
								width={800}
								height={600}
								className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row bg-blue-50 rounded-2xl p-8 items-center gap-12">
					<div className="w-full lg:w-1/2 order-2 lg:order-1">
						<div className="relative overflow-hidden rounded-2xl">
							<Image
								src={IMG1}
								alt="Construction Services"
								width={800}
								height={600}
								className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
							/>
						</div>
					</div>

					<div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							Our Services for Construction Businesses
						</h2>
						<p className="text-lg md:text-xl text-gray-700">
							Our team specializes in marketing services tailored to the construction industry:
						</p>
						<ul className="space-y-3 text-lg md:text-xl text-gray-700 list-disc pl-6">
							<li>Local SEO for Construction Businesses</li>
							<li>Website Design & Development</li>
							<li>Search Engine Optimization (SEO)</li>
							<li>Paid Advertising (PPC)</li>
							<li>Content Marketing</li>
							<li>Reputation Management</li>
						</ul>
					</div>
				</div>

				{/* Why Choose Us Section */}
				<div className="rounded-2xl p-8 bg-white border border-gray-200">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
						Why Construction Businesses Choose Prime Marketing Experts
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: 'Industry Expertise',
								desc: 'Our team specializes in marketing for the construction industry and understands its unique challenges and opportunities.',
							},
							{
								title: 'Tailored Marketing Strategies',
								desc: 'We create marketing plans that are specifically designed for your construction business, focusing on your goals and target market.',
							},
							{
								title: 'Proven Track Record',
								desc: 'Our strategies have helped construction companies increase their project inquiries, enhance brand visibility, and improve client acquisition.',
							},
							{
								title: 'Comprehensive Campaigns',
								desc: 'From SEO and PPC to reputation management and content creation, we offer a full range of services to grow your construction business.',
							},
							{
								title: 'Transparent Reporting',
								desc: 'We provide regular reports on campaign performance, allowing you to track the effectiveness of your marketing efforts.',
							},
							{
								title: 'Cost-Effective Solutions',
								desc: 'Our services are designed to meet the needs of construction businesses of all sizes, offering scalable and affordable solutions.',
							},
						].map((item, index) => (
							<div
								key={index}
								className="bg-blue-50 p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
							>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
								<p className="text-lg text-gray-700">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
