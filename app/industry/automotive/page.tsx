// /pages/automotive.js
import Image from "next/image";
import IMG from "../../../public/industry/automation/imag1.png";
import IMG1 from "../../../public/industry/automation/image2.png";
import IMG2 from "../../../public/industry/automation/image3.png";
import IMG3 from "../../../public/industry/automation/image4.png";
import Link from "next/link";

const AutomotivePage = () => {
  return (
    <section className="automotive-page container gap-20 py-16 bg-gradient-to-b from-gray-50 to-gray-100">

      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Automotive
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Automotive</li>
          </ul>
        </div>
      </div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-content">
          <h1 className="text-3xl font-extrabold -600 mb-6 leading-tight">
            Accelerate Growth with Expert <span className="text-gray-800">Automotive Marketing</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Elevate Your Brand with Prime Marketing Experts
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
          The automotive industry traces its origins back to the 1860s, marked by the efforts of numerous manufacturers to develop horseless carriages. Initially, cars were assembled manually by human workers, with engineers focusing on stationary vehicles. Over time, the process advanced to a conveyor belt system, where vehicles moved through various stations handled by specialized engineers. By the 1960s, robotic equipment was introduced, revolutionizing production. Today, the majority of cars are primarily assembled using automated machinery.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            From building your online presence to executing data-driven campaigns, our team provides cutting-edge solutions to amplify your brand`s visibility and customer reach. Let`s drive success together!
          </p>
          <div className="flex items-center gap-4">
          <Link href="/contact"> 
            <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src={IMG}
            alt="Automotive Marketing"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transform hover:scale-105 transition"
          />
          <div className="absolute top-10 left-10 bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg">
            Driving Innovation in Automotive Marketing
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 grid grid-cols-1 pt-10 bg-white lg:grid-cols-2 gap-10 items-center">

        {/* Right Image */}
        <div className="relative">
          <Image
            src={IMG1}
            alt="Automotive Marketing"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transform hover:scale-105 transition"
          />
        
        </div>
        {/* Left Content */}
        <div className="text-content">
          <h1 className="text-3xl font-extrabold -600 mb-6 leading-tight">
          Precision Targeting
          </h1>
         
          <p className="text-gray-700 mb-4 leading-relaxed">
          Engage the right audience with data-backed campaigns that convert viewers into loyal customers.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
          To prevent product recalls, tests and inspections are conducted at various stages of the value chain to ensure end-user safety, security, and compliance with automotive industry standards. Despite these measures, the industry remains highly concerned about product recalls due to their significant financial impact.
          </p>
        </div>
      </div>

    

  <div className="container mx-auto px-4 grid grid-cols-1 pt-10 bg-gradient-to-b from-gray-50 to-gray-100 lg:grid-cols-2 gap-10 items-center">


{/* Left Content */}
<div className="text-content">
  <h1 className="text-3xl font-extrabold -600 mb-6 leading-tight">
  Actionable Insights
  </h1>
 
  <p className="text-gray-700 mb-4 leading-relaxed">
  Production processes requiring substantial water usage include surface treatment, painting, coating, washing, cooling, air-conditioning, and boilers, excluding component manufacturing. Paintshop operations are particularly water-intensive, as equipment using water-based products also requires water for cleaning.
  </p>
  <p className="text-gray-700 mb-6 leading-relaxed">
  Optimize your campaigns with advanced analytics, ensuring every dollar delivers maximum ROI.
  </p>
</div>

{/* Right Image */}
<div className="relative">
  <Image
    src={IMG2}
    alt="Automotive Marketing"
    width={600}
    height={400}
    className="rounded-lg shadow-xl transform hover:scale-105 transition"
  />
 
</div>
</div>


<div className="container mx-auto px-4 pt-20 grid grid-cols-1 bg-white lg:grid-cols-2 gap-10 items-center">

        {/* Right Image */}
        <div className="relative">
          <Image
            src={IMG3}
            alt="Automotive Marketing"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transform hover:scale-105 transition"
          />
         
        </div>
        {/* Left Content */}
        <div className="text-content">
          <h1 className="text-3xl font-extrabold -600 mb-6 leading-tight">
          Dedicated Expertise
          </h1>
         
          <p className="text-gray-700 mb-4 leading-relaxed">
          Partner with experienced marketers who understand the unique challenges of the automotive industry.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
          
         Safety entails protection from risks, dangers, damage, or potential injury. In the automotive industry, safety ensures that users, operators, and manufacturers are not exposed to hazards from motor vehicles or their components. Additionally, safety for the vehicles themselves means minimizing the risk of damage.
          </p>
        </div>
      </div>




      

      {/* CTA Section */}
      <div className="cta-section mt-16 bg-orange-500 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Automotive Marketing?</h2>
        <p className="text-lg mb-8">
          Contact Prime Marketing Experts today to learn how we can help you drive success.
        </p>
        <Link href="/free-strategy-session"> 
            <button className="px-8 py-3 bg-slate-300 text-white font-bold rounded-lg shadow-lg hover:bg-black hover:text-white transition">
              Get Started
            </button>
          </Link>
      </div>
    </section>
  );
};

export default AutomotivePage;
