import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/email marketing/image1.png';
import IMG2 from '../../../public/images/email marketing/image2.png';
import IMG3 from '../../../public/images/email marketing/image3.png';

const Page = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center w-full h-52">
        <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
          Email Marketing Services
        </h1>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li>Email Marketing Services</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mx-4 md:mx-8 lg:mx-16 gap-10 mt-10">

        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-4xl">
            Give Your Emails The Right Service, Strategy, And Execution
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12 mt-14">
              <p>
                Did you know for every $1, email marketing generates $42, which results in an ROI of 4200%? Therefore, 81% of SMBs still use email marketing for their main customer acquisition channel.
              </p>
              <p>
                These figures show why you need our email marketing services RIGHT NOW!
              </p>
              <p>
                With our competence and experience, we make sure that your email campaigns reach the right audience and prompt users to take action. Be it setting up your email program or managing your ongoing campaigns, our team can tackle each aspect of your email efforts.
              </p>
            </div>
            <div className="w-full lg:w-5/12 h-full">
              <Image src={IMG1} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
          <p className='font-bold'>By creating and personalizing your email campaigns, we help make it easy for your company to get more leads for your company.</p>
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-4xl">
            Full-Service Email Marketing That Makes Every Email Count
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="w-full h-full">
              <Image src={IMG2} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
            <div className="space-y-8 w-full lg:w-11/12 mt-14">
              <p>
                We follow a flexible and results-oriented approach to make sure that we produce the optimal mix of engaging content for your customers and profitable results for your company.
              </p>
              <p>
                Being in touch with customers is the key! We believe in this and make sure that you can always see the real picture of what’s going on with your campaigns. Also, we make sure the campaigns are customized for your audience and geared towards your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-4xl">
            Give Your Emails The Right Service, Strategy, And Execution
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12 mt-14">
              <p>
                Did you know for every $1, email marketing generates $42, which results in an ROI of 4200%? Therefore, 81% of SMBs still use email marketing for their main customer acquisition channel.
              </p>
              <p>
                These figures show why you need our email marketing services RIGHT NOW!
              </p>
              <p>
                With our competence and experience, we make sure that your email campaigns reach the right audience and prompt users to take action. Be it setting up your email program or managing your ongoing campaigns, our team can tackle each aspect of your email efforts.
              </p>
            </div>
            <div className="w-full lg:w-5/12 h-full">
              <Image src={IMG3} alt="Market Research" layout="responsive" width={1200} height={1000} />
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-6 justify-start'>
          <h1 className='font-bold text-4xl'>
            Our Email Marketing Process
          </h1>
          <div className='space-y-6'>
            <p><span className='font-bold'>Timing –</span> Timing is the most important factor that affects the success of your email campaigns. Your current location may be in Australia, but perhaps your audience is from another country, which could in a different time zone.</p>
            <p>This is the primary reason that affects the click-through rate and open rate. Keeping this problem in mind, we segment your email lists based on demographics so your customers can get the right message at the right time.</p>
            <p>We will analyze your past campaigns and consider the statistics to arrive at the most optimal time of day to maximize the customers that read your emails.</p>
            <p><span className='font-bold'>Frequency –</span> Besides the timing, the frequency also affects the performance of your campaign. Billions of emails are sent daily. So as not to flood the reader’s inbox, it is crucial to limit your emails at one or two emails per week at the most. We will make sure that each email is getting to your readers at the right time to maximize your conversion from email list subscribers into paying clients.</p>
            <p><span className='font-bold'>Subject Lines –</span> We cannot stress enough on the importance of subject lines. Along with catching the user’s attention, the right subject line helps the user to have a positive image of your brand.</p>
            <p>We make sure to create a terrific subject line for your email and stay under 50 characters, just enough to intrigue your readers.</p>
            <p>Not everyone can be creative, so leave this to us, and we will do all the thinking. Our subject lines will entice your readers to open the message and click on the CTA. Segmenting can also help you in creating a catchy yet appropriate subject line.</p>
            <p>We take all the needed measures just to increase your conversion and ROI.</p>
            <p><span className='font-bold'>Content – </span> Content is the king! Without the right content, no one is going to read your email. Though, don’t be afraid as you will be in the right hands with us! We will create informative and compelling content for you.</p>
            <p>We make sure the content is easily skimmed through, so users are prompted to take the desired action. Our teams know which kind of content the audience wants, and we will do just that, keeping your target audience in mind.</p>
            <p>Along with the content, we will write effective CTAs to direct the users to your website. From the relevant images to alt tags, we will make sure the entire content is relevant to your audience, and it leaves a good impression on your recipients.</p>
            <p><span className='font-bold'>Mobile Responsiveness –</span> 46 percent of emails open are on mobile devices. Since more and more individuals are using smartphones, it has become a necessity to optimize your emails for all devices.</p>
            <p>We make sure all email marketing campaigns are mobile responsive so they can be opened on any device. No one loves to do the extra work of zooming in and zooming out. By keeping these things in mind, we make sure users stay reading your email marketing campaigns for longer than they usually would.</p>
            <p><span className='font-bold'>Personalization –</span> The emails will convert more if the users can relate to it. For this, you need to have a deeper knowledge of your audience and know how to personalize your emails. Gone is the time when personalization was just addressing recipients with their first and last names.</p>
            <p>But, did you know you can give more specific content to your users based on their interest and preference? Don’t worry; we will do this for you.</p>
            <p>By customizing your email marketing campaigns in a step-by-step procedure based on your services and relevance, we will create them effectively which will boost your conversion rate.</p>
            <p>If you know about your audience and personalize the emails, there is a greater chance of emails being opened and users making a sale.</p>
          </div>
        </div>

        <div className='flex flex-col space-y-6 justify-start'>
          <h1 className='font-bold text-4xl'>
            Using The Best Email Marketing Strategies & Technology.
          </h1>
          <div className='space-y-6'>
            <p>Accessibility of a particular website depends on many factors. All these workings of accessibility run in tandem consisting of web techniques, web browsers, and other agents. One must select the best software that may provide technical specifications, guidelines, procedures, and supporting resources that illustrate accessibility solutions.</p>
            <p className='font-bold text-2xl'>Essential Benefits of Website Accessibility Software</p>
            <ul className='list-disc pl-5 space-y-2'>
              <li className='font-bold'>Email Marketing List Development </li>
              <p>The quality of the email marketing list determines the success of your email. No matter how good your email is, if it isn’t reaching the right audiences, then it’s sure to backfire.</p>
              <p>We help you create a list of high-quality contacts with keeping your brand, offered services, and the right audience in mind. A successful email strategy means a high-quality email list. Although we can use your last email list, we prefer creating a list from scratch so we have a good idea of your audience and what they might be expecting from you.</p>
              <p>With us, you can be certain that your list will be of high-quality and has your most-valued groups.</p>

              <li className='font-bold'>List Segmentation And Strategy </li>
              <p>After creating a good list, we will focus on segmenting the list. Building a good list is just half of the work. We have to keep the list always updated by deleting the users who have unsubscribed or users who have not opened your email in a long time. This will increase the open rate of emails.</p>
              <p>Segmentation is also necessary for sending the right message to the right people. Our highly skilled professionals make sure to keep your list targeted and current.</p>
              <p>Further, we will create an effective email marketing strategy to plan out when and how to send out emails, so they result in the maximum ROI.</p>

              <li className='font-bold'>Email Template Design And Development</li>
              <p>Creating an email is not a tedious task. What’s difficult is how to arrange the content so the user can easily read and relate to the same.</p>
              <p>For this, we will create the right message format for you, which will make you stand out from your competitors and help you convey the right message to your potential customers.</p>
              <p>By combining the best and latest practices with our creativity, we make sure the email marketing campaigns are original and professional. We take extra care to make sure to make all email campaigns responsive and optimized to all devices.</p>

              <li className='font-bold'>Email Content Creation And Automation </li>
              <p>Since no email should ever be the same, there is a need to create original and relevant content for each email. Some emails are informative as they may feature on an offering or educate clients on the latest trends, while some emails prompt the user to take a certain action when you are running a promotion. It is often strategic to send an email that contains a link to a free white paper or infographic when someone registers for it through a landing page.</p>
              <p>We can <Link href="/" className='text-blue-600'>integrate marketing automation software</Link> to further the success of your email campaigns. This software tool has features such as lead scoring, which can help your sales team evaluate what leads are most likely to convert. With marketing automation, your email campaigns are an integral part of triggering how a lead is tracked through their purchasing journey. The tool also has additional features that improve the credibility of each and every email that you send out, which reduces the probability your contacts will find it in spam.</p>
              <p>We, at Prime Marketing Experts, are experts in our work and create all types of campaigns, including drip campaigns, email newsletters, triggered email campaigns, service/ promotional emails, and retargeting campaigns.</p>

              <li className='font-bold'>Testing</li>
              <p>When an email is ready, there are many questions that need to be answered. Or, we can say, emails need testing to make sure they are reliable and result-oriented.</p>
              <p>You need to ask yourself questions like:</p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Is the subject line engaging?</li>
                <li>Is the CTA catchy enough to prompt the user to take action?</li>
              </ul>
              <p>For all these things, we do A/B testing to make sure the smooth and effective running of our campaign. We send versions of emails to particular segments and see which approach works for you and your business.</p>
              <li className='font-bold'>Measure & Analyze</li>
              <p>The last would be to measure and analyze the email marketing campaign. We will monitor the emails and create a database to see which technique and which segment of the audience is responding to the emails. This will increase not only your open rate but also the conversion rate.</p>
              <p className='pb-10'>So, let us strategies your email marketing to improve your conversion rate, and in turn, the ROI.</p>

            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Page;