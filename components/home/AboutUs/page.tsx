import Image from 'next/image'; 
import { motion } from 'framer-motion'
import { FaHandshake, FaUserCircle, FaHeart, FaGem, FaUsers, FaThumbsUp, FaChartLine, FaCoins, FaStar } from "react-icons/fa";

import FounderPhoto from '../../../public/images/section6.jpg'; // Replace with the actual path to your image
import { AnimateRight } from '@/components/common/animate';

const AboutUs = () => {
  return (

   
    
    <section className="bg-gray-100 container  py-10 px-4 md:px-12 lg:px-24">
   
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-start md:text-center mb-10">
          About Us
        </h2>

        {/* Introduction */}
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-full h-72 md:w-80 lg:w-96 overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105">
              <Image
                src={FounderPhoto}
                alt="Michael Kreiger"
                className="object-cover w-full h-full"
                width={800}
                height={800}
              />
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Prime Marketing Experts was founded in 2017 by Michael Kreiger, a native Bostonian.
            </p>
            <blockquote className="text-gray-600 italic border-l-4 border-orange-500 pl-4">
              “As an entrepreneur myself, I am dedicated to helping small businesses grow their
              business and online presence. We have many tools to choose from to help SMBs grow,
              BUT one thing is for certain, the foundation of all successful online businesses
              is one’s website. Without a strong website that has a clear message and brand
              and is built to attract the targeted audience... maintaining an online presence
              in this ever-competitive marketplace is almost impossible.”
            </blockquote>
          </div>
        </div>

        {/* Meet Michael */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet Michael
          </h3>
          <p className="text-gray-700 mb-6">
            Prime Marketing Experts has served for over 7 years, helping hundreds of companies in the Boston area.
            After earning his Master of Science at the University of Massachusetts, Lowell, Michael built a
            company that has become a one-stop marketing shop for small to medium-sized companies and their
            marketing needs. PME excels at creating robust websites, social media campaigns, email campaigns,
            LinkedIn partnerships, Bing and Google ads, and more.
          </p>
          <blockquote className="text-gray-600 italic border-l-4 border-orange-500 pl-4">
            “Every day, I see that what truly separates us from other marketing firms is our dedication to
            effectively building relationships with key potential clients over time. For us, being a
            relationship-driven marketing firm means always prioritizing long-term, meaningful connections
            over traditional transactional approaches.”
          </blockquote>
        </div>

    </div>
  
    </section>
   
   
  );
};

export default AboutUs;
