import BlogList from '@/components/BlogList';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
            <section className='container'>
            <div className="flex flex-col items-center justify-center w-full h-52 text-center">
        <h1 className="font-bold text-4xl md:text-5xl leading-8 md:leading-10 tracking-wide">
          Blog
        </h1>
        <div className="flex gap-6 justify-center mt-4">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-800">Home</p>
          </Link>
          <ul className="list-disc">
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <BlogList/>

            </section>
        </div>
    );
}

export default Page;
