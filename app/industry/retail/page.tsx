import Image from "next/image";
import IMG from '../../../public/industry/retail/image1.png'
import IMG1 from '../../../public/industry/retail/image2.png'
import IMG2 from '../../../public/industry/retail/image3.png'
import IMG3 from '../../../public/industry/retail/image4.png'
import Link from "next/link";

export default function RetailIndustry() {
  return (
    <section className="min-h-screen container bg-gray-50 py-16">
         <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Retail
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Retail</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto ">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12 transform transition-all duration-500 hover:scale-105">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Unlock the Power of Retail Marketing with Prime Experts
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Explore our innovative marketing strategies designed to enhance your retail brand’s presence, drive sales, and engage customers. From data-driven advertising to personalized shopping experiences, we provide holistic solutions for retail businesses.
            </p>
            <Link href="/free-strategy-session" className="my-6 "> 
            <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 transform transition-all duration-500 hover:scale-105">
            <Image
              src={IMG}
              alt="Retail Industry"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Retail Marketing Strategies Section */}
        <div className="bg-white py-16 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Our Retail Marketing Strategies</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG1}
                alt="Social Media Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Social Media Engagement</h3>
              <p className="mt-2 text-gray-600 text-center">
                Engage with customers across multiple platforms like Instagram, Facebook, and Twitter to drive foot traffic and brand loyalty.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG2}
                alt="SEO Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">SEO Optimization</h3>
              <p className="mt-2 text-gray-600 text-center">
                Improve your online visibility and attract local customers with powerful SEO strategies tailored for retail businesses.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG3}
                alt="Paid Advertising"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Targeted Advertising</h3>
              <p className="mt-2 text-gray-600 text-center">
                Run targeted ad campaigns that drive conversions and increase ROI by reaching the right customers at the right time.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="py-16 bg-blue-50">
          <h2 className="text-3xl font-semibold text-center text-gray-800">What Our Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                Prime Marketing Experts helped us increase our sales by 40% through their tailored digital marketing strategies. Highly recommend!
              </p>
              <p className="mt-4 font-semibold text-gray-800">John D.</p>
              <p className="text-gray-500">Retail Business Owner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                Their SEO and social media strategies have taken our online presence to new heights. We couldn`t have done it without them!
              </p>
              <p className="mt-4 font-semibold text-gray-800">Jane S.</p>
              <p className="text-gray-500">E-Commerce Store Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                Thanks to Prime Marketing Experts, our brand visibility has soared, and we`re seeing incredible foot traffic in our stores!
              </p>
              <p className="mt-4 font-semibold text-gray-800">Michael T.</p>
              <p className="text-gray-500">Store Owner</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Why Choose Prime Marketing Experts?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Proven Results</h3>
              <p className="mt-2 text-gray-600">
                We have a track record of driving measurable results for retail businesses through targeted marketing and data-driven insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Tailored Strategies</h3>
              <p className="mt-2 text-gray-600">
                Every retail business is unique, and we create marketing solutions tailored specifically to your brand`s needs and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
              <p className="mt-2 text-gray-600">
                Our team consists of experienced professionals with deep expertise in retail marketing and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
