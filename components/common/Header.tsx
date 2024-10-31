'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const menuItems = [
	{ title: 'Home', href: '/' },
  {
    title: 'Business',
    items: [
      { 
        title: 'Analytics', 
        href: '#analytics',
        items: [
          { title: 'Dashboard', href: '#dashboard' },
          { title: 'Reports', href: '#reports' },
        ]
      },
      { title: 'Engagement', href: '#engagement' },
      { 
        title: 'Security', 
        href: '#security',
        items: [
          { title: 'Authentication', href: '#authentication' },
          { title: 'Encryption', href: '#encryption' },
        ]
      },
      { title: 'Integrations', href: '#integrations' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'Blog', href: '#blog' },
      { title: 'Case Studies', href: '#case-studies' },
      { title: 'Webinars', href: '#webinars' },
    ],
  },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Contact', href: '#contact' },
]


const DesktopSubmenu = ({ items }: { items: any }) => (
	<div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
	  <div className="py-1" role="menu" aria-orientation="vertical">
		{items.map((item: any) => (
		  <div key={item.title} className="relative group/nested">
			{item.items ? (
			  <>
				<button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
				  {item.title} 
				  <ChevronRight className="inline-block ml-2 h-4 w-4" />
				</button>
				<div className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 ease-in-out">
				  <div className="py-1">
					{item.items.map((subItem: any) => (
					  <Link
						key={subItem.title}
						href={subItem.href}
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						role="menuitem"
					  >
						{subItem.title}
					  </Link>
					))}
				  </div>
				</div>
			  </>
			) : (
			  <Link
				href={item.href}
				className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
				role="menuitem"
			  >
				{item.title}
			  </Link>
			)}
		  </div>
		))}
	  </div>
	</div>
  )
  
  // Declare items here
  const items: any = [
	// Add your items here
  ];
  
  const MobileSubmenu = ({ items }: { items: any }) => (
	<Accordion type="single" collapsible className="w-full">
	  {items.map((item: any, index: number) => (
		<AccordionItem value={`item-${index}`} key={item.title}>
		  {item.items ? (
			<>
			  <AccordionTrigger className="py-2 px-4">{item.title}</AccordionTrigger>
			  <AccordionContent>
				<div className="pl-4">
				  {item.items.map((subItem: any) => (
					<Button
					  key={subItem.title}
					  variant="ghost"
					  className="w-full justify-start my-1"
					  asChild
					>
					  <Link href={subItem.href}>{subItem.title}</Link>
					</Button>
				  ))}
				</div>
			  </AccordionContent>
			</>
		  ) : (
			<Button
			  variant="ghost"
			  className="w-full justify-start my-1"
			  asChild
			>
			  <Link href={item.href}>{item.title}</Link>
			</Button>
		  )}
		</AccordionItem>
	  ))}
	</Accordion>
  )
  
export default function Heade() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Logo</span>
            </div>
          </div>
          <div className="sm:ml-6  xl:flex sm:items-center">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.items ? (
                  <>
                    <Button variant="ghost" className="inline-flex items-center group">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Button>
                    <DesktopSubmenu items={item.items} />
                  </>
                ) : (
                  <Button variant="ghost" asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="mt-5">
                  {menuItems.map((item) => (
                    <React.Fragment key={item.title}>
                      {item.items ? (
                        <div className="py-2">
                          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">
                            {item.title}
                          </h3>
                          <MobileSubmenu items={item.items} />
                        </div>
                      ) : (
                        <Button
                          variant="ghost"
                          className="w-full justify-start my-1"
                          asChild
                        >
                          <Link href={item.href}>{item.title}</Link>
                        </Button>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}