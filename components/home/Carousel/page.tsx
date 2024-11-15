import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { FaHandshake, FaUserCircle, FaHeart, FaGem, FaUsers, FaThumbsUp, FaChartLine, FaCoins, FaStar } from "react-icons/fa";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function CarouselSection() {
    return (
      <section className="bg-gray-100 container py-10 flex flex-col justify-center items-center  md:mt-auto mb-10 w-full h-auto">
        {/* <h2 className="text-4xl font-bold text-center mb-10 ">Inside Prime Marketing</h2> */}
        <Carousel className="md:mx-auto w-[90%] h-auto">
      <CarouselContent>

          <CarouselItem>
          <div className="flex flex-col md:flex-row items-center mx-auto p-4 md:p-8 gap-4 md:gap-20">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[90-vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
     Our Culture
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 "> What It Means to Be a Relationship-Driven Marketing Firm</h2>
        <p className="text-gray-700">
        PME adopts a holistic approach that values ongoing customer engagement and satisfaction over mere
        transactional interactions, ultimately leading to sustainable business growth and competitive advantage.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaHandshake size={20} />
            </span>
            <span>Long-Term Engagement</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaUserCircle size={20} />
            </span>
            <span>Personalization</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaHeart size={20} />
            </span>
            <span>Customer-Centric Approach</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaGem size={20} />
            </span>
            <span>Value Creation</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-300">
              <FaUsers size={20} />
            </span>
            <span>Community Building</span>
          </li>
        </ul>
       
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/4 h-auto md:h-[83vh] gap-20  bg-gray-50 shadow-lg rounded-2xl">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Our Awards
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-2xl font-bold pt-4 "> The Benefits of Relationship-Driven Marketing</h2>
        <p className="text-gray-700">
        In addition to our thousands of testimonials and 775+ third-party reviews, Prime Marketing Experts has earned national recognition from respected organizations throughout the design, marketing, and business sectors.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaThumbsUp size={20} />
            </span>
            <span>Increased Customer Loyalty</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaChartLine size={20} />
            </span>
            <span>Higher Customer Lifetime Value (CLV)</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaCoins size={20} />
            </span>
            <span>Cost Efficiency</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-3 text-orange-400">
              <FaStar size={20} />
            </span>
            <span>Enhanced Brand Reputation</span>
          </li>
        </ul>
        </div>
      </div>

    </div>
          </CarouselItem>



          
      </CarouselContent>
     
    </Carousel>
      </section>
    );
  }

