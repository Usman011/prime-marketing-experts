import Image from 'next/image'
import Link from 'next/link'
import IMG1 from '../../../public/images/Marketing/google-grant/image1.png'
import IMG2 from '../../../public/images/Marketing/google-grant/image2.png'
import IMG3 from '../../../public/images/Marketing/google-grant/image3.png'
import React from 'react'

const Page = () => {
	return (
		<section className="">
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Google Grant Management
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Discover the latest insights, trends, and strategies in Google Grant management, digital
						marketing, and nonprofit growth.
					</p>
				</div>
			</div>

			<div className="flex flex-col gap-10 mt-10 container">
				<div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6">
					{/* Text Content */}
					<div className="flex flex-col space-y-6 justify-start">
						<h1 className="font-bold text-3xl md:text-4xl">
							Google Ad Grant Management That Grows Nonprofits
						</h1>
						<div className="space-y-6">
							<p>
								Do you manage a nonprofit organization but want to make the most of your
								<Link href="/" className="text-blue-500">
									{' '}
									digital marketing initiatives?
								</Link>
							</p>
							<p>Do you want your nonprofit organization to scale revenue & impact?</p>
							<p>
								Well, it’s time to amplify and accelerate your nonprofit’s profit. Yes, it’s
								possible.
							</p>
							<p className="font-bold">
								Are you thinking about how this can be possible when you are short on funds?
							</p>
							<p>
								Google can be your savior. Yes, thankfully, Google offers a program that allows
								nonprofit organizations, just like yours, to advertise and promote their
								organization using Google Ads free of advertising costs.
							</p>
						</div>
					</div>

					{/* Image Content */}
					<div className="flex-shrink-0 w-full lg:w-2/4">
						<Image
							src={IMG1}
							alt="Nonprofit Growth"
							className="rounded-lg shadow-md w-full h-auto"
						/>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row bg-blue-50 p-2 md:p-6 space-y-6 lg:space-y-0 lg:space-x-6 items-start">
					{/* Image Content */}
					<div className="flex-shrink-0 w-full lg:w-2/4">
						<Image
							src={IMG2} // Replace IMG1 with your image source
							alt="Google Grant Assistance"
							className="rounded-lg shadow-md w-full h-auto"
						/>
					</div>

					{/* Text Content */}
					<div className="flex flex-col space-y-6 justify-start">
						<h1 className="font-bold text-3xl md:text-4xl">
							Don’t have a Google grant yet? Don’t worry; Prime Marketing Experts can help you out!
						</h1>
						<div className="space-y-6">
							<p>
								We can help you create ad campaigns for every one of your programs, services, or
								areas of focus. By selecting the right keywords for every campaign, we write
								tempting ads to appear in search results. Along with this, we ceaselessly test
								various campaigns to improve performance. We will also get your nonprofit
								organization approved as a part of our service.
							</p>
							<p>
								Just enlighten us on your goals and objectives, and leave it to the EXPERTS! We make{' '}
								<span className="font-bold">Google Ad Grant Management</span> simple.
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6 justify-start">
					<h1 className="font-bold text-3xl md:text-4xl">What is Google Grant Management?</h1>
					<div className="space-y-6">
						<p>
							Google Grant management includes everything that your nonprofit organization needs to
							improve your search engine presence.
						</p>
						<p>What is included in Google Grant Management? Here is the list!</p>
						<ul className="list-disc pl-5 space-y-2">
							<li>Applying for a Google Grant</li>
							<li> Setting up your Google Grant account</li>
							<li>Selecting the relevant keywords for your campaign</li>
							<li> Creating engaging ad copy that is optimized for a high quality score</li>
							<li> Monitoring the performance of your ads</li>
							<li> Maintain the Google Grant account</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row bg-blue-50 p-2 md:p-6 space-y-6 lg:space-y-0 lg:space-x-6 items-start">
					{/* Text Content */}
					<div className="flex flex-col space-y-6 justify-start lg:w-2/3">
						<h1 className="font-bold text-3xl md:text-4xl">
							Hire Prime Marketing Experts for Effective Google Grant Management
						</h1>
						<div className="space-y-6">
							<p>
								We know organizations that are dealing with some of the toughest challenges in a
								revolutionary way. We, at Prime Marketing Experts, help game-changing nonprofits
								like yours, accelerate lead acquisition, increase brand awareness, generate more
								revenue, and scale social impact. All in all, we want to support organizations that
								are changing the world for good.
							</p>
							<p>
								We can provide solutions that help you maximize results at every point in the
								journey of your volunteers, staff, and donors, be it Google Ad Grants, email
								marketing, or social media advertising. Our team uses cutting-edge and result-driven
								strategies to help nonprofits maximize their impact.
							</p>
							<p>
								We strive to help as many nonprofit organizations as we can by maximizing the value
								of your Google Ad Grant.
							</p>
							<p>You are doing the GOOD work, and we want to be a part of it!</p>
							<p>
								Google Ad Grants can be a powerful tool for your marketing and fundraising strategy!
								Make the most of it with us!
							</p>
						</div>
					</div>

					{/* Image Content */}
					<div className="flex-shrink-0 w-full lg:w-2/4">
						<Image
							src={IMG3} // Replace IMG1 with your image source
							alt="Google Grant Management"
							className="rounded-lg shadow-md w-full h-auto"
						/>
					</div>
				</div>

				<div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6 justify-start">
					<h1 className="font-bold text-3xl md:text-4xl">Qualify For Google Ad Grants With Us!</h1>
					<div className="space-y-6">
						<p>
							If you want to qualify for a Google Ad Grant, your nonprofit organization must fulfill
							the following guidelines set forth by Google:
						</p>
						<p>What is included in Google Grant Management? Here is the list!</p>
						<ul className="list-decimal pl-4 space-y-2">
							<li>Your nonprofit organization must hold a valid 501c3 charity status.</li>
							<li>
								{' '}
								You must acknowledge and be in agreement with the necessary certifications
								concerning nondiscrimination and donation receipt and use of Google.
							</li>
							<li>
								You must have a high-quality and engaging website that meets the Google Ad Grant
								website policy.
							</li>
							<li>
								{' '}
								You must gain approval through the process of Ad Grants pre-qualification after you
								have enrolled in Google for Nonprofits.
							</li>
						</ul>
						<p>
							We, at Prime Marketing Experts, will assist your organization in applying for a Google
							Ad Grant so you won’t get rejected by Google based on some random technicality.
						</p>
					</div>
				</div>

				<div className="flex flex-col mb-10 bg-blue-50 p-2 md:p-6 space-y-6 justify-start">
					<h1 className="font-bold text-3xl md:text-4xl">Why Prime Marketing Experts?</h1>
					<div className="space-y-6">
						<ul className="list-disc pl-4 space-y-2">
							<li className="font-bold">Google Certified</li>
							<p>
								Need we say more? Yes, we are Google certified, and we can offer the best and help
								your nonprofit organization keep up with the good work.
							</p>

							<li className="font-bold">Full Flexibility </li>
							<p>
								We have various plans for you, specially tailored according to your needs so that
								you can stay agile and flexible.
							</p>

							<li className="font-bold">We Have Dedicated Customer Support </li>
							<p>
								With us, you have easy access to your personal Grant Manager via email round the
								clock. Also, we make regular check-in calls and keep you in loops regarding the
								progress of your campaigns.
							</p>

							<li className="font-bold">We Can Create Unlimited Campaigns </li>
							<p>
								With Prime Marketing Experts, you don’t have to worry about the number of your
								campaigns. If you need, we will create unlimited ad groups and campaigns to help you
								reach the maximum audience.
							</p>

							<li className="font-bold">We Develop Compelling Ads</li>
							<p>
								Yes, we can create engaging ads for your organization to get you the highest
								possible CTR (Click through rate) and bring traffic to your landing pages.
							</p>

							<li className="font-bold">We Create Amazing Landing Pages </li>
							<p>
								Is your landing page not enough? Is it not getting the desired clicks? Well, leave
								it to us, and we will help you create a click-worthy landing page that can abet you
								get the most out of your campaign potential.
							</p>

							<li className="font-bold">We Assess The Performance Of Your Google Grant Campaign</li>
							<p>
								We track your account’s success by measuring a number of metrics. We will measure
								your campaign’s performance and improve your strategy to get the best results.
							</p>
						</ul>
					</div>
				</div>

				<div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6 justify-start">
					<h1 className="font-bold text-3xl md:text-4xl">
						Our KPIs Measure The Performance Of Your Google Ad Grant
					</h1>
					<div className="space-y-6">
						<p>
							Before you kick start devising a marketing plan, our experts gather the crucial info
							about your business and follow the following procedure:
						</p>

						<ul className="list-disc pl-5 space-y-6">
							<li>
								<span className="font-bold">CTR:</span>It’s unmistakably imperative to know how many
								people are really clicking on your ads. Assessing your CTR (Click-Through-Rate) can
								help you figure out which of your keywords and ads are generally relevant to your
								audience and prompt them to click on it. We also use CTR to see which ad copy drives
								the most outcomes.
							</li>
							<li>
								<span className="font-bold">Keyword Quality Score:</span> You can determine the
								quality of your keywords using Google’s quality score of 1 to 10. If your keywords
								are not ranking above 4, you must change your keywords or find a great strategy to
								optimize them.{' '}
							</li>
							<li>
								<span className="font-bold">Impressions:</span> On the off chance that your keywords
								are excessively explicit, you risk passing up search traffic. So, you should analyze
								your keywords to see which ones have the lowest number of impressions and decide
								whether there are more extensive keywords varieties that may attract more eyes.
							</li>
							<li>
								<span className="font-bold">Conversions:</span>We measure the number of people who
								have made a phone call or submitted a form to meet a key requirement to maintain the
								account, and to measure the amount of revenue or impact the campaign makes on your
								organization.{' '}
							</li>
						</ul>
						<p>
							It seems complicated. That is why; we are here. We can do this for you by using
							various relevant keyword tools to find more popular keywords for your nonprofit
							organization.
						</p>
						<p className="font-bold italic">
							Still perplexed about whether you are eligible for the Google Ad Grants program? Don’t
							worry, give us a call, and we will answer all your questions that you might have
							regarding this amazing program.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-orange-500 mt-20 py-12 px-6 lg:px-12">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 container mx-auto">
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left leading-tight max-w-2xl">
						Grow Your Nonprofit Today!
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

export default Page
