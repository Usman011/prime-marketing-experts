"use client"
import Link from "next/link";
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight } from 'lucide-react';
import { FaHandshake, FaUserCircle, FaHeart, FaGem, FaUsers, FaThumbsUp, FaChartLine, FaCoins, FaStar, FaSitemap, FaComments, FaSyncAlt, FaDatabase, FaSearch, FaGlobe, FaLightbulb, FaClock, FaBan, FaIndustry, FaSearchDollar, FaCashRegister, FaTruck, FaBullseye, FaChartPie } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export function CarouselSection() {
    return (
      <section className="container py-10  flex flex-col justify-center items-center md:mt-auto my-10 w-full h-auto">
         <h2 className="text-4xl font-bold text-center mb-10 ">Solving your Digital Marketing and E-commerce Bottlenecks </h2>




        <Carousel plugins={[Autoplay({ delay: 5000 })]} className="w-full h-full">
				<CarouselContent>
					<CarouselItem>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20 bg-gray-100 rounded-2xl">

       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">How can we generate more sales-qualified leads and revenue?</h2>
        <p className="text-gray-700">
        Are you looking to generate more leads and drive more revenue? Execute customizes revenue marketing tactics to generate more high-quality sales lead and boost overall sales
        </p>

        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Increase qualified leads */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaHandshake size={20} />
    </span>
    <span className="font-semibold">Increase qualified leads.</span>
  </li>

  {/* Increase your sales team productivity */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaUserCircle size={20} />
    </span>
    <span className="font-semibold">Increase your sales team productivity.</span>
  </li>

  {/* Increase online market revenue */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaHeart size={20} />
    </span>
    <span className="font-semibold">Increase online market revenue.</span>
  </li>
</ul>

         
        </ul>
       
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20  bg-gray-100  rounded-2xl">
    
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why is my website not attracting enough potential customers?</h2>
        <p className="text-gray-700">
        Does your business find getting qualified leads into your pipeline to be a challenge? Boost your leads generation potential with our tailored digital marketing strategies and website development services designed to meet your specific business requirements.
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Maximizing your sales pipeline */}
  <li className="flex items-center text-black">
    <span className="mr-3  text-orange-400">
      <FaSitemap size={24} /> {/* Replaced with FaSitemap for pipeline representation */}
    </span>
    <span className="font-semibold">Maximizing your sales pipeline</span>
  </li>

  {/* Connecting your most ideal audience */}
  <li className="flex items-center text-black">
    <span className="mr-3  text-orange-400">
      <FaUsers size={24} /> {/* Replaced with FaUsers to represent connecting audiences */}
    </span>
    <span className="font-semibold">Connecting your most ideal audience</span>
  </li>

  {/* Increase conversation */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-500">
      <FaComments size={24} /> {/* Replaced with FaComments to represent conversation */}
    </span>
    <span className="font-semibold">Increase conversation</span>
  </li>
</ul>

         
        </ul>
        </div>
      </div>

    </div>

					</CarouselItem>

					<CarouselItem>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh]  gap-20 bg-gray-100 rounded-2xl">
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
        <ul className="space-y-4">
  {/* Maximizing your sales pipeline */}
  <li className="flex items-center text-black">
    <span className="mr-3  text-orange-400">
      <FaSitemap size={24} /> {/* Replaced with FaSitemap for pipeline representation */}
    </span>
    <span className="font-semibold">Maximizing your sales pipeline</span>
  </li>

  {/* Connecting your most ideal audience */}
  <li className="flex items-center text-black">
    <span className="mr-3  text-orange-400">
      <FaUsers size={24} /> {/* Replaced with FaUsers to represent connecting audiences */}
    </span>
    <span className="font-semibold">Connecting your most ideal audience</span>
  </li>

  {/* Increase conversation */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-500">
      <FaComments size={24} /> {/* Replaced with FaComments to represent conversation */}
    </span>
    <span className="font-semibold">Increase conversation</span>
  </li>
</ul>

         
        </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20  bg-gray-100 rounded-2xl">
    
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why is our marketing and sales data not interconnected?</h2>
        <p className="text-gray-700">
        We use marketing automation and CRM technology to align your sales and marketing efforts and maximize your return on investment for each sales qualified lead (SQL). This will help you organize your data, so salespeople can analyze efforts for better result and reports.
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Synergizing sales and marketing data to improve efficiency */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaSyncAlt size={20} />
    </span>
    <span className="font-semibold">Synergizing sales and marketing data to improve efficiency.</span>
  </li>

  {/* Using real-time data to prioritize leads */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaDatabase size={20} />
    </span>
    <span className="font-semibold">Using real-time data to prioritize leads.</span>
  </li>

  {/* Converting more prospects into clients */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaHandshake size={20} />
    </span>
    <span className="font-semibold">Converting more prospects into clients.</span>
  </li>
</ul>

         
        </ul>
        </div>
      </div>

    </div>
					</CarouselItem>

					<CarouselItem>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20 bg-gray-100 rounded-2xl">
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
        <ul className="space-y-4">
  {/* Synergizing sales and marketing data to improve efficiency */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaSyncAlt size={20} />
    </span>
    <span className="font-semibold">Synergizing sales and marketing data to improve efficiency.</span>
  </li>

  {/* Using real-time data to prioritize leads */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaDatabase size={20} />
    </span>
    <span className="font-semibold">Using real-time data to prioritize leads.</span>
  </li>

  {/* Converting more prospects into clients */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaHandshake size={20} />
    </span>
    <span className="font-semibold">Converting more prospects into clients.</span>
  </li>
</ul>

         
        </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20  bg-gray-100 rounded-2xl">
    
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why does our website get very little traffic?</h2>
        <p className="text-gray-700">
        When your website has low traffic,your`re missing out on potential business opportunities.We provide customizable SEO services, as well as Social Media and Search Engine PPC advertising, to enhance your website visibility on search engines and attract more visitors
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Increase presence on leading search engine */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaSearch size={20} />
    </span>
    <span className="font-semibold">Increase presence on leading search engine.</span>
  </li>

  {/* Converting website into clients */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaGlobe size={20} />
    </span>
    <span className="font-semibold">Converting website into clients.</span>
  </li>

  {/* Increase thought leadership */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaLightbulb size={20} />
    </span>
    <span className="font-semibold">Increase thought leadership.</span>
  </li>
</ul>

         
        </ul>
        </div>
      </div>

    </div>
		</CarouselItem>


    <CarouselItem>
    <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
     
    <div className="w-full md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20 bg-gray-100 rounded-2xl">
    <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why does our website get very little traffic?</h2>
        <p className="text-gray-700">
        When your website has low traffic,your`re missing out on potential business opportunities.We provide customizable SEO services, as well as Social Media and Search Engine PPC advertising, to enhance your website visibility on search engines and attract more visitors
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Increase presence on leading search engine */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaSearch size={20} />
    </span>
    <span className="font-semibold">Increase presence on leading search engine.</span>
  </li>

  {/* Converting website into clients */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaGlobe size={20} />
    </span>
    <span className="font-semibold">Converting website into clients.</span>
  </li>

  {/* Increase thought leadership */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaLightbulb size={20} />
    </span>
    <span className="font-semibold">Increase thought leadership.</span>
  </li>
</ul>

         
        </ul>
        </div>
   
      
      
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20  bg-gray-100 rounded-2xl">
      <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why does managing digital campaigns take so much time?</h2>
        <p className="text-gray-700">
        We help your company use latest advertising strategies and technology to make the most of your advertising budget. Our experts will optimize your advertising budget by targeting ads,creating engaging graphics, and distributing your budget effectively across platforms
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Save time on managing ineffective digital marketing and website campaigns */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaClock size={20} />
    </span>
    <span className="font-semibold">Save time on managing ineffective digital marketing and website campaigns.</span>
  </li>

  {/* Avoid ineffective marketing campaign spending */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaBan size={20} />
    </span>
    <span className="font-semibold">Avoid ineffective marketing campaigns spending.</span>
  </li>

  {/* Harness the power of industry */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaIndustry size={20} />
    </span>
    <span className="font-semibold">Harness the power of industry.</span>
  </li>
</ul>

         
        </ul>
       
        </div> 
    
       
      </div>

    </div>
    </CarouselItem>

    <CarouselItem>
    <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20 bg-gray-100 rounded-2xl">
    <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why does managing digital campaigns take so much time?</h2>
        <p className="text-gray-700">
        We help your company use latest advertising strategies and technology to make the most of your advertising budget. Our experts will optimize your advertising budget by targeting ads,creating engaging graphics, and distributing your budget effectively across platforms
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Save time on managing ineffective digital marketing and website campaigns */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaClock size={20} />
    </span>
    <span className="font-semibold">Save time on managing ineffective digital marketing and website campaigns.</span>
  </li>

  {/* Avoid ineffective marketing campaign spending */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaBan size={20} />
    </span>
    <span className="font-semibold">Avoid ineffective marketing campaigns spending.</span>
  </li>

  {/* Harness the power of industry */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaIndustry size={20} />
    </span>
    <span className="font-semibold">Harness the power of industry.</span>
  </li>
</ul>
        </ul>
        </div> 
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20  bg-gray-100 rounded-2xl">
    
      <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why are we not receiving enough online store orders, and how can we improve the efficiency of processing the ones we do receive?</h2>
        <p className="text-gray-700">
        In addition to our thousands of testimonials and 775+ third-party reviews, Prime Marketing Experts has earned national recognition from respected organizations throughout the design, marketing, and business sectors.
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* E-commerce SEO and PPC services */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaSearchDollar size={20} />
    </span>
    <span className="font-semibold">E-commerce SEO and PPC services</span>
  </li>

  {/* Integrated POS solution */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaCashRegister size={20} />
    </span>
    <span className="font-semibold">Integrated POS solution</span>
  </li>

  {/* Local Delivery Fulfillment integration */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaTruck size={20} />
    </span>
    <span className="font-semibold">Local Delivery Fulfillment integration</span>
  </li>
</ul>
        </ul>
        </div>
      </div>

    </div>
    </CarouselItem>


    <CarouselItem>
    <div className="flex flex-col md:flex-row items-center justify-center max-w-auto md:max-w-5xl mx-auto gap-7  md:gap-10">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20 bg-gray-100 rounded-2xl">
    <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why does managing digital campaigns take so much time?</h2>
        <p className="text-gray-700">
        We help your company use latest advertising strategies and technology to make the most of your advertising budget. Our experts will optimize your advertising budget by targeting ads,creating engaging graphics, and distributing your budget effectively across platforms
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Save time on managing ineffective digital marketing and website campaigns */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaClock size={20} />
    </span>
    <span className="font-semibold">Save time on managing ineffective digital marketing and website campaigns.</span>
  </li>

  {/* Avoid ineffective marketing campaign spending */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaBan size={20} />
    </span>
    <span className="font-semibold">Avoid ineffective marketing campaigns spending.</span>
  </li>

  {/* Harness the power of industry */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-300">
      <FaIndustry size={20} />
    </span>
    <span className="font-semibold">Harness the power of industry.</span>
  </li>
</ul>
        </ul>
        </div> 
      </div>

      {/* Right Side */}
      <div className="w-full hidden md:block md:w-2/4 h-auto md:h-[50-vh] lg:h-[50vh] gap-20  bg-gray-100 rounded-2xl">
    
      <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">Why we are spending too much money to acquire each customer using advertising?</h2>
        <p className="text-gray-700">
      We help your company using latest advertising strategies and technologies to make the most of advertising budget.Our expertise will optimize your advertising budget by targeting ads, creating engaging graphics, distributing your budget effectively across platforms. 
        </p>
        <ul className="space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold pt-4 ">We Can Help With:</h2>
        <ul className="space-y-4">
  {/* Comprehensive ad targeting optimization */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaBullseye size={20} />
    </span>
    <span className="font-semibold">Comprehensive ad targeting optimization.</span>
  </li>

  {/* Engage your visitors throughout your website */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaUsers size={20} />
    </span>
    <span className="font-semibold">Engage your visitors throughout your website.</span>
  </li>

  {/* Maximize ROI of paid ad budget */}
  <li className="flex items-center text-black">
    <span className="mr-3 text-orange-400">
      <FaChartPie size={20} />
    </span>
    <span className="font-semibold">Maximize ROI of paid ad budget.</span>
  </li>
</ul>

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

