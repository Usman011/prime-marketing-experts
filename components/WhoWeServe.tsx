"use client"
import Link from "next/link";
import { BrickWall, ChevronRight, Dumbbell, Eraser, Hospital, MapPinHouse, Pyramid, Salad, ScanBarcode, Workflow } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { FaBroom, FaCar, FaDumbbell, FaHardHat, FaHome, FaHospital, FaPlane, FaShoppingBag, FaUtensils } from "react-icons/fa";
import { AnimateRight } from "./common/animate";


export function WhoWeServeSection() {
	return (
   
	  <section className="bg-blue-50 container w-auto md:w-auto py-16 ">
       <AnimateRight>
		<div className="max-w-7xl mx-auto text-start md:text-center">
		  <div className='md:mx-auto'>
		  <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Who We Serve</h2>
		  <p className="text-xl text-gray-600 mb-10">
		  In today`s competitive business landscape, a one-size-fits-all approach to marketing is no longer sufficient. Successful marketing strategies must be tailored to the specific needs, challenges, and goals of each industry. That is why we empower diverse industries with customized, results-driven marketing solutions tailored to their unique needs and goals.
		  </p> 
  
		  <div className="bg-white shadow-lg rounded-lg p-6 mb-12 text-left">
			<h3 className="text-2xl font-bold text-orange-600 mb-2">Marketing for the Small to Medium Business Owner</h3>
			<p className="text-gray-700">
			  PM is dedicated to helping SMBs achieve their marketing goals with top-notch, industry-specific strategies. We focus on providing exceptional service that fits within their budget.
			</p>
			{/* <Link href="/industry-specific" className="inline-flex text-center items-center mt-4 text-blue-500 hover:text-blue-700 transition">
			  <span>Discover Industry-Specific Solutions</span>
			  <ArrowRight className="ml-2" />
			</Link> */}
		  </div>
		  </div>
  
		  <h3 className="text-2xl font-bold text-gray-800 text-center  mb-8">Industries We Served</h3>
  
		  <div className="grid ml:20 md:ml-20 justify-center items-center text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

		  <div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}> 
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaPlane /> {/* Tourism */}
  </div>
  <Link href="/industry/tourism" className="mt-4 pb-4 text-lg font-semibold text-gray-800">Tourism</Link>
</div>

<div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaCar /> {/* Automotive */}
  </div>
  <Link href='/industry/automotive' className="mt-4 text-lg pb-4 font-semibold text-gray-800">Automotive</Link>
</div>

<div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaUtensils /> {/* Restaurants */}
  </div>
  <Link href="/industry/restaurant" className="mt-4 text-lg pb-4 font-semibold text-gray-800">Restaurants</Link>
</div>

<div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaShoppingBag /> {/* Retail */}
  </div>
  <Link href='/industry/retail' className="mt-4 text-lg pb-4 font-semibold text-gray-800">Retail</Link>
</div>

<div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaBroom /> {/* Cleaning Companies */}
  </div>
  <Link href="/industry/cleaning-companies" className="mt-4 text-lg pb-4 font-semibold text-gray-800">Cleaning Companies</Link>
</div>

<div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaDumbbell /> {/* Gyms */}
  </div>
  <Link href="/industry/gyms" className="mt-4 text-lg pb-4 font-semibold text-gray-800">Gyms</Link>
</div>

<div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaHardHat /> {/* Construction */}
  </div>
  <Link href="/industry/construction" className="mt-4 text-lg pb-4 font-semibold text-gray-800">Construction</Link>
</div>

<div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaHome /> {/* Real Estate */}
  </div>
  <Link href="/industry/real-estate"><h3 className="mt-4 text-lg pb-4 font-semibold text-gray-800">Real Estate</h3></Link>
</div>

<div className="flex h-20 w-70 md:w-56 justify-start gap-6 text-center items-center p-6 rounded-lg transition-transform duration-300 hover:shadow-sm hover:shadow-orange-500 hover:border-orange-500 bg-white cursor-pointer group transform will-change-transform hover:scale-105" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
    <FaHospital /> {/* Healthcare */}
  </div>
  <Link href="/industry/healthcare" className="mt-4 pb-4 text-lg font-semibold text-gray-800">Healthcare</Link>
</div>

  
  </div>
		</div>
    </AnimateRight>
	  </section>
    
	);
  }