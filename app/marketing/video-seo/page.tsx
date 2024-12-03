import Image from 'next/image';
import Link from 'next/link';
import IMG1 from '../../../public/images/vedio-seo/image.png'
import React from 'react';

const Page = () => {
    return (
        <section className='container mb-10 px-2 md:px-6 lg:px-24'>
            
           {/* Header */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
         <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
         Video SEO
        </h1> 
      </div>
     

      <div className="flex flex-col bg-blue-50 p-2 md:p-6 gap-10 ">
        <div className="flex flex-col ">
        <h1 className="font-bold text-4xl">
          Video SEO
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12 mt-8">
              <p>
              Video is one of the most powerful marketing mediums to improve your online presence, but you can’t just upload one into Youtube or your website expect it to be shown to many people. To achieve the best results, videos require their own genuine strategy separate from your main SEO strategy. Video SEO optimizes the rankings of video content within Google, Bing, Yahoo, and video search results. We strategically can help you ultimately drive more website traffic, as opposed to driving it to your video hosting provider.
              </p>
              <p>
              We implement video schema to get videos indexed and improve visibility within search engines. Our team then integrates keyword-rich metadata, which includes titles, descriptions, cards, custom thumbnails, transcripts, tags, and captions, to attract a relevant audience over time. We also then integrate the same link building strategies that we use with blog articles, info-graphics, and white papers to further improve the ranking of your video content.
              </p>
            </div>
            <div className="mt-12">
              <Image src={IMG1} alt="Market Research" layout="responsive" className="border-1 rounded" width={1200} height={1000} />
            </div>
          </div>
        </div>
        </div>
        </section>
    );
}

export default Page;
