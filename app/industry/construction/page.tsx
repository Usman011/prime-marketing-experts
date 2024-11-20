import Image from "next/image";
import Link from "next/link";
import IMG from "../../../public/industry/construction/image1.png";
import IMG1 from "../../../public/industry/construction/image2.png";

export default function CleaningCompanies() {
  return (
    <section className="container  min-h-screen bg-gray-50 py-16">
        <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Construction
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Construction</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto ">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          {/* Left Side - Content */}
          
          <div className="w-full lg:w-1/2 lg:pr-12">
          <h1 className=" font-bold text-3xl text-gray-800 leading-tight mb-6">
              Build a Stronger Future with Strategic Marketing for Construction
            </h1>
            <p className="text-lg text-gray-800 mb-6">
              The construction industry is evolving rapidly. With increasing competition, it’s crucial to stand out and effectively communicate your value to clients. Our tailored marketing solutions empower construction businesses to stay ahead, attract more clients, and grow a lasting brand presence.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              Whether you`re a general contractor, a specialized builder, or a large-scale developer, we create strategies that emphasize your expertise and connect you with the right audience.
            </p>
            <ul className="space-y-4 text-gray-800 text-lg list-disc pl-6">
              <li>Creating compelling project portfolios to showcase your expertise.</li>
              <li>Optimizing local SEO to capture nearby leads and clients.</li>
              <li>Developing targeted ad campaigns for construction bids.</li>
              <li>Building trust through engaging social media campaigns and testimonials.</li>
              <li>Establishing authority with content strategies like blogs and guides.</li>
              <li>Enhancing your reputation with positive online reviews and case studies.</li>
            </ul>
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



       <div className="flex flex-col lg:flex-row items-center justify-between mb-16">


       <div className="w-full lg:w-1/2 mt-12 lg:mt-0  transform transition-all duration-500 hover:scale-105">
            <Image
              src={IMG1}
              alt="Cleaning Industry"
              width={500}
              height={400}
              className="rounded-lg shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          {/* Left Side - Content */}
          
          <div className="w-full lg:w-1/2 lg:pr-12">
          <h2 className="text-3xl font-semibold black mt-8 mb-4">
              Our Services for Construction Businesses
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Our team specializes in marketing services tailored to the construction industry:
            </p>
            <ul className="space-y-4 text-gray-800 text-lg list-disc pl-6">
              <li>
                <strong>Website Design & Development:</strong> Build user-friendly, professional websites that showcase your projects and expertise.
              </li>
              <li>
                <strong>Search Engine Optimization (SEO):</strong> Ensure your business ranks high on search results, attracting more potential clients.
              </li>
              <li>
                <strong>Video Marketing:</strong> Highlight completed projects with engaging video tours and testimonials.
              </li>
              <li>
                <strong>Email Campaigns:</strong> Nurture leads with updates on services, new projects, and industry trends.
              </li>
            </ul>
           <div/>
          
          </div>

          {/* Right Side - Image */}
        
        </div>
 
        {/* Why Choose Us Section */}
<div className="bg-gray-100 py-16">
  <h2 className="text-3xl font-semibold text-center text-gray-800">Why Construction Businesses Choose Prime Marketing Experts</h2>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Industry Expertise</h3>
      <p className="mt-2 text-gray-600">
        Our team specializes in the construction industry, understanding its unique challenges and delivering results-driven marketing solutions.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Tailored Marketing Strategies</h3>
      <p className="mt-2 text-gray-600">
        We develop customized marketing strategies to help construction businesses target clients and win competitive bids effectively.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Proven Track Record</h3>
      <p className="mt-2 text-gray-600">
        Our proven marketing tactics have helped construction companies increase project inquiries and establish a strong online presence.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Comprehensive Campaigns</h3>
      <p className="mt-2 text-gray-600">
        From local SEO to digital ads, we manage end-to-end campaigns tailored to the construction industry’s specific needs.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Transparent Reporting</h3>
      <p className="mt-2 text-gray-600">
        We provide detailed reports and insights into the performance of your marketing campaigns to ensure full transparency.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Cost-Effective Solutions</h3>
      <p className="mt-2 text-gray-600">
        Our services are designed to be affordable and scalable, helping construction businesses of all sizes grow within their budget.
      </p>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
