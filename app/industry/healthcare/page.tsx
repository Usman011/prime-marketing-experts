import Image from "next/image";

import IMG from '../../../public/industry/healthcare/image.png';
import IMG1 from '../../../public/industry/healthcare/image1.png';
import IMG2 from '../../../public/industry/healthcare/image2.png';
import IMG3 from '../../../public/industry/healthcare/image3.png';
import IMG4 from '../../../public/industry/healthcare/image4.png';
import IMG5 from '../../../public/industry/healthcare/image5.png';


import Link from "next/link";

export default function HealthcarePage() {
  const services = [
    {
      id: 1,
      name: "Health & Wellness Programs",
      description: "Our Health & Wellness programs are designed to guide you towards a healthier lifestyle, focusing on preventive care, nutrition, and mental well-being. These programs are customized to meet individual health goals and ensure long-term results.",
      image: IMG3,
    },
    {
      id: 2,
      name: "Medical Consultations",
      description: "Receive personalized consultations with certified healthcare professionals who specialize in various medical fields. Whether you need advice on treatment plans, diagnoses, or health management, our experts are here to provide the support you need.",
      
      image: IMG4,
    },
    {
      id: 3,
      name: "Fitness & Rehabilitation",
      description: "Our fitness and rehabilitation services are tailored to help you recover from injury or surgery, improve mobility, and maintain your physical well-being. With individualized plans designed by certified trainers and physiotherapists, we support your journey back to full health.",
     
      image: IMG5,
    },
  ];

  return (
    <section className="font-sans container text-gray-800">
      {/* Header */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
          Healthcare Solutions
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Healthcare</li>
          </ul>
        </div>
      </div>

      <div className="relative py-10 flex items-center bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Comprehensive Healthcare Solutions for You
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-6">
            At Prime Marketing Experts, we understand that your health is the most important thing. That`s why we offer a wide range of healthcare marketing services designed to help you provide the best care to your patients. From digital marketing strategies to brand visibility, we’re here to make sure your healthcare services are reaching the right people and making an impact.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="/contact" className="my-6">
                <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-2/5">
            <Image
              src={IMG}
              alt="Healthcare Services"
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <Image
              src={IMG1}
              alt="Healthcare History"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Trust Through Online Presence</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            We help you build an online presence that establishes trust. By optimizing your website, improving your search engine ranking, and creating engaging social media content, we help your healthcare brand stand out.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Patient Education and Engagement
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Our healthcare marketing services include strategies to educate and engage patients. Whether it’s through informative blog posts, webinars, or patient resources, we make sure your patients are empowered to make informed health decisions.

            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li className="mb-2">Personalized health assessments</li>
              <li className="mb-2">Consultations with healthcare professionals</li>
              <li>Rehabilitation programs and fitness guidance</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <Image
              src={IMG2}
              alt="Healthcare Services"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Service Plans Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Healthcare Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Healthcare Call-to-Action Section */}
      <div className="w-full flex flex-col lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto mt-6 mb-6 lg:flex-row items-center justify-evenly px-6 lg:px-12">
        <h1 className="font-bold text-white text-2xl md:text-4xl text-center leading-tight">
          Take Control of Your Health Today! <br /> Get a Free Consultation Now
        </h1>
        <Link href="/contact">
          <button className="bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 mt-4 lg:mt-0 flex justify-center items-center hover:text-black text-white rounded-lg">
            CONTACT NOW
          </button>
        </Link>
      </div>
    </section>
  );
}
