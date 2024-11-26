import Image from "next/image";
import Link from "next/link";
import IMG from "../../../public/industry/construction/image1.png";
import IMG1 from "../../../public/industry/construction/image2.png";

export default function CleaningCompanies() {
  return (
    <section className="container">
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
        <div className="flex flex-col lg:flex-row rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 items-center justify-between mb-10">
          {/* Left Side - Content */}
          
          <div className="w-full lg:w-1/2 lg:pr-12">
          <h1 className=" font-bold text-4xl text-gray-700 leading-tight mb-6">
              Build a Stronger Future with Strategic Marketing for Construction
            </h1>
            <p className="text-lg text-gray-800 mb-6">
            In an increasingly competitive market, construction companies need marketing strategies that help them stand out and win more projects. At Prime Marketing Experts, we specialize in crafting custom marketing solutions that help construction businesses elevate their brand, attract quality leads, and convert them into clients.
            </p>
            <p className="text-lg text-gray-800 mb-6">
            Whether you’re a general contractor, a specialty contractor, or a large-scale developer, we offer comprehensive marketing strategies designed to highlight your expertise, build trust with your audience, and generate more project inquiries.
            </p>
           
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



       <div className="flex flex-col lg:flex-row bg-blue-50 p-6 items-center justify-between mb-10">


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
            <ul className="space-y-2 text-gray-800 text-lg list-disc pl-6">
              <li>Local SEO for Construction Businesses </li>
              <li>Website Design & Development </li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Paid Advertising (PPC)</li>
              <li>Content Marketing </li>
              <li>Reputation Management </li>
            </ul>
           <div/>
          
          </div>

          {/* Right Side - Image */}
        
        </div>
 
        {/* Why Choose Us Section */}
<div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 py-10">
  <h2 className="text-3xl font-semibold text-center text-gray-800">Why Construction Businesses Choose Prime Marketing Experts</h2>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Industry Expertise</h3>
      <p className="mt-2 text-gray-600">
      Our team specializes in marketing for the construction industry and understands its unique challenges and opportunities. 
      </p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Tailored Marketing Strategies</h3>
      <p className="mt-2 text-gray-600">
      We create marketing plans that are specifically designed for your construction business, focusing on your goals and target market. 
      </p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Proven Track Record</h3>
      <p className="mt-2 text-gray-600">
      Our strategies have helped construction companies increase their project inquiries, enhance brand visibility, and improve client acquisition. 
      </p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Comprehensive Campaigns</h3>
      <p className="mt-2 text-gray-600">
      From SEO and PPC to reputation management and content creation, we offer a full range of services to grow your construction business.
      </p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Transparent Reporting</h3>
      <p className="mt-2 text-gray-600">
      We provide regular reports on campaign performance, allowing you to track the effectiveness of your marketing efforts. 
      </p>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all">
      <h3 className="text-xl font-semibold text-gray-800">Cost-Effective Solutions</h3>
      <p className="mt-2 text-gray-600">
      Our services are designed to meet the needs of construction businesses of all sizes, offering scalable and affordable solutions. 
      </p>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
