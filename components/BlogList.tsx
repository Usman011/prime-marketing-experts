"use client";

import React, { useState } from 'react';
import { blog_data } from '@/Assets/assets'; // Ensure blog_data is exported from assets
import BlogCard from './BlogCard';

interface BlogData {
    image: string;
    title: string;
    description: string;
    category: string;
    id:number
}

const BlogList: React.FC = () => {
    const [menu,setMenu]=useState("All")
    return (
        <section className='bg-gray-100 w-full '>
            <h2 className="text-4xl justify-center items-center text-center font-extrabold text-gray-800 pt-6">Read Our Latest Blogs
            </h2>
            <div className="flex md:justify-between justify-center items-center md:gap-20 gap-6 my-10">
                <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-orange-600 text-white py-1 px-4 rounded-sm':""}>All</button>
                <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-orange-600 text-white py-1 px-4 rounded-sm':""}>Technology</button>
                <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-orange-600 text-white py-1 px-4 rounded-sm':""}>Startup</button>
                <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-orange-600 text-white py-1 px-4 rounded-sm':""}>LifeStyle</button>
            </div>

            <div className="flex mx-10 flex-wrap p-4 justify-around gap-1 gap-y-10 mb-16 ">
                {blog_data.filter((item)=>menu==="All"?true:item.category===menu).map((item: BlogData, index: number) => (
                    <BlogCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        id={item.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default BlogList;
