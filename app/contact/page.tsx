import Link from 'next/link'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const page = () => {
  return (
    <>
      <section>
        {/* Contact Us Header */}
        <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20  lg:ml-auto w-full h-52 flex-col  text-center'>
          <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>Contact Us</h1>
          <div className='flex gap-6 justify-center mt-4'>
            <Link href="/">
              <p className='text-gray-500 hover:text-gray-800'>Home</p>
            </Link>
            <ul className="list-disc">
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Contact Info and Form Section */}
        <div className='flex flex-col lg:flex-row justify-center  items-start  lg:items-center mt-10 mx-6 lg:mx-10 gap-12'>

          {/* Contact Info */}
          <div className='lg:w-1/2 p-4 '>
            <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>
            <p className='mb-8 text-lg'>Prime Marketing Experts is looking forward to sparking growth in your business!</p>
            
            <div className='flex flex-col gap-8'>

              {/* Location */}
              <div className='flex gap-6 items-center'>
                <FaLocationDot className='w-6 h-6 text-orange-500' />
                <div className='flex flex-col'>
                  <h3 className='text-xl font-semibold'>Visit Us:</h3>
                  <p>2 Burlington Woods #100, Burlington, MA, 01803</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex gap-6 items-center'>
                <MdEmail className='w-6 h-6 text-blue-600' />
                <div className='flex flex-col'>
                  <h3 className='text-xl font-semibold'>Mail Us:</h3>
                  <p>hello@primemarketingexperts.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className='flex gap-6 items-center'>
                <FaPhoneAlt className='w-6 h-6 text-green-400' />
                <div className='flex flex-col'>
                  <h3 className='text-xl font-semibold'>Phone Us:</h3>
                  <p>(617) 651-1457</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:w-1/2 p-4'>
            <h1 className='text-3xl font-bold mb-6'>Contact Us Now</h1>
            <form className='space-y-4 p-6 bg-white rounded-lg shadow-lg'>

              {/* First Name */}
              <div className='flex flex-col'>
                <label className='text-gray-700 mb-1'>First Name*</label>
                <input type='text' className='block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' />
              </div>

              {/* Last Name */}
              <div className='flex flex-col'>
                <label className='text-gray-700 mb-1'>Last Name*</label>
                <input type='text' className='block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' />
              </div>

              {/* Email */}
              <div className='flex flex-col'>
                <label className='text-gray-700 mb-1'>Email*</label>
                <input type='email' className='block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' />
              </div>

              {/* Phone Number */}
              <div className='flex flex-col'>
                <label className='text-gray-700 mb-1'>Number*</label>
                <input type='text' className='block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' />
              </div>

              {/* Company Name */}
              <div className='flex flex-col'>
                <label className='text-gray-700 mb-1'>Company Name*</label>
                <input type='text' className='block w-full h-12 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4' />
              </div>

              {/* Message */}
              <div className='flex flex-col'>
                <label className='text-gray-700 mb-1'>Message</label>
                <textarea className='block w-full h-32 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4'></textarea>
              </div>

              {/* Submit Button */}
              <button className='bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-400 hover:to-orange-600 w-60 h-12 md:h-14 flex justify-center items-center text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out'>
                Submit
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default page;
