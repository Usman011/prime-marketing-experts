"use client"
import React, { useState } from 'react';
import { FaLaptop, FaBullhorn, FaEnvelope, FaChartLine, FaCogs, FaShoppingCart } from 'react-icons/fa';
import { GiAutomaticSas } from "react-icons/gi";
import { MdBarChart } from "react-icons/md";
import Link from 'next/link';
import { BrickWall, ChevronRight, Dumbbell, Eraser, Hospital, MapPinHouse, Pyramid, Salad, ScanBarcode, Workflow } from 'lucide-react';
import { ArrowRight } from 'lucide-react';



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string; // Added link prop
};

export default function HomeServicesPage() {
  const [showMore, setShowMore] = useState(false);

  const services = [
    { icon: <FaLaptop className="text-orange-600 text-4xl" />, title: "Website Development", description: "Our full-service website development services fit the unique needs of each business and is planned to maximize your results of other marketing initiatives.", link: "/Technology/web-development" },
    { icon: <GiAutomaticSas className="text-orange-600 text-4xl" />, title: "Marketing Automation", description: "We increase your sales productivity by using an integrated technology platform with synergistic marketing initiatives to spark your sales growth.", link: "/marketing/marketing-automation" },
    { icon: <FaCogs className="text-orange-600 text-4xl" />, title: "Search Engine Advertising", description: "We deploy ROI-maximizing processes to strategically implement and manage your Search Engine Advertising Campaigns.", link: "/marketing/search-engine-advertising" },
    { icon: <FaChartLine className="text-orange-600 text-4xl" />, title: "SEO Services", description: "We deploy an integrated, comprehensive strategy to help you raise your search engine rankings for your targeted keywords.", link: "/marketing/vedio-seo" },
    { icon: <FaBullhorn className="text-orange-600 text-4xl" />, title: "Social Media Marketing", description: "We provide social media posting and sponsored ad management services. Our AI-assisted system ensures that we post the right content at the right time!", link: "marketing/social-media-marketing" },
    { icon: <MdBarChart className="text-orange-600 text-4xl" />, title: "Text Message Marketing", description: "Our full-service text message marketing solution that efficiently reaches your customers, as an average of 98% of them are read.", link: "/marketing/text-message-marketing" },
    { icon: <FaLaptop className="text-orange-600 text-4xl" />, title: "Content Marketing", description: "Some description here...", link: "/marketing/content-marketing" },
    { icon: <GiAutomaticSas className="text-orange-600 text-4xl" />, title: "Branding", description: "Some description here...", link: "/marketing/branding" },
    { icon: <MdBarChart className="text-orange-600 text-4xl" />, title: "Text Message Marketing", description: "Some description here...", link: "/marketing/text-message-marketing" },
    { icon: <FaChartLine className="text-orange-600 text-4xl" />, title: "Marketing Plans", description: "Some description here...", link: "/marketing/marketing-plans" },
    { icon: <FaBullhorn className="text-orange-600 text-4xl" />, title: "Inbound Marketing", description: "Some description here...", link: "/marketing/inbound-marketing" },
  ];

    // Control the number of cards to display
    const initialCardsToShow = 6;
    const displayedServices = showMore ? services : services.slice(0, initialCardsToShow);
  
  return (
    <>
    <section className="py-auto md:py-16 px-6  text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
        <p className="text-lg text-center max-w-96 md:max-w-7xl w-[100%] mx-auto mb-8">
          Prime Marketing Experts is a digital marketing and website services company focused on helping small and medium-sized businesses in the Boston area prosper. Since 2017, we’ve served hundreds of companies and thousands of clients, offering a wide range of marketing, branding, and advertising solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">

        {displayedServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
          </div>

          {services.length > initialCardsToShow && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="px-6 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition duration-300"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
          
      </div>
    </section>
    < CarouselSection/> 
    <WhoWeServeSection/>
   
    </>
  );
}


function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white hover:bg-orange-100  hover:text-black p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-500 hover:scale-105 ">
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




function CarouselSection() {
    return (
      <section className="bg-gray-100 container py-10 flex flex-col justify-center items-center mt-10 md:mt-auto mb-10 w-full h-auto">
        <h2 className="text-4xl font-bold text-center mb-10 ">Inside Prime Marketing</h2>
        <Carousel className="md:mx-auto w-[90%] h-auto">
      <CarouselContent>
        
          <CarouselItem>
          <div className="flex flex-col md:flex-row items-center mx-auto p-4 md:p-8 gap-4 md:gap-8">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
     Our Culture
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Life at Prime Marketing Experts</h2>
        <p className="text-gray-700">
        Our team of over 500 experts is one of the largest performance digital marketing agencies in the world. We’ve partnered with the best including Google, Facebook, Bing, and others, to deliver impactful digital marketing services to our clients.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Discover Industry-Specific Solutions</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Our Awards
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Our Awards</h2>
        <p className="text-gray-700">
        In addition to our thousands of testimonials and 775+ third-party reviews, WebFX has earned national recognition from respected organizations throughout the design, marketing, and business sectors.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Our Awards</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
     
    </div>
          </CarouselItem>



          <CarouselItem>
          <div className="flex flex-col md:flex-row items-center mx-auto p-4 md:p-8 gap-4 md:gap-8">
      {/* Left Side: Text */}
      

      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl ">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Our Awards
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Our Awards</h2>
        <p className="text-gray-700">
        In addition to our thousands of testimonials and 775+ third-party reviews, WebFX has earned national recognition from respected organizations throughout the design, marketing, and business sectors.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Our Awards</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      
    
      {/* Right Side */}
      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Community Impact
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4">Paying it Forward</h2>
        <p className="text-gray-700">
        Through Prime Marketing Experts Builds program, we’ve launched a new project each year to help give back to others around the globe. We’ve built schools in Ghana and Guatemala and water wells in Kenya. Our goal is to directly improve the lives of 5,000 people across the world by 2024.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Learn More About FXBuilds </span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
     
    </div>
          </CarouselItem>


          <CarouselItem>
          <div className="flex flex-col md:flex-row items-center mx-auto p-4 md:p-8 gap-4 md:gap-8">
      {/* Left Side: Text */}

      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl ">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Community Impact
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Paying it Forward</h2>
        <p className="text-gray-700">
        Through Prime Marketing experts Builds program, we’ve launched a new project each year to help give back to others around the globe. We’ve built schools in Ghana and Guatemala and water wells in Kenya. Our goal is to directly improve the lives of 5,000 people across the world by 2024.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Learn More About FXBuilds </span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      

     
      
    
      {/* Right Side */}
      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl ">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Careers at Prime Marketing Experts
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Careers</h2>
        <p className="text-gray-700">
        Our digital marketing agency is made up of elite marketers, designers, developers, and data analysts. For us, it’s not just a job — it’s a driving passion. And that passion has led to some of the best work on the web.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>View Open Positions</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
     
    </div>
          </CarouselItem>
      
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </section>
    );
  }

  // Import necessary modules



 function WhoWeServeSection() {
  return (
    <section className="bg-blue-50 w-auto md:w-auto py-16 px:auto md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className='md:mx-auto mx-10'>
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
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8">Industries We Served</h3>
         
        <div className="grid ml-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="flex h-20 w-56 gap-6 text-center p-6  items-center   rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <MapPinHouse />
    </div>
    <h3 className="mt-4 text-lg pb-4 font-semibold text-gray-800">Real Estate</h3>
  </div>

  <div className="flex h-20 w-56 gap-6 text-center  items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <Workflow />
    </div>
    <h3 className="mt-4 text-lg pb-4 font-semibold text-gray-800">Automotive</h3>
  </div>

  <div className="flex h-20 w-56 gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <Salad />
    </div>
    <h3 className="mt-4 text-lg pb-4 font-semibold text-gray-800">Restaurants</h3>
  </div>

  <div className="flex h-20 w-56 gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <ScanBarcode />
    </div>
    <h3 className="mt-4 text-lg pb-4 font-semibold text-gray-800">Retail</h3>
  </div>

  <div className="flex h-20 w-56 gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <Eraser />
    </div>
    <h3 className="mt-4 text-lg pb-4 font-semibold text-gray-800">Cleaning Companies</h3>
  </div>

  <div className="flex h-20 w-56 gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <Dumbbell />
    </div>
    <h3 className="mt-4 text-lg pb-4 font-semibold text-gray-800">Gyms</h3>
  </div>

  <div className="flex h-20 w-56 gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <BrickWall />
    </div>
    <h3 className="mt-4 text-lg pb-4 font-semibold text-gray-800">Construction</h3>
  </div>

  <div className="flex h-20 w-56 gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <Pyramid />
    </div>
    <h3 className="mt-4 pb-4 text-lg font-semibold text-gray-800">Tourism</h3>
  </div>

  <div className="flex h-20 w-56 gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <Hospital />
    </div>
    <h3 className="mt-4 pb-4 text-lg font-semibold text-gray-800">Healthcare</h3>
  </div>

</div>

       
      </div>


      
    </section>
  );
}







  
  


 
