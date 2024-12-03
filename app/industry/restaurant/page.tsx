import Image from "next/image";
import IMG from '../../../public/industry/restaurant/image1.png'
import IMG1 from '../../../public/industry/restaurant/image2.png'
import IMG2 from '../../../public/industry/restaurant/image3.png'
import IMG3 from '../../../public/industry/restaurant/image4.png'
import IMG4 from '../../../public/industry/restaurant/image5.png'

import Link from "next/link";

export default function RestaurantIndustry() {
  return (
    <section className="container px-2 md:px-12 lg:px-24">

     <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
        <h1 className='font-semibold-600 text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Restaurant
        </h1>
       
      </div>

      <div className="min-h-screen ">
        {/* Hero Section */}
        <div className="mx-auto px-0 md:px-6 lg:px-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 pb-10">
          <div className="flex flex-col gap-6 lg:flex-row items-center">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-start md:text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Restaurant Marketing Services 
              </h1>
              <p className="mt-4 text-gray-600 ">
              At Prime Marketing Experts, we understand that the restaurant industry is competitive and constantly evolving. Whether you run a casual eatery, a fine dining restaurant, or a fast-casual chain, we offer specialized marketing solutions designed to attract more customers, build brand loyalty, and increase your online visibility. 
              </p>
              <p className="text-gray-600">
              Our comprehensive marketing strategies are crafted to highlight your unique offerings and connect with the right audience. From social media campaigns to local SEO optimization and reputation management, we’ll help you grow your restaurant’s presence both online and offline, ensuring you stand out in the crowded marketplace. 
              </p>
              <Link href="/free-strategy-session"> 
            <button className="px-8 py-3 mt-8 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            </Link>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <Image
                src={IMG}
                alt="Restaurant Industry"
                width={500}   // Specify the width
                height={300}  // Specify the height
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Marketing Strategies Section */}
        <div className="container mx-auto px-0 md:px-6 bg-blue-50 my-10 lg:px-20 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-start md:text-center text-gray-800">Our Services</h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center bg-white p-2 md:p-6 rounded-lg shadow-lg">
              <Image
                src={IMG1}
                alt="Social Media Marketing"
                width={500}   // Specify the width
                height={350}  // Specify the height
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-start md:text-auto mt-6">Social Media Marketing</h3>
              <p className="mt-2 text-gray-600">
              Social media is a powerful tool for building relationships with your customers and increasing brand awareness. We create engaging social media campaigns that showcase your menu, promote special events, and build a loyal online community. From mouthwatering food photography to behind-the-scenes content, we’ll craft a strategy.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-2 md:p-6 rounded-lg shadow-lg">
              <Image
                src={IMG2}
                alt="SEO Marketing"
                width={500}   // Specify the width
                height={350}  // Specify the height
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-6">Local SEO Optimization </h3>
              <p className="mt-2 text-gray-600">
              Local SEO is essential for restaurant success. When potential customers search for dining options in your area, you need to be visible. We’ll optimize your restaurant’s website and online listings to ensure you appear in local search results, on Google Maps, and in local directories. This drives more organic traffic and helps you capture nearby customers. 
              </p>
            </div>
          </div>
        </div>

        {/* Industry Trends Section */}
        <div className=" py-16 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6">
          <div className="container mx-auto px-0 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-start md:text-center text-gray-800">Convenience is Key</h2>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col items-center bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg">
                <Image
                  src={IMG3}
                  alt="Online Ordering"
                  width={500}   // Specify the width
                  height={350}  // Specify the height
                  className="w-full h-56 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-6">Ready to Take Your Restaurant to the Next Level? </h3>
                <p className="mt-2 text-gray-600">
                Let Prime Marketing Experts help your restaurant grow by increasing online visibility, attracting more customers, and building brand loyalty. From social media engagement to reputation management, we offer a complete suite of marketing services tailored for the restaurant industry. 
                </p>
              </div>
              <div className="flex flex-col items-center bg-blue-50 p-2 rounded-lg shadow-lg">
                <Image
                  src={IMG4}
                  alt="Sustainability"
                  width={500}   // Specify the width
                  height={350}  // Specify the height
                  className="w-full h-56 object-cover rounded-lg"
                />
                <h3 className="text-xl text-start md:text-center font-semibold mt-6">Industry Expertise</h3>
                <p className="mt-2 text-gray-600">
                We have years of experience in the restaurant industry and understand the unique challenges you face. Our team knows how to create marketing strategies that drive results. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container mx-auto bg-blue-50 my-10 px-2 lg:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-start md:text-center text-gray-800">Why Choose Prime Marketing Experts?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Tailored Solutions</h3>
              <p className="mt-2 text-gray-600">
                Our team has years of experience in the restaurant industry, helping clients achieve their marketing goals with proven strategies.
              </p>
            </div>
            <div className="bg-white p-2 md:p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Affordable Packages</h3>
              <p className="mt-2 text-gray-600">
              Our services are designed to be scalable and cost-effective, making them accessible to restaurants of all sizes. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
