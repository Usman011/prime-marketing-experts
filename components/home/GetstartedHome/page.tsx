import React from 'react';
import Image from 'next/image';
import sampleImage from '../../../public/images/section_01.jpg'; // Replace with your image

const InfoSection = () => {
    return (
        <section className="flex flex-col md:flex-row mt-20 gap-12 items-center w-full max-w-7xl mx-auto p-8 md:p-12 bg-gray-50 shadow-lg rounded-lg">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 h-auto flex justify-center">
                <Image
                    src={sampleImage}
                    alt="Sample Image"
                    width={600}
                    height={800}
                    className="rounded-lg object-cover shadow-md transform transition duration-500 hover:scale-105"
                />
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug tracking-tight">
                    Can you relate? <span className="text-orange-500">GRAPHIC</span>
                </h2>
                <ul className="list-none space-y-4 text-lg md:text-xl text-gray-700">
                    <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
                        <span>✓</span>
                        <span>Do you need more qualified leads?</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
                        <span>✓</span>
                        <span>Do you want a new, updated website?</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
                        <span>✓</span>
                        <span>Does your site need a higher ranking on search engines?</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
                        <span>✓</span>
                        <span>Are you looking for a marketing partner to help build your business?</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
                        <span>✓</span>
                        <span>Do you need help with your brand story?</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:text-orange-500 transition duration-300">
                        <span>✓</span>
                        <span>Are you uncertain about your needs but know your marketing isn’t working?</span>
                    </li>
                </ul>
                <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transform transition duration-300 hover:scale-105">
                    CLICK HERE AND LET’S GET STARTED
                </button>
            </div>
        </section>
    );
};

export default InfoSection;
