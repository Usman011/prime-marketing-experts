'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Menu, ChevronUp, ChevronDown, Calendar } from 'lucide-react'
import NaveLogo from '../../public/images/Untitled design.png'
import FooterLogo from '../../public/logo.png'
import {
	MapPin,
	Mail,
	Phone,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	PinIcon as PinterestIcon,
} from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '../ui/button'
import { mobileMenu } from '@/constants'

// Import icons for submenu items
import {
	Plane,
	Car,
	Utensils,
	ShoppingBag,
	Sparkles,
	Dumbbell,
	HardHat,
	Home,
	Stethoscope,
	Search,
	ClipboardCheck,
	FileText,
	RefreshCw,
	CalendarDays,
	BarChart,
	Globe,
	MessageSquare,
	Smartphone,
	Eye,
} from 'lucide-react'

interface Component {
	title: string
	href: string
	icon: React.ReactNode
}

const components: Component[] = [
	{
		title: 'Branding',
		href: '/marketing/branding',
		icon: <BarChart className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Social Media Marketing',
		href: '/marketing/social-media-marketing',
		icon: <Globe className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Google Grant Management',
		href: '/marketing/google-grant-management',
		icon: <Search className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Google Shopping Campaigns',
		href: '/marketing/google-shopping-campaigns',
		icon: <ShoppingBag className="w-4 h-4 mr-2" />,
	},
	{
		title: 'SEO Web Design',
		href: '/marketing/seo-web-design',
		icon: <Globe className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Video SEO',
		href: '/marketing/video-seo',
		icon: <Eye className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Local SEO',
		href: '/marketing/local-seo',
		icon: <Search className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Content Marketing',
		href: '/marketing/content-marketing',
		icon: <FileText className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Email Marketing',
		href: '/marketing/email-marketing',
		icon: <MessageSquare className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Text Message Marketing',
		href: '/marketing/text-message-marketing',
		icon: <Smartphone className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Marketing Automation',
		href: '/marketing/marketing-automation',
		icon: <RefreshCw className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Marketing Plans',
		href: '/marketing/marketing-plans',
		icon: <ClipboardCheck className="w-4 h-4 mr-2" />,
	},
	{
		title: 'Inbound Marketing',
		href: '/marketing/inbound-marketing-services',
		icon: <BarChart className="w-4 h-4 mr-2" />,
	},
	{
		title: 'E-Commerce Services',
		href: '/marketing/e-commerce-digital-marketing-services',
		icon: <ShoppingBag className="w-4 h-4 mr-2" />,
	},
]

