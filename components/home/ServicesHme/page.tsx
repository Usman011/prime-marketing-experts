import React from 'react';
import { FaLaptop, FaBullhorn, FaEnvelope, FaChartLine, FaCogs, FaShoppingCart } from 'react-icons/fa';
import { GiAutomaticSas } from "react-icons/gi";
import { MdBarChart } from "react-icons/md";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Team from '../../../public/images/section03.png'
import Image from 'next/image';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string; // Added link prop
};

export default function HomeServicesPage() {
  return (
    <>
    <section className="py-16 px-6  text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Need to Consolidate Our Services..</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          Prime Marketing Experts is a digital marketing and website services company focused on helping small and medium-sized businesses in the Boston area prosper. Since 2017, we’ve served hundreds of companies and thousands of clients, offering a wide range of marketing, branding, and advertising solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaLaptop className="text-orange-600 text-4xl" />}
            title="Website Development"
            description="Our full-service website development services fit the unique needs of each business and is planned to maximize your results of other marketing initiatives."
            link="/services/website-development" // Link for the button
          />
          <ServiceCard
            icon={<GiAutomaticSas  className="text-orange-600 text-4xl" />}
            title="Marketing Automation"
            description="We increase your sales productivity by using an integrated technology platform with synergistic marketing initiatives to spark your sales growth."
            link="/services/marketing-automation"
          />
          <ServiceCard
            icon={<FaCogs className="text-orange-600 text-4xl" />}
            title="Search Engine Advertising"
            description="We deploy ROI-maximizing processes to strategically implement and manage your Search Engine Advertising Campaigns."
            link="/services/search-engine-advertising"
          />
          <ServiceCard
            icon={<FaChartLine className="text-orange-600 text-4xl" />}
            title="SEO Services"
            description="We deploy an integrated, comprehensive strategy to help you raise your search engine rankings for your targeted keywords."
            link="/services/seo"
          />
          <ServiceCard
            icon={<FaBullhorn className="text-orange-600 text-4xl" />}
            title="Social Media Marketing"
            description="We provide social media posting and sponsored ad management services. Our AI-assisted system ensures that we post the right content at the right time!"
            link="/services/social-media-marketing"
          />
          <ServiceCard
            icon={<MdBarChart className="text-orange-600 text-4xl" />}
            title="Text Message Marketing"
            description="Our full-service text message marketing solution that efficiently reaches your customers, as an average of 98% of them are read."
            link="/services/text-message-marketing"
          />
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">Additional Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Content Marketing", link: "/services/content-marketing" },
              { name: "Branding", link: "/services/branding" },
              { name: "Text Message Marketing", link: "/services/text-message-marketing" },
              { name: "Marketing Plans", link: "/services/marketing-plans" },
              { name: "Inbound Marketing", link: "/services/inbound-marketing" },
            ].map((service, index) => (
              <Link key={index} href={service.link}>
                <span className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    <ServicesSection/>
    <WhoWeServeSection/>
    <AboutUsSection/>
    </>
  );
}


function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2 text-center">{title}</h4>
      <p className="text-gray-700 text-sm text-center mb-4">{description}</p>
      <div className="flex justify-center">
        <Link href={link}>
          <button className="relative inline-flex items-center justify-center px-4 py-2 text-orange-600 font-medium group">
            <span className="absolute inset-0 w-full h-full border-b-2 border-orange-600 transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            <span className="relative">Read More</span>
          </button>
        </Link>
      </div>
      
    </div>
  );
}




