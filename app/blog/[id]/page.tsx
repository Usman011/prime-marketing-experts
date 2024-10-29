"use client";

import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import NaveLogo from '../../../public/logo.png';

interface BlogData {
    id: number;
    title: string;
    description: string;
    author: string;
    author_img: string;
    image: string;
}

interface PageProps {
    params: {
        id: string;
    };
}

const Page: React.FC<PageProps> = ({ params }) => {
    const [data, setData] = useState<BlogData | null>(null);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    return (
        data ? (
            <>
                <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                    <div className='flex justify-between items-center'>
                        <Image src={NaveLogo} alt='logo' className='w-[130px] sm:w-auto' />
                        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black'>Get started</button>
                    </div>

                    <div className='text-center my-24'>
                        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60} alt='Author' />
                        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                    </div>
                </div>

                <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                    <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='details img' />
                    <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                    <p>{data.description}</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
                    <p className='py-3'>One of the first steps to implementing an effective digital strategy is securing budget for your startup...</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Securing Budget For Your Startup</h3>
                    <p className='py-3'>One of the first steps to implementing an effective digital strategy is securing budget for your startup...</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Redesigning A Website</h3>
                    <p className='py-3'>Your website is often the first touchpoint between your small business and potential new customers...</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Leveraging Social Media</h3>
                    <p className='py-3'>Social platforms present a dynamic opportunity for small businesses to engage with current customers...</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
                    <p className='py-3'>Small businesses can unlock new online opportunities to acquire customers, build credibility, and sustain long-term growth...</p>

                    <div className='my-20'>
                        <p className='text-black font-semibold my-4'>Share via:</p>
                        <div className='flex'>
                            <Image src={assets.facebook_icon} alt='Facebook icon' />
                            <Image src={assets.twitter_icon} alt='Twitter icon' />
                            <Image src={assets.googleplus_icon} alt='Google Plus icon' />
                        </div>
                    </div>
                </div>
            </>
        ) : <p>Loading...</p>
    );
};

export default Page;
