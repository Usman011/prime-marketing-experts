import Link from 'next/link';
import React from 'react';
import { GrBarChart } from "react-icons/gr";
import { FcAutomatic } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { MdDeveloperMode } from "react-icons/md";
import { LiaTelegram } from "react-icons/lia";
import { BiMessageRounded } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Image from 'next/image';
import EcomImg from '../../../public/images/web3.png'
import FourthSection from '../../../public/images/section_04.webp'
import { FaPlus } from "react-icons/fa6";

const HomeServices = () => {
    return (
        <>
            <section className='mt-10'>
    <div className='flex flex-col gap-10'>
        <div className='flex flex-col justify-center items-center gap-8 text-center'>
            <h1 className='text-3xl font-bold'>
                Our Most Popular <span className='text-orange-500'>Digital Marketing Services</span>
            </h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 mt-8 gap-10 sm:gap-16 lg:gap-20'>

            <div className='flex flex-col w-full items-center text-center gap-4'>
                <div className='text-orange-600 font-bold'>
                    <GrBarChart className='w-10 h-10'/>
                </div>
                <h1 className='text-3xl font-bold'>SEO Services</h1>
                <p>We deploy an integrated, comprehensive strategy to help you raise your search engine rankings for your targeted keywords.</p>
                <Link href="/">
                    <button className="relative text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                      Read More
                   </button>
                </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
                <div className='text-orange-600 font-bold'>
                    <FcAutomatic className='w-10 h-10'/>
                </div>
                <h1 className='text-3xl font-bold'>Marketing Automation</h1>
                <p>We increase your sales productivity by using an integrated technology platform with synergistic marketing initiatives to spark your sales growth.</p>
                <Link href="/">
                    <button className="relative text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                      Read More
                   </button>
                </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
                <div className='text-orange-600 font-bold'>
                    <FcAdvertising className='w-10 h-10'/>
                </div>
                <h1 className='text-3xl font-bold'>Search Engine Advertising</h1>
                <p>We deploy ROI-maximizing processes to strategically implement and manage your Search Engine Advertising Campaigns.</p>
                <Link href="/">
                    <button className="relative text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                      Read More
                   </button>
                </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
                <div className='text-orange-600 font-bold'>
                    <MdDeveloperMode className='w-10 h-10'/>
                </div>
                <h1 className='text-3xl font-bold'>Website Development</h1>
                <p>We deploy an integrated, comprehensive strategy to help you raise your search engine rankings for your targeted keywords.</p>
                <Link href="/">
                    <button className="relative text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                      Read More
                   </button>
                </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
                <div className='text-orange-600 font-bold'>
                    <LiaTelegram className='w-10 h-10'/>
                </div>
                <h1 className='text-3xl font-bold'>Social Media Marketing</h1>
                <p>We provide social media posting and sponsored ad management services. Our AI-assisted system ensures that we post the right content at the right time!</p>
                <Link href="/">
                    <button className="relative text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                      Read More
                   </button>
                </Link>
            </div>

            <div className='flex flex-col w-full items-center text-center gap-4'>
                <div className='text-orange-600 font-bold'>
                    <BiMessageRounded className='w-10 h-10'/>
                </div>
                <h1 className='text-3xl font-bold'>Text Message Marketing</h1>
                <p>Our full-service text message marketing solution that efficiently reaches your customers, as an average of 98% of them are read.</p>
                <Link href="/">
                    <button className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 text-orange-600 after:w-full after:h-0.5 after:bg-orange-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                      Read More
                   </button>
                </Link>
            </div>

        </div>                    
    </div>
</section>

   <section className='mt-10 flex flex-col gap-44 md:flex-col lg:flex-row'>
  <div className='md:w-1/2 p-4'>
  <h1 className='text-3xl pb-4 font-bold'>
  Free Lead Generation Consultation</h1>
    <form className='space-y-8 p-6 bg-white rounded-lg shadow-lg'>
  <div className='flex flex-col'>
    <input type='text' className='mt-2 block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' placeholder='Name*' />
  </div>
  <div className='flex flex-col'>
    <input type='text' className='mt-2 block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' placeholder='Number*' />
  </div>
  <div className='flex flex-col'>
    <input type='email' className='mt-2 block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' placeholder='Email*' />
  </div>
  <div className='flex flex-col'>
    <input type='text' className='mt-2 block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' placeholder='Company Name*' />
  </div>
  <div className='flex flex-col'>
    <input type='url' className='mt-2 block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' placeholder='Website*' />
  </div>
  <div className='flex flex-col'>
    <label className='text-gray-700 mb-1'>How did you hear about us? *</label>
    <select className='mt-2 block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4'>
      <option>-Please Choose an Option-</option>
      <option>New Customer</option>
      <option>Previous Customer</option>
      <option>Word Of Mouth</option>
      <option>Startups</option>
      <option>Direct Traffic</option>
      <option>General Contacts</option>
      <option>Cannot Recall</option>
      <option>New Story</option>
      <option>Other</option>
      <option>Search Engine</option>
    </select>
  </div>
  <div className='flex flex-col'>
    <textarea className='mt-2 block w-full h-32 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' placeholder='Message'></textarea>
  </div>
  <button className='bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 w-full h-12 md:h-14 flex justify-center items-center text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out'>
    Submit
  </button>
</form>
  </div>

  <div className='md:w-1/2 gap-12 p-4'>
    <h2 className='text-2xl font-bold mb-4'>Streamline Your Lead Generation</h2>
    <p className='mb-8 font-bold'>Get More Leads With Marketing Automation</p>
    
    <div className='flex flex-col gap-20'>
    <p className='flex gap-6'> <span className='items-center rounded pt-1 text-center  '><IoCheckmarkCircleOutline className='w-10 bg-blue-500 text-white border rounded hover:bg-blue-700 h-10'/></span>We effectively generate leads by running social media and search engine ads that direct visitors to a landing page that has an offer which entices them to provide their contact information.</p>
      <p className='flex gap-6'><span className='items-center rounded pt-1 text-center'><IoCheckmarkCircleOutline className='w-10 bg-blue-500 text-white border rounded hover:bg-blue-700 h-10'/></span> Increase your salesperson productivity with marketing automation learning who are your best prospects at any time with lead scoring triggered by website traffic, social media, and email campaign activity.</p>
      <p className='flex gap-6'><span className='items-center rounded pt-1 text-center'><IoCheckmarkCircleOutline className='w-10 bg-blue-500 text-white border rounded hover:bg-blue-700 h-10'/></span> Follow up with your leads with automated email marketing which is a very efficient way to nurture your leads.</p>
      <p className='flex gap-6'><span className='items-center rounded pt-1 text-center'><IoCheckmarkCircleOutline className='w-10 bg-blue-500 text-white border rounded hover:bg-blue-700 h-10'/></span> We re-engage leads throughout your marketing funnel by running dynamic retargeting advertisements.</p>
    
      </div>
  </div>
</section>

<section className='mt-10'>
    <div className='gap-20 flex flex-col md:flex-col lg:flex-row md:justify-center items-center text-center'>

        <div className='flex w-full md:w-96 flex-col gap-6'>
        <h2 className='text-2xl font-bold mb-4'>Increase Your Ranking With SEO</h2>
        <p>We deploy leading strategies and technology to improve the ranking of your websites, videos, and images. We take an individualized approach to each client that helps attracts profitable clients.</p>
        </div>

        <div className='flex w-full md:w-44 flex-col gap-6'>
        <h2 className='text-2xl font-bold '>Ecommerce SEO</h2>
        <p className='mb-8 font-bold'>We help optimize your pages based on brand, product categories, and more.</p>
        </div>

        <div className="w-full md:w-96">
            <Image height={500} width={500} src={EcomImg} alt='img'/>
        </div>
    </div>
</section>
<section className='mt-10 flex flex-col gap-10 md:flex-col lg:flex-row md:gap-44'>
  <div className='w-full md:w-1/2'>
    <Image src={FourthSection} alt='fourthsection' className='w-full h-auto'/>
  </div>

  <div className='w-full md:w-1/2 gap-12 p-4'>
    <h2 className='text-2xl font-bold mb-12'>Why Our Digital Marketing Agency?</h2>
    <div className='flex flex-col gap-6'>
      <p className='flex gap-6'> 
        <span className='flex items-center justify-center rounded pt-1 text-center'>
          <FaPlus className='text-orange-600'/>
        </span>
        Ignite your digital marketing results when we deploy the latest technology solutions to help you attract, convert, and retain customers for your business.
      </p>
      <p className='flex gap-6'>
        <span className='flex items-center justify-center rounded pt-1 text-center'>
          <FaPlus className='text-orange-600'/>
        </span>
        Our digital marketing agency offers month to month terms, and charge initial set-up fees that reflect the level of work required while you are our client. We believe that this aligns interests with yours as we work hard to earn your business each month.
      </p>
      <p className='flex gap-6'>
        <span className='flex items-center justify-center rounded pt-1 text-center'>
          <FaPlus className='text-orange-600'/>
        </span>
        Follow up with your leads with automated email marketing which is a very efficient way to nurture your leads.
      </p>
      <p className='flex gap-6'>
        <span className='flex items-center justify-center rounded pt-1 text-center'>
          <FaPlus className='text-orange-600'/>
        </span>
        Our integrated, strategic business planning services help your business maximize ROI by optimizing your operations and technology initiatives.
      </p>
    </div>
  </div>
</section>        
</>
    );
}

export default HomeServices;