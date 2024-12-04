import Image from "next/image";
import Link from "next/link";
import IMG from '../../../public/industry/cleaning/image.png'
import IMG1 from '../../../public/images/vedio-seo/image.png'
import IMG2 from '../../../public/images/Marketing/content-marketing/image1.png'
import IMG3 from '../../../public/images/Marketing/Social Media Marketing/image2.png'
import IMG4 from '../../../public/images/Marketing/email marketing/image3.png'
import IMG5 from '../../../public/images/section_01.jpg'


export default function CleaningCompanies() {
  return (
    <section className="container px-2 md:px-12 lg:px-24">
       
        <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
        <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
        Cleaning Company
        </h1>
        
      
      </div>
      <div className="mx-auto ">
        {/* Hero Section */}
        <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl p-2 md:p-6 transition-shadow duration-300  lg:flex-row items-center justify-between mb-10 pb-10">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 transform transition-all space-y-8 duration-500 hover:scale-105">
            <h1 className="text-3xl md:text-4xl font-bold text-start text-gray-800 leading-tight">
            Our Cleaning Company Marketing Services 
            </h1>
            <p className="mt-6  text-gray-600">
            We leverage a combination of digital marketing strategies and industry-specific expertise to help you stand out, connect with the right customers, and grow your brand. 
            </p>
            <p className="mt-6  text-gray-600">
            At Prime Marketing Experts, we understand that the cleaning industry is highly competitive and that your business needs a strong, effective marketing strategy to attract new customers and retain loyal clients. Whether you offer residential, commercial, or specialized cleaning services, we provide tailored marketing solutions designed to boost visibility, build trust, and drive high-quality leads for your cleaning business. 
            </p>
            <div>
            <Link href="/free-strategy-session" className="my-6"> 
            <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            </Link>
            </div>
            
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
        <div className="bg-blue-50 my-10 py-10 p-2 md:6 ">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-gray-800">Our Tailored Cleaning Marketing Services</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-2 md:p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG1}
                alt="Local SEO"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl  font-semibold mt-4 text-center text-gray-800">Local SEO for Cleaning Companies</h3>
              <p className="mt-2 text-gray-600 text-start md:text-center">
              Local SEO is crucial for cleaning businesses, as most clients are searching for services near them. We optimize your website to ensure it ranks highly in local search results, making it easier for customers to find your cleaning services. By improving your local visibility, we help drive more foot traffic, phone calls, and online inquiries. 
              </p>
            </div>
            <div className="flex flex-col items-center p-2 md:p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG3}
                alt="Social Media Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-gray-800">Social Media Strategy & Management</h3>
              <p className="mt-2 text-gray-600 text-start md:text-center">
              Social media is a great tool for showcasing your cleaning services and building trust with potential clients. We create engaging social media campaigns that highlight your services, share cleaning tips, promote seasonal offers, and share customer testimonials. Platforms like Facebook, Instagram, and LinkedIn help you engage with your community and attract more clients. 
              </p>
            </div>
            <div className="flex flex-col items-center p-2 md:p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG4}
                alt="Paid Advertising"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-start md:text-center text-gray-800">Targeted Paid Ads Campaigns</h3>
              <p className="mt-2 text-gray-600 text-start md:text-center">
              Paid advertising can drive quick, measurable results for your cleaning business. We help you run targeted Google Ads and Facebook Ads campaigns that attract customers actively searching for cleaning services. Our approach ensures that your ad spend is maximized to bring in qualified leads and boost conversions. 
              </p>
            </div>
            <div className="flex flex-col md:text-center text-start items-center p-2 md:p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG5}
                alt="Reputation Management"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-start md:text-center text-gray-800">Reputation Management</h3>
              <p className="mt-2 text-gray-600 text-start md:text-center">
              Your online reputation is critical to your cleaning business’s success. We help you monitor and manage your customer reviews across platforms like Google, Yelp, and Facebook. By responding to reviews, encouraging satisfied customers to leave feedback, and addressing negative reviews professionally, we help you build a trustworthy and positive online presence. 
              </p>
            </div>
            <div className="flex flex-col items-center p-2 md:p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG2}
                alt="Content Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-center mt-4 text-gray-800">Content Marketing for Cleaning Services</h3>
              <p className="mt-2 text-gray-600 text-start md:text-center">
              Content marketing helps position your cleaning business as an expert in the field and attracts customers looking for valuable information. We create SEO-optimized blog posts, cleaning tips, and video tutorials that resonate with your target audience. By educating potential customers, we increase your visibility and drive traffic to your website. 
              </p>
            </div>
            <div className="flex flex-col items-center p-2 md:p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
              <Image
                src={IMG}
                alt="Email Marketing"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Email Marketing Campaigns</h3>
              <p className="mt-2 text-gray-600 text-start md:text-center">
              Email marketing allows you to stay connected with your clients and encourage repeat business. We create email campaigns to keep customers engaged, offer seasonal promotions, and remind them of your cleaning services. Whether it`s a special discount or helpful cleaning tips, our email marketing strategies are designed to keep your customers coming back. 
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 my-10 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-gray-800">Why Cleaning Businesses Choose Prime Marketing Experts</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-2 md:p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Industry Expertise</h3>
              <p className="mt-2 text-gray-600">
                Our team specializes in the cleaning industry, understanding its unique needs and challenges, and delivering results-driven marketing solutions.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Custom-Tailored Strategies</h3>
              <p className="mt-2 text-gray-600">
                We create marketing plans that are specifically designed for your business, helping you target the right customers with the right message.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Proven Results</h3>
              <p className="mt-2 text-gray-600">
                Our strategies deliver measurable results, from increased online visibility to higher lead generation and conversion rates.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
              <p className="mt-2 text-gray-600">
                We offer around-the-clock support, ensuring that your marketing campaigns run smoothly and any questions are addressed promptly.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Full Transparency</h3>
              <p className="mt-2 text-gray-600">
                We provide full transparency in our marketing efforts, sharing regular reports and performance metrics to ensure you’re always in the loop.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Affordable Packages</h3>
              <p className="mt-2 text-gray-600">
                Our marketing solutions are affordable, scalable, and tailored to meet the needs of cleaning businesses of all sizes.
              </p>
            </div>
          </div>
        </div>

       

       {/* Tourism Call-to-Action Section */}
<div className="w-full flex flex-col lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto my-10 py-10 lg:flex-row items-center justify-evenly px-6 lg:px-12">
  <h1 className="font-bold text-white text-2xl md:text-4xl text-center leading-tight">
  Ready to Grow Your Cleaning Business?
  </h1>
  <Link href="/contact">
    <button className="bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 my-6 md:my-auto flex justify-center items-center hover:text-black text-white rounded-lg">
      CONTACT NOW
    </button>
  </Link>
</div>
      </div>
    </section>
  );
}
