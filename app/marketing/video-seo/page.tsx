import Image from 'next/image';
import Link from 'next/link';
import IMG1 from '../../../public/images/vedio-seo/image.png'
import React from 'react';

const Page = () => {
    return (
        <section className='container'>
            <div className="flex flex-col items-center justify-center w-full h-52 text-center">
        <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
        Video SEO
        </h1>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li>Video SEO</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mx-2 gap-10 my-10">
        <div className="flex flex-col ">
        <h1 className="font-bold text-4xl">
          Video SEO
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12 mt-14">
              <p>
              Video is one of the most powerful marketing mediums to improve your online presence, but you can’t just upload one into Youtube or your website expect it to be shown to many people. To achieve the best results, videos require their own genuine strategy separate from your main SEO strategy. Video SEO optimizes the rankings of video content within Google, Bing, Yahoo, and video search results. We strategically can help you ultimately drive more website traffic, as opposed to driving it to your video hosting provider.
              </p>
              <p>
              We implement video schema to get videos indexed and improve visibility within search engines. Our team then integrates keyword-rich metadata, which includes titles, descriptions, cards, custom thumbnails, transcripts, tags, and captions, to attract a relevant audience over time. We also then integrate the same link building strategies that we use with blog articles, infographics, and white papers to further improve the ranking of your video content.
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
