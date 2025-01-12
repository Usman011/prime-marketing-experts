import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IMG1 from '../../../public/images/Business-model-teansformation/image1.png'
import IMG2 from '../../../public/images/Business-model-teansformation/image2.png'

const Page = () => {
	return (
		<section>
			{/* Header */}
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						Business Model Transformation
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						Transform your business with data-driven strategies for the digital age
					</p>
				</div>
			</div>

			<div className="container mx-auto px-4 mt-10">
				<div className="flex flex-col space-y-6 mb-10 pb-10 justify-start">
					<h2 className="font-bold mb-4 text-3xl md:text-4xl text-gray-800">
						Market Research Services That Spark Profitable Growth!
					</h2>
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
						<div className="space-y-6 lg:w-1/2">
							<p className="text-gray-700 leading-relaxed">
								Are you a business leader? Then it would be best if you adopted a new playbook for
								transforming your antiquated business model. Change is inevitable, and awareness is
								the most exceptional agent to make that change happen. Business model transformation
								requires business leaders like you to rethink and reform how organizations are
								creating value and will create value.
							</p>
							<p className="text-gray-700 leading-relaxed">
								It is terrible if you do not reinvent your business model from now, but what is even
								worse is that you did not know that the business model was even a thing that
								requires transformation!
							</p>
							<p className="text-gray-700 leading-relaxed">
								Therefore, if you are a budding businessperson, but fail to explain what a business
								model is, we recommend you find answers and not skip this page, for you will need to
								bookmark us.
							</p>
						</div>
						<div className="lg:w-1/2">
							<Image
								src={IMG1}
								alt="Market Research"
								className="w-full h-auto object-cover rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>

				<div className="bg-blue-50 my-10 py-16 p-4 md:p-8 rounded-xl shadow-md">
					<div className="container mx-auto">
						<div className="md:flex md:gap-12 items-center">
							<div className="w-full md:w-1/2 mb-8 md:mb-0">
								<Image
									src={IMG2}
									alt="Business Model Transformation"
									className="w-full h-auto object-cover rounded-xl shadow-lg"
								/>
							</div>
							<div className="w-full md:w-1/2">
								<h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-6">
									What is Business Model Transformation?
								</h2>
								<div className="space-y-4">
									<p className="text-gray-700 leading-relaxed">
										{`A business model is a recipe that helps you create, deliver, and take value for
										your company. It is essential to winning in today's exponentially disrupted
										business era.`}
									</p>
									<p className="text-gray-700 leading-relaxed">
										While you desire to unlock hidden opportunities, reap benefits of
										transformation, and generate higher revenues, you as an entrepreneur need to
										think BIG and BOLD.
									</p>
									<p className="text-gray-700 leading-relaxed">
										The business environment is continuously evolving. That said, it is crucial to
										have an operating business model, which is progressively transformed to resonate
										with the progressive changes in the business world.
									</p>
									<p className="text-gray-700 leading-relaxed">
										To emphasize more on those mentioned above, a recent Forbes Insights/KPMG Report
										indicates that a significant proportion, 93% of corporations are planning,
										executing, or have recently completed transforming their business model. This
										report means they are regularly evolving.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="my-16">
					<h2 className="font-bold text-3xl md:text-4xl text-gray-800 mb-6">
						Better Transformation = Better Business
					</h2>
					<p className="text-gray-700 leading-relaxed mb-8">
						This is where we, Prime Marketing Experts, come in the picture to help transform your
						business model; rather have one business model in the first place. We help you to reform
						your business model to scale up sales, production, as well as cut costs and to let your
						business embrace newer goals, all with our business model transformation service.
					</p>
				</div>

				<div className="my-16">
					<h2 className="font-bold text-3xl md:text-4xl text-gray-800 mb-8">
						Transformations That Help Businesses
					</h2>
					<ul className="grid md:grid-cols-2 gap-6">
						{[
							{
								title: 'Create a strategic identity',
								content:
									'We articulate a single desirable objective or create a vision of your business model first, focus on the efforts that are required to achieve it, and then plan the transformation strategy. We conduct a variety of market research initiatives to back the identity of what your target market is looking for.',
								link: '/market-research',
							},
							{
								title: 'Delete obsolete practices',
								content:
									'Our team of experts are skeptical about "old is gold" and question all the tried and trusted approaches that might have worked out for you and then reform the business model.',
							},
							{
								title: 'Design for trust',
								content:
									'With our business model transformation service, you can develop ways to attract and deserve a commitment from your customers and employees.',
							},
							{
								title: 'Master the pivot from sprint to scale',
								content:
									'We always think of newer approaches and put them through intensive and experimental testing. This helps us to find a potentially suitable method, and then we pick that practice that is suitably the best and implement it rapidly throughout the system. Simple!',
							},
							{
								title: 'Deploy an on-demand learning approach',
								content:
									"We believe in accelerating and executing business model transformation through an on-demand learning approach. We don't rotate hats. There are two chief reasons behind this. One that allows testing of a larger number of potential options and two, because we know every business is different, so what works for others may not work for you.",
							},
							{
								title: 'Treat your legacy as an asset',
								content:
									'While business model transformation is all about new evolutions, but the past business practices have a lot to give in this change. We save the best gen from your past, divesting the other for advantageous practice and use it to fund the future.',
							},
							{
								title: 'Streamlining your digital marketing processes',
								content:
									'As a leading digital marketing agency, we evaluate the behavior of your target audience to strategize what levels of specific marketing initiatives will achieve the best results. We use leading marketing platforms to further optimize your SEO, social media, email marketing, search engine advertising, and text message marketing campaigns.',
								links: [
									{ text: 'leading digital marketing agency', href: '/marketing/marketing-plans' },
									{ text: 'social media', href: '/marketing/social-media-marketing' },
									{ text: 'email marketing', href: '/marketing/email-marketing' },
									{ text: 'search engine advertising', href: '/marketing/local-seo' },
									{
										text: 'text message marketing campaigns',
										href: '/marketing/text-message-marketing',
									},
								],
							},
						].map((item, index) => (
							<li
								key={index}
								className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
							>
								<h3 className="font-bold text-xl text-gray-800 mb-3">{item.title}</h3>
								<p className="text-gray-700">
									{item.content}
									{item.link && (
										<Link href={item.link} className="text-blue-600 hover:underline ml-1">
											Learn more
										</Link>
									)}
								</p>
								{item.links && (
									<div className="mt-4">
										{item.links.map((link, linkIndex) => (
											<Link
												key={linkIndex}
												href={link.href}
												className="text-blue-600 hover:underline mr-2"
											>
												{link.text}
											</Link>
										))}
									</div>
								)}
							</li>
						))}
					</ul>
				</div>

				<div className="my-16">
					<p className="text-gray-700 leading-relaxed mb-8">
						At any scale, a cultural shift and having highly engaged leaders is necessary. They take
						control of the steering wheel of your organization. And we are the front foot,
						award-winning leaders.
					</p>
				</div>

				<div className="bg-blue-50 my-10 py-10 space-y-10 p-4 md:p-8 rounded-lg shadow-md">
					<h2 className="text-start text-3xl md:text-4xl font-bold text-black mb-6">
						Why do you need a Business Model Transformation?
					</h2>

					<p className="text-lg text-gray-700">
						{`When we think of doing big with the business transformation, there are five keys to
						create and unlock breakthrough value for your business. And we understand the strategic
						keys of business transformation. We don't blow our trumpets; our work and services speak
						for us.`}
					</p>

					<p className="text-lg text-gray-700">
						The team of Prime Marketing Experts works with an integrated approach. Linking business
						strategy, transformation aims, and execution discipline all in one web. Hence, we
						deliver successful business transformations.
					</p>

					<p className="text-lg text-gray-700">
						​This is not all that will propel you to choose our business model transformation
						service. We have more to recite.
					</p>

					<p className="text-lg text-gray-700">
						{`We identified and practiced six keys that successfully transform a business model. Based
						on the countless engagements, some with the world's leading businesses claim that these
						strategic keys help unlock revolutionary and evolutionary value.`}
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
						<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h3 className="font-bold text-xl text-black mb-3">Strategy-informed ambition</h3>
							<p className="text-gray-700">
								We define or translate strategic business goals into a bold and realistic ambition
								through our transformational services.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h3 className="font-bold text-xl text-black mb-3">Lead with aptitudes</h3>
							<p className="text-gray-700">
								We know the importance of building discipline and regulations that establishes a new
								course that helps in keeping up with the pace of the disruptive business world.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h3 className="font-bold text-xl text-black mb-3">Drive for value</h3>
							<p className="text-gray-700">
								Business model transformation is all about creating more value or money. So we take
								due time to know the value you intend to create, explicitly.
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h3 className="font-bold text-xl text-black mb-3">Built-in sustainability</h3>
							<p className="text-gray-700">
								We are an adaptive organization that clasps hold of new ways of delivering value to
								your business and hence to ours. Your growth is our growth!
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
							<h3 className="font-bold text-xl text-black mb-3">Agile and flexible</h3>
							<p className="text-gray-700">
								While these two words define us, we also implement an agile approach that promises
								to deliver swift wins and iterative progress.
							</p>
						</div>
					</div>

					<p className="text-lg text-gray-700 mt-8">
						At any scale, a cultural shift and having highly engaged leaders is necessary. They take
						control of the steering wheel of your organization. And we are the front foot,
						award-winning leaders.
					</p>
				</div>

				<div className="bg-gray-100 my-16 py-16 px-4">
					<div className="container mx-auto">
						<h2 className="text-center mb-12 text-3xl md:text-4xl font-bold text-gray-800">
							Critical Elements of Our Business Model Transformation Service
						</h2>
						<p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
							Our business model service usually fine-tunes the connection between the critical
							elements of the business model. The following are the features of our business model
							that are transformed with our service.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: 'Customer',
									content:
										'We take your consumers into consideration, be it individuals and segments that are existing or potential buyers of the product or service.',
								},
								{
									title: 'Customer value proposition',
									content:
										"The customer value proposition implies your company's promise for the value of your products and services. It scales on accounting for a specific problem and how you solve it for a customer segment. In contrast with existing solutions, we ensure that your solution is much better and is offered at a reasonable price.",
								},
								{
									title: 'Finance',
									content:
										'The profit formula creates a perfect interplay between maximum value for customers and the company to entail profit. The business model transformation highlights the revenue model, cost structure, margin model, and resources in this profit formula. We design a system to create value and make profits, which can be funded in the future of business.',
								},
								{
									title: 'Essential Resources & Key Processes',
									content:
										'We describe how to improve capabilities or resources in detail as a part of your business model. How to synergize operational and managerial procedures of the most critical assets, like people, products, and brands is explored. These combine to deliver increased perceived value to consumers and describe how companies can reduce costs, and how that affects consumers.',
								},
							].map((item, index) => (
								<div
									key={index}
									className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
								>
									<h3 className="font-bold text-2xl text-gray-800 mb-4">{item.title}</h3>
									<p className="text-gray-700">{item.content}</p>
								</div>
							))}
						</div>
						<div className="mt-12 text-center">
							<p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
								Put simply, a business model is a buzzword in the world of business that determines
								how your business makes money. It is also often associated with transformation by
								adopting newer technology and business processes, but not transforming a company.
								Digitalization is rapidly changing how organizations create value and how they
								compete.
							</p>
							<p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
								We advise you to invest in a service that will keep leaders connected strongly to
								your business with focused roles, like our Prime Experts. We help to retain you on
								the top through our business model transformation.
							</p>
							<p className="font-bold text-2xl text-gray-800">
								Contact Prime Marketing Experts today to learn how business model transformation can
								grow your business to new heights!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Page
