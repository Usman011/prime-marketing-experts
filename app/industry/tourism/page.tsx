import Image from "next/image";
import IMG1 from '../../../public/industry/tourism/image1.png';
import IMG2 from '../../../public/industry/tourism/image2.png';
import IMG3 from '../../../public/industry/tourism/image3.png';
import IMG4 from '../../../public/industry/tourism/image4.png';
import IMG5 from '../../../public/industry/tourism/image5.png';
import IMG6 from '../../../public/industry/tourism/image6.png';
import IMG7 from '../../../public/industry/tourism/image7.png';
import Link from "next/link";

export default function TourismPage() {
  const destinations = [
    {
      id: 1,
      name: "Travel Blogs and Content Marketing",
      description: "We use storytelling to highlight your destination. Through engaging blogs, travel guides, and videos, we position your business as a go-to resource, bringing in more organic traffic.",
      image: IMG5,
    },
    {
      id: 2,
      name: "Reputation Management for Tourism Brands",
      description: "Trust is key in tourism. We manage reviews and feedback across platforms like TripAdvisor and Google to maintain your positive image and boost credibility.",
      image: IMG6,
    },
    {
      id: 3,
      name: "Influencer Marketing for Travel Brands",
      description: "Collaborating with travel influencers expands your reach and connects your brand with new audiences. We ensure the right influencers promote your services authentically.",
      image: IMG7,
    },
  ];

  return (
    <section className="font-sans container text-gray-800 px-2 md:px-12 lg:px-24">
      {/* Header */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
         <h1 className='font-semibold-600 text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
          Tourism
        </h1> 
      </div>

      {/* Services Section */}
      <div className="relative pb-10 mb-10  flex items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 justify-start md:justify-auto p-2 md:p-6">
        <div className="container mx-auto px-0 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl md:text-auto text-start font-bold text-gray-800 mb-6 leading-tight">
              Our Tourism Marketing Services
            </h1>
            <p className="text-gray-700  text-start md:auto mb-6">
              At Prime Marketing Experts, we know the tourism industry is dynamic and highly competitive. Whether you’re a travel agency, tour operator, or destination marketing organization, we provide customized solutions to make your brand stand out. Our strategies attract more travelers, boost visibility, and strengthen your presence in the global market.
            </p>
            <p className=" text-start md:auto text-gray-700">Our team combines creativity with expertise to design campaigns that drive results—turning interest into bookings and travelers into loyal customers.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="/free-strategy-session" className="my-6">
                <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-2/5">
            <Image
              src={IMG1}
              alt="Travel Adventure"
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Destination Marketing Section */}
      <div className="py-10 my-10 bg-blue-50">
        <div className="container mx-auto px-2 md:px-12 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Image
              src={IMG4}
              alt="Company History"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-start md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Destination Marketing</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-start md:auto">
              Promote your city, region, or country to travelers worldwide with our strategic campaigns. We spotlight your destination`s unique culture, attractions, and experiences to inspire visitors. Through storytelling and immersive content, we help showcase what makes your destination unforgettable.
            </p>
            <ul className='list-disc pl-6 space-y-2  text-start md:auto pt-6'>
              <li>Highlighting landmarks and experiences</li>
              <li>Targeted international campaigns</li>
              <li>Establishing a distinct verbal brand identity</li>
              <li>Partnering with travel influencers and bloggers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Marketing Section */}
      <div className="py-10 my-10 text-lg text-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6">
        <div className="container mx-auto px-0 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-start md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Social Media Marketing for Tourism
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed  text-start md:auto mb-6">
              Social media connects you to travelers in real time. We create inspiring campaigns on platforms like Instagram, Facebook, Twitter, and YouTube to spark wanderlust and grow engagement.
            </p>
            <ul className="list-disc pl-6 text-gray-700  text-start md:auto">
              <li className="mb-2">Beautiful visual content to capture attention</li>
              <li className="mb-2">Community engagement with travel enthusiasts</li>
              <li>Targeted advertising to reach the right audience</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src={IMG3}
              alt="Hidden Gems"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="py-10 my-10 bg-blue-50">
        <div className="container mx-auto px-0 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-start mb-12">Tourism Marketing Services by Prime Marketing Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg shadow-lg p-2 md:p-4 overflow-hidden transition-transform transform hover:scale-105"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-1 md:p-6">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-gray-600 mt-2">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="w-full flex flex-col lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto mt-6 mb-6 lg:flex-row items-center justify-evenly px-2 md:px-12 lg:px-12">
        <h1 className="font-bold text-white text-2xl md:text-4xl text-center leading-tight">
          For a free consultation and discover how we can help you achieve your tourism business goals
        </h1>
        <Link href="/contact">
          <button className="bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 my-6 md:my-auto md:w-40 h-12 md:h-14 flex justify-center items-center hover:text-black text-white rounded-lg">
            CONTACT NOW
          </button>
        </Link>
      </div>
    </section>
  );
}
