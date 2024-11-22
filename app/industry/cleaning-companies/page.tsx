import Image from "next/image";
import Link from "next/link";
import IMG from '../../../public/industry/cleaning/image.png'
import IMG1 from '../../../public/images/vedio-seo/image.png'
import IMG2 from '../../../public/images/Maketing/content-marketing/image1.png'
import IMG3 from '../../../public/images/Maketing/Social Media Marketing/image2.png'
import IMG4 from '../../../public/images/Maketing/email marketing/image3.png'
import IMG5 from '../../../public/images/section_01.jpg'


export default function CleaningCompanies() {
  return (
    <section className="container  min-h-screen bg-gray-50 py-16">
        <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Cleaning Company
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li> Cleaning Company</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto ">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12 transform transition-all duration-500 hover:scale-105">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Unlock Your Cleaning Company’s Potential with Prime Marketing
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Revolutionize your cleaning business with our cutting-edge marketing strategies. From brand awareness to client retention, our custom campaigns will drive growth, boost visibility, and generate high-quality leads.
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
              alt="Cleaning Industry"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Cleaning Services Section */}
        <div className="bg-white py-16 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Our Tailored Cleaning Marketing Services</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG1}
                alt="Local SEO"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Local SEO for Cleaning Companies</h3>
              <p className="mt-2 text-gray-600 text-center">
                Boost your visibility in local search results, making it easier for nearby customers to find and book your cleaning services.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG3}
                alt="Social Media Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Social Media Strategy & Management</h3>
              <p className="mt-2 text-gray-600 text-center">
                Engage with your target audience on platforms like Instagram, Facebook, and LinkedIn, showcasing your services, tips, and client testimonials.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG4}
                alt="Paid Advertising"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Targeted Paid Ads Campaigns</h3>
              <p className="mt-2 text-gray-600 text-center">
                Run paid search and display ads to directly reach potential clients actively searching for cleaning services in your area.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG5}
                alt="Reputation Management"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Reputation Management</h3>
              <p className="mt-2 text-gray-600 text-center">
                Build and maintain a positive online reputation by managing customer reviews and feedback effectively to enhance trust in your services.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG2}
                alt="Content Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Content Marketing for Cleaning Services</h3>
              <p className="mt-2 text-gray-600 text-center">
                Craft high-quality content such as blog posts, cleaning tips, and video tutorials that resonate with your audience and boost SEO.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG}
                alt="Email Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Email Marketing Campaigns</h3>
              <p className="mt-2 text-gray-600 text-center">
                Keep your customers engaged with regular email newsletters, seasonal promotions, and special offers to increase repeat bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-100 py-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Why Cleaning Businesses Choose Prime Marketing Experts</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Industry Expertise</h3>
              <p className="mt-2 text-gray-600">
                Our team specializes in the cleaning industry, understanding its unique needs and challenges, and delivering results-driven marketing solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Custom-Tailored Strategies</h3>
              <p className="mt-2 text-gray-600">
                We create marketing plans that are specifically designed for your business, helping you target the right customers with the right message.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Proven Results</h3>
              <p className="mt-2 text-gray-600">
                Our strategies deliver measurable results, from increased online visibility to higher lead generation and conversion rates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
              <p className="mt-2 text-gray-600">
                We offer around-the-clock support, ensuring that your marketing campaigns run smoothly and any questions are addressed promptly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Full Transparency</h3>
              <p className="mt-2 text-gray-600">
                We provide full transparency in our marketing efforts, sharing regular reports and performance metrics to ensure you’re always in the loop.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Affordable Packages</h3>
              <p className="mt-2 text-gray-600">
                Our marketing solutions are affordable, scalable, and tailored to meet the needs of cleaning businesses of all sizes.
              </p>
            </div>
          </div>
        </div>

       

       {/* Tourism Call-to-Action Section */}
<div className="w-full flex flex-col lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto mt-6 mb-6 lg:flex-row items-center justify-evenly px-6 lg:px-12">
  <h1 className="font-bold text-white text-2xl md:text-4xl text-center leading-tight">
  Ready to Grow Your Cleaning Business?
  </h1>
  <Link href="/contact">
    <button className="bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 mt-4 lg:mt-0 flex justify-center items-center hover:text-black text-white rounded-lg">
      CONTACT NOW
    </button>
  </Link>
</div>
      </div>
    </section>
  );
}
