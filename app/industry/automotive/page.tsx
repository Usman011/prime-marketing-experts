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
          Just as the automotive industry embraces cutting-edge technology, your business needs forward-thinking strategies to stay ahead of the competition. At Prime Marketing Experts, we offer specialized marketing services designed to drive success for automotive brands.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
          At Prime Marketing Experts, we bring the same spirit of innovation and precision to marketing as the automotive industry brings to its vehicles. Whether you`re a dealership, parts manufacturer, or service provider, our cutting-edge solutions will help you stand out in a competitive market.
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
          Driving Results with Precision
          </h1>
         
          <p className="text-gray-700 mb-4 leading-relaxed">
          In the automotive industry, precision isn’t just a standard—it’s a necessity. To ensure end-user safety, security, and compliance, rigorous tests and inspections are conducted at various stages of the value chain. These measures help prevent costly product recalls, which can have a significant financial and reputational impact.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
          At Prime Marketing Experts, we apply this same level of precision to your marketing campaigns. By using data-driven strategies, we help your brand connect with the right audience, ensuring every effort translates into measurable results.
          </p>
        </div>
      </div>

    

  <div className="container mx-auto px-4 grid grid-cols-1 pt-10 bg-gradient-to-b from-gray-50 to-gray-100 lg:grid-cols-2 gap-10 items-center">


{/* Left Content */}
<div className="text-content">
  <h1 className="text-3xl font-extrabold -600 mb-6 leading-tight">
  Drive Smarter Decisions with Actionable Insights
  </h1>
 
  <p className="text-gray-700 mb-4 leading-relaxed">
  In automotive production, water-intensive processes such as surface treatment, painting, coating, and cooling require precision and resource management to maintain efficiency. Similarly, marketing strategies in the automotive sector demand careful analysis and optimization to achieve the best results.

At Prime Marketing Experts, we provide actionable insights that empower you to fine-tune your campaigns, ensuring every effort contributes to your bottom line.


  </p>
  <p className="text-gray-700 mb-6 leading-relaxed">
  Just as water is essential for crucial automotive processes, data is the lifeblood of effective marketing. With our actionable insights, you can identify opportunities, address inefficiencies, and maximize your ROI.


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
          Ensuring Safety and Success Through Expertise
          </h1>
         
          <p className="text-gray-700 mb-4 leading-relaxed">
          In the automotive industry, safety is paramount—protecting users, operators, and manufacturers from potential hazards while ensuring vehicles are safeguarded against damage. Similarly, your marketing strategies require the same level of precision and care to protect your brand, enhance visibility, and drive growth.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
          
          Just as safety ensures protection against physical risks in the automotive world, our marketing expertise safeguards your brand’s reputation and growth. With a deep understanding of industry challenges, we deliver campaigns that connect with your audience and inspire trust.
          </p>
        </div>
      </div>




      {/* Tourism Call-to-Action Section */}
<div className="w-full flex flex-col lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto mt-6 mb-6 lg:flex-row items-center justify-evenly px-6 lg:px-12">
  <h1 className="font-bold text-white text-2xl md:text-4xl text-center leading-tight">
 Ensuring Safety and Success Through Expertise
  </h1>
  <Link href="/contact">
    <button className="bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 mt-4 lg:mt-0 flex justify-center items-center hover:text-black text-white rounded-lg">
      CONTACT NOW
    </button>
  </Link>
</div>
    </section>
  );
};

export default AutomotivePage;
