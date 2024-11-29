import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Marketing/branding/image1.png'
import IMG2 from '../../../public/images/Marketing/branding/image2.png'
import IMG3 from '../../../public/images/Marketing/branding/image3.png'

const Page = () => {
    return (
        <section className='container px-2 md:px-12 lg:px-12'>
        <div className="flex flex-col items-center justify-center text-center w-full h-52">
        <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
        Branding
        </h1>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li>Branding</li>
          </ul>
        </div>
      </div>

    
    <div className="flex flex-col gap-10">

  <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:flex-row space-y-6 lg:space-x-6 justify-start">
  {/* Content Section */}
  <div className="flex-1">
    <h1 className="font-bold text-4xl">
      Branding Services That Make Businesses Shine
    </h1>
    <div className="space-y-6 mt-14">
      <p>Do you want your business to break through the clutter and grab your visitor’s attention?</p>
      <p>Do you want to convert your first-time buyers into lifetime customers?</p>
      <p>Do you want to stand out and race out your competitor’s?</p>
      <p>If your answer to all these questions is yes, you are in the right place!</p>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex-1">
    <Image src={IMG1} alt="Branding Services" className="w-[550px] h-auto rounded-lg shadow-lg" />
  </div>
</div>
        
<div className="flex flex-col bg-blue-50 p-6 lg:flex-row space-y-6 lg:space-x-6 justify-start">
  {/* Image Section */}
  <div className="flex-1 mt-10">
    <Image src={IMG2} alt="Branding" className="w-full h-[500px] rounded-lg shadow-lg" />
  </div>
  {/* Content Section */}
  <div className="flex-1">
    <h1 className="font-bold text-4xl">
      We believe in the saying – “Leave A Mark, Wherever You Go!”
    </h1>
    <div className="space-y-6">
      <p>This is not easy, though. We have achieved this and can help you make that happen!</p>
      <p>So, in case you want your brand to drive change, let us together make that happen!</p>
      <p>Branding can make or break your business. Whether your business is retail or B2B, branding is undoubtedly the most critical component of running any business. A practical and well-planned strategy can give you a major edge in an ever more competitive market.</p>
      <p>Did you know consistent branding across various channels can increase your revenue by 23%?</p>
      <p>Also, 59% of customers buy products and services from a trusted brand.</p>
      <p>Considering these figures, branding is non-negotiable if you want your business to succeed.</p>
      <p>We have talked so much about branding, and what all it does? But, what exactly does the word “branding” mean?</p>
    </div>
  </div>

  
</div>


       



<div className='flex flex-col space-y-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 justify-start'>
  <h1 className='font-bold text-4xl'>
    What is Branding?
  </h1>
  <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
    {/* Content Section */}
    <div className='space-y-6 flex-1'>
      <p>Branding is giving a meaning to a particular company, product, or service by creating and shaping your brand in customer’s minds.</p>
      <p>Simply put, branding is an effective strategy designed by the enterprises to help their audience quickly identify and experience their brand, and prompt them to choose their products over the competitors.</p>
      <p>Branding will tell the customers what your brand is all about and what it is not!</p>
      <p>Creating just a memorable logo won’t always be in your favor. You need to do something worth leaving an impact. Along with the logo, you need to focus on the colors, content, and what not!</p>
      <p>Your logo should tell your brand’s story. We will define and create the story to make sure it compels your audience and reflects your values.</p>
    </div>
    
    {/* Image Section */}
    <div className='flex-1'>
      <Image src={IMG3} alt="Branding" className="w-full h-[400px] rounded-lg shadow-lg" />
    </div>
  </div>
</div>

          


<div className='flex flex-col bg-blue-50 p-6 space-y-6 justify-start'>
  <h1 className='font-bold text-4xl'>
    Better Brand = Better Marketing
  </h1>
  
  <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
    {/* Content Section */}
    <div className='space-y-6 flex-1'>
      <p>To be a successful name in your industry, you need to stand out. You need to be a UNICORN!</p>
      <p>And, this is where <strong>PRIME MARKETING EXPERTS</strong> enters!</p>
      <p>Prime Marketing Experts is a full-service digital marketing and web development agency that strives to give the best to its customers. We know we leave a long-lasting impact with our quality work, and we will do the same for your brand.</p>
      <p>A combination of marketing tactics and unique design, branding is all about creativity. We are pleased to tell you that our team is highly dedicated and creative, so you don’t have to worry about anything.</p>
      <p className='italic text-2xl'>JUST LEAVE IT TO THE PROFESSIONALS!</p>
      <p>With a perfect blend of beautiful design, innovation, and smart strategy, we create brands that want to deliver excellence and performance. Prime Marketing Experts take pride in delivering world-class brand strategy, which will impart value to your brand. From small startups to Fortune 500 enterprises, we have worked for all and would love to be a part of your project.</p>
      <p>Be it defining your brand, or improving the overall strategy of your brand; we can build your brand from the bottom and take it up to new heights. We create experiences that are meaningful, exciting, and timeless.</p>
      <p>We know brand awareness is a top goal for 89% of marketers. And, 91% of customers would rather buy from an authentic brand. This is the chief reason we are so dedicated to what we do. We love what we do.</p>
      <p>We make brands and aspire ourselves to the same for many more years to come.</p>
      <p>Whether you need help with strategy, logo, UI & UX design, digital or print campaigns, we can help your brand stand out. We can help you with:</p>
      
      <ul className='list-disc pl-5 space-y-6'>
        <li>Brand strategy</li>
        <li>Visual brand identity</li>
        <li>Verbal brand identity</li>
        <li>Creative campaigns</li>
        <li>Digital experiences</li>
      </ul>
      <p>Further, we have a devoted customer service team ready to solve any of your queries. Also, our staff keeps you in the loop of your project’s progress and keeps you updated.</p>
      <p>So, if you want to create something entirely out of the box and appealing, Prime Marketing Experts is your company!</p>
    </div>

    
  </div>
</div>


<div className='flex flex-col space-y-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 justify-start'>
  <h1 className='font-bold text-4xl'>
    Importance Of Branding
  </h1>

  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
    {/* Card 1 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Branding Helps Increase Your Visibility</h2>
      <p>You must agree that if you want to build a successful brand, you have to be recognizable. This helps you build an individual style that increases visibility within your market.</p>
      <p>Branding helps your business get recognized and known to consumers. Among the various other important aspects, a logo is the most important element of the brand, especially with regard to this factor, since it is essentially the face of the business.</p>
      <p>We will help you create an attention-grabbing logo that consumers will remember.</p>
    </div>

    {/* Card 2 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Branding Brings In New Customers</h2>
      <p>People love to talk. If they love the brand of your business, they will tell others, and the cycle will go on.</p>
      <p>In the present era, people eat brands, wear brands, listen to brands, and they constantly talk to others about the brands they like.</p>
      <p>On the other hand, will you talk to someone about a brand you don’t remember? No!</p>
      <p>It means if you leave a positive impression on your visitor’s mind, you have got yourself a few new customers.</p>
    </div>

    {/* Card 3 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Branding Differentiates Your Business From Competitors</h2>
      <p>No matter the sort of business you have, the industry you are in, or the type of customer you are looking for – if you are in business, you have serious competition.</p>
      <p>Branding helps you ascertain the ways that you are different, unique, and special. And it shows your customers why they should buy your products rather than go for your competitors.</p>
    </div>

    {/* Card 4 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Branding Improves Employee Satisfaction And Pride</h2>
      <p>At the point when a representative works for a firmly branded organization and truly remains behind the brand, they will be increasingly happy with their work and will take pride in doing their work.</p>
    </div>

    {/* Card 5 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Branding Gives Value To Your Business</h2>
      <p>A strong brand will bring value to your organization far beyond your physical assets.</p>
      <p>Not all top brands are worth their equipment, services, or products. These companies are not just known for their physical assets but are worth much more than that. Needless to say, their brand has created a value that far surpasses their tangible value.</p>
    </div>

   

    {/* Card 7 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Catchy Logo</h2>
      <p>Your company’s logo and brand go hand in hand, and no one can say which one is more important. However, your logo design should match, enhance, and compliment your brand.</p>
      <p>This is exactly what we do. We will get to know your brand first and then get into creating the perfect logo for you. We understand that an exceptional logo design becomes the chief element of your brand’s identity.</p>
      <p>And, we will make sure it is catchy, memorable and stands out from your competitors’.</p>
    </div>

    {/* Card 8 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Are You Ready To Race Out Your Competitors?</h2>
      <p>Well, welcome to the league of winning more clients!</p>
      <p>We have a dedicated and friendly team of branding experts, so don’t hesitate to get in touch with us for your queries. After all, we are amongst the top <Link href="https://www.designrush.com/agency/digital-agencies" className='text-blue-600'>Digital Agencies!</Link></p>
    </div>
  </div>
</div>




          <div className='w-full flex flex-col gap-4 lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto mt-6 mb-6 lg:flex-row items-center justify-around'>
        <h1 className='font-bold text-white text-4xl text-center'>
          Plan The Future Growth Of Your Business
        </h1>
        <Link href="/contact">
          <button className='bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 my-6 md:py-auto md:w-40 h-12 md:h-14 justify-center hover:text-black text-white items-center text-center'>CONTACT NOW</button>
        </Link>
      </div>

      
      </div>
      
        </section>
    );
}

export default Page;