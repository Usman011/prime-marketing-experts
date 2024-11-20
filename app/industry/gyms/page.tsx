import Image from 'next/image';
import IMG from '../../../public/industry/gyms/image1.png';
import IMG1 from '../../../public/industry/gyms/image2.png';
import Link from 'next/link';

export default function GymIndustryPage() {
  return (
    <section className="container py-16 lg:py-32 bg-gray-100 text-black">

<div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Gyms
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Gyms</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Transform Your Gym with Cutting-Edge Marketing Strategies
            </h1>
            <p className="text-lg text-gray-800 mb-8">
              As a gym owner, you know how competitive the fitness industry is. Let us help you stand out with tailored marketing services that drive leads, increase membership, and build a loyal community.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              Our holistic approach combines digital marketing strategies and real-world engagement tactics to grow your membership base and retain clients long-term.
            </p>
            <Link href="/free-strategy-session" className="my-6 "> 
            <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src={IMG}
              alt="Gym Marketing"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Additional Information Section */}
<div className="mt-16 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
  {/* Content Section */}
  <div className="w-full lg:w-2/3">
    <h2 className="text-3xl font-semibold mb-6 text-black">Why Choose Us to Market Your Gym?</h2>
    <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-8 lg:mx-0">
      Our proven strategies help gyms grow by reaching the right audience, increasing engagement, and generating high-quality leads. Let us optimize your online presence with:
    </p>
    <ul className="space-y-4 text-left text-gray-800 max-w-3xl mx-auto lg:mx-0">
      {[
        "Local SEO to get found by nearby gym-goers",
        "High-conversion paid ads to attract new members",
        "Social media marketing that builds community and trust",
        "Content marketing with fitness tips, blogs, and guides",
        "Reputation management to improve your gym's online presence",
        "Email marketing for member engagement and retention",
        "Video marketing to showcase your gym's unique culture and offerings",
      ].map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="text-xl font-medium text-yellow-500 mr-2">✓</span>
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-2/3 mt-20 lg:pl-8">
    <Image
      src={IMG1}
      alt="Why Choose Us"
      width={600}
      height={400}
      className="rounded-lg shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
    />
  </div>
</div>

        {/* Success Stories Section */}
<div className="my-16 text-center">
  <h2 className="text-3xl font-semibold mb-6 text-black">Our Success Stories</h2>
  <p className="text-lg text-gray-800 max-w-7xl mx-auto mb-8">
    Don’t just take our word for it. Hear from gym owners who have experienced growth and success with our marketing strategies:
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 text-black flex-wrap justify-center gap-6 ">
    {[
     
      {
        name: "Pulse Fitness",
        quote: "Our gym's brand visibility has skyrocketed, and we’ve gained a loyal following.",
        author: "Sarah Lee, Marketing Director",
      },
      {
        name: "Iron Strength Gym",
        quote: "Their marketing expertise resulted in more foot traffic and higher conversion rates.",
        author: "Alex Williams, Owner",
      },
      {
        name: "Elevate Fitness Studio",
        quote: "The team’s tailored strategies helped us attract a younger audience and increase class participation.",
        author: "Emily Carter, Studio Manager",
      },
    ].map((story, index) => (
      <div
        key={index}
        className="w-full  p-6  text-gray-800 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-4">{story.name}</h3>
        <p className="text-gray-400 mb-4">{story.quote}</p>
        <p className="text-sm text-gray-500">{story.author}</p>
      </div>
    ))}
  </div>
</div>


         {/* Contact Section */}
         <div className="py-16 bg-orange-600 text-white text-center rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold">Ready to Transform Your Gym?</h2>
          <p className="mt-4 text-lg"> Don’t wait any longer to take your gym to the next level. Contact us today to get started!.</p>
          <Link href='/contact'>
          <button className="mt-6 px-6 py-3 text-white bg-orange-200 font-semibold rounded-md hover:bg-gray-100 transition-all">
          Contact Us Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
