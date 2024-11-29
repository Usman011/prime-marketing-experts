import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IMG1 from '../../../public/images/Marketing/text message marketing/image.png'
import { RiMessage2Line } from 'react-icons/ri';

const Page = () => {
    return (
        <section className='container px-2 md:px-12 lg:px-24'>
            <div className="flex flex-col items-center justify-center text-center w-full h-52">
                <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
                    Text Message Marketing
                </h1>
                <div className="flex gap-6 justify-center mt-4">
                    <Link href="/">
                        <p className="text-gray-500 hover:text-gray-800">Home</p>
                    </Link>
                    <ul className="list-disc">
                        <li>Text Message Marketing</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col  gap-10 mt-4">
                <div className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 space-y-6">
                    <h1 className="font-bold text-4xl">
                        Give Your Emails The Right Service, Strategy, And Execution
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
                        <div className="space-y-8 w-full lg:w-7/12 mt-14">
                            <p>
                                Do you wish for a response in 90 seconds?
                            </p>
                            <p>
                                Are your marketing efforts fetching you a good market?
                            </p>
                            <p>
                                Are you tired of trying every means- Email, calls, Facebook, Instagram?
                            </p>
                            <p>
                                be it’s time to bring in action a new marketing plan!
                            </p>
                            <p>
                                Try TEXT MESSAGE MARKETING to pull out a 209% higher return on investment and response rates.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={IMG1} alt="Market Research" layout="responsive" width={800} height={600} />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col bg-blue-50 p-2 md:p-6 space-y-6 justify-start'>
                    <h1 className='font-bold text-4xl'>
                        Since we caught your interest, let us get you more information.
                    </h1>
                    <div className='space-y-6'>
                        <p>It is a no briner that nearly all of the adult population has a mobile phone that can send and receive text (SMS) messages. And as they spend hours and hours on the phone, implementing a text message marketing campaign cannot be missed. It is one of the many aspects of a marketing campaign to reach your subscriber and targeted audience.</p>
                        <p>Text message marketing is an effective and user-friendly tool for businesses of any size. It has an upper edge over other marketing schemes and offers various advantages, which is why there is an expected continuous growth for this type of marketing service.</p>
                        <p>It falls in line with other promoting channels like email or social media marketing campaigns. The latter requires your potential clients to navigate to some other corner of the device- like either their inboxes or into their social media accounts, but with text messages, it’s not a stretch to think that the recipients do not need to go somewhere. It is a <span className='font-bold'>direct line</span> to potential customers.</p>
                        <p>No spamming issues at all!</p>
                        <p>SMS messages and alerts can be easily scheduled to send to your targeted audience, which drives more demands and revenues. Studies have shown this form of digital marketing marketing reaches more customers, which results in remarkably higher responses and deliverability than other solutions like a phone call, email newsletter, or social media marketing.</p>
                        <p>An average text message is read in less than 5 seconds and receives a response in 90 seconds. Isn’t that cool?</p>
                        <p>Text messaging is an ideal component of your company’s marketing plan, which is the foundation for attaining your objectives to support your business. Moreover, you do not need to spend dozens of hours finding the best in text message marketing. You are on the right page. We, as PRIME MARKETING EXPERTS, can help you get through your finish line of marketing goals by providing personalized and genuine text marketing solutions. We’ll be your virtual component of your team that will match go the extra mile to work together to support and grow your business.</p>
                        <p>99% of SMS messages are always read!</p>
                        <p>It is associated with the least fall-out rate ever because people respond more to texts rather than emails and social posts. You can send text messages to market about</p>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>Promotions</li>
                            <li> Branding</li>
                            <li>Event notification</li>
                            <li> Product updates</li>
                            <li> Building relationships</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 md:p-6 mb-4 gap-10'>
                    <h2 className='text-4xl'>Providing The Best Text Message Marketing</h2>
                    <p>Here is an explanation of what you should expect from our effective and world-class service. Our prime aim is to make the text messaging service affordable, user-friendly, and customizable.</p>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                1. Analytical Reports
                            </h1>
                        </div>
                        <p className='pl-14'>It is crucial to evaluate any marketing tool to learn if that campaign works for you or needs any improvement. And with our tool, comprehensive analytics is the key feature through which we serve you useful insights and real-time data like user activity, opt-ins, opt-outs, statistics, location of users, info-graphics, performance meter. You name it; we got it.</p> 
                    </div>

                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                2. Automated & Drip Campaigns
                            </h1>
                        </div>
                        <p className='pl-14'>Prime Marketing Experts offers the best-managed text message service because we make it an easy task for you to stay in touch with customers. Each message is always a touch-point and impressive. Automated responders allow you to pre-schedule the journey of the text message or replies to your subscribers. This tool can be personalized as per your need by preparing triggers like welcome, gratitude, recurring reminders, or any action/ condition orientated using drip campaign features.</p> 
                    </div>

                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                3. Contact Management
                            </h1>
                        </div>
                        <p className='pl-14'>We provide the best solutions to create and manage contact lists, which are the heart of the text messaging marketing system, unlike others who work with just old contacts and fail to manage your contact list. It can prove to be fatal. Our tool makes it easy to create a new list, automated updates, or manual addition of new contacts using keywords, import and merges existing list, entail details of active and inactive recipients to help you save some money.</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                4. Expert Guidance
                            </h1>
                        </div>
                        <p className='pl-14'>With our service, you are assigned great dedicated support and marketing expert who caters to the need of your organization to make your campaign a great success. We guide you for best action plans and keep you well versed with text messaging marketing regulations and policies.</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                5. More Members, More Revenues
                            </h1>
                        </div>
                        <p className='pl-14'>With Prime Marketing Experts, you are allowed to send marketing messages to an outsized group of contacts all in one go. We organize your contact list and send a targeted mass SMS message about coupons, sale alerts, or notify your customers.</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                6. Personalize
                            </h1>
                        </div>
                        <p className='pl-14'>SMS message marketing is not about blind copy-paste-send service. All the messages should be tailored according to the categories of clients to most effectively build a rapport with your brand. For example, you can address the customer by name to have your message resonate better.It is vital! With Prime Marketing Experts, we collect clients’ personal information like name and date of birth to send out birthday reminders and to further frame personalized messages. Customize to connect to masses in exclusive ways all at once! All of this is just a click away.</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                7. Toll-Free Incoming Texts
                            </h1>
                        </div>
                        <p className='pl-14'>We are best in the league because we charge you only the messages you send across and offer free incoming text messages. No, not even a penny!</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                8. Marketing-Mix
                            </h1>
                        </div>
                        <p className='pl-14'>We are prime experts in the texting game and know how to play our cards right. Therefore, we provide a cocktail of digital marketing services by integrating with other marketing campaigns like email newsletters or social media marketing (including Facebook, and other apps)</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                9. Subscriber Segmenting
                            </h1>
                        </div>
                        <p className='pl-14'>We collate information of your potential clients and subscribers and segment them into lists using filters of your choice. For instance, if you are a beauty brand, we classify your subscribers who are inclined to women’s products versus men’s products. Specific advertising enhances your text-marketing campaign.</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                10. Advance Scheduling
                            </h1>
                        </div>
                        <p className='pl-14'>Did you just think of sending festive wishes? That said, as your genie and marketing expert, we schedule text messages in advance using an in-built calendar feature, which allows you to pre-schedule single or group text messages to be sent any time you want.</p> <p>You can schedule your campaigns in advance using an intuitive calendar feature; the calendar can schedule a single text message or a group of messages to be sent out at any time.</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                11. Surveys & Polls
                            </h1>
                        </div>
                        <p className='pl-14'>Just like the best marketers, we help you gather customer feedback and create surveys to collect data on your subscribers. It is the best solution that lets you identify which process works for you. We do all your homework!</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                12. Messaging Workflows
                            </h1>
                        </div>
                        <p className='pl-14'>We create workflows that are customized according to your need, and clientele by creating message templates for faster access, sending individual assignments using mobile keywords, which also builds your contact list.</p> 
                    </div>
                    
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                13. Popular & Proper
                            </h1>
                        </div>
                        <p className='pl-14'>As to this tool is gaining popularity, we are also recognized as the top players who do what’s needed to be proper, legally compliant, and effective.</p> 
                    </div>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                14. MMS Service
                            </h1>
                        </div>
                        <p className='pl-14'>We know the importance of images over texts. As another advanced feature, we allow you to send graphics, audio/video clips, pictures to your messages.</p> 
                    </div>

                    <div className='space-y-6'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='flex gap-6 text-2xl font-bold'>
                                <span className='items-center rounded pt-1 text-center'>
                                    <RiMessage2Line className='w-10 text-orange-500'/>
                                </span> 
                                15. Achieving Results
                            </h1>
                        </div>
                        <p className='pl-14'>Text messaging marketing tools are the most influential and reasonably priced way to engage your prospects and customers. It has an assured 99% read rate, unlike sending 1,000 email newsletters out of which only 151 are opened, and with Facebook, you get only a 6% reach out rate. Nevertheless, with text messaging marketing, your branding messages won’t be unnoticed ever again.</p> 
                    </div>

                    <div className='space-y-4 pb-10'>
                        
                        <p className='font-bold'>Prime Marketing Experts proposes a handy text message marketing platform for your business. We are experienced, and with a user-friendly analytics dashboard, and we offer several prized features like customized keywords, free incoming text messages, contact management service, and robust analytics and reporting suite. If you are looking for someone who is organized and knows your calendar better than you know, and scheduling master, here we present ourselves. With our marketing service, we offer your business to double your sales and expand your business 20x.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Page;