import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Marketing/marketing plans/image1.png';
import IMG2 from '../../../public/images/Marketing/marketing plans/image2.png';
import IMG3 from '../../../public/images/Marketing/marketing plans/image3.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  return (
    <section className='container px-2 md:px-12 lg:px-24'>
      
        {/* Header */}
      <div className='flex justify-center sm:items-center lg:items-center md:pl-10 sm:pl-20 lg:ml-auto w-full h-40 flex-col text-center'>
         <h1 className='font-semibold-600 text-4xl md:text-5xl leading-10 md:leading-10 tracking-wide'>
         Marketing Plan Services
        </h1> 
      </div>
     

      <div className="flex flex-col  gap-10">
        <div className="flex flex-col  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
          <h1 className="font-bold text-3xl md:text-4xl">
            Give Your Emails The Right Service, Strategy, And Execution
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="space-y-8 w-full lg:w-7/12">
              <p className="font-bold">Kudos!</p>
              <p>
                You have established strong business and have successfully planned to spearhead your organization. Did you focus on setting up the business, but not the road map that your brand needs to follow to achieve marketing goals?
              </p>
              <p>
                Well, there is a small problem then, and all your efforts might go in vain. Clearly, any firm needs a marketing plan to run smoothly to head in the right direction on the road of success and not get diverted away from the goal. It is no rocket science because you want to acquire new clients to increase sales in your company.
              </p>
              <p>
                A marketing plan is a systematic approach for any organization to promote its brand or products to the potential audience. A business with no marketing plan fetches you nothing except a haphazard, start-stop journey with wastage of money, time, and other resources.
              </p>
            </div>
            <div className="mt-10">
              <Image src={IMG1} alt="Market Research" layout="responsive" className="border-1 rounded" width={1200} height={1000} />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 bg-blue-50 p-2 md:p-6 space-y-6 lg:space-y-0 justify-start items-center">
  {/* Image Section */}
  <div className="w-full lg:w-2/4">
    <Image
      src={IMG2}
      alt="Marketing Plan Image"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>

  {/* Text Content Section */}
  <div className="w-full lg:w-1/2 space-y-6">
    <h1 className="font-bold text-3xl md:text-4xl">Why Create a Marketing Plan?</h1>
    <div className="space-y-6">
      <p>
        Fortunately, <span className="font-bold">a marketing plan</span> would help you curate a plan, which is rooted in data and proven to generate real results.
      </p>
      <p>
        No matter how enthusiastic you are on learning about the importance of a marketing plan, it is not a cakewalk to build out a marketing plan all by yourself. It is an extensively documented outline that includes every aspect, from strategies and activities to resources needed to promote and sell your products.
      </p>
      <p>
        Though, it might not work at all. This is a lesson we have learned after many years of working across these fields.
      </p>
      <p className="font-bold">
        Relax! We can save your bacon and rescue you from the aftermath of bad marketing by curating a robust marketing plan.
      </p>
      <p>
        With that in mind, let us get you started with the what, how, why, and when of our marketing plan services that fit your business problems and why we are the experts at it.
      </p>
    </div>
  </div>
</div>


<div className="flex flex-col lg:flex-row rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 gap-10 space-y-6 lg:space-y-0 justify-start items-center">
  {/* Text Content Section */}
  <div className="w-full lg:w-1/2 space-y-6">
    <h1 className="font-bold text-3xl md:text-4xl">What Is A Marketing Plan?</h1>
    <div className="space-y-6">
      <p>
        A marketing plan is a premeditated roadmap that helps your business organize, execute, and track marketing efficiency over a given period. This planning process is a systematic approach to realize marketing goals and implement/alter tactics.
      </p>
      <p>
        It is a continuously evolving process that befits every business process from launching to routine planning. Apparently, each business has a different business-marketing plan, but all of them work similarly to achieve goals.
      </p>
      <p>
        Most of the business’ marketing plans are required to be updated to take a cursory glance at the bigger picture, retooling the strategy to evaluate performance and adjust tactics.
      </p>
      <p>
        A marketing plan consists of one or more marketing strategies that help you connect each strategy back to a more substantial marketing operation and business goal from the framework.
      </p>
      <p>
        With Prime Marketing Experts, for any business, product selling, or service selling and any size, big or small, we can compile a marketing plan. It’s a global service with proven results for each of them.
      </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-1/2">
    <Image
      src={IMG3}
      alt="Marketing Plan"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
