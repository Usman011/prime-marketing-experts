import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Marketing/Social Media Marketing/image1.png';
import IMG2 from '../../../public/images/Marketing/Social Media Marketing/image2.png';
import IMG3 from '../../../public/images/Marketing/Social Media Marketing/image3.png';
import IMG4 from '../../../public/images/Marketing/Social Media Marketing/image4.png';
import IMG5 from '../../../public/images/Marketing/Social Media Marketing/image5.png';
import IMG6 from '../../../public/images/Marketing/Social Media Marketing/image6.png';
import IMG7 from '../../../public/images/Marketing/Social Media Marketing/image7.png';

const Page = () => {
  return (
    <section className='container px-2 md:px-6 lg:px-12'>
      
       
          {/* Header */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
         <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
         Social Media Marketing
        </h1> 
      </div>

      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
          <h1 className="font-bold text-3xl md:text-4xl">
            Improve Online Presence With Social Media Marketing
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12 ">
              <p>
                Our agency provides the industry’s leading social media marketing services that grow businesses by building trust, credibility, and thought leadership with your targeted audience. We can customize our strategy to your company’s goals, whether it is increased brand awareness, app downloads, or lead generation.
              </p>
              <p>
                To ensure that we maximize your ROI each month on social media services, we have a specialist plan a custom strategy aligned with your business goals by conducting a thorough social media account review. We conduct an in-depth analysis of the characteristics of your most ideal prospects and examine social media accounts of key competitors to develop a campaign that effectively reaches your target audience.
              </p>
              <p>
                Our team creates and optimizes profiles on the most ideal social media networks for your business. We ensure that every detail is incorporated in your profile, whether it would be describing key products and services, or including an engaging about us section.
              </p>
            </div>
            <div className="w-full h-full">
              <Image src={IMG1} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-blue-50 p-2 md:p-6 space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full h-full">
              <Image src={IMG2} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
            <div className="space-y-8 w-full lg:w-11/12 ">
            <h1 className="font-bold text-3xl md:text-4xl">
            Surpassing Your Social Media Goals
          </h1>
              <p>
                We deploy social media strategies that are customized to your overall digital marketing goals. To develop brand recognition, we deploy strategies that grow followers relevant to your demographics, behaviors, and interests of your typical clients. Increasing the number of followers will improve word of mouth marketing and the volume of referrals. We incorporate strategies that increase engagement to ensure that your campaign builds relationships, which increases the likelihood that people will buy from your company.
              </p>
              <p>
                We explore and harness the level of synergies that your social media campaigns have with other digital marketing initiatives. It amplifies the <Link href="/marketing/content-marketing" className="text-blue-600">value of your blog content, improves search engine rankings</Link>, assists in reputation management initiatives, enhances the value of running contests, and improves customer service.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12">
            <h1 className="font-bold text-3xl md:text-4xl">
            Social Media Posting That Builds Brands
          </h1>
              <p>
                We custom design social media posts that powerfully assist in attracting, converting, and retaining your most ideal customers.
              </p>
              <p>
                Our agency uses the latest AI-powered tools so that we can understand what specific social media content is best posted at what specific time.
              </p>
              <p>
                We write engaging copy that compels your followers to like, comment, and share your social media post. We encourage our clients to provide high-quality images, or we can draw from a large database of images that coordinate with your social media posts.
              </p>
            </div>
            <div className="w-full h-full">
              <Image src={IMG3} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-blue-50 p-2 md:p-6 space-y-6">
         
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full h-full">
              <Image src={IMG4} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
            <div className="space-y-8 w-full lg:w-11/12">
            <h1 className="font-bold text-3xl md:text-4xl">
            Social Media Advertising That Generates Results
          </h1>
              <p>
                We create and manage social media advertising campaigns that help you effectively drive website traffic and conversions. We define the most ideal targeting that effectively reaches your target audience. A/B tests are deployed to help us build upon prior success, which helps us best understand what resonates with your audience and optimize how we define your company’s target audience. We implement conversion tracking to evaluate which aspects of our strategy drives results.
              </p>
              <p>
                To further strengthen social media advertising campaigns, we can deploy dynamic landing pages featuring branded calls to action and forms. Landing pages can be deployed to allow visitors to sign up for a newsletter, enter a contest, register for a webinar, and more!
              </p>
            </div>
          </div>
          <p>
            We can also track the intent of each user that submitted a form through the <Link href="/marketing/marketing-automation" className="text-blue-600">use of an advanced marketing automation platform.</Link>
          </p>
          <p>
            We deploy re-targeting ads to strategically to strengthen social media campaigns and stay in front of visitors and increase conversions. It assists in achieving the 7 impressions it takes the average customer to make a purchase.
          </p>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12">
            <h1 className="font-bold text-3xl md:text-4xl">
            Comprehensive Monitoring & Reporting Solutions
          </h1>
              <p>
                Our monitoring measures the level of reach, interactions, shares, and follower growth on each social media profile. We monitor the level of conversions of each social media advertisement variation, and what demographics are associated with the best conversion metrics. Additionally, we monitor the same data and analyze the success of posts from key competitors to adapt our strategy over time.
              </p>
              <p>
                We offer the ability to monitor your reputation throughout social media and can provide a daily analysis of key comments and their sentiment.
              </p>
              <p>
                To provide complete transparency of our social media services, we offer monthly reports that detail the performance of your social media campaigns. Your dedicated account manager is happy to review the results of this report with you anytime.
              </p>
            </div>
            <div className="w-full h-full">
              <Image src={IMG5} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-blue-50 p-2 md:p-6 space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full h-full">
              
              <Image src={IMG6} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
            <div className="space-y-8 w-full lg:w-11/12">
            <h1 className="font-bold text-3xl md:text-4xl">
            Relationship Building Social Media Marketing Services
          </h1>
              <p>
                Our agency has the ability to connect your business with influencers that are complementary to your business using multiple industry-leading platforms. We evaluate them to see how they can build engagement with their followers to determine how successful they will be partnering with your business. In turn, they are key at building trust and thought leadership of your brand on all social media accounts. Our multi-faceted influencer marketing strategy to ensure the relationship that we build with influencers achieves your goals of building your brand throughout your market.
              </p>
              <p>
                We offer managed LinkedIn Sales Navigator campaigns, which is a great solution to build close relationships with a narrowly defined audience of high potential prospects. Our agency takes the most repetitive work out of the equation so that you can focus on your most meaningful business goals.
              </p>
            </div>
          </div>
        </div>

       {/* Social Media Platforms */}
       <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
          <h1 className="font-bold text-3xl md:text-4xl">Social Media Platforms Serviced</h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12">
              <ul className="list-disc pl-5 space-y-6">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'Pinterest', 'Aligable', 'Snapchat', 'TikTok'].map((platform, index) => (
                  <li key={`${platform}-${index}`}>{platform}</li>
                ))}
              </ul>
            </div>
            <div className="w-full h-full">
              <Image src={IMG7} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
        </div>
      </div>

        <div className='w-full flex flex-col  lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto pb-10 my-10  mr-8 p-6 lg:flex-row items-center justify-evenly'>
        <h1 className='font-bold text-white text-3xl md:text-4xl text-center'>
        Get a Free Quote & Learn About Our Social Media <br /> Marketing Plans Today
        </h1>
        <Link href="/contact">
          <button className='bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 my-6 md:my-auto justify-center hover:text-black text-white items-center text-center'>CONTACT NOW</button>
        </Link>
      </div>
      
    </section>
  );
};

export default Page;