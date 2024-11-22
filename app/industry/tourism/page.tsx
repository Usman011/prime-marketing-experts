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
      name: "Adventure Awaits",
      description: "No matter your preference, we’ve curated destinations to match your travel style. Choose your adventure and let us help you create unforgettable memories.",
     
      image:IMG5,
    },
    {
      id: 2,
      name: "Hidden Gems",
      description: "Escape the ordinary and discover extraordinary places that are off the beaten path. Perfect for adventurers looking for unique experiences and unspoiled beauty.",
      
      image: IMG6,
    },
    {
      id: 3,
      name: "Iconic Destinations",
      description: "Visit the most sought-after locations around the globe. Experience the beauty, history, and culture of world-renowned landmarks that everyone should see at least once.",
      image: IMG7,
    },
  ];

  return (
    <section className="font-sans container text-gray-800">
      {/* Header */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
        Tourism
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Tourism</li>
          </ul>
        </div>
      </div>

      <div className="relative py-10 flex items-center bg-gray-100">
  <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
    {/* Left: Text */}
    <div className="md:w-3/5 text-center md:text-left"> {/* Increased width to 3/5 */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
      Ready to Transform Your Tourism Business?
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-6">
      Let us guide your tourism business to new heights with strategic insights and innovative solutions. Schedule a free consultation today and start connecting with the travelers who are ready to explore the world with you.
      </p>
      <div className="flex gap-4 justify-center md:justify-start">
      <Link href="/free-strategy-session" className="my-6 "> 
            <button className="px-8 py-3 bg-gradient-main text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            </Link>
       
      </div>
    </div>

    {/* Right: Image */}
    <div className="md:w-2/5"> {/* Reduced width to 2/5 */}
      <Image
        src={IMG1}
        alt="Travel Adventure"
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
              src={IMG4}
              alt="Company History"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Market Research for Tourism Businesses</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            We don’t believe in cookie-cutter solutions. Prime Marketing Experts specializes in personalized market research for the travel and tourism industry. Whether you`re a travel agency, tour operator, or destination marketing organization, we’ll work with you to uncover opportunities that match your goals.
            </p>
          </div>
        </div>
      </div>

      {/* New Section */}
<div className="py-16 bg-white">
  <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
    {/* Left: Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      Personalized Travel Guides for Adventurers
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
      Get tailor-made travel guides designed specifically for your journey. Whether you’re a solo backpacker or a family seeking adventure, we’ll help you make the most of your trip with personalized recommendations and tips.
This structured layout ensures a visually engaging and user-friendly design while preserving the inspiring tone of the original content. It highlights the key aspects of your offerings with a balance of imagery and text.

      </p>
      <ul className="list-disc pl-5 text-gray-700">
        <li className="mb-2">Unique cultural experiences.</li>
        <li className="mb-2">Handpicked, less-traveled destinations.</li>
        <li>Personalized travel guides for adventurers.</li>
      </ul>
    </div>

    {/* Right: Image */}
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
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ready to Visit Your Dream Destination?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-gray-600 mt-2">{destination.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tourism Call-to-Action Section */}
<div className="w-full flex flex-col lg:gap-auto bg-orange-500 lg:h-32 md:h-auto sm:h-auto mt-6 mb-6 lg:flex-row items-center justify-evenly px-6 lg:px-12">
  <h1 className="font-bold text-white text-2xl md:text-4xl text-center leading-tight">
    Plan Your Next Adventure Today! <br /> Get a Free Quote for Your Dream Vacation
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
