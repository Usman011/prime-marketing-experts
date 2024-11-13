'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import HeaderItems from './HeaderItems'

interface HeaderMenuProps {
	data?: { title: string; url: string; children?: { title: string; url: string }[] }[]
	title: string
	link: string
}

const HeaderMenu = ({ data, title, link }: HeaderMenuProps) => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div
			className="relative "
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link href={link} className=" h-10">
				<div
					className={`flex justify-center items-center gap-1 py-5 text-nowrap ${isHovered ? 'text-[#ff7e00]' : 'text-white'}`}
				>
					{title} {data && <Plus size={16} />}
				</div>
			</Link>
			{data && (
				<motion.div
					initial={{
						y: 50,
						opacity: 0,
						position: 'absolute',
					}}
					animate={
						isHovered
							? {
									y: 0,
									opacity: 1,
									display: 'block',
								}
							: {
									y: 25,
									opacity: 0,
									display: 'none',
								}
					}
					className=" top-10 left-0 hidden absolute z-[999]"
				>
					<div className="pt-10 ">
						<div className="bg-white rounded-lg py-5">
							{data.map(({ title, url, children }) => (
								<HeaderItems key={title} title={title} data={children} url={url} />
							))}
						</div>
					</div>
				</motion.div>
			)}
		</div>
	)
}

export default HeaderMenu
