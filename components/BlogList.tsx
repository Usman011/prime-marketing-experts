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
        <div>
            <div className="flex justify-center gap-6 my-10">
                <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-orange-600 text-white py-1 px-4 rounded-sm':""}>All</button>
                <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-orange-600 text-white py-1 px-4 rounded-sm':""}>Technology</button>
                <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-orange-600 text-white py-1 px-4 rounded-sm':""}>Startup</button>
                <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-orange-600 text-white py-1 px-4 rounded-sm':""}>LifeStyle</button>
            </div>

            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 x">
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
        </div>
    );
};

export default BlogList;
