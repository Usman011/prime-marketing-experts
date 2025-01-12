import Image from 'next/image'
import IMG from '../../../public/industry/gyms/image1.png'
import IMG1 from '../../../public/industry/gyms/image2.png'
import Link from 'next/link'

export default function GymIndustryPage() {
	return (
		<section className="">
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Gym Marketing Solutions
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Grow your fitness business with data-driven digital marketing strategies
					</p>
				</div>
			</div>

			<div className=" container mt-10">
				{/* Section Container */}
				<div className="flex flex-col mb-10 pb-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 lg:flex-row items-center justify-between">
					{/* Left Side - Content */}
					<div className="w-full lg:w-1/2 text-start md:text-center lg:text-left lg:pr-12">
						<h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
							Gym Marketing Services
						</h1>
						<p className="text-lg text-gray-800 mb-8">
							We understand the competitive nature of the fitness industry and the need for gym
							owners to stand out. Whether you run a small local gym, a large fitness center, or a
							boutique studio, we offer tailored marketing solutions designed to drive membership
							growth, increase client engagement, and build a loyal fitness community.
						</p>
						<p className="text-lg text-gray-800 mb-8">
							Our holistic approach combines digital marketing strategies and real-world engagement
							tactics to grow your membership base and retain clients long-term.
						</p>
						<Link href="/free-strategy-session" className="my-6 ">
							<button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
								Get Started
							</button>
						</Link>
					</div>

					{/* Right Side - Image */}
					<div className="w-full lg:w-1/2 mt-12 lg:mt-0">
						<Image
							src={IMG}
							alt="Gym Marketing"
							width={600}
							height={400}
							className="rounded-lg shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
						/>
					</div>
				</div>

				{/* Additional Information Section */}
				<div className="my-10 py-10 flex flex-col lg:flex-row bg-blue-50 p-2 md:p-6 items-center lg:items-start text-start md:text-left">
					{/* Content Section */}
					<div className="w-full lg:w-2/3">
						<h2 className="md:text-4xl text-3xl font-bold mb-6 text-black">
							Why Choose Us to Market Your Gym?
						</h2>
						<p className="text-lg text-gray-800 max-w-3xl  mx-auto mb-8 lg:mx-0">
							Our proven strategies help gyms grow by reaching the right audience, increasing
							engagement, and generating high-quality leads. Let us optimize your online presence
							with:
						</p>
						<ul className="space-y-4 text-left text-gray-800 max-w-3xl mx-auto lg:mx-0">
							{[
								'Local SEO to get found by nearby gym-goers',
								'High-conversion paid ads to attract new members',
								'Social media marketing that builds community and trust',
								'Content marketing with fitness tips, blogs, and guides',
								"Reputation management to improve your gym's online presence",
								'Email marketing for member engagement and retention',
								"Video marketing to showcase your gym's unique culture and offerings",
							].map((item, index) => (
								<li key={index} className="flex items-center">
									<span className="text-xl font-medium text-yellow-500 mr-2">✓</span>
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* Image Section */}
					<div className="w-full lg:w-2/3 mt-20 lg:pl-8">
						<Image
							src={IMG1}
							alt="Why Choose Us"
							width={600}
							height={400}
							className="rounded-lg shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
						/>
					</div>
				</div>

				{/* Success Stories Section */}
				<div className="my-10 py-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 text-start md:text-center">
					<h2 className="md:text-4xl text-3xl font-bold text-start mb-6 text-black">
						Our Success Stories
					</h2>
					<p className=" text-black  text-start  mb-8">
						Don’t just take our word for it. Hear from gym owners who have experienced growth and
						success with our marketing strategies:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 text-black flex-wrap justify-center gap-6 ">
						{[
							{
								name: 'Pulse Fitness',
								quote: `Our gym's brand visibility has skyrocketed, and we have gained a loyal following.`,
								author: 'Sarah Lee, Marketing Director',
							},
							{
								name: 'Iron Strength Gym',
								quote:
									'Their marketing expertise resulted in more foot traffic and higher conversion rates.',
								author: 'Alex Williams, Owner',
							},
							{
								name: 'Elevate Fitness Studio',
								quote: `The team is tailored strategies helped us attract a younger audience and increase class participation.`,
								author: 'Emily Carter, Studio Manager',
							},
						].map((story, index) => (
							<div
								key={index}
								className="w-full p-2 md:p-6 bg-blue-50  text-gray-800 rounded-lg shadow-lg"
							>
								<h3 className="text-xl font-semibold mb-4">{story.name}</h3>
								<p className="text-gray-400 mb-4">{story.quote}</p>
								<p className="text-sm text-gray-500">{story.author}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bg-orange-500 mt-20 py-12 px-6 lg:px-12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 container mx-auto">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left leading-tight max-w-2xl">
						{`Don't wait any longer to take your gym to the next level`}
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
