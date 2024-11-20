// /pages/real-estate.js
import Image from "next/image";
import IMG from '../../../public/industry/image.png'
import Link from "next/link";

const RealEstatePage = () => {
  return (
    <section className="real-estate-page container py-16 bg-gray-50">

<div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Real Estate
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Real Estate</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-content">
          <h1 className="text-5xl font-extrabold text-black mb-6">
            Revolutionize Your Real Estate Marketing
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Unlock the Potential of Prime Marketing Experts
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Real estate is more competitive than ever. To stand out, you need a 
            marketing strategy that not only grabs attention but also converts 
            potential leads into clients. At Prime Marketing Experts, we specialize 
            in crafting strategies tailored specifically for real estate professionals.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our services include targeted social media campaigns, SEO-optimized 
            property listings, and engaging content marketing. We ensure your properties 
            reach the right audience and drive more qualified traffic to your listings.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Whether you`re selling luxury homes or managing large commercial properties, 
            our team provides expert solutions designed to maximize your ROI. Discover how 
            we can transform your real estate business today.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/free-strategy-session"> 
            <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            </Link>
           
          </div>
        </div>

        {/* Right Image */}
        <div className="image-content relative">
          <div className="image-wrapper">
            <Image
              src={IMG} // Place your image in the public folder
              alt="Real Estate Marketing"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute top-10 left-10 bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg shadow-lg">
            Your Partner in Real Estate Success
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section mt-20">
        <h3 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Why Choose Prime Marketing Experts?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature-card bg-white shadow-md rounded-lg p-6 text-center transition-all hover:shadow-xl hover:scale-105">
            <i className="text-orange-600 text-4xl mb-4">
              <i className="ri-search-eye-line"></i>
            </i>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Market Insights</h4>
            <p className="text-gray-600">
              Leverage real-time market data to position your listings 
              effectively and stay ahead of the competition.
            </p>
          </div>
          <div className="feature-card bg-white shadow-md rounded-lg p-6 text-center transition-all hover:shadow-xl hover:scale-105">
            <i className="text-orange-600 text-4xl mb-4">
              <i className="ri-bill-line"></i>
            </i>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Customized Strategies</h4>
            <p className="text-gray-600">
              Every property is unique, and so is our approach. We create 
              personalized campaigns to meet your specific goals.
            </p>
          </div>
          <div className="feature-card bg-white shadow-md rounded-lg p-6 text-center transition-all hover:shadow-xl hover:scale-105">
            <i className="text-orange-600 text-4xl mb-4">
              <i className="ri-global-line"></i>
            </i>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Global Reach</h4>
            <p className="text-gray-600">
              Expand your business beyond local boundaries with marketing 
              techniques that attract international buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstatePage;
