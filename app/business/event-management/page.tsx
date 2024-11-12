import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/eventmangement/image1.png';
import IMG2 from '../../../public/images/eventmangement/image.png';

const Page = () => {
  return (
    <section className='container'>
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-52 flex-col text-center'>
        <h1 className='font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide'>
          Event Management Services
        </h1>
        <div className='flex gap-6 justify-center mt-4'>
          <Link href="/">
            <p className='text-gray-500 hover:text-gray-800'>Home</p>
          </Link>
          <ul className="list-disc">
            <li>Event Management Services</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col mx-2 gap-10 mt-10'>
        <div className='flex flex-col space-y-6 justify-start'>
          <h1 className='font-bold text-4xl'>
            Run The Best Event With Us!
          </h1>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
            <div className='space-y-6'>
              <p>One’s life is never short of events!</p>
              <p>From birthdays to weddings, and from conferences to live shows, life is filled with endless events.</p>
              <p>As either a host or guest, we spend nearly 20,719 hours of our lives in such events. It is overwhelming to always think on your toes and plan an event. Yet the chances are that it can go all wrong even if you plan it to your heart’s content.</p>
              <p>Now the preference is yours, whether you wish to do the stressful stuff or want to enjoy your event by leaving the logistics to us.</p>
              <p>A lot goes behind the stage to put up a rock star event. Creativity, designing, innovations, ideas, venue selection, team building, and branding are some of the key ingredients to have a master plan for any event.</p>
            </div>

            <div className='w-full h-auto'>
              <Image src={IMG1} alt="Market Research" width={400} height={400} />
            </div>
          </div>

          <p>You should have a bird’s eye view to deal with multiple deliveries, build agendas, attend phone calls, answer millions of questions, predict everything, and have a backup for it. The detail is the devil, you miss one point, and all of it sinks down.</p>
          <p>Too overwhelming?</p>
          <p>Lean on the gurus. After countless years of event management experience, we are the most qualified to handle your events like pros. We, as Prime Marketing Experts, live, eat, and sleep event planning!</p>
        </div>

        <div className='flex flex-col  space-y-6 justify-start'>
          <h1 className='font-bold text-4xl'>
            Know Your Event Planners
          </h1>
          <div className='flex flex-col bg-blue-50 p-2 lg:flex-row gap-8 lg:gap-20'>
            <div className='space-y-6'>
              <p>Prime Marketing Experts is not just yet another company, but THE best event management company. Our team of experts who ace their game makes us the finest firm across the globe.</p>
              <p className='font-bold'>We create and put life in your ideas, while you save your time to dream more about your event.</p>
              <p>We bring remarkable life to an event through our excellent management, execution, and dedication. With great expertise, our work and utmost professionalism is a treat to our clients. We use warmth, patience, a sense of humor, and knowledge to enhance our relationship with clients.</p>
              <p>Our event management services provide scalable assistance that is demanded by your events, be it be a trade show, roadshow, wedding, anniversary, conference, seminar, or a gala event. We’ve got you covered and your events too.</p>
            </div>

            <div className='w-full h-auto'>
              <Image src={IMG2} alt="Market Research" />
            </div>
          </div>
          <p>We are passionate event managers, which made us won praises and awards for delivering a well-organized and flawless event. The mantra for our service is to deliver outstanding client satisfaction, so we are at your service to cater to all your needs.</p>

          <div>
            <h1 className='pt-14 font-bold text-4xl'>
              Prime Event Management Features:
            </h1>
            <p>
              Since you have dreamt up the amazing concept for your event, and are finding someone to convert them into realize. You are on the right page!
            </p>
          </div>

          <p>
            Our step one is to understand your dream concept and then pitch in our creative execution to blow your attendees’ minds away. With Prime Marketing Experts, you get a cocktail of event management services with the enlisted features.
          </p>

          <ul className='list-disc pl-5 space-y-4'>
            <li className='font-bold'>Experienced Planners:</li>
            <p>Event management is not everyone’s cup of tea because it can be hectic and exhaustive for some. However, for us, it is a cakewalk. From the planning of the event to the final execution, we give keen attention to all the details to ensure a smooth flow, and this is why we are seasoned professionals for the job.</p>

            <li className='font-bold'>Bucketing Approvals: </li>
            <p>It can be a daunting task to acquire permission and legal compliance to host an event. But with us, all these contracts and permission are handled by our expert and professional event managers. Thus, you save your time and shun stress.</p>

            <li className='font-bold'>Stay On The Budget:</li>
            <p>Establishing a budget for your event is important, but what’s more important is to stay on the planned budget. Many fantastic ideas fall by the wayside because of a leaky budgeting plan.</p>
            <p>But we take this aspect into due consideration. We negotiate the best rate in the market for you. The venue, food, drinks, entertainment, décor, and all other miscellaneous expenses are arranged and managed efficiently to save you money.</p>

            <li className='font-bold'>Pick Location And Date: </li>
            <p>Many events have a pre-set date for a recurring event, but firming the right date is important for any new event.</p>
            <p>For events that are required to be broadcasted or involve a live audience, we choose the right venue and time catering to the needs of your target audience. We generally keep in mind holiday periods, availability of key participants, and other occasions that you may fail to foresee.</p>

            <li className='font-bold'>Part Of An Effective Marketing Strategy: </li>
            <p>Event planning is not just about weddings. Events can be a helpful enhancement in your company’s brand building initiatives or can assist in a successful product launch.</p>

            <li className='font-bold'>Take Ownership & Responsibility: </li>
            <p>By choosing us as your professional event management partner, you free yourself from the hassle of making all the event arrangements.</p>
            <p>We aim to make you our patrons; hence, we take ownership of your event with all our hearts.</p>

            <li className='font-bold'>Creative Professionals: </li>
            <p>Event managers are artistic professionals with the needed organizational expertise and creativity required to make an event successful. They will arrange lights and decorate according to the occasion and the desired vibe.</p>

            <li className='font-bold'>Driving Event Traffic:</li>
            <p>We are experts in marketing, so we can market any event to bring in your desired audience so we can be that much more effective in building your brand image. We can also help you to increase registration, acquire new customers, and create an exciting agenda for your business.</p>

            <li className='font-bold'>One-Stop Event Shop:</li>
            <p>The most significant reason for choosing our event management service is that we are a one-stop shop. We cover every detail that an occasion requires equipment such as halogen lights, tarpaulin, seating arrangement for the quests and speakers, art and decoration, catering services, sound, photography, and videography. Our planners are detail-oriented, so nothing is left previsioned from our eagle eyes.</p>

            <li className='font-bold'>Reduce Stress: </li>
            <p>Our event managers can work under pressure and within a certain time constraint. Put the onus on our professionals, and you have to stress no more. <span className='font-bold'>Hakuna Matata!</span></p>
            <p><span className='font-bold'></span>Prime Event Management Services</p>
            <p>As a renowned event management company, we offer a wide range of services that let you plan and host the perfect event while choosing the best for you and your team.</p>

            <li className='font-bold'>Venue Selection</li>
            <p>The very first step of creating an event is venue selection. And, we all know how difficult it is to find the perfect venue for your dream event. With Prime Marketing Experts, you don’t have to worry about this. We will do all the hard work, and you just have to wait and prepare yourself for the most spectacular event you have ever seen.</p>
            <p>We possess a unique ability to plan, design, and create an unforgettable, customized, and authentic experiences while being tasteful and refined. We make sure to book a venue that is perfect according to your event and tastes.</p>

            <li className='font-bold'>Designing</li>
            <p>We have a squad of in-house designers to cater to all your designing needs. Be it invitations or flyers to <Link href="/marketing/social-media-marketing" className='text-blue-500'>social media ads</Link>, we will create everything you desire and help you engage, connect, and evolve.</p>

            <li className='font-bold'>Invitation Creation & Distribution</li>
            <p>Invitations make the event feels complete. If there are no invitations, no one will know about your event. On top of that, it is important to take the invitations to the right audience to make your event rocking.</p>
            <p>Well, our team will help you create eye-catching invitations and also distribute them so you can just concentrate on enjoying your event.</p>

            <li className='font-bold'>Attendee Registration Management</li>
            <p>Organizing events can be a little daunting, and even more when it comes to the guest list. Well, our team is an expert in attendee registration management so that you won’t have to listen to any complaint regarding hospitality.</p>

            <li className='font-bold'>Social Media Marketing</li>
            <p>We will help you <Link href="/marketing/email-marketing" className='text-blue-600'>engage your social media audience</Link> like never before to promote your event. We make certain that your brand gets the visibility it deserves. We will create engaging posts that people cannot ignore, but they instead click on it.</p>

            <li className='font-bold'>Specialty Lighting</li>
            <p>We take heed of every little detail for you. From sound to lighting, we have skilled and dedicated staff only to enhance your event and make it unforgettable. We will help you with:</p>

            <ul className='list-disc pl-5 space-y-2'>
              <li>Concept & theme development</li>
              <li>Special effects and lighting</li>
              <li>The centerpiece and floral design</li>
              <li>Thematic props</li>
              <li>Seating selection</li>
              <li>Marketing Collateral Designs</li>
              <li>Videotaping And Photography</li>
              <p>Whether you want to shoot a commercial or capture your event in HD, Prime Marketing Experts is all you need. We are definitely a one-stop-shop for all your video production needs.</p>
            </ul>

            <li className='font-bold'>Email Marketing</li>
            <p>We design engaging and <Link href="/" className='text-blue-600'>captivating email marketing campaigns</Link> that drive desired actions. We know what we ace at, and we can create awesome email marketing campaigns for you to promote your brand’s event.</p>
            <p>Along with all these, we help in Name Tag Printing & Distribution, Speaker Recruitment & Management, Celebrity Recruitment & Management, Audio Visual & Lighting Management, Signage & Brand Visibility, Detailed Budgeting & Invoicing, Refreshment & Meal Selection & Procurement, and On-site Management & Logistics Staff.</p>
            <p className='font-bold'>Host a Glorified Event With Prime Marketing Experts</p>
            <p>We feel pride in sharing that all our projects have been a great success. We have designed and delivered business events, including roadshows, conferences, and networking events. We enjoy the patronage of numerous recognized leaders.</p>
            <p>With our tremendous experience, we can tackle any emerging situation with ease. Surprises are not an issue for us. Choosing to hire the pros in event management is the ninja technique to host a successful event.</p>
            <p>We absorb all your anxiety and leave you worry-free!</p>
            <p className='pb-10'>We know how to create out-of-the-box events, and we’d love to be a part of your next project. So, contact us now for a free quote.</p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Page;