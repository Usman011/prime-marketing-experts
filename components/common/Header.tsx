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
  return (
	<nav className="bg-background bg-gray-100 w-full h-auto  shadow-lg">


		<div className="flex items-center justify-around h-16">

    <div className="flex items-center">
  <Link href="/" className="text-2xl font-bold text-primary">
    <Image src={NaveLogo} alt="logo" width={200} height={160} />
  </Link>
</div>

<div>

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
          Home
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
        Business
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <ListItem href="/business/market-research" title="Market Research" />
          <ListItem href="/business/operational-assessment" title="Operational Assessment" />
          <ListItem href="/business/professional-business-plans" title="Professional Business Plans" />
          <ListItem href="/business/business-model-transformation" title="Business Model Transformation" />
          <ListItem href="/business/event-management" title="Event Management" />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
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
      <NavigationMenuTrigger className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
        Technology
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <ListItem href="/Technology/web-development" title="Web Development" />
          <ListItem href="/Technology/chatbot-development" title="Chatbot Development" />
          <ListItem href="/Technology/mobile-app-development" title="Mobile App Development" />
          <ListItem href="/Technology/website-accessibility" title="Website Accessibility" />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <Link href="/blog" legacyBehavior passHref>
        <NavigationMenuLink className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
          Blog
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    <div className="pl-4">
      <NavigationMenuItem>
        <Link href="/contact" legacyBehavior passHref>
          <NavigationMenuLink className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
            Contact
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </div>
  </NavigationMenuList>
</NavigationMenu>
    </div>

    <Link href="/free-strategy-session">
  <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-3xl hover:bg-orange-600 hover:shadow-lg transition duration-300 ease-in-out">
    Free Strategy Session
  </button>
</Link>

	</div>


 <div className="md:hidden">
  <Sheet>
  <SheetTrigger><Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>

      <NavigationMenu>
  <NavigationMenuList  className="flex flex-col md:flex-wrap">
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
          Home
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-black  font-sans text-lg font-semibold hover:text-orange-500">
        Business
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6   md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <ListItem href="/business/market-research" title="Market Research" />
          <ListItem href="/business/operational-assessment" title="Operational Assessment" />
          <ListItem href="/business/professional-business-plans" title="Professional Business Plans" />
          <ListItem href="/business/business-model-transformation" title="Business Model Transformation" />
          <ListItem href="/business/event-management" title="Event Management" />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
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
      <NavigationMenuTrigger className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
        Technology
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <ListItem href="/Technology/web-development" title="Web Development" />
          <ListItem href="/Technology/chatbot-development" title="Chatbot Development" />
          <ListItem href="/Technology/mobile-app-development" title="Mobile App Development" />
          <ListItem href="/Technology/website-accessibility" title="Website Accessibility" />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <Link href="/blog" legacyBehavior passHref>
        <NavigationMenuLink className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
          Blog
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    <div className="pl-4">
      <NavigationMenuItem>
        <Link href="/contact" legacyBehavior passHref>
          <NavigationMenuLink className="bg-transparent text-black font-sans text-lg font-semibold hover:text-orange-500">
            Contact
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </div>
  </NavigationMenuList>
</NavigationMenu>

      </SheetDescription>
    </SheetHeader>
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
