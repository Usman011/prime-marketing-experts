import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG from '../../../public/images/Professtional-business-plans/image1.png';
import IMG1 from '../../../public/images/Professtional-business-plans/image2.png';

const Page = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center text-center mt-12">
        <h1 className="font-bold text-4xl md:text-5xl leading-tight text-gray-800">
          Professional Business Plans
        </h1>
        <div className="flex gap-6 mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li className="text-gray-500">Professional Business Plans</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex shadow-lg rounded-xl p-6 flex-col lg:flex-row gap-8">
          <div className="space-y-6">
            <h2 className="font-bold text-3xl md:text-4xl text-gray-800">
              Professional Business Plans That Grow Businesses
            </h2>
            <p className="text-lg text-gray-700">
              Is your business still not where you want it to be? Do you have an expert business plan in place?
            </p>
            <p className="text-lg text-gray-700">
              If you don`t have a clear goal and a business plan, you`re like <span className="font-bold">Alice in Wonderland</span> with your business.
            </p>
            <p className="text-lg text-gray-700">
              A goal without <span className="font-bold">a plan</span> is simply a <span className="font-bold">wish!</span>
            </p>
            <p className="text-lg text-gray-700">
              A well-written business plan is critical to position your business for success. It should be detailed and guide you toward your goals, helping you raise capital and secure loans.
            </p>
          </div>
          <div className="w-full h-auto ml-auto mt-auto lg:ml-28">
            <Image src={IMG} alt="Business Strategy" width={400} height={400} className="" />
          </div>
        </div>

        <div className="bg-blue-50 p-8 mt-12 rounded-lg shadow-md">
          <h2 className="font-bold text-3xl text-gray-800">
            A Business Plan Gives You a Clear Growth Roadmap!
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Without a business plan, your business lacks direction, and everything becomes chaotic. A well-crafted business plan is essential for success.
          </p>
        </div>

        <div className="mt-8 shadow-lg rounded-xl p-6">
          <h2 className="font-bold text-3xl text-gray-800">
            Why Choose Prime Marketing Experts?
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            We are experts in crafting professional business plans for entrepreneurs and small businesses globally. Here`s why you should work with us:
          </p>

          <div className="space-y-4 mt-6">
            <p className="font-bold text-xl text-gray-800">Reason 1: World’s Top Business Planning Company</p>
            <p className="text-lg text-gray-700">
              We are award-winning consultants, following best practices to deliver top-tier business plans and services worldwide.
            </p>

            <p className="font-bold text-xl text-gray-800">Reason 2: Strategize to Win</p>
            <p className="text-lg text-gray-700">
              We analyze your market, industry, and vision, ensuring a customized business plan tailored to your business goals.
            </p>

            <p className="font-bold text-xl text-gray-800">Reason 3: Robust Business Plan</p>
            <p className="text-lg text-gray-700">
              Our plans meet global standards, ensuring that you can secure funding and attract investors.
            </p>

            <p className="font-bold text-xl text-gray-800">Reason 4: Confidentiality</p>
            <p className="text-lg text-gray-700">
              We maintain the highest level of confidentiality and safeguard your business information at all times.
            </p>

            <p className="font-bold text-xl text-gray-800">Reason 5: Affordable, Accessible, Available</p>
            <p className="text-lg text-gray-700">
              We offer affordable business planning and digital marketing services, ensuring your business thrives with personalized support.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 mt-12 rounded-lg shadow-md flex items-center space-x-8">
  <div className="flex-1">
    <h2 className="font-bold text-3xl text-gray-800">Why is a Business Plan Vital?</h2>
    <p className="text-lg text-gray-700 mt-4">
      A business plan is essential for organizing your business and setting clear goals to ensure your company’s success.
    </p>
    <ul className="list-disc pl-6 space-y-4 mt-6">
      <li className="text-lg text-gray-700">
        <strong>An Organized Business:</strong> We help you organize your business and avoid costly mistakes.
      </li>
      <li className="text-lg text-gray-700">
        <strong>Crystal Clear Goals:</strong> Our business plans clarify your mission and vision for investors.
      </li>
      <li className="text-lg text-gray-700">
        <strong>A Future-Ready Business:</strong> Our research helps you plan for future demands and maintain success.
      </li>
    </ul>
  </div>
  <div className="flex-shrink-0 w-1/3">
  <Image src={IMG1} alt="Business Strategy" width={400} height={400} className="rounded-lg shadow-lg" />
  </div>
</div>


<div className="mt-12 px-6 lg:px-16 py-10 bg-white shadow-lg rounded-xl">
  {/* Main Title */}
  <h2 className="font-bold text-4xl text-gray-900 text-center mb-6">
    What Business Plan Services Prime Marketing Experts Offers?
  </h2>
  <p className="text-lg text-gray-700 text-center mb-8">
    Successful CEOs and entrepreneurs trust our business plan writing services. Let us help you take your business to the next level.
  </p>

  {/* Services List - Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Executive Summary</h3>
      <p className="text-lg text-gray-700">A snapshot of your business and strategy for the future.</p>
    </div>
    <div className="space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Business Description</h3>
      <p className="text-lg text-gray-700">A detailed outline of your business operations and goals.</p>
    </div>
    <div className="space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Product Offering</h3>
      <p className="text-lg text-gray-700">Describe what products or services you are offering to your customers.</p>
    </div>
    <div className="space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Sales, Marketing, and Promotion</h3>
      <p className="text-lg text-gray-700">Effective strategies to attract and retain customers.</p>
    </div>
    <div className="space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Operations</h3>
      <p className="text-lg text-gray-700">Optimizing operational efficiency for long-term success.</p>
    </div>
    <div className="space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Finance</h3>
      <p className="text-lg text-gray-700">Financial planning and forecasting for profitability.</p>
    </div>
    <div className="space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Management Team</h3>
      <p className="text-lg text-gray-700">Details of your leadership team and their roles.</p>
    </div>
    <div className="space-y-4 p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800">Projections</h3>
      <p className="text-lg text-gray-700">Future projections and expected financial outcomes.</p>
    </div>
  </div>

  {/* Service Descriptions */}
  <div className="mt-10 space-y-8">
    {/* Pro-Forma Financial Statements */}
    <div>
      <p className="font-semibold text-xl text-gray-800 mb-2">Pro-Forma Financial Statements:</p>
      <p className="text-lg text-gray-700 mb-6">
        The word “Pro-Forma” might be oblivious to you. However, it is just a fancy use for “future” or “projected.” Essentially, pro-forma income statements are budgetary benchmarks for operating your business in the future. It might include expenses expected in the second quarter based on an analysis of the first quarter.
      </p>

      <p className="text-lg text-gray-700 mb-6">It helps identify & prioritize essential enhancements in your business operations.</p>

      <p className="text-lg text-gray-700 mb-6">
        A pro-forma statement allows you to make the right future choices for your company based on present data.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        We propel your business’s growth with well-researched Pro-forma Financial Statements as a critical part of the business plan.
      </p>
    </div>

    {/* Bank Ready Plan */}
    <div>
      <p className="font-semibold text-xl text-gray-800 mb-2">Bank Ready Plan:</p>
      <p className="text-lg text-gray-700 mb-6">
        We provide business plan writing services if you are seeking loans from the Small Business Administration (SBA) or any bank. SBA/Bank ready planning solutions include details like your market summary, comprehensive financial reports (3-5 years), competitor analysis, and expected growth rate. With such a professional business plan, you are bound to get the go-ahead you require.
      </p>
    </div>

    {/* Pitch Decks */}
    <div>
      <p className="font-semibold text-xl text-gray-800 mb-2">Pitch Decks:</p>
      <p className="text-lg text-gray-700 mb-6">
        You know about the elevator pitch. A pitch deck, unlike a full business plan, is clean, crisp, and tells the right story with minimal information. It should include essential market research and analysis without overwhelming the audience.
      </p>
    </div>

    {/* Custom Business Plans */}
    <div>
      <p className="font-semibold text-xl text-gray-800 mb-2">Custom Business Plans:</p>
      <p className="text-lg text-gray-700 mb-6">
        At Prime Marketing Experts, we ensure that each business plan is custom-built to meet your specific business needs. Our team of experienced consultants creates high-quality documents to help enhance your business ideation.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Let us handle the planning while you focus on perfecting your product and services.
      </p>
    </div>
  </div>
</div>

      <div className="w-full bg-orange-500 mt-12 py-6 flex flex-col lg:flex-row items-center justify-around">
        <h2 className="font-bold text-white text-4xl text-center">
          Plan The Future Growth Of Your Business
        </h2>
        <Link href="/contact">
          <button className="bg-black hover:bg-white text-white hover:text-black transition-transform transform hover:scale-105 mt-6 lg:mt-0 px-8 py-3 text-xl">
            CONTACT NOW
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
}

export default Page;
