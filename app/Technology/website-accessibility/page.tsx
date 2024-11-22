import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/website-mobile-app-development/image9.png'
import IMG2 from '../../../public/images/website-mobile-app-development/image10.png'
import IMG3 from '../../../public/images/website-mobile-app-development/image11.png'

const Page = () => {
  return (
    <section className='container'>
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
          Website Accessibility
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Website Accessibility</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col  gap-10">
  <div className="flex flex-col lg:flex-row rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 justify-center items-center space-y-6 lg:space-y-0">
    {/* Left Side (Text) */}
    <div className="flex-1 p-6 space-y-6">
      <h1 className="font-bold text-4xl">
        Welcoming All Website Visitors
      </h1>
      <div className="space-y-6">
        <p>Do you want to remove the barriers for disabled people to visit your website?</p>
        <p>“Almost 21 million people are disabled in our country.”</p>
        <p>“More than 14 million people are working adults.”</p>
        <p>“But not even 70% of websites are well obedient with accessibility laws.”</p>
        <p>As the number of disabled people will grow with the expected rate as the country’s population is also increasing, don’t you want to go through the accessibility laws and make your website easier to access?</p>
      </div>
    </div>
    
    {/* Right Side (Image) */}
    <div className="flex-1">
      <Image 
        src={IMG1}
        alt="Accessibility Image" 
        className="w-[500px] object-cover rounded-lg"
       
      />
    </div>
  </div>

  <div className="flex flex-col bg-blue-50 p-6 lg:flex-row items-center gap-10">
  {/* Left Side (Image) */}
  <div className="flex-1">
    <Image
      src={IMG2}
      alt="Website Accessibility"
      className="w-[600px]  h-auto object-cover rounded-lg"
    />
  </div>

  {/* Right Side (Text) */}
  <div className="flex-1 space-y-6">
    <h1 className="font-bold text-4xl">
      What Is Website Accessibility?
    </h1>
    <div className="space-y-6">
      <p>Website accessibility is the most prominent way through which everyone can <Link href="/Technology/web-development" className="text-blue-500">access any website easily</Link>. This assistive technology may help those who have some permanent disabilities like visually impaired, hearing impaired, and those with some limited movements in their body, also, for those who have some temporary or situational disabilities.</p>
      <p>All this disability may also include the temporary issue of the internet. In some regions, there may be restrictions due to which people may not be able to use the internet properly. Web accessibility helps you level the restricted use of the internet by quickly joining and participating in the website. The internet was not a big issue in the early days as it was just a corresponding part of our lives. However, it has now become a needed element that helps us in many ways, so these days it is crucial to have proper internet access.</p>
    </div>
  </div>
</div>


        <div className='flex flex-col space-y-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 justify-start'>
          <h1 className='font-bold text-4xl'>
            Best Tools Lead To Best Accessibility
          </h1>
          <div className='space-y-6'>
            <p>Accessibility of a particular website depends on many factors. All these workings of accessibility run in tandem consisting of web techniques, web browsers, and other agents. One must select the best software that may provide technical specifications, guidelines, procedures, and supporting resources that illustrate accessibility solutions.</p>
            <p className='font-bold'>Essential Benefits of Website Accessibility Software</p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>The software automatically looks forward and observes the website for accessibility.</li>
              <li>It allows web designers who have access to the website to build the sites keeping in mind the website accessibility.</li>
              <li>It also gives the in-app tools, so that website accessibility can easily be practiced.</li>
              <li>It ensures companies are complying with laws relating to the level of how disabled users can access websites</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row space-y-6 bg-blue-50 p-6 justify-start items-center gap-10">
  {/* Left Side (Text) */}
  <div className="flex-1 space-y-6">
    <h1 className="font-bold text-4xl">
      The necessity of website accessibility
    </h1>
    <div className="space-y-6">
      <p>As we all are already engaged with the internet in a significant manner, it is also necessary for people who are physically challenged to easily step into the world of the internet.</p>
      <p>It ensures that using the internet or going through any information through online platforms should become easy for disabled users. The web accessibility content helps them to receive information through the internet. This consists of people with disabilities that are somewhat away from auditory, physical, and learning disabilities to audiovisual and speech disablement.</p>
      <p>Our fully automated website accessibility software makes your website WCAG, ADA Title III, ACA, AODA, IS 5568, and s508 Compliant within 48 hours of installation. This helps your company significantly reduce lawsuits relating to website accessibility, which has soared 6x in the past two years. Our automated software conducts daily compliance monitoring and fixes any issues every 24 hours.</p>
    </div>
  </div>

  {/* Right Side (Image) */}
  <div className="flex-1">
    <Image
      src={IMG3}
      alt="Website Accessibility"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>
</div>


<div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  p-6 space-y-6 justify-start'>
  <h1 className='font-bold text-4xl'>
    Key Website Accessibility Software Features
  </h1>

  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
    <div className='bg-blue-50 p-4 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Mechanical Assessment Tool</h3>
      <p>This tool checks the website accessibility and goes through it to ensure that the website is obedient to the updates properly. It also checks out the things on your website that are not well-matched with the accessibility software.</p>
    </div>

    <div className='bg-blue-50 p-4 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Closed Captioning Services</h3>
      <p>Most of the businesses select these services for those who are deaf or hearing disablement. This type of service covers the visual video content with appropriate captions recorded precisely with what is going on in the video so that it becomes easy to gather information.</p>
    </div>

    <div className='bg-blue-50 p-4 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Made-To-Order Options</h3>
      <p>Best features of website accessibility are said to be good when it helps in saving our time, but some are not meant to be in the order of saving time. So, it is crucial to select the best-customized tools that can maintain the identity of your brand and the accessibility of your website correctly.</p>
    </div>

    <div className='bg-blue-50 p-4 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Color Combination</h3>
      <p>For those who have problems watching the color, it is necessary to check the contrast of background and foreground color combinations. Such tools make sure that the colors of the website for site visitors are under the regulations of website accessibility.</p>
    </div>

    <div className='bg-blue-50 p-4 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Audio Acknowledgement</h3>
      <p>This tool is made to use for the visually impaired person. This tool is available nowadays in many smartphones and computers. It helps such people to find a way of recognizing some aspects of the internet. It helps them to copy and paste the voice and go through the content on your website or fill out the forms they want through which they may get connected to you and become your customer quickly.</p>
    </div>

    <div className='bg-blue-50 p-4 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Screen Reader</h3>
      <p>Website accessibility solutions can adjust a website to be fully compatible with screen reader tools. Such software allows the devices to translate the text on the screen into speech to assist blind individuals. It reads the captions and also learns the images of your webpage with the help of an alternate version with a proper idea of the content that is offered by your website.</p>
    </div>

    <div className='bg-blue-50 p-4 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Code Detector</h3>
      <p>Detectors are used to create practice coding standards to put in force a definite coding average. It is used to read the codes of your website to search for some breakage in the codes that are not obedient to the rules and regulations.</p>
    </div>

    <div className='bg-blue-50 p-4 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Keyboard Navigation Optimization</h3>
      <p>Some websites do not go along with the regulations of Keyboard navigation. Many people are not able to use the computers or any other tool through a touchpad or keyboard due to one or the other disablements. So to maintain the accessibility of your website this is also the necessary tool through which everybody can access through the website and collect information they want.</p>
    </div>
  </div>
</div>


        <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-6 justify-start'>
          <h1 className='font-bold text-4xl'>
            Website Accessibility Design Features
          </h1>
          <div className='space-y-6'>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Contrast Ratio</li>
              <li>Don’t Rely on Color</li>
              <li>Label Forms Clearly</li>
              <li>Provide Feedback for Errors and Omissions</li>
              <li>No Mouse, No Problem</li>
              <li>Keep Navigation Consistent</li>
              <li>Simple Headings and Spacing</li>
              <li>Design for Different Devices, Views, and Screens</li>
              <li>Offer Alternatives for Consuming Media</li>
              <li>Give Users Control</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col space-y-6 bg-blue-50 p-6 justify-start'>
  <h1 className='font-bold text-4xl'>
    Don’t you want to achieve the accessibility of your website?
  </h1>
  <p>Here are some steps that may help you achieve website accessibility easily through the best solutions. Let’s go through it and help your visitors to gather proper information.</p>
  
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
    {/* Card 1 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Mechanical Assessment Tool</h3>
      <p>Many systems may help to build the website through elements like editing toolbars and video players.</p>
    </div>

    {/* Card 2 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Use headings for the structural organization of your content</h3>
      <p>Screen readers use heading structure to navigate content successfully and strategically, and the content will be well organized.</p>
    </div>

    {/* Card 3 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Include proper alt text for images</h3>
      <p>Content on the website must include the related images so that it may become easy for the screen readers to translate those images into content easily.</p>
    </div>

    {/* Card 4 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Give your links unique and descriptive names</h3>
      <p>Before providing the links, make sure that it describes that at what platform will that link takes the visitors.</p>
    </div>

    {/* Card 5 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Use color with care</h3>
      <p>Color deficiency, red-green color deficiency, affects approximately 8% of the population, so make sure to take care of color contrast of your website.</p>
    </div>

    {/* Card 6 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Design your forms for accessibility</h3>
      <p>Those who are using screen readers may not be able to correctly see the form provided on your website. So it is vital to check forms accessibility by using different tools.</p>
    </div>

    {/* Card 7 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Use tables for tabular data</h3>
      <p>Using tables may distract the reader from the content. Use tables only if necessary and with the help of captions for rows and columns.</p>
    </div>

    {/* Card 8 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Ensure that all content can be reasonably accessed with the keyboard alone</h3>
      <p>The tab order on your website must match the visual order so that the visitor who uses only keyboards can logically navigate through the content.</p>
    </div>

    {/* Card 9 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Use ARIA roles and landmarks (but only when necessary)</h3>
      <p>Accessible Rich Internet Application is a robust technical specification that is used for adding accessibility information to rudiments that are not natively available.</p>
    </div>

    {/* Card 10 */}
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h3 className='font-bold text-lg'>Make dynamic content accessible</h3>
      <p>Screen readers may not be able to aware of the material that is updated without refreshing the page. Some software may help you to increase the accessibility of your website. This may also help the people who visit your website to gather information in accessing it properly.</p>
    </div>
  </div>
</div>


<div className='flex flex-col lg:flex-row rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 space-y-6 lg:space-x-6 justify-start'>
  {/* Content Section */}
  <div className='flex-1 p-6'>
    <h1 className='font-bold text-4xl'>
      Evaluating Website Accessibility Solutions
    </h1>
    <p>After going through the importance, features, and uses of website accessibility, you must have understood that website accessibility is crucial for physically impaired people so that they may gather all the information they want correctly. Not only website accessibility opens up your business to new customer demographics, it helps boost your organic search rankings as the average user is staying on your website for longer periods of time.</p>
    <p>You must also have the idea of how you are going to select the best Website Accessibility Solutions, which may help your website adapt accessibility according to proper regulations.</p>
    <p>You can even get in touch with the dedicated and well-equipped team with any questions or to install an AI-powered, fully customizable website accessibility solution on your website.</p>
  </div>

  {/* Image Section */}
  <div className='flex-1'>
    <Image src={IMG3} alt="Website Accessibility" className="w-[550px] h-auto rounded-lg shadow-lg" />
  </div>
</div>

</div>
     
    </section>
  );
}

export default Page;