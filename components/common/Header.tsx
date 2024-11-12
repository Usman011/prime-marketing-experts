'use client'

import * as React from 'react'
import Link from 'next/link' // Importing a specific icon from react-icons
import NaveLogo from '../../public/logo.png'

import { cn } from '@/lib/utils'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import HeaderMenu from './HeaderMenu'
import { businessData, marketingData, mobileMenu } from '@/constants'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

export function Header() {
	const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({})

	const toggleItem = (title: string) => {
		setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }))
	}
	return (
		<nav className=" bg-[#040c5e] w-full h-auto py-3   shadow-lg">
			<div className=" items-center justify-between container h-16 hidden md:flex">
				<div className="flex items-center">
					<Link href="/" className="text-2xl font-bold text-primary">
						<Image src={NaveLogo} alt="logo" width={200} height={160} />
					</Link>
				</div>

				<div className=" flex gap-5">
					<HeaderMenu title="Home" link="/" />
					<HeaderMenu title="Business" link="/" data={businessData} />
					<HeaderMenu title="Marketing" link="/" data={marketingData} />
				</div>

				<Link href="/free-strategy-session">
					<button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-3xl hover:bg-orange-600 hover:shadow-lg transition duration-300 ease-in-out">
						Free Strategy Session
					</button>
				</Link>
			</div>
			<div className="flex justify-between items-center md:hidden container">
				<div>
					<Link href="/" className="text-2xl font-bold text-primary">
						<Image src={NaveLogo} alt="logo" width={200} height={160} />
					</Link>
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Menu className="h-10 w-10" color="#fff" />
					</SheetTrigger>
					<SheetContent
						side="left"
						className="w-[300px] sm:w-[400px] h-screen overflow-scroll bg-[#040c5e]"
					>
						<nav className="flex flex-col space-y-4 mt-10 pb-20">
							{mobileMenu.map((item) => (
								<div key={item.title} className="  text-white">
									{item.children ? (
										<Collapsible
											open={openItems[item.title]}
											onOpenChange={() => toggleItem(item.title)}
										>
											<CollapsibleTrigger asChild>
												<Button
													variant="link"
													className="w-full justify-between text-base hover:no-underline outline-none text-white gap-3"
												>
													{item.title}
													<span className="text-base">{openItems[item.title] ? '▲' : '▼'}</span>
												</Button>
											</CollapsibleTrigger>
											<CollapsibleContent className="mt-2 space-y-4 pb-3">
												{item.children.map((child) => (
													<Link
														key={child.title}
														href={child.url}
														className="block pl-4 text-sm text-gray-200"
													>
														{child.title}
													</Link>
												))}
											</CollapsibleContent>
										</Collapsible>
									) : (
										<Link href={item.url} className="text-base text-gray-200">
											{item.title}
										</Link>
									)}
								</div>
							))}
							<Link href="/free-strategy-session">
								<button className="bg-orange-500 mb-10 mt-5 text-white font-semibold py-2 px-4 w-full rounded-md hover:bg-orange-600 hover:shadow-lg transition duration-300 ease-in-out">
									Free Strategy Session
								</button>
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}
