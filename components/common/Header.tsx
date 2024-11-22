'use client'

import * as React from "react"
import Link from "next/link" // Importing a specific icon from react-icons
import NaveLogo from '../../public/logo.png'

import { cn } from "@/lib/utils"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { MdEmail } from "react-icons/md"
import { FacebookIcon, Instagram, Linkedin, Menu, TwitterIcon } from "lucide-react";
import { mobileMenu } from "@/constants"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from "../ui/button"

const components: { title: string; href: string; }[] = [
  {
    title: "Branding",
    href: "/marketing/branding",
    
  },
  {
    title: "Social Media Marketing",
    href: "/marketing/social-media-marketing",
   
  },
  // {
  //   title: "Search Engine Advertising",
  //   href: "/marketing/search-engine-advertising",
    
  // },
  {
    title: "Google Grant Management",
    href: "/marketing/google-grant-management",

  },
  {
    title: "Google Shopping Campaigns",
    href: "/marketing/google-shopping-campaigns",
      },
  // {
  //   title: "SEO",
  //   href: "/marketing/seo",
   
  // },
  {
    title: "SEO Web Design",
    href: "/marketing/seo-web-design",
      },
  {
    title: "Video SEO",
    href: "/marketing/video-seo",
    },
  {
    title: "Local SEO",
    href: "/marketing/local-seo",
     },
  {
    title: "Content Marketing",
    href: "/marketing/content-marketing",
      },
  {
    title: "Email Marketing",
    href: "/marketing/email-marketing",
    },
  {
    title: "Text Message Marketing",
    href: "/marketing/text-message-marketing",
    
  },
  {
    title: "Marketing Automation",
    href: "/marketing/marketing-automation",
   
  },
  {
    title: "Marketing Plans",
    href: "/marketing/marketing-plans",
     },
  {
    title: "Inbound Marketing",
    href: "/marketing/inbound-marketing-services",
   
  },
  {
    title: "E-Commerce Services",
    href: "/marketing/e-commerce-digital-marketing-services",
     },
  
]

export function Header() {

  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({})

	const toggleItem = (title: string) => {
		setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }))
	}
  return (
	<nav className="bg-background bg-gray-100 w-full  h-auto  shadow-lg">


		<div className="items-center justify-evenly h-16 hidden  md:flex">

    <div className="flex items-center">
  <Link href="/" className="text-2xl font-bold text-primary">
    <Image src={NaveLogo} alt="logo" width={200} height={160} />
  </Link>
</div>

<div>

<NavigationMenu>
  <NavigationMenuList>
    
    <div className="space-x-5 pr-1 flex">

    <NavigationMenuItem>
      <Link href="/about" legacyBehavior passHref>
        <NavigationMenuLink className="bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500">
        About
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    </div>


    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-black  font-sans text-[16px] font-semibold hover:text-orange-500">
        Who We Serve
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
          <ListItem href="/industry/tourism" title="Tourism" />
          <ListItem href="/industry/automotive" title="Automotive" />
          <ListItem href="/industry/restaurant" title="Restaurants" />
          <ListItem href="/industry/retail" title="Retails" />
          <ListItem href="/industry/cleaning-companies" title="Cleaning Companies" />
          <ListItem href="/industry/gyms" title="Gyms" />
          <ListItem href="/industry/construction" title="Construction" />
          <ListItem href="/industry/real-estate" title="Real Estate" />
          <ListItem href="/industry/healthcare" title="Healthcare" />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  

    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-black  font-sans text-[16px] font-semibold hover:text-orange-500">
        Business
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3  p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <ListItem href="/business/market-research" title="Market Research" />
          <ListItem href="/business/operational-assessment" title="Operational Assessment" />
          <ListItem href="/business/professional-business-plans" title="Professional Business Plans" />
          <ListItem href="/business/business-model-transformation" title="Business Model Transformation" />
          <ListItem href="/business/event-management" title="Event Management" />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500">
        Marketing
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
          {components.map((component) => (
            <ListItem key={component.title} title={component.title} href={component.href} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent  text-black font-sans text-[16px] font-semibold hover:text-orange-500">
        Technology
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3  p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <ListItem href="/Technology/web-development" title="Web Development" />
          <ListItem href="/Technology/chatbot-development" title="Chatbot Development" />
          <ListItem href="/Technology/mobile-app-development" title="Mobile App Development" />
          <ListItem href="/Technology/website-accessibility" title="Website Accessibility" />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <Link href="/blog" legacyBehavior passHref>
        <NavigationMenuLink className="bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500">
          Blog
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    <div className="pl-4">
      <NavigationMenuItem>
        <Link href="/contact" legacyBehavior passHref>
          <NavigationMenuLink className="bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500">
            Contact
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </div>
  </NavigationMenuList>
</NavigationMenu>
    </div>

    <Link href="/free-strategy-session">
  <button className=" bg-gradient-main text-white font-semibold py-2 px-4 rounded-3xl hover:bg-orange-600 hover:shadow-lg transition duration-300 ease-in-out">
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
						<Menu className="h-10 w-10" color="#000" />
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
	
  )
})
ListItem.displayName = "ListItem"
