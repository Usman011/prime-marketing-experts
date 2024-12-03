import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Marketing/inbound marketing/image1.png'
import IMG2 from '../../../public/images/Marketing/inbound marketing/image2.png'
import IMG3 from '../../../public/images/Marketing/inbound marketing/image3.png'

const Page = () => {
    return (
       <section className='container px-2 md:px-12 lg:px-24'>
         
        {/* Header */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
         <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
         Inbound Marketing Services
        </h1> 
      </div>
     

      <div className="flex flex-col gap-10">

        <div className="flex flex-col  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
          <h1 className="font-bold text-3xl md:text-4xl">
          Inbound Marketing That Reaches Your Growth Goals Faster!
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12">
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
        
          <div className="flex flex-col lg:flex-row bg-blue-50 p-2 md:p-6 gap-8 lg:gap-10">
            <div className="space-y-8 w-full ">
            <h1 className="font-bold text-3xl md:text-4xl">
          Inbound Marketing That Reaches Your Growth Goals Faster!
          </h1>
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

        
        <div className="flex flex-col md:flex-row  bg-blue-50 p-2 md:p-6  space-y-6 justify-start">
  <div className="flex-1 mt-8">
    <Image src={IMG3} alt="Marketing Experts" className="w-full h-auto object-cover rounded-lg shadow-md"/>
  </div>
  <div className="flex-1 space-y-6">
    <h1 className="font-bold text-3xl md:text-4xl text-gray-800">
      Why Prime Marketing Experts?
    </h1>
    <p className="text-gray-700 text-lg leading-relaxed">
      We start by developing an in-depth knowledge of your target customers to compose an understanding of their necessary information that would solve their problems. Then we <Link href="/marketing/content-marketing" className='text-blue-600'>develop and share great content</Link>, including blogs, videos, e-books, infographics, webinars, and short guides, which attract the right audience to your website.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed">
      We also structure inbound marketing campaigns so that visitors are required to provide at least their email address on a landing page to receive a piece of content or special offer. This converts these website visitors into prospects, in which case we implement a lead nurturing program that brings strategic touches to each prospect. Therefore, opportunities at different stages of a buyer’s journey are cultivated so that your sales team can quickly take action.
    </p>
  </div>
</div>


        <div className="flex flex-col  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6 justify-start">
          <h1 className="font-bold text-3xl md:text-4xl">We Help Businesses:</h1>
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


        
        <div className="flex flex-col bg-blue-50 p-2 md:p-6 space-y-8 rounded-lg shadow-lg">
  <h1 className="font-bold text-3xl md:text-4xl text-start text-gray-800">Our Inbound Services</h1>
  <div className="space-y-8">
    <ul className='space-y-6'>
      {/* Content Marketing Section */}
      <li>
        <h2 className="font-bold text-2xl text-gray-800 pb-2">Content Marketing</h2>
        <p className="text-lg text-gray-700">Did you know 55% of marketers state that blog content creation is their top inbound marketing priority?</p>
        <p className="text-lg text-gray-700">Undeniably, we get attracted to appealing and engaging stories. How can you expect your customers to settle for any less? Yes, <Link href="/" className="text-blue-600 hover:underline">content quality matters</Link> the most if you want to promote your brand.</p>
        <p className="text-lg text-gray-700">To make an impression, your website would need an impactful and lasting story that will make your audience read it. The best story wins!</p>
        <p className="text-lg text-gray-700">We are a digital marketing agency that scans search data to find lucrative ranking opportunities. Then we create content your competitors can’t match, ensuring maximum coverage and engagement.</p>
        <p className="text-lg text-gray-700">By planning effective strategies, we craft stories that engage and inspire the audience. We follow Google algorithms and the latest SEO guidelines to ensure your content is never rejected.</p>
        <p className="text-lg text-gray-700">Whether you are struggling with increasing online sales, building brand awareness, or driving organic traffic, we are here to help you grow!</p>
      </li>

      {/* Email & Social Media Marketing Section */}
      <li>
        <h2 className="font-bold text-2xl text-gray-800 pb-2">Email & Social Media Marketing</h2>
        <p className="text-lg text-gray-700">No one is oblivious to the fact that email and social media marketing deliver a significant return on investment. In fact, 42% of the global population uses social media.</p>
        <p className="text-lg text-gray-700">With such a massive reach, you can effectively promote your brand. But, it’s not easy to make people open your email and click on that CTA unless you possess exceptional marketing skills. Worry not—we’ve got you covered.</p>
        <p className="text-lg text-gray-700"><span className="font-bold">We have the experience and competence needed for email marketing!</span> From <Link href="/marketing/email-marketing" className="text-blue-600 hover:underline">personalizing your campaigns to creating engaging emails</Link>, we’ll ensure your campaigns boost sales and conversions.</p>
        <p className="text-lg text-gray-700">Social marketing also thrives on great content! We help you create engaging posts for your brand, build awareness, and drive targeted traffic to your site.</p>
        <p className="text-lg text-gray-700">We assess your current metrics, compare them with best practices, and refine your strategies for better results. Our campaigns are tailored to boost sales, keeping your audience’s interests in mind.</p>
      </li>

      {/* Lead Generation Section */}
      <li>
        <h2 className="font-bold text-2xl text-gray-800 pb-2">Lead Generation</h2>
        <p className="text-lg text-gray-700">Lead generation is crucial for driving traffic, increasing sales, and improving conversion rates. With great lead gen strategies, we help you create target personas that attract high-quality leads.</p>
        <p className="text-lg text-gray-700">Did you know 61% of marketers consider generating quality leads one of their biggest challenges? But with our expertise, we turn challenges into opportunities.</p>
        <p className="text-lg text-gray-700">We combine machine learning, human intelligence, and industry experience to generate leads that are likely to convert. Our experts target high-level decision-makers to ensure your sales team is equipped with prospects that matter.</p>
        <p className="text-lg text-gray-700">By employing the right strategies, we engage your target audience and maximize your marketing ROI.</p>

        {/* Lead Gen Key Benefits */}
        <div className="space-y-4 mt-6">
          <ul className='list-disc pl-6 space-y-4'>
            <li>Increasing ROI</li>
            <li>Amplifying reach</li>
            <li>Lead nurturing</li>
            <li>Multi-channel engagement</li>
            <li>Capturing intent leads</li>
          </ul>
          <p className="text-lg text-gray-700">Let’s grow your revenue together!</p>
        </div>
      </li>
    </ul>

    {/* Final Message */}
    <p className="text-lg text-gray-700">Our clients rely on us for cost-effective, strategic guidance, and efficient inbound marketing strategies to achieve their sales and lead generation objectives. With our channel expertise and multi-pronged approach, we guarantee measurable results for your brand.</p>
    <p className="text-lg text-gray-700">Utilizing our strategic processes and proprietary technology, we ensure your marketing spend delivers the best ROI possible—and we’ll help you invest in your brand’s future success.</p>
  </div>
</div>



        <div className="flex flex-col mb-10  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6  space-y-6 justify-start">
          <h1 className="font-bold text-3xl md:text-4xl">Customized Inbound Marketing Strategy</h1>
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
