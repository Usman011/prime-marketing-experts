import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Maketing/email marketing/image1.png';
import IMG2 from '../../../public/images/Maketing/email marketing/image2.png';
import IMG3 from '../../../public/images/Maketing/email marketing/image3.png';

const Page = () => {
  return (
    <section className='container'>
      <div className="flex flex-col items-center justify-center text-center w-full h-52">
        <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
          Email Marketing Services
        </h1>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li>Email Marketing Services</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col  gap-10 mt-10">

        <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-6">
          <h1 className="font-bold text-4xl">
            Give Your Emails The Right Service, Strategy, And Execution
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12 mt-14">
              <p>
                Did you know for every $1, email marketing generates $42, which results in an ROI of 4200%? Therefore, 81% of SMBs still use email marketing for their main customer acquisition channel.
              </p>
              <p>
                These figures show why you need our email marketing services RIGHT NOW!
              </p>
              <p>
                With our competence and experience, we make sure that your email campaigns reach the right audience and prompt users to take action. Be it setting up your email program or managing your ongoing campaigns, our team can tackle each aspect of your email efforts.
              </p>
            </div>
            <div className="w-full lg:w-5/12 h-full">
              <Image src={IMG1} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
          <p className='font-bold'>By creating and personalizing your email campaigns, we help make it easy for your company to get more leads for your company.</p>
        </div>

        <div className="flex flex-col bg-blue-50 p-6 space-y-6">
          <h1 className="font-bold text-4xl">
            Full-Service Email Marketing That Makes Every Email Count
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full h-full">
              <Image src={IMG2} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                We follow a flexible and results-oriented approach to make sure that we produce the optimal mix of engaging content for your customers and profitable results for your company.
              </p>
              <p>
                Being in touch with customers is the key! We believe in this and make sure that you can always see the real picture of what’s going on with your campaigns. Also, we make sure the campaigns are customized for your audience and geared towards your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12 mt-14">
            <h1 className="font-bold text-4xl">
            Give Your Emails The Right Service, Strategy, And Execution
           </h1>
              <p>
                Did you know for every $1, email marketing generates $42, which results in an ROI of 4200%? Therefore, 81% of SMBs still use email marketing for their main customer acquisition channel.
              </p>
              <p>
                These figures show why you need our email marketing services RIGHT NOW!
              </p>
              <p>
                With our competence and experience, we make sure that your email campaigns reach the right audience and prompt users to take action. Be it setting up your email program or managing your ongoing campaigns, our team can tackle each aspect of your email efforts.
              </p>
            </div>
            <div className="w-full lg:w-5/12 h-full">
              <Image src={IMG3} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-xl">
  <h1 className="font-extrabold text-4xl text-center text-primary mb-8">
    Our Email Marketing Process
  </h1>
  <div className="space-y-8">
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="flex items-center text-2xl font-semibold text-primary mb-4">
        <span className="mr-4 text-4xl text-primary">⏰</span>
        <span>Timing</span>
      </h3>
      <p className="text-lg text-gray-700">
        Timing is the most important factor that affects the success of your email campaigns. Your current location may be in Australia, but perhaps your audience is from another country, which could be in a different time zone.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="flex items-center text-2xl font-semibold text-primary mb-4">
        <span className="mr-4 text-4xl text-primary">📅</span>
        <span>Frequency</span>
      </h3>
      <p className="text-lg text-gray-700">
        Besides the timing, the frequency also affects the performance of your campaign. Billions of emails are sent daily. So as not to flood the reader’s inbox, it is crucial to limit your emails at one or two emails per week at the most. We will ensure that each email is sent at the right time to maximize conversions.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="flex items-center text-2xl font-semibold text-primary mb-4">
        <span className="mr-4 text-4xl text-primary">✉️</span>
        <span>Subject Lines</span>
      </h3>
      <p className="text-lg text-gray-700">
        We cannot stress enough the importance of subject lines. Along with catching the user’s attention, the right subject line helps the user have a positive image of your brand. We will craft subject lines that intrigue readers and keep them under 50 characters.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="flex items-center text-2xl font-semibold text-primary mb-4">
        <span className="mr-4 text-4xl text-primary">📝</span>
        <span>Content</span>
      </h3>
      <p className="text-lg text-gray-700">
        Content is king! Without the right content, no one will read your email. We will create compelling, informative content and ensure it’s easily skimmed to prompt readers to take action.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="flex items-center text-2xl font-semibold text-primary mb-4">
        <span className="mr-4 text-4xl text-primary">📱</span>
        <span>Mobile Responsiveness</span>
      </h3>
      <p className="text-lg text-gray-700">
        With 46% of email opens happening on mobile, optimizing for all devices is a must. We ensure all email campaigns are mobile-responsive, so users don’t need to zoom in or out.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="flex items-center text-2xl font-semibold text-primary mb-4">
        <span className="mr-4 text-4xl text-primary">🎯</span>
        <span>Personalization</span>
      </h3>
      <p className="text-lg text-gray-700">
        Personalization goes beyond using someone`s name. We tailor email content based on interests and preferences to boost engagement and conversions.
      </p>
    </div>
  </div>
</div>


<div className="bg-white p-10 rounded-xl shadow-lg">
  <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
    Using The Best Email Marketing Strategies & Technology
  </h1>
  <div className="space-y-10">
    <div className="space-y-8">
      <p className="text-lg text-gray-700">
        Accessibility of a particular website depends on many factors. All these workings of accessibility run in tandem consisting of web techniques, web browsers, and other agents. One must select the best software that may provide technical specifications, guidelines, procedures, and supporting resources that illustrate accessibility solutions.
      </p>
      <h2 className="text-3xl font-bold text-gray-900">
        Essential Benefits of Website Accessibility Software
      </h2>
    </div>

    {/* Steps Section */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="flex items-center text-xl font-semibold text-black mb-4">
          <span className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
            1
          </span>
          Email Marketing List Development
        </h3>
        <p className="text-black">
          The quality of the email marketing list determines the success of your email. We create a high-quality list tailored to your brand and audience.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="flex items-center text-xl font-semibold text-black mb-4">
          <span className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
            2
          </span>
          List Segmentation And Strategy
        </h3>
        <p className="text-black">
          We segment and keep your list updated, ensuring better targeting. An effective email strategy boosts ROI.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="flex items-center text-xl font-semibold text-black mb-4">
          <span className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
            3
          </span>
          Email Template Design And Development
        </h3>
        <p className="text-black">
          We create responsive and visually appealing email templates that stand out and communicate your message effectively.
        </p>
      </div>

      {/* Step 4 */}
      <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="flex items-center text-xl font-semibold text-black mb-4">
          <span className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
            4
          </span>
          Email Content Creation And Automation
        </h3>
        <p className="text-black">
          We craft unique, relevant email content and automate campaigns using advanced tools like marketing automation software.
        </p>
      </div>

      {/* Step 5 */}
      <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="flex items-center text-xl font-semibold text-black mb-4">
          <span className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
            5
          </span>
          Testing
        </h3>
        <p className="text-black">
          We use A/B testing to determine the most effective strategies for engagement and conversions.
        </p>
      </div>

      {/* Step 6 */}
      <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h3 className="flex items-center text-xl font-semibold text-black mb-4">
          <span className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
            6
          </span>
          Measure & Analyze
        </h3>
        <p className="text-black">
          We analyze the performance of email campaigns to improve open rates, conversions, and ROI.
        </p>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Page;