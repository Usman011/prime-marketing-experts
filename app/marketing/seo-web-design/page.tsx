import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Marketing/seo web design/image.png'

const Page = () => {
    return (
        <section className='container mb-10 px-2 md:px-6 lg:px-12'>
            
        {/* Header */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
         <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
         SEO Web Design
        </h1> 
      </div>
      

      <div className='mb-10 bg-blue-50 p-2 md:p-6'>
        <div className="flex flex-col ">
          <h1 className="font-bold  text-4xl">
          Web Design That Strengthens Search Engine Ranking
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
              We offer SEO Web Design as a means to optimize your website structure to further strengthen search engine ranking improvements and increase customer lifetime value. In addition, this helps your company streamline lead nurturing and reduce customer acquisition costs. In turn, an exceptional SEO web design helps the search engines efficiently crawl your website. We analyze and optimize the following factors in this service: menu navigation, meta tags, keyword-targeted URL structure, and mobile usability.
              </p>
              <p>
              Our team pays particular attention to improving your website speed, which helps your business rank better on Google and Bing. We can also create visual content that resonates with the target clientele of your business and increase the time spent on your website.
              </p>
             
            </div>
            <div className="w-full mt-10 h-full">
              <Image src={IMG1} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
          <p>Our team integrates the best SEO web design practices when we <Link href="/Technology/web-development" className='text-blue-600'>develop a new website</Link> , and we can in many cases perform these services on your current website.</p>
        </div>
        </div>

        </section>
    );
}

export default Page;
