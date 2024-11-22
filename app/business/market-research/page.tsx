import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IMG from '../../../public/images/marketResearch/marketResearch.png';
import IMG1 from '../../../public/images/marketResearch/image1.png';
import IMG2 from '../../../public/images/marketResearch/image2.png';

const Page = () => {
  return (
    <section className='container'>
      {/* Header Section */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide text-black'>
        Market Research
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li className="text-gray-700 font-semibold">Market Research</li>
          </ul>
        </div>
      </div>

      {/* Introduction Section */}
      <div className='flex flex-col rounded-lg shadow-lg p-6 space-y-5'>
        <h1 className='font-bold text-4xl text-black'>
          Market Research Services That Spark Profitable Growth!
        </h1>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
          <div className='space-y-6'>
            <p>
              Is your business reaching the right demographics, and getting enough conversions? Have you done everything in your power, but your business is still not thriving?
            </p>
            <p>
              If not, irrelevant content could be holding you back. Or perhaps, you have not been conducting the appropriate market research.
            </p>
            <p>Let us ask you a question.</p>
            <p className='font-bold text-xl'>Is your business making enough profit?</p>
            <p>
              Well, we’re willing to bet the answer to this question will be a big <span className='font-bold text-red-500'>NO!</span>
            </p>
            <p>
              No marketer has ever said or claimed that they have made enough profit and are done with their tactics. We are greedy and lazy. It is in human nature. We would always want to make more and more money to become successful.
            </p>
            <p>
              And what is it that makes businesses “successful?” Did you know flourishing businesses track analytics?
            </p>
            <p>
              However, the one solution that matters the most in business across all industries is <span className='font-bold text-blue-600'>CUSTOMERS!</span>
            </p>
          </div>
          <div className='w-full h-auto'>
            <Image src={IMG} alt="Market Research Overview" className='w-full h-auto' />
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Image Section */}
    <div className='w-full lg:w-1/2'>
      <Image 
        src={IMG1} 
        alt="Market Analysis" 
        className="w-full h-[300px] rounded-lg shadow-md object-cover"
      />
    </div>

    {/* Text Section */}
    <div className='w-full lg:w-1/2'>
      <h2 className='font-bold text-3xl text-black mb-4'>How We Handle Your Market Research Needs...</h2>
      <p className="text-lg mb-4">
        Market research includes gathering, examining, and deciphering data about products, markets, and customers, be it past customers, present customers, or potential customers.
      </p>
      <p className="text-lg">
        Marketing research services conduct relevant research on attributes and ways of managing the money, location, and necessities of your business’s target market, the industry in general, and your specific contenders.
      </p>
    </div>
  </div>
</div>


      {/* Detailed Services Section */}
      <div className='space-y-6 rounded-lg shadow-lg p-6 mt-10'>
        <h1 className='font-bold text-4xl text-black'>Detailed Market Research That Grows Businesses</h1>
        <p>
          We offer renowned market research solutions specializing in quantitative and qualitative market research for small as well as Fortune 500 companies.
        </p>
        <p>
          Our personalized market research services are tailored to the unique dynamics of your business. Rather than following the one size fits all approach, we make sure to do an in-depth analysis of your market and audience. We conduct a deep analysis of your business to discover otherwise unknown market opportunities and anticipate potential challenges.
        </p>
        <p>
          We know, your clients are more intricate than insights propose. Clients need to be heard, and it is just through meeting and perception that we can genuinely observe the thinking behind your information. Utilizing qualitative market research, which incorporates techniques such as in-depth interviews and focus groups, gives you a full image of your clients and customers.
        </p>
        <p className='font-bold'>Here are the types of our market research services:</p>
        <ul className='list-disc pl-5 space-y-2'>
          <li>Customer interviews</li>
          <li>Competitive analysis</li>
          <li>Full-service survey design & management</li>
          <li>Market opportunity assessments</li>
        </ul>
      </div>
      <div className='bg-blue-100 p-6 my-10 py-6 rounded-lg shadow-lg'>
  <div className="flex flex-col lg:flex-row items-center gap-8">
    {/* Text Section on the Left */}
    <div className='w-full lg:w-1/2'>
      <h1 className='font-bold text-4xl text-black'>
        Connecting Consumers With Businesses
      </h1>
      <p className='pb-6'>
        We empower your business to meet the demand of your customers with the right strategies and innovations. Our chief focus is to help you understand your customers, so they know about your product and services and can relate to them.
      </p>
      <p className='pb-6'>
        We have developed a rich experience over many years in consulting and researching for local as well as international brands across all industries. So, whether you are a budding start-up or a flourishing Fortune 500 company, we have the skills and dedication to grow your brand and reach it to wide masses.
      </p>
      <p className='pb-6'>
        Since we take pride in putting our customers first, we treat our client’s business like ours and do everything in our supremacy to make it a remarkable success. By using cutting-edge and innovative technology, we strive to stay on top so we can give the best to our clients. With us, you don’t have to worry about anything.
      </p>
      <p className='pb-6'>
        Our team provides a sheer level of professionalism and takes heed in keeping you in the loop with the progress of your project.
      </p>
    </div>

    {/* Image Section on the Right */}
    <div className='w-full lg:w-1/2'>
      <div className="w-full mt-6">
        <Image 
          src={IMG2} 
          alt="Customer Insight" 
          className="w-full h-[400px] object-cover rounded-lg shadow-lg" 
        />
      </div>
    </div>
  </div>
</div>

     {/* How We Use Market Research Section */}
<div className="space-y-6 rounded-lg shadow-lg p-6 mt-10 ">
  <h1 className="font-bold text-4xl text-black">How We Use Marketing Research In Customer-Centric Marketing</h1>
  <p>
    We can utilize your market research to develop customized content and messaging to make sure your customers are getting exactly what they are looking for. For prioritizing your needs first, we put the needs of your clients first. We give them the special treatment they expect, which will, in turn, convert your leads into sales.
  </p>
</div>

{/* Types of Market Research Section */}
<div className="space-y-6 rounded-lg shadow-lg p-6 mt-10 bg-blue-50">
  <h1 className="font-bold text-4xl text-black">Types of Market Research</h1>

  {/* Qualitative Research */}
  <div>
    <h2 className="font-bold text-xl text-black">Qualitative Research</h2>
    <p>
      Our team conducts qualitative research to increase in-depth knowledge of various inquiries. We use various tools to conduct this research, including face-to-face interviews, research, or observational studies.
    </p>
    <p>
      By embracing qualitative research, the expectations, inspirational factors, and explanations for explicit market conduct can be known. This type of research helps in the simple introduction of inquiries identifying the why and how of the distinctive market patterns and brand matters as opposed to just depending on the basic facts.
    </p>
  </div>

  {/* Quantitative Research */}
  <div>
    <h2 className="font-bold text-xl text-black">Quantitative Research</h2>
    <p>
      This type of research primarily deals with numbers and trends. The key host pots for performing this research include social media analysis, polls, previously researched data, and surveys.
    </p>
    <p>
      The quantitative research technique for researching the market offers the genuinely necessary numerical information and the least imperative benchmark to analyze and chart success in the wake of considering the brand interest, viability, and the profitability of the campaigns.
    </p>
  </div>
</div>

{/* Importance of Market Research Services */}
<div className="space-y-8 mt-12 px-6 lg:px-6 py-10  shadow-lg rounded-xl">
  <h1 className="font-bold text-4xl text-gray-900 text-center mb-8">
    Importance of Market Research Services
  </h1>

  {/* Sections List */}
  <div className="space-y-8">
    
    {/* Identifying Budding Problems */}
    <div className="p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-2xl text-gray-800 mb-4">Identifying Budding Problems</h2>
      <p className="text-lg text-gray-700 mb-4">
        If you own a start-up, you must be evident to the issues that have hindered your growth. If you don’t address those problems at an early stage, they are likely to become a big issue.
      </p>
      <p className="text-lg text-gray-700">
        Utilizing market research, potential issues are distinguished and tended to before they get out of control. We have advanced knowledge of the latest market trends, which will be beneficial in creating result-driven strategies and solving the prevailing issues in a company.
      </p>
    </div>

    {/* Reaching Your Target Audience at the Optimal Time */}
    <div className="p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-2xl text-gray-800 mb-4">Reaching Your Target Audience at the Optimal Time</h2>
      <p className="text-lg text-gray-700 mb-4">
        Market research allows your company to reach a better target audience. The tools used in market research, such as questionnaires, face-to-face interviews, discussions, and meetings, have a major hand in getting to know the target audience.
      </p>
    </div>

    {/* Tracking Competitors */}
    <div className="p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-2xl text-gray-800 mb-4">Tracking Competitors</h2>
      <p className="text-lg text-gray-700 mb-4">
        Even if your business idea is unique, there are many other companies, just like yours, focusing on the same products and services as you. It means they are vying for the same clients.
      </p>
      <p className="text-lg text-gray-700">
        So, if you want to be a successful name in your industry, you need to keep your market share. For this, you need to know what your competitors are doing, what strategies they are implementing, and what audience they are targeting.
      </p>
    </div>

    {/* Accelerating Sales Growth */}
    <div className="p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-2xl text-gray-800 mb-4">Accelerating Sales Growth</h2>
      <p className="text-lg text-gray-700 mb-4">
        Market research, when embraced, gives significant knowledge to your organization about how effective its products or services are probably going to be, the typical cost to be set for the service, and categories that consumers will buy. All these data help with forecasting sales growth.
      </p>
    </div>

    {/* Research for Financing Solutions */}
    <div className="p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-2xl text-gray-800 mb-4">Research for Financing Solutions</h2>
      <p className="text-lg text-gray-700 mb-4">
        Affordable finance is essential for the success of startup companies. Financing is required for various purposes, such as the expansion and development of new products. Even though there are numerous lenders in the market, most of them do not lend to private startups due to the risk they are willing to take.
      </p>
    </div>

    {/* Evaluating New Market Opportunities */}
    <div className="p-6  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="font-semibold text-2xl text-gray-800 mb-4">Evaluating New Market Opportunities</h2>
      <p className="text-lg text-gray-700 mb-4">
        The market consistently has new opportunities for companies to embrace. Some of them are not very obvious, and one needs to perform research to identify and evaluate them.
      </p>
    </div>
  </div>
</div>


      {/* Call to Action Section */}
      <div className='bg-orange-400 text-white text-center my-6 py-6'>
        <h2 className='font-bold text-2xl'>Do you want to understand your demographics better through market research services?</h2>
        <p className='text-lg mt-4'>
          Call us at <span className='font-bold'>617-651-1457</span> to schedule a free initial consultation!
        </p>
      </div>
    </section>
  );
};

export default Page;
