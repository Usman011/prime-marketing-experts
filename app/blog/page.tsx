import BlogList from '@/components/BlogList'
import Link from 'next/link'
import React from 'react'

const Page = () => {
	return (
		<div>
			<section className="">
				<div className="  py-10 bg-gray-100 ">
					<div className="container h-96 flex items-center justify-center">
						<div>
							<div className=" text-3xl md:text-5xl font-bold ">Our Blogs</div>
							<div className="flex gap-6 justify-center mt-4">
								<Link href="/">
									<p className="text-gray-500 hover:text-gray-800">Home</p>
								</Link>
								<ul className="list-disc">
									<li>Blog</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<BlogList showAll />
			</section>
		</div>
	)
}

export default Page
