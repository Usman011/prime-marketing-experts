import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Link from 'next/link'

const HeaderItems = ({
	title,
	data,
	url,
}: {
	title: string
	data?: { title: string; url: string }[]
	url: string
}) => {
	const [isHovered, setIsHovered] = useState(false)
	console.log('url', url)
	return (
		<motion.div
			className="text-black text-nowrap hover:text-[#ff7e00] relative py-3 px-8"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex items-center">
				<motion.div
					className="bg-[#ff7e00] w-0 h-1 rounded-full"
					animate={isHovered ? { width: '20px' } : { width: 0 }}
				></motion.div>
				<motion.div animate={isHovered ? { x: 20 } : { x: 0 }}>
					<div
						className={`flex justify-center items-center gap-1 ${isHovered ? 'text-[#ff7e00]' : 'text-black'}`}
					>
						<Link key={title} href={url}>
							{title}
						</Link>
						{data && <Plus size={16} />}
					</div>
				</motion.div>
			</div>
			{data && (
				<div className=" -top-5 left-[250px] absolute z-[999]">
					<div className={`bg-white rounded-lg px-8 py-5 ${isHovered ? 'block' : 'hidden'}`}>
						{data.map(({ title, url }) => (
							<HeaderItems url={url} key={title} title={title} />
						))}
					</div>
				</div>
			)}
		</motion.div>
	)
}

export default HeaderItems
