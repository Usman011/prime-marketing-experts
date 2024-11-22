"use client"
import Link from "next/link";
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight } from 'lucide-react';
import { FaHandshake, FaUserCircle, FaHeart, FaGem, FaUsers, FaThumbsUp, FaChartLine, FaCoins, FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export function CarouselSection() {
    return (
      <section className="bg-gray-100 container py-10 flex flex-col justify-center items-center   md:mt-auto my-10 w-full h-auto">
         <h2 className="text-4xl font-bold text-center mb-10 ">Solving your Digital Marketing and E-commerce Bottlenecks </h2>




        <Carousel plugins={[Autoplay({ delay: 5000 })]} className="w-full h-full">
				<CarouselContent>
					<CarouselItem>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[90-vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">

       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">How can we generate more sales-qualified leads and revenue?</h2>
        <p className="text-gray-700">
        Are you looking to generate more leads and drive more revenue? Execute customizes revenue marketing tactics to generate more high-quality sales lead and boost overall sales?
        </p>

        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaHandshake size={20} />
            </span>
            <span>Long-Term Engagement</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaUserCircle size={20} />
            </span>
            <span>Personalization</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaHeart size={20} />
            </span>
            <span>Customer-Centric Approach</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaGem size={20} />
            </span>
            <span>Value Creation</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaUsers size={20} />
            </span>
            <span>Community Building</span>
          </li>
        </ul>
       
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[90-vh] gap-20  bg-gray-50 shadow-lg rounded-2xl">
    
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why is my website not attracting enough potential customers?</h2>
        <p className="text-gray-700">
        Does your business find getting qualified leads into your pipeline to be a challenge? Boost your leads generation potential with our tailored digital marketing strategies and website development services designed to meet your specific business requirements.
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaThumbsUp size={20} />
            </span>
            <span>Increased Customer Loyalty</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaChartLine size={20} />
            </span>
            <span>Higher Customer Lifetime Value (CLV)</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaCoins size={20} />
            </span>
            <span>Cost Efficiency</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaStar size={20} />
            </span>
            <span>Enhanced Brand Reputation</span>
          </li>
        </ul>
        </div>
      </div>

    </div>

					</CarouselItem>

					<CarouselItem>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[90-vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    {/* <button className="bg-gradient-main text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
     Our Culture
     </button> */}
      <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why is my website not attracting enough potential customers?</h2>
        <p className="text-gray-700">
        Does your business find getting qualified leads into your pipeline to be a challenge? Boost your leads generation potential with our tailored digital marketing strategies and website development services designed to meet your specific business requirements.
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaThumbsUp size={20} />
            </span>
            <span>Increased Customer Loyalty</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaChartLine size={20} />
            </span>
            <span>Higher Customer Lifetime Value (CLV)</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaCoins size={20} />
            </span>
            <span>Cost Efficiency</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaStar size={20} />
            </span>
            <span>Enhanced Brand Reputation</span>
          </li>
        </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[90-vh] gap-20  bg-gray-50 shadow-lg rounded-2xl">
    
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why is our marketing and sales data not interconnected?</h2>
        <p className="text-gray-700">
        We use marketing automation and CRM technology to align your sales and marketing efforts and maximize your return on investment for each sales qualified lead (SQL). This will help you organize your data, so salespeople can analyze efforts for better result and reports.
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaThumbsUp size={20} />
            </span>
            <span>Increased Customer Loyalty</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaChartLine size={20} />
            </span>
            <span>Higher Customer Lifetime Value (CLV)</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaCoins size={20} />
            </span>
            <span>Cost Efficiency</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaStar size={20} />
            </span>
            <span>Enhanced Brand Reputation</span>
          </li>
        </ul>
        </div>
      </div>

    </div>
					</CarouselItem>

					<CarouselItem>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[90-vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    {/* <button className="bg-gradient-main text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
     Our Culture
     </button> */}
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why is our marketing and sales data not interconnected?</h2>
        <p className="text-gray-700">
        We use marketing automation and CRM technology to align your sales and marketing efforts and maximize your return on investment for each sales qualified lead (SQL). This will help you organize your data, so salespeople can analyze efforts for better result and reports.
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaThumbsUp size={20} />
            </span>
            <span>Increased Customer Loyalty</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaChartLine size={20} />
            </span>
            <span>Higher Customer Lifetime Value (CLV)</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaCoins size={20} />
            </span>
            <span>Cost Efficiency</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaStar size={20} />
            </span>
            <span>Enhanced Brand Reputation</span>
          </li>
        </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[90-vh] gap-20  bg-gray-50 shadow-lg rounded-2xl">
    
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why does our website get very little traffic?</h2>
        <p className="text-gray-700">
        When your website has low traffic,your`re missing out on potential business opportunities.We provide customizable SEO services, as well as Social Media and Search Engine PPC advertising, to enhance your website visibility on search engines and attract more visitors
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaThumbsUp size={20} />
            </span>
            <span>Increased Customer Loyalty</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaChartLine size={20} />
            </span>
            <span>Higher Customer Lifetime Value (CLV)</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaCoins size={20} />
            </span>
            <span>Cost Efficiency</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaStar size={20} />
            </span>
            <span>Enhanced Brand Reputation</span>
          </li>
        </ul>
        </div>
      </div>

    </div>
		</CarouselItem>


    <CarouselItem>
    <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[90-vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    {/* <button className="bg-gradient-main text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
     Our Culture
     </button> */}
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why does managing digital campaigns take so much time?</h2>
        <p className="text-gray-700">
        We help your company use latest advertising strategies and technology to make the most of your advertising budget. Our experts will optimize your advertising budget by targeting ads,creating engaging graphics, and distributing your budget effectively across platforms
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4">We Can Help With:</h2>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaHandshake size={20} />
            </span>
            <span>Long-Term Engagement</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaUserCircle size={20} />
            </span>
            <span>Personalization</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaHeart size={20} />
            </span>
            <span>Customer-Centric Approach</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaGem size={20} />
            </span>
            <span>Value Creation</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaUsers size={20} />
            </span>
            <span>Community Building</span>
          </li>
        </ul>
       
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[90-vh] gap-20  bg-gray-50 shadow-lg rounded-2xl">
    
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why are we not receiving enough online store orders, and how can we improve the efficiency of processing the ones we do receive?</h2>
        <p className="text-gray-700">
        In addition to our thousands of testimonials and 775+ third-party reviews, Prime Marketing Experts has earned national recognition from respected organizations throughout the design, marketing, and business sectors.
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaThumbsUp size={20} />
            </span>
            <span>Increased Customer Loyalty</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaChartLine size={20} />
            </span>
            <span>Higher Customer Lifetime Value (CLV)</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaCoins size={20} />
            </span>
            <span>Cost Efficiency</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaStar size={20} />
            </span>
            <span>Enhanced Brand Reputation</span>
          </li>
        </ul>
        </div>
      </div>

    </div>
    </CarouselItem>

    <CarouselItem>
    <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[90-vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    {/* <button className="bg-gradient-main text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
     Our Culture
     </button> */}
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 "> What It Means to Be a Relationship-Driven Marketing Firm</h2>
        <p className="text-gray-700">
        PME adopts a holistic approach that values ongoing customer engagement and satisfaction over mere
        transactional interactions, ultimately leading to sustainable business growth and competitive advantage.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaHandshake size={20} />
            </span>
            <span>Long-Term Engagement</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaUserCircle size={20} />
            </span>
            <span>Personalization</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaHeart size={20} />
            </span>
            <span>Customer-Centric Approach</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaGem size={20} />
            </span>
            <span>Value Creation</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaUsers size={20} />
            </span>
            <span>Community Building</span>
          </li>
        </ul>
       
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[90-vh] gap-20  bg-gray-50 shadow-lg rounded-2xl">
    
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 "> The Benefits of Relationship-Driven Marketing</h2>
        <p className="text-gray-700">
        In addition to our thousands of testimonials and 775+ third-party reviews, Prime Marketing Experts has earned national recognition from respected organizations throughout the design, marketing, and business sectors.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaThumbsUp size={20} />
            </span>
            <span>Increased Customer Loyalty</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaChartLine size={20} />
            </span>
            <span>Higher Customer Lifetime Value (CLV)</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaCoins size={20} />
            </span>
            <span>Cost Efficiency</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaStar size={20} />
            </span>
            <span>Enhanced Brand Reputation</span>
          </li>
        </ul>
        </div>
      </div>

    </div>
    </CarouselItem>

				</CarouselContent>
			</Carousel>
 
                   
      </section>
    );
  }

