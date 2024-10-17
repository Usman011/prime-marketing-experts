'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, PhoneCallIcon } from 'lucide-react'
import { IoChevronUpOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


import NaveLogo from '../../public/logo.png'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface NavItem {
	name: string;
	href: string;
	subMenu?: NavItem[];
}

const navItems: NavItem[] = [
	{ name: 'Home', href: '/' },
	{ 
		name: 'Business', 
		href: '/business',
		subMenu: [
			{ name: 'Market Research', href: '/business/market-research' },
			{ name: 'Operational Assessment', href: '/business/operational-assessment' },
			{ name: 'Professional Business Plans', href: '/business/professional-business-plans' },
			{ name: 'Business Model Transformation', href: '/business/business-model-transformation' },
			{ name: 'Event Management', href: '/business/event-management' }
		]
	},
	{ 
		name: 'Marketing', 
		href: '/marketing',
		subMenu: [
			{name: 'SEO', href: '/marketing/seo',},
			{name: 'SEO Web Design', href: '/marketing/seo-web-design'},
			{name: 'Video SEO', href: '/marketing/video-seo'},
			{name: 'Local SEO', href: '/marketing/local-seo'},
			{name: 'Social Media Marketing', href: '/marketing/social-media-marketing' },
			{name: 'Content Marketing', href: '/marketing/content-marketing' },
			{name: 'Search Engine Advertising', href: '/marketing/search-engine-advertising'},
			{name: 'Google Grant Management', href: '/marketing/google-grant-management'},
			{name: 'Google Shopping Campaigns', href: '/marketing/google-shopping-campaigns'},
			{name: 'Email Marketing', href: '/marketing/email-marketing' },
			{name: 'Branding', href: '/marketing/branding' },
			{name: 'Text Message Marketing', href: '/marketing/text-message-marketing' },
			{name: 'Marketing Automation', href: '/marketing/marketing-automation' },
			{name: 'Marketing Plans', href: '/marketing/marketing-plans' }
		]
	},
	{ 
		name: 'Website & Mobile App Development', 
		href: '/website-mobile-app-development',
		subMenu: [
			{ name: 'Web Development', href: '/website-mobile-app-development/web-development' },
			{ name: 'Chatbot Development', href: '/website-mobile-app-development/chatbot-development' },
			{ name: 'Mobile App Development', href: '/website-mobile-app-development/mobile-app-development'},
			{ name: 'Website Accessibility', href: '/website-mobile-app-development/website-accessibility'},
		]
	},
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contact', href: '/contact' },
]

const renderSubMenu = (subMenu: NavItem[], isOpen: boolean) => {
	return (
		<ul className={`pl-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} bg-white w-full grid gap-4 max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 shadow-md rounded-md mt-2`}  >
  {subMenu.map((subItem) => (
    <li key={subItem.name} className="border-b  last:border-b-0">
      <Link href={subItem.href} className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground">
        {subItem.name}
      </Link>
      {subItem.subMenu && renderSubMenu(subItem.subMenu, isOpen)}
    </li>
  ))}
</ul>
	)
}

export const Header: React.FC = () => {
	const [openSubMenu, setOpenSubMenu] = React.useState<{ [key: string]: boolean }>({})
	const [isOpen, setIsOpen] = React.useState<boolean>(false)

	const handleMouseEnter = (name: string) => {
		setOpenSubMenu((prev) => {
			const newState = Object.keys(prev).reduce((acc, key) => {
				acc[key] = false
				return acc
			}, {} as { [key: string]: boolean })
			return {
				...newState,
				[name]: true,
			}
		})
	}

	const handleMouseLeave = () => {
		setOpenSubMenu({})
	}

	return (
		<nav className="bg-background bg-blue-950 border-blue-900 text-white border-b">
	<div className="flex flex-col md:flex-row justify-between items-center h-full">
  {/* Contact Info Section - Hidden on smaller screens */}
  <div className='flex flex-col md:flex-row h-12 md:flex '>
    <div className="flex items-center border-r border-blue-500 pr-4 h-12">
      <span className="mr-2 text-orange-600"><MdEmail/></span>
      <span> hello@primemarketingexperts.com </span>
    </div>
    <div className='flex pt-3 md:mt-0 ml-5'>
      <span className="mr-2 text-orange-600"><FaPhoneAlt/></span>
      <span>(617) 651-1457</span>
    </div>
  </div>

  {/* Search Input for mobile view */}
  <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0  md:hidden">
    <input 
      type="text" 
      placeholder="Search..." 
      className="border border-blue-500 rounded-md py-2 px-4 w-full" 
    />
  </div>

  <div className="flex flex-col md:flex-row items-center mt-4  md:mt-0">
    <div className="flex space-x-8 text-orange-600 mr-16">
      <Link href="https://www.facebook.com/primemarketingexperts"><FaFacebookF/></Link>
      <Link href="https://twitter.com/primeexperts"><CiTwitter/></Link> 
      <Link href="https://www.linkedin.com/company/prime-marketing-experts"><FaLinkedinIn/></Link>
      <Link href="https://www.instagram.com/primemarketingexperts/"><FaInstagram/></Link>
      <Link href="https://www.pinterest.com/primemarketingexperts"><FaPinterestP/></Link>
    </div>
    <div className="flex items-center border-l border-blue-500  pr-4 h-12 mt-4 md:mt-0">
      <p className="text-orange-600 mx-4">
        <Link href="https://primemarketingexperts.com/free-strategy-session/?_gl=1*1yqb3iw*_ga*OTQ0MjMzNjEwLjE3MjgyOTU3MDg.*_ga_REBTVSBTD7*MTcyODk3NjU1Ni4zMS4xLjE3Mjg5NzY2NjguMC4wLjA.*_ga_7PKP8KX54L*MTcyODk3NjU1Ni4zMS4xLjE3Mjg5NzY2NjguMC4wLjA.">
          Free Strategy Session
        </Link>
      </p>
    </div>
  </div>
</div>
<div className="flex flex-col md:flex-row border-blue-500 justify-between md:gap-96 border-b"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex items-center justify-center">
						<Link href="/" className="text-2xl font-bold text-primary">
							<Image src={NaveLogo} alt='logo' />
						</Link>
					</div>
					<div className="md:hidden lg:block">
 <div className="ml-10 flex items-baseline space-x-4  hidden md:flex">
    {navItems.map((item) => (
        <div key={item.name} className="relative group " style={{ position: 'sticky', top: '0', zIndex: 50 }} onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
			<Link href={item.href}>
            <button
                className="text-foreground text-white hover:bg-accent flex items-center gap-4 hover:text-accent-foreground px-3  py-2 rounded-md text-sm font-medium"
            >
                {item.name} {item.subMenu && (openSubMenu[item.name] ? < IoChevronUpOutline/> : < IoChevronDownOutline/>)}
            </button>
			</Link>
            {item.subMenu && openSubMenu[item.name] && (
                <div
                    className="absolute left-0 w-96 flex  text-white shadow-lg rounded-md mt-2"
                    style={{ zIndex: 50 }}
                >
                    {renderSubMenu(item.subMenu, openSubMenu[item.name])}
                </div>
            )}
        </div>
    ))}
</div>
					</div>
					<div className="lg:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="outline" className='ml-4 bg-blue-900 ' size="icon">
									<Menu className="h-6 text-black   w-6" />
									<span className="sr-only">Open menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right">
    <div className="mt-6 flow-root">
        <div className="space-y-2 py-6 text-start">
            {navItems.map((item) => (
                <div key={item.name}>
                    <button
                        onClick={() => handleMouseEnter(item.name)}
                        className="flex justify-center items-center px-3  py-2  rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground mx-auto"
                    >
                        {item.name} {item.subMenu && (openSubMenu[item.name] ? < IoChevronUpOutline/> : < IoChevronDownOutline/>)}
                    </button>
                    {item.subMenu && renderSubMenu(item.subMenu, openSubMenu[item.name])}
                </div>
            ))}
        </div>
    </div>
</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	)
}