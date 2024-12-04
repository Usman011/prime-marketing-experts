
import React from 'react';
import IMG from '../../public/images/free-strategy-section/image.png';
import Image from 'next/image';

const Page = () => {
  return (
    <section className='container mx-auto my-10 px-2 md:px-6 lg:px-12 flex flex-col'>
      <div className='mt-10 flex flex-col bg-blue-100 gap-10 md:flex-col lg:flex-row'>
        <div className='lg:w-1/2 gap-12 p-2 md:p-4'>
          <h2 className='text-3xl font-bold mb-4'>Ready For Better Digital Marketing Results?</h2>
          <p className='mb-8 text-2xl italic font-bold'>Grow Your Sales Profitably With Prime Marketing Experts!</p>
          <p>We offer a full range of digital marketing and website development services to help you achieve the best growth for your business as possible.</p>
          <div className='flex flex-col space-y-6'>
            <ul className='list-none pl-5 space-y-4'>
              <p className='font-bold'>Our Popular Services Include:</p>
              <li>– Lead generation</li>
              <li>– SEO</li>
              <li>– Search Engine Advertising</li>
              <li>– Social Media Advertising</li>
              <li>– Display Advertising</li>
              <li>– Email Marketing</li>
              <li>– Text Message Marketing</li>
              <li>– Marketing Automation Management & Implementation</li>
              <li>– Website Development & Design</li>
              <li>– Content Marketing</li>
            </ul>
          </div>
        </div>

        <div className='lg:w-1/2 p-2 md:p-4'>
          <h1 className='text-3xl pb-4 font-bold'>
            Sign Up for Your Free Initial 45 Minute Strategy Session Now!
          </h1>
          <form className='space-y-8 p-6 bg-sky-300 rounded-lg shadow-lg'>
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
              <label className='text-gray-700 mb-1'>I would describe myself as...</label>
              <select className='mt-2 block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4'>
                <option>-Please Choose an Option-</option>
                <option>The founder of startup</option>
                <option>Sale representative</option>
                <option>CEO/President</option>
                <option>Agency</option>
                <option>Finance Professional</option>
                <option>Finance Executive/Manger</option>
                <option>IT Executive/Director</option>
                <option>Other</option>
                <option>Marketing Practitioner</option>
                <option>Chief Marketing Officer</option>
                <option>Marketing Manager/Director</option>
                <option>IT Specialist Manager</option>
                <option>Sales Executive</option>
                <option>Sales Manager/Director</option>
                <option>Sales Professional</option>
              </select>
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
      </div>

      <div className="flex flex-col mx-2 gap-10 mt-10">
        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-4xl">
            Why Prime Marketing Experts?
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 mt-14">
              <ul className='list-disc pl-5 space-y-4'>
                <li>We are a full service digital marketing agency with services structured to help you achieve synergies to maximize results of every campaign</li>
                <li>Flexible solutions that scale based on your current business needs & available resources</li>
                <li>Free, one time 45 minute initial strategy session available to all prospective clients</li>
              </ul>
            </div>
            <div className="w-full h-full mt-10">
              <Image src={IMG} alt="free strategy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;