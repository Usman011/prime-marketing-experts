import Link from "next/link";
import { ArrowRight } from 'lucide-react';



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function CarouselSection() {
    return (
      <section className="bg-gray-100 container py-10 flex flex-col justify-center items-center mt-10 md:mt-auto mb-10 w-full h-auto">
        <h2 className="text-4xl font-bold text-center mb-10 ">Inside Prime Marketing</h2>
        <Carousel className="md:mx-auto w-[90%] h-auto">
      <CarouselContent>

          <CarouselItem>
          <div className="flex flex-col md:flex-row items-center mx-auto p-4 md:p-8 gap-4 md:gap-8">
      {/* Left Side: Text */}
    <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
     Our Culture
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Life at Prime Marketing Experts</h2>
        <p className="text-gray-700">
        Our team of over 500 experts is one of the largest performance digital marketing agencies in the world. We’ve partnered with the best including Google, Facebook, Bing, and others, to deliver impactful digital marketing services to our clients.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Discover Industry-Specific Solutions</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Our Awards
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Our Awards</h2>
        <p className="text-gray-700">
        In addition to our thousands of testimonials and 775+ third-party reviews, WebFX has earned national recognition from respected organizations throughout the design, marketing, and business sectors.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Our Awards</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

    </div>
          </CarouselItem>



          <CarouselItem>
          <div className="flex flex-col md:flex-row items-center mx-auto p-4 md:p-8 gap-4 md:gap-8">
      {/* Left Side: Text */}


      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl ">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Our Awards
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Our Awards</h2>
        <p className="text-gray-700">
        In addition to our thousands of testimonials and 775+ third-party reviews, WebFX has earned national recognition from respected organizations throughout the design, marketing, and business sectors.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Our Awards</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>


      {/* Right Side */}
      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Community Impact
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4">Paying it Forward</h2>
        <p className="text-gray-700">
        Through Prime Marketing Experts Builds program, we’ve launched a new project each year to help give back to others around the globe. We’ve built schools in Ghana and Guatemala and water wells in Kenya. Our goal is to directly improve the lives of 5,000 people across the world by 2024.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Learn More About FXBuilds </span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

    </div>
          </CarouselItem>


          <CarouselItem>
          <div className="flex flex-col md:flex-row items-center mx-auto p-4 md:p-8 gap-4 md:gap-8">
      {/* Left Side: Text */}

      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl ">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Community Impact
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Paying it Forward</h2>
        <p className="text-gray-700">
        Through Prime Marketing experts Builds program, we’ve launched a new project each year to help give back to others around the globe. We’ve built schools in Ghana and Guatemala and water wells in Kenya. Our goal is to directly improve the lives of 5,000 people across the world by 2024.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>Learn More About FXBuilds </span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>





      {/* Right Side */}
      <div className="w-full md:w-2/4 h-auto md:h-[85vh] gap-20 bg-gray-50 shadow-lg rounded-2xl ">
    <button className="bg-orange-500 text-black  border-2  rounded-tl-2xl rounded-br-2xl px-14 py-2 hover:bg-orange-600">
    Careers at Prime Marketing Experts
     </button>
       <div className='flex flex-col gap-6 m-4'>
        <h2 className="text-2xl md:text-3xl font-bold pt-4 ">Careers</h2>
        <p className="text-gray-700">
        Our digital marketing agency is made up of elite marketers, designers, developers, and data analysts. For us, it’s not just a job — it’s a driving passion. And that passion has led to some of the best work on the web.
        </p>
        <p className="text-gray-700">
          You can add more details here. This layout is responsive, so on smaller screens, the text and image stack vertically.
        </p>
        <Link href="/industry-specific" className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 transition">
            <span>View Open Positions</span>
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

    </div>
          </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </section>
    );
  }

