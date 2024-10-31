"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
    title: string;
    description: string;
    category: string;
    image: string;
    id:number
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, category, image,id }) => {
    return (
        <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-gray-500 hover:shadow-[-7px_7px_0px_#FA7A1F]">
            <Link href={`/blog/${id}`}>
            <Image src={image} alt="blog_img" width={400} height={400} className="border-b border-black" />
            </Link>
            <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{category}</p>
            <div className="p-5">
                <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 text-sm tracking-tight text-gray-700">{description}</p>
            </div>
            <Link href={`/blog/${id}`} className="flex items-center justify-center py-2 font-semibold text-center">
            <button className="relative inline-flex items-center justify-center px-4 py-2 text-orange-600 font-medium group">
            <span className="absolute inset-0 w-full h-full border-b-2 border-orange-600 transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            <span className="relative">Read More</span>
          </button>
            </Link>
        </div>
    );
};

export default BlogCard;
