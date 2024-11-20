import Image from "next/image";
import IMG from '../../../public/industry/restaurant/image1.png'
import IMG1 from '../../../public/industry/restaurant/image2.png'
import IMG2 from '../../../public/industry/restaurant/image3.png'
import IMG3 from '../../../public/industry/restaurant/image4.png'
import IMG4 from '../../../public/industry/restaurant/image5.png'

import Link from "next/link";

export default function RestaurantIndustry() {
  return (
    <section className="container">

     <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Restaurant
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Restaurant</li>
          </ul>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="mx-auto px-6 lg:px-20 py-16">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Transform Your Restaurant`s Reach
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Discover tailored marketing solutions to help your restaurant attract more customers, build loyalty, and enhance online visibility. From local SEO to engaging social media campaigns, we’re here to elevate your brand.
              </p>
              <Link href="/free-strategy-session" className="my-6 "> 
            <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
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
        <div className="container mx-auto px-6 lg:px-20 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Restaurant Marketing Strategies</h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={IMG1}
                alt="Social Media Marketing"
                width={500}   // Specify the width
                height={350}  // Specify the height
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-6">Social Media Engagement</h3>
              <p className="mt-2 text-gray-600">
                Leverage platforms like Instagram, Facebook, and TikTok to engage with your audience, post enticing visuals of your dishes, and offer exclusive promotions.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={IMG2}
                alt="SEO Marketing"
                width={500}   // Specify the width
                height={350}  // Specify the height
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-6">Local SEO Optimization</h3>
              <p className="mt-2 text-gray-600">
                Boost your restaurant’s online presence with local SEO techniques to rank higher in search results and make it easier for customers to find you.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Trends Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-3xl font-bold text-center text-gray-800">Industry Trends in the Restaurant Sector</h2>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src={IMG3}
                  alt="Online Ordering"
                  width={500}   // Specify the width
                  height={350}  // Specify the height
                  className="w-full h-56 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-6">The Rise of Online Ordering</h3>
                <p className="mt-2 text-gray-600">
                  With the increase in demand for convenience, online ordering and delivery services have become an essential part of the restaurant business model.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src={IMG4}
                  alt="Sustainability"
                  width={500}   // Specify the width
                  height={350}  // Specify the height
                  className="w-full h-56 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-6">Sustainability in Dining</h3>
                <p className="mt-2 text-gray-600">
                  Eco-conscious dining practices are on the rise. Restaurants are adopting sustainable sourcing, reducing food waste, and supporting local farmers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container mx-auto px-6 lg:px-20 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Prime Marketing Experts?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Experienced Marketing Team</h3>
              <p className="mt-2 text-gray-600">
                Our team has years of experience in the restaurant industry, helping clients achieve their marketing goals with proven strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Tailored Solutions</h3>
              <p className="mt-2 text-gray-600">
                We don’t use a one-size-fits-all approach. We create customized marketing strategies that align with your restaurant’s unique goals and target audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
