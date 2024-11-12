import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Maketing/inbound marketing/image1.png'
import IMG2 from '../../../public/images/Maketing/inbound marketing/image2.png'

const Page = () => {
    return (
       <section className='container'>
         <div className="flex flex-col items-center justify-center w-full h-52 text-center">
        <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
        Inbound Marketing Services
        </h1>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li> Inbound Marketing Services</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mx-2 gap-10 mt-10">

        <div className="flex flex-col bg-blue-50 p-2 space-y-6">
          <h1 className="font-bold text-4xl">
          Inbound Marketing That Reaches Your Growth Goals Faster!
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12 mt-14">
              <p>
              Tired of spending countless hours selling your brand to customers? 
              </p>
              <p>
              Ever wondered how you can trigger the next round of business growth?
              </p>
              <p>
              If yes, it is the right time to switch to inbound marketing!
              </p>
              <p>
              Make people come to your brand!
              </p>
              <p className='font-bold'>
              Care To Know Some Interesting Facts About Inbound Marketing? 
              </p>
              <ul className='list-disc pl-5 space-y-2'>
            <li>Inbound marketing creates three times more leads per dollar than customary strategies.</li>
            <li>Persona-produced content created by inbound traffic expands the volume of qualified potential customers by 45%</li>
            <li>44% of B2B advertisers have deployed an inbound marketing technique.</li>
            <li>Businesses that primarily depend on inbound marketing save over $14 for each recently procured client.</li>
            <li>Medium-sized organizations budget an average of 31% on inbound advertising costs within their overall digital marketing budget</li>
          </ul>
          <p>What have you decided?</p>
          <p className='font-bold'>Do you also want to get more eyes on your brand? Well, it’s never too late to leverage this fantastic tactic.</p>
            </div>
            <div className="mt-10">
              <Image src={IMG1} alt="Market Research" layout="responsive" className="border-1 rounded" width={1200} height={1000} />
            </div>
          </div>
        </div>


        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-4xl">
          Inbound Marketing That Reaches Your Growth Goals Faster!
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full mt-14">
              <p>
              Inbound marketing is a business tactic that attracts customers by creating valuable content and experiences that are tailored to them. While outbound marketing interrupts your audience with unwanted content, inbound marketing forms the connections with visitors and solves the problems they already have.
              </p>
              <p>Once the content is created, our agency digitally distributes it through various channels, including social media and email.</p>

            </div>
            <div className="mt-10">
              <Image src={IMG2} alt="Market Research" layout="responsive" className="border-1 rounded" width={600} height={400} />
            </div>
          </div>
        </div>

        
        <div className="flex flex-col mb-10 bg-blue-50 p-2 space-y-6 justify-start">
          <h1 className="font-bold text-4xl">Why Prime Marketing Experts?</h1>
          <div className="space-y-6">
            <p>
            We start by developing an in-depth knowledge of your target customers to compose an understanding of their necessary information that would solve their problems. Then we <Link href="/marketing/content-marketing" className='text-blue-600'>develop and share great content</Link> , including blogs, videos, e-books, infographics, webinars, and short guides, which attract the right audience to your website.
            </p>
            <p>We also structure inbound marketing campaigns so that visitors are required to provide at least their email address on a landing page to receive a piece of content or special offer. This converts these website visitors into prospects, in which case we implement a lead nurturing program that brings strategic touches to each prospect. Therefore, opportunities at different stages of a buyer’s journey are cultivated so that your sales team can quickly take action.</p>
          </div>
        </div>

        <div className="flex flex-col mb-10 space-y-6 justify-start">
          <h1 className="font-bold text-4xl">We Help Businesses:</h1>
          <div className="space-y-6">
          <ul className='list-disc pl-5 space-y-2'>
            <li>Develop a marketing funnel that effectively builds relationships with prospects</li>
            <li>Create & publish high-quality content</li>
            <li>Deliver inspiring ideas to the right people</li>
            <li>Generate high-quality leads</li>
          </ul>
            <p>
            Our clients rely on us for cost-effective, strategic guidance, and efficient inbound marketing strategies to achieve their sales and lead generation objectives.
            </p>
            <p>It would help if you had channel expertise and a multi-direct procedure to win in this day and age. We do both, utilizing our vital strategic procedure and our restrictive innovation to guarantee that brands comprehend the return on their promotion spend—and their next best chance to invest.</p>
          </div>
        </div>


        
        <div className="flex flex-col mb-10 bg-blue-50 p-2 space-y-6 justify-start">
          <h1 className="font-bold text-4xl">Our Inbound Services</h1>
          <div className="space-y-6">
          <ul className='list-disc pl-5 space-y-6'>
            <li className='font-bold'>Content Marketing</li>
            <p>Did you know 55% of marketers state that blog content creation is their top inbound marketing priority?</p>
            <p>Undeniably, we get attracted to appealing and engaging stories. How can you expect your customers to settle for any less? Yes, <Link href="/" className='text-blue-600'>content quality matters</Link> the most if you want to promote your brand.</p>
            <p>To make an impression, your website would need an impactful and lasting story that will make your audience to read it.</p>
            <p>The best story wins!</p>
            <p>Since the content tells your brand’s story, you need to make sure it’s the right one.</p>
            <p>We are a digital marketing agency that scans the search data to find lucrative ranking opportunities that we know you can seize. Then we create content that your competitors cannot coordinate with and the coverage they can just envy.</p>
            <p>By planning an effective strategy to reach your goals, we craft stories that engage and inspire the audience to make sure that your content is being heard and seen. Besides, our writers follow Google algorithms and latest SEO guidelines, so you don’t have to worry about Google rejecting your content as this isn’t going to happen with us!</p>
            <p>We make a point to drive gainful client activity with proper content to hold a plainly characterized crowd. Our industry-centered content creators make a point to create a piece remembering the effective content marketing strategies by working with nearby project specialists and strategists.</p>
            <p>Whether you are struggling with increasing online sales, building brand awareness, driving organic traffic, reach out to us, and we will aid you! We deliver quality marketing services that are SEO-oriented, customer-focused, and proven. We will provide you with the traffic, links, and rankings that generate exponential growth.</p>

            <li className='font-bold'>Email & Social Media Marketing</li>
            <p>No one is oblivious to the fact that email and social media marketing delivers a significant return on investment. In fact, 42% of the population across the globe uses social media.</p>
            <p>You can get the idea from this huge number of how much exposure your brand can get from social media and email marketing. It can also help you reach to wide masses of audience easily and effectively.</p>
            <p>But, it is not easy to make people open your email and click on that CTA unless you possess some exceptional writing and marketing skills. Well, worry, not! We are not saying it’s impossible. We can do this hard work for you at a very competitive price.</p>
            <p className='font-bold'>We have the experience and competence needed for email marketing!</p>
            <p>From <Link href="/marketing/email-marketing" className='text-blue-600'>personalizing your campaigns to creating engaging emails</Link>, we will help you create effective email campaigns that are sure to boost your sales and conversion rate. Be it designing, strategizing, or managing the campaigns; we know we can deliver you quality work.</p>
            <p>Social marketing also runs on great content!</p>
            <p>Our agency will help you create the best social media posts for your brand. We dedicate ourselves to the development of innovative social media campaigns to build brand awareness and generate targeted site traffic. To do this, we create quality content for each post, provide professional design, and increase page engagement through hyper-targeted campaigns on social media.</p>
            <p>Furthermore, we will assess your current metrics and compare them with the best practices to see where you might be lagging behind. We will then work on the needed areas to make your campaigns a success. Also, by keeping your audience’s interest, demographics, and behavior in mind, we make certain that our campaigns boost your sales.</p>

            <li className='font-bold'>Lead Generation </li>
            <p>Lead generation is important, particularly in light of the fact that it empowers businesses and websites to make colossal traffic, which prompts more sales and higher conversion rates. With great lead generation traffic, you are making an objective persona for each searcher who is effectively utilizing the web to discover an item to buy.</p>
            <p>Lead generation is challenging at times. You will be amazed to know that 61% of marketers take generating quality leads as one of their biggest challenges.</p>
            <p>Our agency understands your needs! We know how to generate quality leads!</p>
            <p>Our company is a combination of machine learning, human intelligence, industry experience, and expert training. Whether it is appointment setting, superior research, or sales assistance, we know what we are good at and can provide you with the best services.</p>
            <p>By targeting high-level decision-makers, we make sure the leads we generate are converting and can contribute to your sale.</p>
            <p>With our technology and the right strategy, we can help you engage your target audience, which will surely turn your marketing investment into a measurable ROI.</p>
            <p>We can proudly claim that our experts can help you with:</p>

            <ul className='list-disc pl-5 space-y-6'>
            <li className='font-bold'>Lead Generation </li>
            </ul>
            <li>Increasing ROI</li>
            <li>Amplifying reach</li>
            <li>Lead nurturing</li>
            <li>Multi-channel engagement</li>
            <li>Capturing intent leads</li>
            <p>So, hire us, and let’s grow your revenue together!</p>
          </ul>
            <p>
            Our clients rely on us for cost-effective, strategic guidance, and efficient inbound marketing strategies to achieve their sales and lead generation objectives.
            </p>
            <p>It would help if you had channel expertise and a multi-direct procedure to win in this day and age. We do both, utilizing our vital strategic procedure and our restrictive innovation to guarantee that brands comprehend the return on their promotion spend—and their next best chance to invest.</p>
          </div>
        </div>


        <div className="flex flex-col mb-10 space-y-6 justify-start">
          <h1 className="font-bold text-4xl">Customized Inbound Marketing Strategy</h1>
          <div className="space-y-6">
         
            <p>
            Nothing works if you don’t have a plan in hand. Similarly, if you want to improve how your company brings customers to your site and boost sales, you need to have a powerful and customized inbound marketing strategy that can help ease the process.
            </p>
            <p>We understand all businesses are different, and their needs might also differ. Resultantly, we understand and assess every business by sitting down our clients. We track and monitor the current performance and metrics and discover the areas where you need help. Our strategy also includes monitoring your competitors and their tactics, so we can easily race them out.</p>
            <p>With our customized strategy, you are sure to attract, convert, and close your ideal client. Be it quick wins or long-term strategies; we will create a profit-rich environment for you and your company, which will scale your business. If you want your customers to know your business, we are the right people for you.</p>
            <p>Also, our agency will provide you with the comprehensive monthly reports containing the performance and growth of your campaign. Our digital marketing consultants take pride in delivering the best service so that your company can grow to new heights.</p>
            <p className='font-bold'>Ready to make your next success story in accelerating your sales growth?</p>
            <p className='font-bold'>Contact us right away!</p>
          </div>
        </div>


        </div>
       </section>
    );
}

export default Page;
