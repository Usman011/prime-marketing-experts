import Image from "next/image";

import IMG from '../../../public/industry/healthcare/image.png';
import IMG1 from '../../../public/industry/healthcare/image1.png';
import IMG2 from '../../../public/industry/healthcare/image2.png';
import IMG3 from '../../../public/industry/healthcare/image3.png';
import IMG4 from '../../../public/industry/healthcare/image4.png';
import IMG5 from '../../../public/industry/healthcare/image5.png';


import Link from "next/link";

export default function HealthcarePage() {
  const services = [
    {
      id: 1,
      name: "Social Media Marketing & Engagement ",
      description: "Social media is an effective way to reach and engage with current and potential patients. We create tailored social media campaigns that showcase your services, share helpful health tips, and promote patient success stories. Our goal is to build an online community that trusts and follows your brand. ",
      image: IMG3,
    },
    {
      id: 2,
      name: " Content Marketing & Patient Education",
      description: "We believe in the power of education. Our content marketing strategies are designed to inform, educate, and engage your audience through blogs, video content, patient guides, and webinars. We position your practice as a trusted resource for health information. er you need advice on treatment plans, diagnoses, or health management, our experts are here to provide the support you need.",
      
      image: IMG4,
    },
    {
      id: 3,
      name: "Video Marketing ",
      description: "Showcase your healthcare services, patient testimonials, and the unique culture of your practice through professional video marketing. We create high-quality video content to promote your services and build trust with your audience. ",
     
      image: IMG5,
    },
  ];

  return (
    <section className="container text-gray-800 px-2 md:px-12 lg:px-24">
      {/* Header */}
     
        <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
        <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
        Healthcare  
        </h1>
      </div>
     
      <div className="relative flex items-center mb-10 pb-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-0 md:p-6">
        <div className="mx-auto px-2 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="md:w-3/5 text-start">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Healthcare Marketing 
            </h1>
            <p className="text-gray-700 mb-6">
            We understand the unique challenges and opportunities within healthcare marketing, and we focus on creating results-driven strategies that help you achieve your goals. 
            </p>
            <p className="text-gray-700 mb-6">
            We specialize in providing comprehensive and effective marketing solutions tailored for the healthcare industry. Whether you are a healthcare provider, medical practice, wellness center, or rehabilitation service, our strategic services help you connect with your target audience, build trust, and ultimately grow your business.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="/contact" className="my-6">
                <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-2/5">
            <Image
              src={IMG}
              alt="Healthcare Services"
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="mb-10 py-10 bg-blue-50">
        <div className="mx-auto px-2 md:px-12 flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/2">
            <Image
              src={IMG1}
              alt="Healthcare History"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 text-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Design & Optimization </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Your website is often the first impression potential patients will have of your practice. We design user-friendly, mobile-optimized websites that are both informative and engaging. Our team ensures that your website is optimized for search engines to increase your visibility and attract more patients. 
            </p>
            <ul className="list-disc pl-6 text-start text-gray-700 mt-6">
        <li className="mb-2">User-friendly interface </li>
        <li className="mb-2">SEO optimized for higher rankings</li>
        <li>Mobile responsiveness </li>
      </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-10 py-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6">
        <div className="mx-auto px-2 md:px-12 flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 text-start">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Local SEO for Healthcare Providers
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Local SEO is crucial for healthcare businesses to ensure they show up when patients in your area search for medical services. We optimize your online presence to ensure your practice ranks highly in local search results, making it easier for patients to find and contact you. 

            </p>
            <ul className="list-disc pl-6 text-gray-700 text-start">
              <li className="mb-2">Google My Business optimization </li>
              <li className="mb-2">Local keyword targeting </li>
              <li>Location-based search results </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <Image
              src={IMG2}
              alt="Healthcare Services"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Service Plans Section */}
      <div className="mb-10 py-10 bg-blue-50">
        <div className="mx-auto px-2 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-start mb-12">Addressing negative reviews professionally </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2 md:p-6">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Healthcare Call-to-Action Section */}
      <div className="w-full flex flex-col lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto mb-10 py-10 lg:flex-row items-center pt-6 md:pt-auto lg:pt-auto justify-evenly px-2 lg:px-auto">
        <h1 className="text-white md:text-4xl text-3xl font-bold text-start leading-tight">
          Take Control of Your Health Today!  Get a Free Consultation Now
        </h1>
        <Link href="/contact">
          <button className="bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 my-6  flex justify-center items-center hover:text-black text-white rounded-lg">
            CONTACT NOW
          </button>
        </Link>
      </div>
    </section>
  );
}