function ServicesSection() {
    return (
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl  font-bold text-gray-800 mb-8"> Explore our wide range of services tailored for both e-Commerce and B2B sectors.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* e-Commerce Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">e-Commerce</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Website Development',
                  'Shopify',
                  'SEO',
                  'Google/Bing Ads',
                  'Social Media',
                  'WooCommerce'
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center space-x-2 group hover:text-blue-600 transition duration-200"
                  >
                    <ChevronRight className="text-blue-400 group-hover:text-blue-600" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* B2B Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">B2B</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Brand Development - Logo, brand story, etc',
                  'SEO',
                  'Google/Bing Ads',
                  'Social Media',
                  'Domain Hosting',
                  'Google Analytics - Track Results',
                  'Website Development and Launch - Design and Content Messaging'
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center space-x-2 group hover:text-orange-600 transition duration-200"
                  >
                    <ChevronRight className="text-orange-400 group-hover:text-orange-600" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }



  // Import necessary modules



 function WhoWeServeSection() {
  return (
    <section className="bg-blue-50 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Who We Serve</h2>
        <p className="text-xl text-gray-600 mb-10">
          We offer superior marketing tailored for small to medium-sized businesses that deserve Fortune 500 quality they can trust.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-12 text-left">
          <h3 className="text-2xl font-bold text-orange-600 mb-2">Marketing for the Small to Medium Business Owner</h3>
          <p className="text-gray-700">
            PM is dedicated to helping SMBs achieve their marketing goals with top-notch, industry-specific strategies. We focus on providing exceptional service that fits within their budget.
          </p>
          <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Discover Industry-Specific Solutions</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Real Estate', link: '/real-estate' },
            { name: 'Automotive', link: '/automotive' },
            { name: 'Restaurants', link: '/restaurants' },
            { name: 'Retail', link: '/retail' },
            { name: 'Cleaning Companies', link: '/cleaning-companies' },
            { name: 'Gyms', link: '/gyms' },
            { name: 'Construction', link: '/construction' },
            { name: 'Tourism', link: '/tourism' },
            { name: 'Healthcare', link: '/healthcare' },
          ].map((industry) => (
            <Link href={industry.link} key={industry.name} className="block group">
              <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-5 transition transform hover:-translate-y-1 duration-300">
                <h4 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">{industry.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



// Import React for component rendering


function AboutUsSection() {
    return (
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-8">
        {/* Main Header */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            About Us / Who We Are
          </h2>
          <p className="text-lg text-gray-600 italic">
            Crafting unique solutions and inspiring growth since 2017
          </p>
        </div>
  
        {/* Philosophy, Story, Process Panels with Images */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: 'Our Philosophy',
              content: 'We’re driven by a deep understanding of our clients’ visions. Each project is crafted with honesty, transparency, and dedication to create lasting impact.',
              imgAlt: 'Our Philosophy',
            },
            {
              title: 'Our Story',
              content: 'Founded in 2017, our journey began with a mission to set new standards in digital solutions. Every project is built on trust, passion, and excellence.',
              imgAlt: 'Our Story',
            },
            {
              title: 'Our Process',
              content: 'Our process begins with understanding your needs, mapping a path to success, and aligning each step to deliver unmatched quality.',
              imgAlt: 'Our Process',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
            >
              <Image src={Team} alt={item.imgAlt} width={500} height={300} className="rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
  
        {/* Additional Details / Key Points */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: '2017',
              content: 'Our foundation was set in 2017, driven by a mission to empower businesses through high-quality, future-forward digital services.',
              imgAlt: '2017 Foundation',
            },
            {
              title: 'Vision for the Future',
              content: 'Our aim is to push the boundaries of digital solutions, combining creativity with technical expertise to foster future growth.',
              imgAlt: 'Vision for the Future',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 text-left transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              <Image src={Team} alt={item.imgAlt} width={400} height={250} className="rounded-md mb-4" />
              <h4 className="text-xl font-bold text-gray-700 mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
  
        <WorkSection />
      </section>
    );
  }


  
  
  function WorkSection() {
    return (
      <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">Our Work</h2>
          <p className="text-lg text-gray-600 italic">A glimpse into our creative journey</p>
        </div>
  
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: 'Images and Graphics',
              content: 'Explore a curated gallery showcasing our design expertise, visual storytelling, and creative prowess.',
              imgAlt: 'Images and Graphics',
            },
            {
              title: 'Case Studies',
              content: 'Discover how we’ve solved diverse challenges and delivered innovative solutions across industries.',
              imgAlt: 'Case Studies',
            },
            {
              title: 'Joe and More',
              content: 'Meet Joe, a standout project in our portfolio, and explore other unique projects we brought to life.',
              imgAlt: 'Joe and More',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <Image src={Team} alt={item.imgAlt} width={500} height={300} className="rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  