</div>


        <div className="flex flex-col  bg-blue-50 p-2 md:p-6 space-y-6 justify-start">
          <h1 className="font-bold text-3xl md:text-4xl">Our Marketing Plan Services</h1>
          <div className="space-y-6">
            <p>
              There are a plethora of marketing plan services that we offer. Moreover, depending on the kind of company and business goals, you can leverage a variety of different marketing plans that fit you the best.
            </p>
            <p>We highlight a few of the best marketing planning services here:</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Regular Marketing Plans:</AccordionTrigger>
                <AccordionContent>
                  These plans highlight the strategies or campaigns your business needs to take on in a specified period, quarterly or annually.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Paid Marketing Plan:</AccordionTrigger>
                <AccordionContent>
                  This plan is designed to highlight paid strategies, such as native advertising,
                  <Link href="/marketing/seo-web-design" className="text-blue-600">search engine advertising</Link>, or paid social media promotions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Social Media Marketing Plan:</AccordionTrigger>
                <AccordionContent>
                  This is one of the popular marketing plans. It defines and
                  <Link href="/marketing/social-media-marketing" className="text-blue-600">highlights the social media channels</Link>, tactics, and campaigns you should intend to undertake expressly on social media platforms like Facebook, Instagram, and others.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Content Marketing Plan:</AccordionTrigger>
                <AccordionContent>
                  The content marketing plan is a fail-proof plan if done in the right way. With
                  <Link href="/marketing/content-marketing" className="text-blue-600">our content marketing service</Link>, we plan, identify, and highlight different strategies and tactics to effectively build trust with your targeted audience and
                  <Link href="/marketing/local-seo" className="text-blue-600">improve search engine rankings</Link>. This plan may include the ideal strategy of how your company should construct and maintain a blog. Our content marketing services are proven to promote your business or product.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p>You can seek help from our marketing plan experts to identify which services best fit your business.</p>
          </div>
        </div>

        <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6  space-y-6 justify-start">
          <h1 className="font-bold text-3xl md:text-4xl">Benefits of Our Marketing Plan Services</h1>
          <div className="space-y-6">
            <p>
              It is a tough challenge for all business firms to make their marketing dollars stretch at the farthest. Designing a marketing plan is a cumbersome process as it is not merely advertising but a mixture of <Link href="/marketing/branding" className="text-blue-600">branding</Link>, customer service, product pricing, and the right promotion.
            </p>
            <p>
              All these aspects should be engaged for an ultimate marketing solution that delivers all the right practices. Hence, it is crucial to choose a systematic approach while curating a marketing plan that can help you reap unlimited benefits to jump-start success.
            </p>
            <ul className="list-decimal pl-5 space-y-6">
              <li className="font-bold">Reframe old approaches:</li>
              <p>It is essential to note the things that were successful in previous times, might not be useful or act as a winning strategy anymore. It has to be regularly revised and reframed to devise newer approaches with calculated risks.</p>
              <p>We encourage and help you to make the necessary changes in your marketing strategy and plans.</p>

              <li className="font-bold">Systematic researched planning:</li>
              <p>While we design a marketing plan for your business, we re-examine your existing and potential marketplace, competitors, target audience, and value of goods and services. Such extensive research is conducted to evaluate, prevent, and mitigate risks in your business model and marketing plan.</p>
              <p>It favors faster growth and more profits.</p>

              <li className="font-bold">Accountable:</li>
              <p>With our marketing planning service, both your business and marketing models are given definite targets and measuring parameters. It is responsible for a reasonable marketing plan that provides enough resources to succeed.</p>

              <li className="font-bold">Proactive planning:</li>
              <p>With our service, you can plan about the future to have full advantage of your marketing campaigns and tackle situations well. In addition, well-documented marketing plans are easy to access, analyze, and transform.</p>
            </ul>
          </div>
        </div>

        <div className="flex flex-col bg-blue-50 p-2 md:p-6 space-y-6 justify-start">
          <h1 className="font-bold text-3xl md:text-4xl">How We Curate a Marketing Plan</h1>
          <div className="space-y-6">
            <p>
              Before you kick start devising a marketing plan, our experts gather the crucial info about your business and follow the following procedure:
            </p>

            <ul className="list-disc pl-5 space-y-6">
              <li className="font-bold">Understanding Your Business Objectives</li>
              <p>We start by determining your business objectives by using SWOT analysis. Ask yourself a question – “Where is your business right now, and where do you see it in the next few years?”</p>
              <p>The analysis will help you discover your strengths, weaknesses, opportunities, and threats of your business. Also, we make sure business objectives are specific, measurable, attainable, realistic, and time-bound (SMART).</p>
              <p>We do accurate and up-to-date market research to make sure you are using your budget and time most efficiently to deliver the right message to the right set of potential customers.</p>

              <li className="font-bold">Discovering Your Target Audience</li>
              <p>Next, we will start determining your target audience by considering factors such as age, gender, behavior, and interests.</p>

              <li className="font-bold">Planning & Analyzing</li>
              <p>We use comprehensive techniques that separate your business from your competitors by analyzing market research, using data mining to determine target markets, shutting any performance gaps, and helping your business to ensure that your promises are lined up with the value delivered.</p>
              <p>After it, we develop a strategic plan to execute the strategy once that is done.</p>

              <li className="font-bold">Executing The Plan</li>
              <p>All aspects of the marketing plan are then set up, including SEO, social media promotion, PPC, email marketing, events, direct marketing, initiatives, public relations, and content creation. We then measure the results of executed marketing initiatives, which would be given to you in a report and used to refine your organization’s marketing initiatives additionally.</p>
              <p>We have clarified the vital concepts of marketing planning services. With that now, you know there is more to a market plan than a list of ideas for promoting your brand.</p>
            </ul>
          </div>
        </div>

        <div className="flex flex-col mb-10  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6 justify-start">
          <h1 className="font-bold text-3xl md:text-4xl">Wait! One more thing about marketing plans!</h1>
          <div className="space-y-6">
            <p>
              We also have a marketing plan template and checklist that is a pre-requisite for developing a marketing plan for your business. It is mandatory to flow a step-by-step approach to produce a custom-built marketing plan for your business needs. Therefore, you will need to contact us to find out what we put together to make an effective and result-oriented marketing plan that glorifies your business or brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;