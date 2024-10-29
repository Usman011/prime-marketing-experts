import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import IMG1 from '../../../public/images/Maketing/content-marketing/image1.png';
import IMG2 from '../../../public/images/Maketing/content-marketing/image2.png';
import IMG3 from '../../../public/images/Maketing/content-marketing/image3.png';
import IMG4 from '../../../public/images/Maketing/content-marketing/image4.png';

import IconIMG1 from '../../../public/images/Maketing/content-marketing/icons/image1.png';
import IconIMG2 from '../../../public/images/Maketing/content-marketing/icons/image2.png';
import IconIMG3 from '../../../public/images/Maketing/content-marketing/icons/image3.png';
import IconIMG4 from '../../../public/images/Maketing/content-marketing/icons/image4.png';
import IconIMG5 from '../../../public/images/Maketing/content-marketing/icons/image5.png';
import IconIMG6 from '../../../public/images/Maketing/content-marketing/icons/image6.png';
import IconIMG7 from '../../../public/images/Maketing/content-marketing/icons/image7.png';
import IconIMG8 from '../../../public/images/Maketing/content-marketing/icons/image8.png';

const Page = () => {
  return (
    <section className='container'>
      <div className="flex flex-col items-center justify-center w-full h-52 text-center">
        <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
          Content Marketing Services
        </h1>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li>Content Marketing Services</li>
          </ul>
        </div>
      </div>

      <div className='gap-20 mt-10'>
        <div className="flex flex-col bg-slate-100 space-y-6">
          <h1 className="font-bold justify-center text-center text-4xl">
            Our Content Marketing Services Boosts Brands
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <h1 className='font-bold text-2xl italic'>Let Us Give Voice to Your Untold & Undersold Stories</h1>
              <p>
                Did you know content is one of the most important factors that make your website rank? Well, a study shows that the conversion rate is nearly 6 times higher for companies that utilize content marketing best practices versus non-adopters.
              </p>
              <p>
                We understand a comprehensive <span className='font-bold'>content marketing strategy</span> is important for building brand authority, brand awareness, and lead generation.
              </p>
              <p>
                So, let us build your online presence, and you do what you do best.
              </p>
              <p>
                From Fortune 500 brands to mid-sized and small startups, we are comfortable working with all types of clients.
              </p>
            </div>
            <div className="w-full mt-10 h-full">
              <Image src={IMG1} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
          <p>All we care about is your passion and dedication towards building your brand! So, are you ready to stand out and leave your competitors behind? Give us a call right away!</p>
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-center justify-center text-4xl">
            Our Content Marketing Services Boosts Brands
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full mt-10 h-full">
              <Image src={IMG2} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                Content marketing tells a story itself. And, as humans, we give out attention to those who tell great and compelling stories. This is why; we follow a strategic marketing approach by creating and distributing relevant and unique content among your target audience.
              </p>
              <p>
                With appropriate content to retain a clearly-defined audience, we make sure to drive profitable user action. By working alongside project managers and strategists, our industry-focused writers make sure to craft a piece keeping the content marketing techniques in mind.
              </p>
              <p>
                On top of that, our professional writers combine their excellent writing skills with the best SEO practices to make sure the content fulfills Google’s guidelines. For this, we map out the content to make sure the keywords, title, topic, and formatting hold enough power to keep your readers engaged. This way, we will also help you increase your online presence.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 bg-slate-100 space-y-6">
          <h1 className="font-bold text-center justify-center text-4xl">
            Excellent Quality Content Tailored To Your Needs
          </h1>
          <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 mt-8 gap-10 sm:gap-40 lg:gap-20">
            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='text-white bg-red-600 w-20 h-20 justify-center items-center rounded-full font-bold'>
                <Image src={IconIMG1} alt='IconIMG1' className='w-10 h-10 justify-center items-center m-5' />
              </div>
              <h1 className='text-1xl font-bold'>BLOGS</h1>
              <p>We write niche-specific, SEO-optimized blogs to drive conversions</p>
              <Link href="/">
                <button className="relative text-white bg-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-900 w-32 h-12 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Read More
                </button>
              </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='text-white bg-purple-600 w-20 h-20 justify-center items-center rounded-full font-bold'>
                <Image src={IconIMG2} alt='IconIMG1' className='w-10 h-10 justify-center items-center m-5' />
              </div>
              <h1 className='text-1xl font-bold'>INFO GRAPHICS</h1>
              <p>We produce captivating info graphics that engage your audience</p>
              <Link href="/">
                <button className="relative text-white bg-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-900 w-32 h-12 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Read More
                </button>
              </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='text-white bg-teal-400 w-20 h-20 justify-center items-center rounded-full font-bold'>
                <Image src={IconIMG3} alt='IconIMG1' className='w-10 h-10 justify-center items-center m-5' />
              </div>
              <h1 className='text-1xl font-bold'>WEBSITE CONTENT</h1>
              <p>We write SEO friendly and 100% original website content</p>
              <Link href="/">
                <button className="relative text-white bg-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-900 w-32 h-12 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Read More
                </button>
              </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='text-white bg-sky-500 w-20 h-20 justify-center items-center rounded-full font-bold'>
                <Image src={IconIMG4} alt='IconIMG1' className='w-10 h-10 justify-center items-center m-5' />
              </div>
              <h1 className='text-1xl font-bold'>EMAIL MARKETING</h1>
              <p>Personalized email newsletters to grow your subscribers</p>
              <Link href="/">
                <button className="relative text-white bg-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-900 w-32 h-12 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Read More
                </button>
              </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='text-white bg-green-600 w-20 h-20 justify-center items-center rounded-full font-bold'>
                <Image src={IconIMG5} alt='IconIMG1' className='w-10 h-10 justify-center items-center m-5' />
              </div>
              <h1 className='text-1xl font-bold'>EBOOKS</h1>
              <p>Excellent stories to increase your email list</p>
              <Link href="/">
                <button className="relative text-white bg-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-900 w-32 h-12 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Read More
                </button>
              </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='text-white bg-sky-300 w-20 h-20 justify-center items-center rounded-full font-bold'>
                <Image src={IconIMG6} alt='IconIMG1' className='w-10 h-10 justify-center items-center m-5' />
              </div>
              <h1 className='text-1xl font-bold'>SOCIAL MEDIA CONTENT</h1>
              <p>Engaging one-liners for all your social media posts</p>
              <Link href="/">
                <button className="relative text-white bg-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-900 w-32 h-12 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Read More
                </button>
              </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='text-white bg-violet-600 w-20 h-20 justify-center items-center rounded-full font-bold'>
                <Image src={IconIMG7} alt='IconIMG1' className='w-10 h-10 justify-center items-center m-5' />
              </div>
              <h1 className='text-1xl font-bold'>CASE STUDIES</h1>
              <p>In-depth and well-researched case studies</p>
              <Link href="/">
                <button className="relative text-white bg-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-900 w-32 h-12 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Read More
                </button>
              </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
              <div className='text-white bg-orange-400 w-20 h-20 justify-center items-center rounded-full font-bold'>
                <Image src={IconIMG8} alt='IconIMG1' className='w-10 h-10 justify-center items-center m-5' />
              </div>
              <h1 className='text-1xl font-bold'>VIDEO CONTENT</h1>
              <p>Magnetic and result-oriented video content</p>
              <Link href="/">
                <button className="relative text-white bg-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-900 w-32 h-12 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                The words web and log combine to from WebLog! This is an excellent service and a tool for marketing to reach your target audience and potential customers for your home businesses. These are easy to manage, integrate, and accessible with the upcoming blogging platforms.
              </p>
              <p>
                It is really amusing to see how businesses take leads and become famous through blogging.
              </p>
              <p>
                Well, some people associate it with being time-consuming and believing that you always need to be on your toes with creative ideas. However, their pro outnumbers the cons. Blog marketing is:
              </p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Inexpensive to start and operate</li>
                <li>Easy to work using various blogging platforms</li>
                <li>Blogging for SEO (search engine optimization) upgrades search engine ranking.</li>
                <li>Worldwide market accessibility</li>
              </ul>
            </div>
            <div className="w-full bg-blue-900 h-[90vh] text-black mt-14 flex justify-center items-center text-center">
              <div className='text-white space-y-4 flex flex-col justify-center items-center text-center'>
                <Image src={IconIMG1} alt="Market Research" />
                <h1 className='font-bold text-black text-3xl'>BLOGS</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-slate-100 space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full bg-orange-600 h-[90vh] text-black mt-14 flex justify-center items-center text-center">
              <div className='text-white space-y-4 flex flex-col justify-center items-center text-center'>
                <Image src={IconIMG2} alt="Market Research" className='w-70 h-70' />
                <h1 className='font-bold text-3xl text-black'>Infographic</h1>
              </div>
            </div>
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                Ever since marketing gained importance, the importance of info graphics was at par with other forms of content marketing. These are not just visual representations that are more presentable and appealing that just big chunks of text. They are a competitive tool for web marketing- either can make or break your game.
              </p>
              <p>
                That said, it is crucial to be able to convey the same information as through text.
              </p>
              <p>
                This content marketing service engages more market than a just usual written piece, which possibly explains the reason why infographics gained recognition. More and more businesses are using this tool to boost their marketing campaigns and racing to the top. This helps you to be more dynamic, visually-appealing and makes you stand out from your competition.
              </p>
              <p>
                So it is always advisable to be search friendly, use info graphics, SEO, and links in your content.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                Content marketing offers various media options, ranging from blog posts, articles, infographics, as mentioned above.
              </p>
              <p>
                Website content is the central hub for marketing efforts. The links to your newsletters should always include links to your website. The blogs you post on social media should redirect your readers to your website. Hence, it is regarded as the central hub.
              </p>
              <p>
                Your website should true reflection of your work and not just copy-paste. So, it should be 100% original, SEO friendly, and surfing through your webpage should be a seamless experience.
              </p>
              <p>
                Website content is a passive nurturing, too, since you cannot be available around the clock to hold all prospects and queries through the sale process.
              </p>
            </div>
            <div className="w-full bg-blue-900 h-[90vh] text-black mt-14 flex justify-center items-center text-center">
              <div className='text-white space-y-4 flex flex-col justify-center items-center text-center'>
                <Image src={IconIMG3} alt="Market Research" className='w-70 h-70' />
                <h1 className='font-bold text-black text-3xl'>Website Content</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-slate-100 space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full bg-orange-600 h-[90vh] text-black mt-14 flex justify-center items-center text-center">
              <div className='text-white space-y-4 flex flex-col justify-center items-center text-center'>
                <Image src={IconIMG4} alt="Market Research" className='w-70 h-70' />
                <h1 className='font-bold text-3xl text-black'>Email Marketing</h1>
              </div>
            </div>
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                This is a priority for a successful business, and <Link href="/email-marketing" className='text-blue-600'>choosing the right email marketing</Link> has a great impact on the overall success of your marketing campaigns. And as a sigh a relief for you, we are best at this service. We frame a bespoke email newsletter, which can re-frame your market reach out.
              </p>
              <p>
                This tool is highly cost-effective for small businesses as well with high ROI (return on investment). Moreover, these are easy to manage, controllable, and direct contact methods.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                Nowadays, brand trust is important in the commercial battlefield.
              </p>
              <p>
                Ebooks have an upper edge over other services like blog posts and YouTube videos that the former are downloadable, which offers it more real value. So it is no brainer that Neil Patel- the digital marketing expert planned ebooks on the second slot in his list to create lead-generating content.
              </p>
              <p>
                Ebooks offer you the chance to showcase higher authority and ability on a subject with greater depth when compared to what blog posts offer. Therefore, it is rightly said that this service will play a vital role in content marketing and bring more traffic.
              </p>
            </div>
            <div className="w-full bg-blue-900 h-[90vh] text-black mt-14 flex justify-center items-center text-center">
              <div className='text-white space-y-4 flex flex-col justify-center items-center text-center'>
                <Image src={IconIMG5} alt="Market Research" className='w-70 h-70' />
                <h1 className='font-bold text-black text-3xl'>EBooks</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-slate-100 space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full bg-orange-600 h-[90vh] text-black mt-14 flex justify-center items-center text-center">
              <div className='text-white space-y-4 flex flex-col justify-center items-center text-center'>
                <Image src={IconIMG6} alt="Market Research" className='w-70 h-70' />
                <h1 className='font-bold text-3xl text-black'>Case Studies</h1>
              </div>
            </div>
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                Case studies are a vital part of the content marketing toolkit. It upholds the whole marketing industry.
              </p>
              <p>
                So, we present you these examples to prove how effective case studies help in marketing:
              </p>
              <p>
                Case study 1: LENOVO: They had a sound content marketing plan as they developed a digital content hub as the “tech revolution” expanded to successfully engage its potential market.
              </p>
              <p>
                Case study 2: SAP: This behemoth, one the leading vendor of ERP software serving various organizations around the globe, reached out to its customer segments through developing a comprehensive content plan to show thought leadership
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                Living in this fast-paced world gives rise to the need for finding and creating unique ways to make your brand stand out. Using compelling video content for marketing is a versatile tactic that marketers can leverage. From long and short formats to promotional and influential videos, we know visuals can help you achieve a more satisfying relationship with your audience.
              </p>
              <p>
                Here is how videos can benefit your brand:
              </p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>It increases engagement.</li>
                <li>It generates traffic, leads, and sales.s</li>
                <li>It boosts the conversion rate.</li>
                <li>It certainly increases the success rate of email marketing campaigns.</li>
                <li>It helps in improving the search engine rankings.</li>
              </ul>
            </div>
            <div className="w-full bg-blue-900 h-[90vh] text-black mt-14 flex justify-center items-center text-center">
              <div className='text-white space-y-4 flex flex-col justify-center items-center text-center'>
                <Image src={IconIMG7} alt="Market Research" className='w-70 h-70' />
                <h1 className='font-bold text-black text-3xl'>Video Content</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-slate-100 space-y-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full bg-orange-600 h-[90vh] text-black mt-14 flex justify-center items-center text-center">
              <div className='text-white space-y-4 flex flex-col justify-center items-center text-center'>
                <Image src={IconIMG8} alt="Market Research" className='w-70 h-70' />
                <h1 className='font-bold text-3xl text-black'>Social Media Content</h1>
              </div>
            </div>
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                Social Media is undoubtedly the best way to connect with your audience. With more and more people starting to use social media platforms, it is always a good idea to leverage this medium to increase your online presence. Along with posting engaging content, the quality of content also plays an important role in marketing.
              </p>
              <p>
                This is where we enter. We will create magnetic social media content that will not only promote your brand but also stimulate user’s interests in your services and products.
              </p>
              <p>
                Social media can help you in these various ways:
              </p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Social media lets you track your competitors.</li>
                <li>It develops trust with customers.</li>
                <li>It creates brand recognition.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='gap-20 mt-10'>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
              <div className="space-y-8 w-full lg:w-11/12 mt-14">
                <h1 className="font-bold text-4xl">
                  Why Content Marketing?
                </h1>
                <ul className='list-decimal pl-5 space-y-2'>
                  <li>93% of B2B marketers use content marketing.</li>
                  <li>73% of companies appoint someone to oversee their content strategy.</li>
                  <li>58% of marketers believe original content is the most important type of content.</li>
                  <li>60% of B2C marketers have a documented content strategy.</li>
                </ul>
              </div>
              <div className="w-full mt-10 h-full">
                <Image src={IMG3} alt="Market Research" layout="responsive" width={1200} height={1000} />
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-slate-100 space-y-6">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
              <div className="w-full mt-10 h-full">
                <Image src={IMG4} alt="Market Research" layout="responsive" width={1200} height={1000} />
              </div>
              <div className="space-y-8 w-full lg:w-11/12 mt-14">
                <h1 className="font-bold text-center justify-center text-4xl">
                  Content Planning
                </h1>
                <p>
                  We are a team of content marketing experts who believe in quality over quantity. By delivering the top-notch content, we succeed in increasing your website’s traffic and boost sales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className='text-3xl flex justify-center items-center mt-10 font-bold'>For this, we will do:</h1>
        <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 mt-8 gap-10 sm:gap-16 lg:gap-20">
          <div className='flex flex-col w-full items-center text-center gap-4'>
            <h1 className='text-1xl font-bold'>Competitor Analysis</h1>
            <p>By researching and analyzing your competitor’s content strategy, we make sure you are always ahead of your competitors.</p>
          </div>

          <div className='flex flex-col w-full items-center text-center gap-4'>
            <h1 className='text-1xl font-bold'>Audience Analysis</h1>
            <p>We will analyze your target audience and their interaction to deliver you the right content, which catches their attention.</p>
          </div>

          <div className='flex flex-col w-full items-center text-center gap-4'>
            <h1 className='text-1xl font-bold'>Result-Oriented Content</h1>
            <p>We create content that is specially customized according to your needs to give you the results you want. Not only will it increase your site’s traffic but also increase your click-through rates.</p>
          </div>
        </div>

        <div className='mt-20'>
          <h1 className='italic font-bold text-3xl'>Our team continues to provide its services without any interruption as the world continues to deal with the COVID-19 pandemic.</h1>
        </div>
        <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-auto bg-orange-500 h-auto lg:h-32 mt-10 items-center justify-center lg:justify-around px-4'>
          <h1 className='font-bold text-white text-center lg:text-left text-2xl lg:text-4xl'>
            Learn More on How Content Marketing Can Grow Your Business!
          </h1>
          <Link href="/contact">
            <button className='bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 flex justify-center items-center text-white hover:text-black'>
              CONTACT NOW
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page;