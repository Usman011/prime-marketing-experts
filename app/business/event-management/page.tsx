import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMG1 from '../../../public/images/eventmanagement/image1.png'
import IMG2 from '../../../public/images/eventmanagement/image.png'

const Page = () => {
	return (
		<section className="">
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Event Management Services
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Create memorable events with our expert planning and management services
					</p>
				</div>
			</div>

			<div className="flex flex-col container mx-auto mt-10">
				<div className="flex flex-col mb-10 pb-10 space-y-4 justify-start p-2 md:p-6 lg:px-16  rounded-lg shadow-lg">
					{/* Main Title */}
					<h1 className="font-extrabold text-3xl md:text-4xl text-start text-black mb-8">
						Run The Best Event With Us!
					</h1>

					{/* Two-column layout: Text and Image */}
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
						{/* Text Content */}
						<div className="space-y-6 text-lg text-gray-800 lg:w-1/2">
							<p className="font-semibold text-lg text-gray-600">
								One’s life is never short of events!
							</p>
							<p className="text-gray-700">
								From birthdays to weddings, and from conferences to live shows, life is filled with
								endless events.
							</p>
							<p className="text-gray-700">
								As either a host or guest, we spend nearly 20,719 hours of our lives in such events.
								It’s overwhelming to always think on your toes and plan an event. Yet, the chances
								are that it can go all wrong even if you plan it to your heart’s content.
							</p>
							<p className="text-gray-700">
								Now the preference is yours, whether you wish to do the stressful stuff or want to
								enjoy your event by leaving the logistics to us.
							</p>
							<p className="text-gray-700">
								A lot goes behind the stage to put up a rock star event. Creativity, designing,
								innovations, ideas, venue selection, team building, and branding are some of the key
								ingredients to have a master plan for any event.
							</p>
						</div>

						{/* Image */}
						<div className="w-full lg:w-1/2">
							<div className="relative overflow-hidden rounded-lg shadow-lg">
								<Image
									src={IMG1}
									alt="Event Planning"
									width={600}
									height={400}
									className="object-cover transition-all duration-300 transform hover:scale-105"
								/>
							</div>
						</div>
					</div>

					{/* Additional Section */}
					<div className="space-y-4 mt-8">
						<p className="text-lg text-gray-700">
							You should have a bird’s eye view to deal with multiple deliveries, build agendas,
							attend phone calls, answer millions of questions, predict everything, and have a
							backup for it. The detail is the devil, you miss one point, and all of it sinks down.
						</p>
						<p className="text-lg font-bold text-gray-700">Too overwhelming?</p>
						<p className="text-lg text-gray-700">
							Lean on the gurus. After countless years of event management experience, we are the
							most qualified to handle your events like pros. We, as Prime Marketing Experts, live,
							eat, and sleep event planning!
						</p>
					</div>

					{/* Call to Action Button */}
					<div className="flex justify-center mt-12">
						<Link
							href="/contact"
							className="bg-gradient-main text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-500 transform transition duration-300 hover:scale-105"
						>
							Contact Us
						</Link>
					</div>
				</div>

				<div className="flex flex-col mb-10 py-10 bg-blue-50 p-2 md:p-6 space-y-6 justify-start">
					<h1 className="font-bold text-3xl md:text-4xl">Know Your Event Planners</h1>
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
						<div className="space-y-6">
							<p>
								Prime Marketing Experts is not just yet another company, but THE best event
								management company. Our team of experts who ace their game makes us the finest firm
								across the globe.
							</p>
							<p className="font-bold">
								We create and put life in your ideas, while you save your time to dream more about
								your event.
							</p>
							<p>
								We bring remarkable life to an event through our excellent management, execution,
								and dedication. With great expertise, our work and utmost professionalism is a treat
								to our clients. We use warmth, patience, a sense of humor, and knowledge to enhance
								our relationship with clients.
							</p>
							<p>
								Our event management services provide scalable assistance that is demanded by your
								events, be it be a trade show, roadshow, wedding, anniversary, conference, seminar,
								or a gala event. We’ve got you covered and your events too.
							</p>
						</div>

						<div className="w-full h-auto">
							<Image src={IMG2} alt="Market Research" />
						</div>
					</div>
					<p>
						We are passionate event managers, which made us won praises and awards for delivering a
						well-organized and flawless event. The mantra for our service is to deliver outstanding
						client satisfaction, so we are at your service to cater to all your needs.
					</p>
				</div>

				<div className="bg-white p-2 md:p-6 space-y-6 mb-10 py-10 rounded-lg shadow-lg">
					{/* Main Title */}
					<h1 className="text-start text-3xl md:text-4xl font-bold text-black mt-10">
						Prime Event Management Features:
					</h1>

					{/* Intro Paragraph */}
					<p className="text-lg text-gray-700">
						Since you have dreamt up the amazing concept for your event, and are finding someone to
						convert them into reality, you are on the right page!
					</p>

					<p className="text-lg text-gray-700">
						Our step one is to understand your dream concept and then pitch in our creative
						execution to blow your attendees’ minds away. With Prime Marketing Experts, you get a
						cocktail of event management services with the enlisted features.
					</p>

					{/* Features List with Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Feature Cards */}
						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">Experienced Planners</h3>
							<p className="text-gray-700">
								Event management is not everyone’s cup of tea, but for us, it’s a cakewalk. From the
								planning to the final execution, we ensure everything flows smoothly.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">Bucketing Approvals</h3>
							<p className="text-gray-700">
								We handle all the contracts and permissions, saving you time and effort while
								ensuring legal compliance for your event.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">Stay On The Budget</h3>
							<p className="text-gray-700">
								We help you establish and stick to your budget, ensuring that every expense is
								accounted for and that you get the best rates in the market.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">Pick Location And Date</h3>
							<p className="text-gray-700">
								We help choose the right venue and timing for your event, considering holidays,
								availability, and audience needs.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black-800 mb-4">
								Effective Marketing Strategy
							</h3>
							<p className="text-gray-700">
								We ensure your event is part of a larger strategy to build your brand and create a
								successful product launch or promotional event.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">Take Ownership & Responsibility</h3>
							<p className="text-gray-700">
								You can rest easy while we take full ownership of your event and ensure everything
								goes off without a hitch.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">Creative Professionals</h3>
							<p className="text-gray-700">
								Our team of creative professionals handles everything from lights to decorations,
								ensuring the right vibe for your event.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">Driving Event Traffic</h3>
							<p className="text-gray-700">
								We help you market your event to bring in the right audience, increasing engagement
								and brand visibility.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">One-Stop Event Shop</h3>
							<p className="text-gray-700">
								From equipment to catering, photography to sound, we cover every detail, making us
								your one-stop shop for all event needs.
							</p>
						</div>

						<div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
							<h3 className="font-bold text-xl text-black mb-4">Reduce Stress</h3>
							<p className="text-gray-700">
								Leave the pressure of event planning to us. We handle the logistics, so you can
								focus on enjoying the event. <span className="font-bold">Hakuna Matata</span>
							</p>
						</div>
					</div>

					{/* Additional Services Section */}
				</div>
				<div className="bg-blue-100 mb-10 py-10 p-2 md:p-6  rounded-lg shadow-lg">
					<h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
						Prime Event Management Services
					</h2>

					<p className="text-lg text-gray-700 mb-4">
						We offer a wide range of event management services to ensure you plan and host the
						perfect event with ease.
					</p>

					<ul className="list-disc pl-5 space-y-4">
						<li>
							<span className="font-bold text-black">Venue Selection:</span> We help you find the
							perfect venue for your event, tailored to your needs.
						</li>
						<li>
							<span className="font-bold text-black">Designing:</span> Our in-house designers will
							handle everything from invitations to social media ads.
						</li>
						<li>
							<span className="font-bold text-black">Invitation Creation & Distribution:</span> We
							create eye-catching invitations and ensure they reach the right audience.
						</li>
						<li>
							<span className="font-bold text-black">Attendee Registration Management:</span> We
							manage guest lists, ensuring smooth and hassle-free registration.
						</li>
						<li>
							<span className="font-bold text-black">Social Media Marketing:</span> We engage your
							audience and increase visibility through creative social media strategies.
						</li>
						<li>
							<span className="font-bold text-black">Specialty Lighting:</span> We create
							unforgettable lighting setups and effects tailored to your event’s theme.
						</li>
						<li>
							<span className="font-bold text-black">Email Marketing:</span> We design and execute
							email campaigns that effectively promote your event.
						</li>
					</ul>

					<div className="text-start  space-y-4">
						<h3 className="text-2xl font-bold text-black mt-8">
							Host a Glorified Event With Prime Marketing Experts
						</h3>
						<p className="text-lg text-gray-700">
							We take pride in our successful event projects and look forward to making your event a
							standout occasion. Contact us now for a free quote!
						</p>
					</div>
				</div>

				{/* Closing Statement */}
			</div>
		</section>
	)
}

export default Page
