"use client"
import Link from "next/link";
import { BrickWall, ChevronRight, Dumbbell, Eraser, Hospital, MapPinHouse, Pyramid, Salad, ScanBarcode, Workflow } from 'lucide-react';
import { ArrowRight } from 'lucide-react';


export function WhoWeServeSection() {
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