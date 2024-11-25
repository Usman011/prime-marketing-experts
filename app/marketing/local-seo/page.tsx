import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Maketing/localSeo/image1.png'
import IMG2 from '../../../public/images/Maketing/localSeo/image2.png'
import IMG3 from '../../../public/images/Maketing/localSeo/image3.png'

const Page = () => {
    return (
        <section className='container'>
             <div className="flex flex-col items-center justify-center text-center w-full h-52">
        <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
        Local SEO
        </h1>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li>Local SEO</li>
          </ul>
        </div>
      </div>

      <div className='my-10 gap-10'>
        <div className="flex rounded-lg shadow-lg my-10 hover:shadow-xl transition-shadow duration-300 p-6 flex-col ">
          <h1 className="text-4xl">
          Local SEO Helps People Find Your Neighborhood Business
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
              Do you own a local business? Are people finding your local store? Are you struggling with scaling your business? Well, if you are not getting a lot of leads from the search engine, you are not alone.
              </p>
              <p className='font-bold'>Did you know 46% of Google searches are local?</p>
              <p className='font-bold italic'>
              And, 80% of these searches convert.
              </p>
              <p>
              Now, what does this mean? Well, given the facts, if you have a local business and you don’t leverage local SEO, you are missing out on a lot of opportunities.
              </p>
              <p>
              Yes, if you are not on the first page of Google and Bing, you may not get any visitors to your site. You’d be amazed to know that not many people go past the first page.
              </p>
              <p>
              Google’s search results are decidedly personalized based on the company’s geographical location. For instance, a search for pizza places in Boston will deliver different results than such a search within New York City. These searches depend on your country, your state, and even your city.
              </p>
             
            </div>
            <div className="mt-10 mb-2">
              <Image src={IMG1} alt="Market Research" layout="responsive" width={800} height={600} />
            </div>
          </div>

          <div className='space-y-4 mt-8 mb-8'>
          <h1 className="font-bold  text-2xl">Let your local people find you easily…</h1>
          <p>With this being said, if your local SEO is weak, it will be difficult for people to find you. No matter what business you have – be it dental, a hair salon, or an ice cream parlor, everyone can get to know about your business through local SEO. Whether you want to make a trend in your society or want to grow your startup, local SEO is the answer!</p>
          </div>

        </div>

        <div className="flex flex-col bg-blue-50 p-6 space-y-6 justify-start">
  
  {/* Content Section */}
  <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-14">
   
     {/* Image Content */}
     <div className="flex-shrink-0 w-full lg:w-2/4">
      <Image
        src={IMG2} // Replace IMG1 with your image source
        alt="Local SEO Illustration"
        className="rounded-lg shadow-md w-full h-auto"
      />
    </div>
    {/* Text Content */}
    
    <div className="space-y-6 lg:w-2/3">
    {/* Title */}
  <h1 className="text-4xl font-bold">What Is Local SEO?</h1>

      <p>
        Local SEO is a process of optimizing your online presence to make sure that local searchers can find you easily. With this, you will get more leads from relevant local searches. The local SEO pack is referred to as the three businesses that appear immediately under a map within the search results on a locally relevant keyword.
      </p>
      <p>
        However, local SEO is not just about Google. People use a variety of search engines such as Google, Yelp, Bing, and Apple Maps to search for their nearby stores.
      </p>

      <h1 className='text-4xl'>
          Be Found and Chosen with Prime Marketing Experts
          </h1>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
            <div className='space-y-6'>
              <p>We understand that comprehensive strategies are important for getting ranked on top local searches. Let us take your business to your local audience, and focus on expanding your store.</p>  

            </div>
            </div>
    </div>

   
  </div>
</div>



        

          
<div className="flex flex-col rounded-lg shadow-lg my-10 hover:shadow-xl transition-shadow duration-300 p-6 mt-8 space-y-8">
  {/* Title */}
  <h1 className="text-4xl font-bold">Local SEO That Sells</h1>

  {/* Content Section */}
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
    {/* Text Content */}
    <div className="space-y-6 lg:w-2/3">
      {/* Introduction */}
      <p>
        We take pride in confessing that our team is creative, informed, communicative, and responsible. We study your business model in-depth and, at the same time, help you gain and retain customers.
      </p>

      {/* Commitment */}
      <p>
        We take our work seriously. And, not to be bragging or anything, but we are pretty good at what we do. We live and breathe your goals, and we will not stop until you have 100% of what you have thought for your business. This is the only reason why thousands of our customers trust our team and us.
      </p>

      {/* Tracking and Tools */}
      <p>
        We keep track of your campaign’s performance with a robust analytics tool and keep you in the loop about ranking and leads.
      </p>
      <p className="font-bold">
        Be it tracking your citations, optimizing the keywords, creating backlinks, or optimizing citations – we do it all!
      </p>

      {/* Competitive Edge */}
      <p>
        We strive to deliver unmatched digital marketing services to keep you ahead in the race with your competitors. No matter what your goal is for your business, we can help you out.
      </p>
      <p>
        Our team uses in-depth research and exclusive data to endow you with a powerful, unique, and important perspective for each success plan.
      </p>

      {/* Citations and Social Media */}
      <p>
        We make sure that each local business citation we create has detailed business information to drive high-quality referral website traffic and search engine ranking improvements.
      </p>
      <p>
        We also create social media posts for your Google Business profile, which further improves your rank and can trigger a snippet within search results to help your business stand out.
      </p>

      {/* Call to Action */}
      <p>
        Join hands with our team, and we will ensure that your local SEO campaign achieves remarkable success. By working on focused objectives, we strive to get the best results for your business. As a digital marketing leader, we can help you with converting visitors, driving traffic, and measuring effectiveness.
      </p>
      <p className="font-bold">
        We treat businesses as if they were our own!
      </p>
      <p className="font-bold">
        So, you don’t have to worry about anything, because with us, you are in the right hands!
      </p>
    </div>

    {/* Optional Image Section */}
    <div className="flex-shrink-0 w-full lg:w-1/3">
      <Image
        src={IMG3} // Replace with your image source
        alt="Local SEO Services"
        className="rounded-lg shadow-md w-full h-auto"
      />
    </div>
  </div>
</div>


<div className="flex flex-col mt-8 bg-blue-50 p-6 space-y-8">
  {/* Title */}
  <h1 className="text-4xl font-bold text-center">Benefits of Local SEO</h1>

  {/* Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Local SEO Boosts Traffic and Sales</h2>
      <p>
        Along with website traffic, local searches result in foot traffic as well. In fact, 78% of these searches result in offline purchases.
      </p>
      <p className="mt-2">
        Therefore, if you have your business in local results, you will attract more website visitors. A mobile-optimized website is essential for success in local search.
      </p>
      <p className="mt-2">
        Our skilled developers can instantly cater to your website needs to ensure success.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Improves Relevant Search Engine Traffic</h2>
      <p>
        Local SEO ensures your audience gets accurate and relevant content, leading to better search rankings and brand trust.
      </p>
      <p className="mt-2">
        Monitoring and improving page loading speed also enhances user experience, directly impacting sales and loyalty.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Local SEO is Free</h2>
      <p>
        Local SEO is cost-effective and can be done using free or inexpensive tools. However, as competition grows, managing local SEO effectively has become complex.
      </p>
      <p className="mt-2">
        Let us handle your local SEO efficiently and affordably, so you can focus on growing your business.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Outpace Your Competitors</h2>
      <p>
        Surprisingly, 56% of local businesses have not claimed their Google My Business listing. Leverage this opportunity to get ahead of your competition.
      </p>
      <p className="mt-2">Hire us now and let’s rise above your competitors together!</p>
    </div>

    {/* Card 5 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Reach Every Customer</h2>
      <p>
        More people are using local SEO over maps to find businesses. Mobile users rely on local searches to find the best options nearby, right when they need them.
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Result-Driven & Long-Term</h2>
      <p>
        Local SEO offers long-term benefits by enhancing organic visibility. People prefer organic results over paid ads, making it a wise investment.
      </p>
      <p className="mt-2">
        Pair local SEO with <Link href="/marketing/seo-web-design" className="text-blue-500">search engine advertising</Link> to maximize visibility.
      </p>
    </div>

    {/* Card 7 */}
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold mb-4">Builds Trust with Reviews</h2>
      <p>
        Reviews significantly influence traffic and conversions. We ensure you receive enough reviews to boost your visibility in local search results.
      </p>
      <p className="mt-2">
        Our team also monitors reviews and ensures timely responses to maintain a strong reputation.
      </p>
    </div>
  </div>
</div>

          <div className='flex flex-col mt-8 rounded-lg shadow-lg my-10 hover:shadow-xl transition-shadow duration-300 p-6 space-y-6 justify-start'>
          <h1 className='text-4xl'>
          Be Found and Chosen with Prime Marketing Experts
          </h1>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
            <div className='space-y-6'>
              <ul className='list-disc pl-5 space-y-2'>
              <li>Website Structure</li>
              <li>Backlink Profile</li>
              <li>Domain Age</li>
              <li>Business Directory Citations</li>
              <li>Website Content</li>
              <li>Average User’s Length of Website Visit</li>
              <li>Distance Between the Business and the User’s Search</li>
              <li>Profile Quality & Reviews on Google Business</li>
              </ul>
            </div>
            </div>
          </div>

          <div className='flex flex-col mt-8 bg-blue-50 p-6 space-y-6 justify-start'>
          <h1 className='text-4xl'>
          Here Is How We Can Help
          </h1>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
            <div className='space-y-6'>
              <p>We create and optimize Google Business (GMB) and Bing Places for Business lists to ensure all of your business details by entering your address, phone number, opening hours, and an overview of the products/services. This makes sure that your profile has the best possible presentation and facilitates increased visibility in your region.</p>  
              <p>Having an excellent presence on local searches is not just about excellent reviews. Our team strategically is skilled and qualified in creating citations in local business directories that link to your website.</p>
              <p>We periodically<Link href="/marketing/content-marketing" className='text-blue-500'> improve your website content</Link> and keywords based on current search trends. We ensure to enhance pages that reflect keywords related to the ideal type of client you wish to attract. Plus, we make sure the page has the right combination of keywords that maximizes your local SEO results.</p>
              <p>We can also optimize the presence of your Yelp listing. It is particularly important because their database is used to display the results within the Google Maps mobile app, Apple Maps, and Bing local application. As a certified Yelp agency, our team is thoroughly trained in strategies to make your business more visible on these platforms.</p>
              <p>So, whether you want to get more local visitors or want to stay ahead of your competitors, we, at Prime Marketing Experts, can help you with getting to the top of the local search pack. Get in touch with our team, and we will surely guide you right.</p>

            </div>
            </div>
          </div>
         
          <div className='w-full flex flex-col gap-4 lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto mt-6 mb-6 lg:flex-row items-center  justify-around'>
        <h1 className='font-bold text-white text-4xl text-center'>
          Plan The Future Growth Of Your Business
        </h1>
        <Link href="/contact">
          <button className='bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 my-6 md:my-auto justify-center hover:text-black text-white items-center text-center'>CONTACT NOW</button>
        </Link>
      </div>
         
        </div>

        </section>
    );
}

export default Page;
