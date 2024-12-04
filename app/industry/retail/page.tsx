import Image from "next/image";
import IMG from '../../../public/industry/retail/image1.png'
import IMG1 from '../../../public/industry/retail/image2.png'
import IMG2 from '../../../public/industry/retail/image3.png'
import IMG3 from '../../../public/industry/retail/image4.png'
import Link from "next/link";

export default function RetailIndustry() {
  return (
    <section className="min-h-screen container px-2 md:px-12 lg:px-24">
         <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
        <h1 className='font-semibold-600 text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Retail
        </h1>
        
      </div>
      <div className="mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6  justify-between mb-10 pb-10">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text:start md:text-center lg:text-left lg:pr-12 transform transition-all duration-500 hover:scale-105">
            <h1 className="text-3xl md:text-4xl lg:text-4xl text- font-bold text-gray-800 leading-tight">
            Retail Marketing Services by Prime Marketing Experts 
            </h1>
            <p className="mt-6  text-gray-600">
            At Prime Marketing Experts, we understand that the retail industry is fast-paced and ever-changing. Whether you own a brick-and-mortar store, run an e-commerce shop, or manage a multi-location retail chain, we provide customized marketing strategies to help you stand out from the competition, boost sales, and build lasting customer relationships. 
            </p>
            <Link href="/free-strategy-session"> 
            <button className="px-8 py-3 my-8 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
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
        <div className="bg-blue-50 my-10 py-10 p-0 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-start  text-gray-800">Our Retail Marketing Strategies</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-2 md:p-6 bg-white rounded-lg shadow-md  transition-all">
              <Image
                src={IMG1}
                alt="Social Media Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-start md:text-center mt-4 text-gray-800">Social Media Engagement</h3>
              <p className="mt-2 text-gray-600 text:start md:text-center">
              Social media is an essential tool for connecting with your customers and promoting your retail products. We create dynamic social media strategies that highlight your products, seasonal promotions, and events while engaging your audience with compelling content. From Instagram shopping to Facebook campaigns, we ensure your retail brand is visible and appealing across the platforms your customers use most. 
              </p>
            </div>
            <div className="flex flex-col items-center p-2 md:p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG2}
                alt="SEO Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">SEO Optimization</h3>
              <p className="mt-2 text-gray-600 text-start">
              Search engine optimization (SEO) is key to ensuring that your retail business ranks highly on search engines and gets discovered by potential customers. Our SEO strategies are designed to increase organic traffic, improve product visibility, and drive sales both online and in-store. We optimize your website and product listings, ensuring that you appear in the right search results. 
              </p>
            </div>
            <div className="flex flex-col items-center p-2 md:p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG3}
                alt="Paid Advertising"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Targeted Advertising</h3>
              <p className="mt-2 text-gray-600 text:start md:text-center">
              Paid advertising allows you to target your ideal customers and drive instant results. We design and manage targeted advertising campaigns on platforms like Google Ads, Facebook, Instagram, and more to increase visibility, boost product sales, and drive traffic to your store or website. With our data-driven approach, we ensure that every dollar you spend on advertising delivers measurable results. 
              </p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="my-10 py-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-gray-800">What Our Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                Prime Marketing Experts helped us increase our sales by 40% through their tailored digital marketing strategies. Highly recommend!
              </p>
              <p className="mt-4 font-semibold text-gray-800">John D.</p>
              <p className="text-gray-500">Retail Business Owner</p>
            </div>
            <div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                Their SEO and social media strategies have taken our online presence to new heights. We couldn`t have done it without them!
              </p>
              <p className="mt-4 font-semibold text-gray-800">Jane S.</p>
              <p className="text-gray-500">E-Commerce Store Manager</p>
            </div>
            <div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                Thanks to Prime Marketing Experts, our brand visibility has soared, and we`re seeing incredible foot traffic in our stores!
              </p>
              <p className="mt-4 font-semibold text-gray-800">Michael T.</p>
              <p className="text-gray-500">Store Owner</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="my-10 py-10 bg-blue-50 p-2 md:p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-gray-800">Why Choose Prime Marketing Experts?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-2 md:p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Proven Results</h3>
              <p className="mt-2 text-gray-600">
              We have a strong track record of driving measurable results for retail businesses by using data-driven marketing strategies. 
              </p>
            </div>
            <div className="bg-white p-2 md:p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Tailored Strategies</h3>
              <p className="mt-2 text-gray-600">
              We don’t believe in one-size-fits-all solutions. Every retail business is unique, and we create custom marketing plans that align with your goals. 
              </p>
            </div>
            <div className="bg-white p-2 md:p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
              <p className="mt-2 text-gray-600">
              Our team of marketing professionals has extensive experience in the retail industry, ensuring that we understand the challenges you face and know how to overcome them. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
