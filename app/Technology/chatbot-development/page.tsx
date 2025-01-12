import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMG5 from '../../../public/images/website-mobile-app-development/image5.png'
import IMG7 from '../../../public/images/website-mobile-app-development/image7.png'
import { RiMessage2Line } from 'react-icons/ri'

const Page = () => {
	return (
		<section className="container px-2 md:px-6 lg:px-12">
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Chatbot Development
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Discover the latest insights, trends, and strategies in chatbot development, technology,
						and business growth.
					</p>
				</div>
			</div>

			<div className="flex flex-col gap-10 ">
				<div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 item-center space-y-6">
					<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
						<div className="space-y-8 ">
							<h1 className="font-bold text-3xl md:text-4xl">
								Revolutionize Customer Experiences with Chatbot
							</h1>
							<p>
								“67% of consumers globally used a chatbot for customer support in the past year.”
							</p>
							<p>
								That’s a huge number, right? In fact, 57% of businesses believe that chatbot deliver
								large ROI with the least effort. Isn’t that a win-win situation for both your
								customers and your business?
							</p>
							<p>
								Considering these figures, don’t you think you should start thinking of how you’re
								going to implement a chatbot on your website?
							</p>
						</div>
						<div>
							<Image src={IMG5} alt="Market Research" width={700} height={500} />
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row bg-blue-50 p-2 md:p-6 space-y-6 lg:space-y-0 lg:space-x-6 items-center">
					{/* Text Section */}
					<div className="lg:w-2/3 space-y-6">
						<h1 className="font-bold text-3xl md:text-4xl">
							Now, you must be intrigued about chatbot, and what exactly are these?
						</h1>
						<div className="space-y-6">
							<p>
								Well, chatbot are built on artificial intelligence software, which stimulates a
								conversation with your customers in a natural language over the internet. These can
								communicate through websites, mobile apps, messaging applications, or phones.
							</p>
							<p>
								Want to be a unicorn in a sea of donkeys? It seems hard, but in reality, it’s
								simple. You just have to implement chatbot for your application and website!
							</p>
							<p>
								Besides boosting your employee productivity, chatbot are known to increase
								conversion rate since they offer round-the-clock assistance to your prospects and
								customers.
							</p>
							<p>
								We will make sure that you get exceptional customer service, so you also have full
								knowledge of what exactly is going on with your project. We are transparent and make
								sure to keep you in the loop.
							</p>
							<p>
								We have dedicated and professional staff, which will be at your service all through
								the day. So, feel free to contact us right away if you need to ask about chatbot
								development.
							</p>
						</div>
					</div>
					{/* Image Section */}
					<div className="lg:w-1/3 flex-shrink-0">
						<Image
							src={IMG7}
							alt="Chatbot Illustration"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>

				{/* How We Use Market Research Section */}
				<div className="space-y-6 rounded-lg shadow-lg p-2 md:p-6 ">
					<h1 className="font-bold text-3xl md:text-4xl text-black">
						How We Use Marketing Research In Customer-Centric Marketing
					</h1>
					<p>
						We can utilize your market research to develop customized content and messaging to make
						sure your customers are getting exactly what they are looking for. For prioritizing your
						needs first, we put the needs of your clients first. We give them the special treatment
						they expect, which will, in turn, convert your leads into sales.
					</p>
				</div>

				{/* Types of Market Research Section */}
				<div className="space-y-6 rounded-lg shadow-lg p-2 md:p-6  bg-blue-50">
					<h1 className="font-bold text-3xl md:text-4xl text-black">Types of Market Research</h1>

					{/* Qualitative Research */}
					<div>
						<h2 className="font-bold text-xl text-black">Qualitative Research</h2>
						<p>
							Our team conducts qualitative research to increase in-depth knowledge of various
							inquiries. We use various tools to conduct this research, including face-to-face
							interviews, research, or observational studies.
						</p>
						<p>
							By embracing qualitative research, the expectations, inspirational factors, and
							explanations for explicit market conduct can be known. This type of research helps in
							the simple introduction of inquiries identifying the why and how of the distinctive
							market patterns and brand matters as opposed to just depending on the basic facts.
						</p>
					</div>

					{/* Quantitative Research */}
					<div>
						<h2 className="font-bold text-xl text-black">Quantitative Research</h2>
						<p>
							This type of research primarily deals with numbers and trends. The key host pots for
							performing this research include social media analysis, polls, previously researched
							data, and surveys.
						</p>
						<p>
							The quantitative research technique for researching the market offers the genuinely
							necessary numerical information and the least imperative benchmark to analyze and
							chart success in the wake of considering the brand interest, viability, and the
							profitability of the campaigns.
						</p>
					</div>
				</div>

				{/* Importance of Market Research Services */}
				<div className="space-y-8  lg:px-16 py-10 shadow-lg rounded-xl">
					<h1 className="font-bold text-3xl md:text-4xl text-gray-900 text-center mb-8">
						Importance of Market Research Services
					</h1>

					{/* Sections List */}
					<div className="space-y-8">
						{/* Identifying Budding Problems */}
						<div className="md:p-6 p-2 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h2 className="font-semibold text-2xl text-gray-800 mb-4">
								Identifying Budding Problems
							</h2>
							<p className="text-lg text-gray-700 mb-4">
								If you own a start-up, you must be evident to the issues that have hindered your
								growth. If you don’t address those problems at an early stage, they are likely to
								become a big issue.
							</p>
							<p className="text-lg text-gray-700">
								Utilizing market research, potential issues are distinguished and tended to before
								they get out of control. We have advanced knowledge of the latest market trends,
								which will be beneficial in creating result-driven strategies and solving the
								prevailing issues in a company.
							</p>
						</div>

						{/* Reaching Your Target Audience at the Optimal Time */}
						<div className="md:p-6 p-2 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h2 className="font-semibold text-2xl text-gray-800 mb-4">
								Reaching Your Target Audience at the Optimal Time
							</h2>
							<p className="text-lg text-gray-700 mb-4">
								Market research allows your company to reach a better target audience. The tools
								used in market research, such as questionnaires, face-to-face interviews,
								discussions, and meetings, have a major hand in getting to know the target audience.
							</p>
						</div>

						{/* Tracking Competitors */}
						<div className="md:p-6 p-2 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h2 className="font-semibold text-2xl text-gray-800 mb-4">Tracking Competitors</h2>
							<p className="text-lg text-gray-700 mb-4">
								Even if your business idea is unique, there are many other companies, just like
								yours, focusing on the same products and services as you. It means they are vying
								for the same clients.
							</p>
							<p className="text-lg text-gray-700">
								So, if you want to be a successful name in your industry, you need to keep your
								market share. For this, you need to know what your competitors are doing, what
								strategies they are implementing, and what audience they are targeting.
							</p>
						</div>

						{/* Accelerating Sales Growth */}
						<div className="md:p-6 p-2 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h2 className="font-semibold text-2xl text-gray-800 mb-4">
								Accelerating Sales Growth
							</h2>
							<p className="text-lg text-gray-700 mb-4">
								Market research, when embraced, gives significant knowledge to your organization
								about how effective its products or services are probably going to be, the typical
								cost to be set for the service, and categories that consumers will buy. All these
								data help with forecasting sales growth.
							</p>
						</div>

						{/* Research for Financing Solutions */}
						<div className="md:p-6 p-2 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h2 className="font-semibold text-2xl text-gray-800 mb-4">
								Research for Financing Solutions
							</h2>
							<p className="text-lg text-gray-700 mb-4">
								Affordable finance is essential for the success of startup companies. Financing is
								required for various purposes, such as the expansion and development of new
								products. Even though there are numerous lenders in the market, most of them do not
								lend to private startups due to the risk they are willing to take.
							</p>
						</div>

						{/* Evaluating New Market Opportunities */}
						<div className="md:p-6 p-2 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h2 className="font-semibold text-2xl text-gray-800 mb-4">
								Evaluating New Market Opportunities
							</h2>
							<p className="text-lg text-gray-700 mb-4">
								The market consistently has new opportunities for companies to embrace. Some of them
								are not very obvious, and one needs to perform research to identify and evaluate
								them.
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col bg-blue-50 p-2 md:p-6  gap-14">
					<h2 className="text-3xl md:text-4xl">Types of Chat bots</h2>

					<div className="space-y-6">
						<div className="flex flex-col gap-6">
							<h1 className="flex gap-6 text-2xl font-bold">
								<span className="items-center rounded pt-1 text-center">
									<RiMessage2Line className="w-10 text-orange-500" />
								</span>
								Customer Service Chat bots
							</h1>
						</div>
						<p className="pl-14">
							Chat bots have become a crucial element to deliver exceptional customer service with a
							very quick response effectively. We can integrate AI and NLP to provide an end-to-end
							solution to respond to routine customer requests in a humanoid fashion automatically.
							We may also develop buttons that direct visitors to areas of your website that are
							relevant to your request.
						</p>
					</div>

					<div className="space-y-6">
						<div className="flex flex-col gap-6">
							<h1 className="flex gap-6 text-2xl font-bold">
								<span className="items-center rounded pt-1 text-center">
									<RiMessage2Line className="w-10 text-orange-500" />
								</span>
								E-Commerce Bots
							</h1>
						</div>
						<p className="pl-14">
							Chat bots can be adapted to an e-commerce business. These provide exceptional customer
							service 24/7 by anticipating the needs of your users while offering to up sell and
							cross-sell solutions at key points in the buying cycle.
						</p>
					</div>

					<div className="space-y-6">
						<div className="flex flex-col gap-6">
							<h1 className="flex gap-6 text-2xl font-bold">
								<span className="items-center rounded pt-1 text-center">
									<RiMessage2Line className="w-10 text-orange-500" />
								</span>
								Travel & Tourism
							</h1>
						</div>
						<p className="pl-14">
							Our chat bots anticipate user needs by providing recommendations based on past travel
							history. It also provides recommendations on what people should see based on nearby
							locations.
						</p>
					</div>

					<div className="space-y-4">
						<h1 className="text-3xl">Simplified, Affordable Chat bots</h1>
						<p>
							We offer chat bots with the same functionality we have on our website for only $99
							setup fee plus $99 per month! You can feel free to customize the platform to offer
							predetermined answers to common questions via integrated menus within your bot.
						</p>
					</div>
				</div>

				<div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
					<h1 className="font-bold text-3xl md:text-4xl">Our Chatbot Development Process</h1>
					<div className="space-y-6">
						<ul className="list-decimal pl-5 space-y-6">
							<li>
								<span className="font-bold">Initiation:</span> This phase includes the study of the
								scope of work, commercial requirements, operational requirements, and technical
								requirements.
							</li>
							<li>
								<span className="font-bold">Project Analysis: </span>This phase requires a complete
								understanding of the key data for .net development, which includes the scope,
								deadlines, repetitive data, and the risks involved.
							</li>
							<li>
								<span className="font-bold">Team Development:</span>The right people for the right
								job are of paramount importance as they are the backbone of any development project.
								We do not leave any stone unturned to provide our best.
							</li>
							<li>
								<span className="font-bold">Commence The Project:</span>We value our customers’ time
								and our time. As such, no time is lost to start the project, once approved by all
								decision makers within your company.
							</li>
							<li>
								<span className="font-bold">Strict Delivery Schedules:</span>We maintain the
								transparency of the project status and respect strict delivery schedules. Our
								clients are well informed of the progress made at the various stages of project
								development.
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col bg-blue-50 p-2 md:p-6 mb-8 gap-10">
					<h1 className="font-bold text-3xl md:text-4xl">Why Have Us Develop Your Chatbot?</h1>
					<ul className="list-disc pl-5 space-y-2">
						<li>We deliver a flawless user experience using user-friendly interactions.</li>
						<li>
							We are fully capable of designing an effective and eye-catchy user interface on the
							front end, which can even connect to various social media platforms.
						</li>
						<li>
							We can interpret the messages of the users easily to offer a better solution for your
							queries.
						</li>
						<li>
							We don’t use our old chat bots. We make customized bots from scratch according to your
							preference, needs, and requirements. So, you can easily connect with your prospects in
							a more effective and efficient way.
						</li>
						<li>
							By developing chat bots to suit your preferences, we make sure that your users have a
							satisfied and content shopping experience.
						</li>
						<li>
							We take pride in delivering 24/7 attention to users and boost their experience on your
							website.
						</li>
						<p>
							So, contact us now for your chatbot development needs, and we will surely assist you!
						</p>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Page