export function Header() {
	const [isSheetOpen, setIsSheetOpen] = React.useState(false)
	const closeSheet = () => setIsSheetOpen(false)

	const [openMenu, setOpenMenu] = React.useState<string | null>(null)

	const toggleItem = (title: string) => {
		setOpenMenu((prev) => (prev === title ? null : title))
	}

	return (
		<nav className="bg-background bg-gray-100 w-full h-auto shadow-lg">
			<div className=" hidden xl:flex flex-col xl:flex-row items-center justify-between px-4 py-2 xl:py-0 xl:h-16 max-w-7xl mx-auto">
				<div className="flex items-center mb-4 md:mb-0">
					<Link href="/" className="text-2xl font-bold text-primary">
						<Image src={NaveLogo} alt="logo" width={200} height={90} className="w-auto h-auto" />
					</Link>
				</div>

				<div className="w-full md:w-auto mb-4 md:mb-0 ">
					<NavigationMenu className="w-full justify-center">
						<NavigationMenuList className="flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											navigationMenuTriggerStyle(),
											'bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500 hover:bg-orange-50 transition-colors',
										)}
									>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500 hover:bg-orange-50 transition-colors">
									Who We Serve
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
										<ListItem
											href="/industry/tourism"
											title="Tourism"
											icon={<Plane className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/industry/automotive"
											title="Automotive"
											icon={<Car className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/industry/restaurant"
											title="Restaurants"
											icon={<Utensils className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/industry/retail"
											title="Retail"
											icon={<ShoppingBag className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/industry/cleaning-companies"
											title="Cleaning Companies"
											icon={<Sparkles className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/industry/gyms"
											title="Gyms"
											icon={<Dumbbell className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/industry/construction"
											title="Construction"
											icon={<HardHat className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/industry/real-estate"
											title="Real Estate"
											icon={<Home className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/industry/healthcare"
											title="Healthcare"
											icon={<Stethoscope className="w-4 h-4 mr-2" />}
										/>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500 hover:bg-orange-50 transition-colors">
									Business
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<ListItem
											href="/business/market-research"
											title="Market Research"
											icon={<Search className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/business/operational-assessment"
											title="Operational Assessment"
											icon={<ClipboardCheck className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/business/professional-business-plans"
											title="Professional Business Plans"
											icon={<FileText className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/business/business-model-transformation"
											title="Business Model Transformation"
											icon={<RefreshCw className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/business/event-management"
											title="Event Management"
											icon={<CalendarDays className="w-4 h-4 mr-2" />}
										/>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500 hover:bg-orange-50 transition-colors">
									Marketing
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
												icon={component.icon}
											/>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500 hover:bg-orange-50 transition-colors">
									Technology
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<ListItem
											href="/Technology/web-development"
											title="Web Development"
											icon={<Globe className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/Technology/chatbot-development"
											title="Chatbot Development"
											icon={<MessageSquare className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/Technology/mobile-app-development"
											title="Mobile App Development"
											icon={<Smartphone className="w-4 h-4 mr-2" />}
										/>
										<ListItem
											href="/Technology/website-accessibility"
											title="Website Accessibility"
											icon={<Eye className="w-4 h-4 mr-2" />}
										/>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href="/blog" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											navigationMenuTriggerStyle(),
											'bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500 hover:bg-orange-50 transition-colors',
										)}
									>
										Blog
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href="/contact" legacyBehavior passHref>
									<NavigationMenuLink
										className={cn(
											navigationMenuTriggerStyle(),
											'bg-transparent text-black font-sans text-[16px] font-semibold hover:text-orange-500 hover:bg-orange-50 transition-colors',
										)}
									>
										Contact
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className="w-full md:w-auto">
					<Link href="/free-strategy-session" className="w-full md:w-auto inline-block">
						<button className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 px-6 rounded-full hover:from-orange-600 hover:to-orange-700 hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center">
							<Calendar className="w-4 h-4 mr-2" />
							Free Strategy Session
						</button>
					</Link>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className="flex justify-between items-center xl:hidden container py-2">
				<div>
					<Link href="/" className="text-2xl font-bold text-primary">
						<Image src={NaveLogo} alt="logo" width={180} height={80} />
					</Link>
				</div>
				<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger asChild>
						<Button variant="ghost" className="xl:hidden p-2">
							<Menu className="h-6 w-6" color="#000" />
							<span className="sr-only">Open menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="w-[300px] sm:w-[400px] h-screen overflow-y-auto bg-white"
					>
						<nav className="flex flex-col space-y-4 mt-6 pb-20 px-4">
							{mobileMenu.map((item) => (
								<div key={item.title} className="font-normal text-gray-800">
									{item.children ? (
										<Collapsible
											open={openMenu === item.title}
											onOpenChange={() => toggleItem(item.title)}
										>
											<CollapsibleTrigger asChild>
												<Button
													variant="ghost"
													className="w-full justify-between px-2 py-2 text-base hover:no-underline outline-none font-medium text-gray-800 gap-2 transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-gray-100"
												>
													<span className="flex items-center">
														{item.icon}
														<span className="ml-2">{item.title}</span>
													</span>
													{openMenu === item.title ? (
														<ChevronUp className="w-4 h-4" />
													) : (
														<ChevronDown className="w-4 h-4" />
													)}
												</Button>
											</CollapsibleTrigger>
											<CollapsibleContent className="mt-2 space-y-2 ml-6">
												{item.children.map((child) => (
													<Link
														key={child.title}
														href={child.url}
														onClick={closeSheet}
														className="block py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
													>
														{child.title}
													</Link>
												))}
											</CollapsibleContent>
										</Collapsible>
									) : (
										<Link
											href={item.url}
											onClick={closeSheet}
											className="flex items-center text-base text-gray-800 hover:text-gray-900 transition-colors py-2 px-2 hover:bg-gray-100 rounded-md"
										>
											{item.icon}
											<span className="ml-2">{item.title}</span>
										</Link>
									)}
								</div>
							))}
							<Link href="/free-strategy-session" onClick={closeSheet} className="mt-6 block">
								<button className="bg-orange-500 w-full text-white font-semibold py-3 px-4 rounded-md hover:bg-orange-600 hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center">
									Free Strategy Session
								</button>
							</Link>
							<div className="flex flex-col gap-6 mt-8 px-2 border-t pt-6">
								<Image src={FooterLogo} alt="logo" className="w-32 mx-auto" />
								<div className="space-y-2">
									<p className="text-sm text-gray-600 flex items-center">
										<MapPin className="w-4 h-4 mr-2 text-orange-500" />
										74 Northeastern Blvd #12a Ste 101 Nashua, NH 03062
									</p>
									<p className="text-sm text-gray-600 flex items-center">
										<Mail className="w-4 h-4 mr-2 text-orange-500" />
										hello@primemarketingexperts.com
									</p>
									<p className="text-sm text-gray-600 flex items-center">
										<Phone className="w-4 h-4 mr-2 text-orange-500" />
										617-651-1457
									</p>
								</div>
								<ul className="flex items-center justify-center gap-4">
									<li className="rounded-full p-2 bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
										<Link href="https://www.facebook.com/primemarketingexperts">
											<Facebook className="w-5 h-5" />
										</Link>
									</li>
									<li className="rounded-full p-2 bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
										<Link href="https://twitter.com/primeexperts">
											<Twitter className="w-5 h-5" />
										</Link>
									</li>
									<li className="rounded-full p-2 bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
										<Link href="https://www.linkedin.com/company/prime-marketing-experts">
											<Linkedin className="w-5 h-5" />
										</Link>
									</li>
									<li className="rounded-full p-2 bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
										<Link href="https://www.instagram.com/primemarketingexperts/">
											<Instagram className="w-5 h-5" />
										</Link>
									</li>
									<li className="rounded-full p-2 bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
										<Link href="https://www.pinterest.com/primemarketingexperts">
											<PinterestIcon className="w-5 h-5" />
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
	icon?: React.ReactNode
	title: string
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
	({ className, title, children, icon, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'flex items-center select-none rounded-md p-3 leading-snug no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-100 focus:text-orange-600',
							className,
						)}
						{...props}
					>
						{icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
						<div>
							<div className="text-sm font-medium mb-1">{title}</div>
							{children && <p className="text-xs text-muted-foreground">{children}</p>}
						</div>
					</a>
				</NavigationMenuLink>
			</li>
		)
	},
)
ListItem.displayName = 'ListItem'
