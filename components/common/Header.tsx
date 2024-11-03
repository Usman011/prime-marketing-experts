'use client'

import * as React from "react"
import Link from "next/link" // Importing a specific icon from react-icons
import NaveLogo from '../../public/logo.png'

import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import { cn } from "@/lib/utils"

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

const components: { title: string; href: string; }[] = [
  {
    title: "Branding",
    href: "/marketing/branding",
    
  },
  {
    title: "Social Media Marketing",
    href: "/marketing/social-media-marketing",
   
  },
  {
    title: "Search Engine Advertising",
    href: "/marketing/search-engine-advertising",
    
  },
  {
    title: "Google Grant Management",
    href: "/marketing/google-grant-management",

  },
  {
    title: "Google Shopping Campaigns",
    href: "/marketing/google-shopping-campaigns",
      },
  {
    title: "SEO",
    href: "/marketing/seo",
   
  },
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
  return (
	<nav className="bg-background bg-blue-950 w-full h-auto  border-blue-900  border-b">

<div className="flex flex-col md:flex-row text-white  justify-between items-center h-full">
<div className='flex flex-col lg:flex md:flex-row h-12  md:hidden '>
    <div className="flex items-center border-r border-blue-500 pr-4 h-12">
      <span className="mr-2 text-orange-600"><MdEmail/></span>
      <span> hello@primemarketingexperts.com </span>
    </div>
    <div className='flex pt-3 md:mt-0 ml-5'>
      <span className="mr-2 text-orange-600"><FaPhoneAlt/></span>
      <span>(617) 651-1457</span>
    </div>
  </div>

 

  <div className="flex flex-col lg:flex md:flex-row items-center mt-4  md:hidden md:mt-0">
    <div className="flex space-x-8 text-orange-600 mr-16">
      <Link href="https://www.facebook.com/primemarketingexperts"><FaFacebookF/></Link>
      <Link href="https://twitter.com/primeexperts"><CiTwitter/></Link> 
      <Link href="https://www.linkedin.com/company/prime-marketing-experts"><FaLinkedinIn/></Link>
      <Link href="https://www.instagram.com/primemarketingexperts/"><FaInstagram/></Link>
      <Link href="https://www.pinterest.com/primemarketingexperts"><FaPinterestP/></Link>
    </div>
    <div className="flex items-center border-l border-blue-500  pr-4 h-12 mt-4 md:mt-0">
      <p className="text-orange-600 mx-4">
        <Link href="/free-strategy-session">
          Free Strategy Session
        </Link>
      </p>
    </div>
  </div>
  </div>

<div className="flex flex-col md:flex-row border-blue-500 justify-between md:gap-96 border-b"></div>


		<div className="flex items-center justify-between h-20">

		<div className="flex items-center "> 
		<Link href="/" className="text-2xl font-bold text-primary">
		<Image src={NaveLogo} alt='logo'  />
		</Link>
		</div>
<div className=" ">

    <NavigationMenu className="mr-40" >
      <NavigationMenuList className="gap-6">


	  <NavigationMenuItem >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="bg-blue-950 text-white">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


		<NavigationMenuItem>
          <NavigationMenuTrigger className="bg-blue-950 text-white">Business</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

              <ListItem href="/business/market-research" title="Market Research"></ListItem>
              <ListItem href="/business/operational-assessment" title="Operational Assessment"></ListItem>
              <ListItem href="/business/professional-business-plans" title="Professional Business Plans"></ListItem>
              <ListItem href="/business/business-model-transformation" title="Business Model Transformation"></ListItem>
              <ListItem href="/business/event-management" title="Event Management"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


	

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-blue-950 text-white">Marketing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


		<NavigationMenuItem>
          <NavigationMenuTrigger className="bg-blue-950 text-white">Technology</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              
              <ListItem href="/Technology/web-development" title="Web Development"></ListItem>
              <ListItem href="/Technology/chatbot-development" title="Chatbot Development"></ListItem>
              <ListItem href="/Technology/mobile-app-development" title="Mobile App Development"> </ListItem>
              <ListItem href="/Technology/website-accessibility" title="Website Accessibility"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className="bg-blue-950 text-white">
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

		

      </NavigationMenuList>
	  <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="bg-blue-950 text-white">
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
    </NavigationMenu>
    </div>

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
