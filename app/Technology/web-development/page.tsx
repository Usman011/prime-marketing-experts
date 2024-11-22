import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import IMG1 from '../../../public/images/website-mobile-app-development/image1.png';
import IMG2 from '../../../public/images/website-mobile-app-development/image2.png';
import IMG3 from '../../../public/images/website-mobile-app-development/image3.png';
import IMG4 from '../../../public/images/website-mobile-app-development/image4.png';

const Page = () => {
  return (
    <section className='container'>
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
          Web Development
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Web Development</li>
          </ul>
        </div>
      </div>

      <div className='gap-20  mt-10'>
        <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-8 justify-start'>
          <h1 className='font-bold pb-6 text-4xl'>
            Website Development
          </h1>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
            <div className='space-y-6'>
              <p>
                Our results-driven, engaging website development services portray businesses in the best light! Our highly-experienced team of web developers will build your new website to serve as a foundation for search engine optimization initiatives and build your company’s brand. We also ensure functions with mainstream logic, and evoke a high level of creativity.
              </p>
              <p>
                We use proven and practical website development technologies, and utilize all major CMS platforms, including WordPress, Drupal, Woocommerce, Shopify, Magento, and Joomla.
              </p>
            </div>
            <div className='w-full h-auto'>
              <Image src={IMG1} alt="Market Research" width={1000} height={800} />
            </div>
          </div>
          <p>
            Our firm has an easy process for your business to start your website development project. We can scale our services to customize the website as simple or as innovative as per your vision! We can also recommend solutions during each phase of the development process that will help service your website visitors to an unparalleled extent.
          </p>
          <p>
            Our creative team provides logo design services to make it easy for you to ensure the success of launching the most polished website experience on desktop and mobile.
          </p>
          <p>
            We offer a support plan, which includes secure website hosting and maintenance services. If you wish, we can make it easy for your staff to edit the website on select platforms. We assist clients in securing and managing domain names and SSL certificates.
          </p>
          <p>
            We can integrate video content, and we provide dedicated video hosting. A dedicated video host maintains the website experience by routing videos from a separate service, which also minimizes buffering time.
          </p>
        </div>

        <div className='flex flex-col bg-blue-50 p-4 space-y-8 justify-start'>
          <h1 className='font-bold text-4xl'>
            Creative & Engaging Website Design
          </h1>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
            <div className='w-full h-auto'>
              <Image src={IMG2} alt="Market Research" />
            </div>
            <div className='space-y-6'>
              <p>
                We create engaging custom website design to help you maintain a professional business image, whether you are a b2b, b2c, nonprofit, a social network, or an independent consultant. Our creative team will enhance your digital appearance through infusing branding strategy and creating interactive features consistent with the latest UX and UI trends.
              </p>
              <p>
                Our talented team provides website design services that appeal to your targeted customer within 7 seconds of visiting it, while being complementary to your website content. We customize our website design services to be fully custom for those who wish to invest in an exceptional and unique website. If preferred, we can use a stock theme to make our services more affordable to small businesses and independent consultants.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-8 justify-start'>
          <h1 className='font-bold text-4xl'>
            E-Commerce Website Development
          </h1>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
            <div className='space-y-6'>
              <p>
                As a <Link href='/marketing/e-commerce-digital-marketing-services' className='text-blue-600'>top e-commerce Website Development Company</Link>, we help clients deliver exceptional online shopping experiences through providing website development, design, hosting, and maintenance services. We set up your online store, host & maintain it, and implement enhancements that help increase conversion.
              </p>
              <p>
                Our team emphasizes that all websites must have a clear path to action. We follow shopping cart management best practices. With a very intuitive UI/UX, you will see more completed purchases with a higher average order value.
              </p>
              <p>
                Learn more about our digital marketing and advertising services for <Link href="/marketing/e-commerce-digital-marketing-services" className='text-blue-600'>E-Commerce businesses</Link>.
              </p>
            </div>
            <div className='w-full h-auto'>
              <Image src={IMG3} alt="Market Research" />
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-8 bg-blue-50 p-4 justify-start'>
          <h1 className='font-bold text-4xl'>
            Why is Website Design an Amazing Investment for Small Businesses?
          </h1>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
            <div className='w-full h-auto'>
              <Image src={IMG4} alt="Market Research" width={800} height={600} />
            </div>
            <div className='space-y-6'>
              <p>
                Building a new website is an exceptional investment for small businesses as it helps people find your business, much like how the “yellow pages” worked many years ago. While small businesses can start by providing an overview of their services and contact information to visitors on a basic website, a blog can be incorporated into the website to help build trust with the community. Web apps can be developed to facilitate online ordering for a restaurant. Engaging with a <Link href='/Technology/web-development' className='text-blue-600'>top Small Business Website Design Company</Link> like Prime Marketing Experts will also help in lifting your <Link href="/marketing/video-seo" className='text-blue-600'>search engine optimization</Link> initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-auto bg-orange-500 h-auto lg:h-32 mt-8 mb-8 items-center justify-center lg:justify-around px-4'>
  <h1 className='font-bold text-white text-center lg:text-left text-2xl lg:text-4xl'>
    Contact Us Today To Start Making The Best Statement With a New Website!
  </h1>
  <Link href="/contact">
    <button className='bg-black hover:bg-white transition-transform transform hover:scale-105 w-32 md:w-40 h-12 md:h-14 flex justify-center items-center text-white hover:text-black'>
      CONTACT NOW
    </button>
  </Link>
</div>

      </div>
    </section>
  );
}

export default Page;