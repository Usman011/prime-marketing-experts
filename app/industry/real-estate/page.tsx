// /pages/real-estate.js
import Image from "next/image";
import IMG from '../../../public/industry/image.png'
import Link from "next/link";

const RealEstatePage = () => {
  return (
    <section className="container px-0 md:px-12 lg:px-24">


        <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
        <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
        Real Estate
        </h1>
      </div>
      

      <div className="mx-auto md:px-4 grid rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 pb-10 mb-10 p-2 md:p-6 grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-content">
          <h1 className="md:text-4xl text-3xl font-bold text-start  text-black mb-6">
          Real Estate Marketing Services by Prime Marketing Experts 
          </h1>
         
          <p className="text-gray-700 mb-4 leading-relaxed">
          The real estate market is highly competitive, and to stand out, real estate professionals need a marketing strategy that not only captures attention but also converts leads into clients. At Prime Marketing Experts, we specialize in crafting tailored marketing strategies designed specifically for real estate professionals. Whether you`re selling residential properties, managing commercial real estate, or dealing with luxury listings, we can help you attract the right buyers and grow your business.. 
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
          Our comprehensive real estate marketing services ensure that your properties reach the right audience, engage potential buyers, and drive more qualified traffic to your listings. From SEO-optimized property listings to social media campaigns, we’ve got the tools and expertise to help you thrive in the real estate market. 
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
         
        </div>
      </div>

      <div className='flex flex-col space-y-6 bg-blue-50 py-10 my-10 p-1 md:p-6 '>
  <h1 className='md:text-4xl text-3xl font-bold text:start '>
  Our Real Estate Marketing Services  
  </h1>

  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
    {/* Card 1 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Email Marketing </h2>
      <p>Email marketing is an effective way to nurture relationships with potential buyers, sellers, and clients. We design targeted email campaigns that keep your audience engaged with property updates, market insights, and special offers. Whether it’s for monthly newsletters or targeted property listings, we help you stay in touch with your contacts. </p>
     
    </div>

    {/* Card 2 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Reputation Management </h2>
      <p>Your online reputation is critical in the real estate industry, where trust and credibility are everything. We help you manage and enhance your online reputation by encouraging positive reviews, responding to client feedback, and showcasing testimonials from satisfied buyers and sellers. </p>
      
    </div>

    {/* Card 3 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Content Marketing </h2>
      <p>Content marketing is a powerful way to build authority and trust with your audience while also improving SEO rankings. We create high-quality, informative content that provides value to your potential clients, such as blog posts, guides, and market insights. This content not only helps engage buyers but also educates them throughout the buying or selling process. </p>
      
    </div>

    {/* Card 4 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Paid Advertising (PPC) </h2>
      <p>Paid advertising is an effective way to get immediate exposure for your property listings and services. We manage Google Ads, Facebook Ads, and other paid campaigns that target specific buyer personas, ensuring that your ads appear in front of the right audience at the right time. </p>
    </div>

    {/* Card 5 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Social Media Marketing </h2>
      <p>Social media is a powerful tool for real estate professionals to engage with their audience, showcase properties, and build brand awareness. We create and manage targeted social media campaigns on platforms like Facebook, Instagram, and LinkedIn to connect with buyers and sellers, promote new listings, and foster community engagement. </p>
    
    </div>

   

    {/* Card 7 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'> SEO (Search Engine Optimization)</h2>
      <p>We help your website rank higher on search engines for relevant real estate keywords, making it easier for potential clients to find your listings. Our SEO strategies include both on-page and off-page techniques that help you rank for competitive keywords and increase organic traffic to your website. </p>
      
    </div>

    {/* Card 8 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'> Website Design & Development </h2>
      <p>Your website is your digital storefront, and for real estate professionals, it needs to be visually appealing, easy to navigate, and functional. We create custom, responsive websites designed to showcase your properties, provide relevant real estate information, and convert visitors into leads. </p>
    </div>
    {/* Card 8 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'> Local SEO Optimization </h2>
      <p>Local SEO is essential for real estate success. When potential customers search for dining options in your area, you need to be visible. We’ll optimize your real estate’s website and online listings to ensure you appear in local search results, on Google Maps, and in local directories. This drives more organic traffic and helps you capture nearby customers.</p>
    </div>
    {/* Card 8 */}
    <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-1 md:p-4 space-y-4'>
      <h2 className='font-bold text-xl'>Video Marketing</h2>
      <p>Showcase your real estate services, patient testimonials, and the unique culture of your practice through professional video marketing. We create high-quality video content to promote your services and build trust with your audience.</p>
    </div>

  </div>
</div>


      {/* Features Section */}
      <div className="features-section rounded-lg shadow-lg hover:shadow-xl  transition-shadow duration-300 p-2 md:p-6 justify-start my-10 py-10 ">
        <h3 className="text-start md:text-4xl text-3xl font-bold text-black mb-10">
          Why Choose Prime Marketing Experts?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature-card bg-white shadow-md rounded-lg p-2 md:p-6 text-center transition-all hover:shadow-xl hover:scale-105">
            <i className="text-orange-600 text-4xl mb-4">
              <i className="ri-search-eye-line"></i>
            </i>
            <h4 className="text-xl text-start md:text-center font-bold text-gray-800 mb-2">Market Insights</h4>
            <p className="text-gray-600 text-start md:text-center">
              Leverage real-time market data to position your listings 
              effectively and stay ahead of the competition.
            </p>
          </div>
          <div className="feature-card bg-white shadow-md rounded-lg p-2 md:p-6 text-center transition-all hover:shadow-xl hover:scale-105">
            <i className="text-orange-600 text-4xl mb-4">
              <i className="ri-bill-line"></i>
            </i>
            <h4 className="text-xl font-bold text-start md:text-center text-gray-800 mb-2">Customized Strategies</h4>
            <p className="text-gray-600 text-start md:text-center">
              Every property is unique, and so is our approach. We create 
              personalized campaigns to meet your specific goals.
            </p>
          </div>
          <div className="feature-card bg-white text-start md:text-center shadow-md rounded-lg p-2 md:p-6  transition-all hover:shadow-xl hover:scale-105">
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
