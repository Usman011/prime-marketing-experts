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
		<nav className="bg-background bg-gray-50 w-full h-auto shadow-lg">
			<div className=" hidden xl:flex flex-col xl:flex-row items-center justify-between py-10 xl:h-16 container">
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
					<SheetContent side="right" className="h-screen overflow-y-auto bg-white">
						<nav className="flex flex-col h-full">
							{/* Main Navigation */}
							<div className="flex-1 overflow-y-auto py-6">
								{mobileMenu.map((item) => (
									<div key={item.title} className="mb-2">
										{item.submenu ? (
											<Collapsible
												open={openMenu === item.title}
												onOpenChange={() => toggleItem(item.title)}
											>
												<CollapsibleTrigger asChild>
													<Button
														variant="ghost"
														className={cn(
															'w-full justify-between px-4 py-3 text-base hover:no-underline font-medium rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all',
															openMenu === item.title ? 'text-orange-500' : 'text-gray-800',
														)}
													>
														<span>{item.title}</span>
														{openMenu === item.title ? (
															<ChevronUp className="w-4 h-4 text-orange-500" />
														) : (
															<ChevronDown className="w-4 h-4" />
														)}
													</Button>
												</CollapsibleTrigger>
												<CollapsibleContent className="mt-1 ml-4">
													{item.submenu.map((submenuItem) => (
														<Collapsible key={submenuItem.category}>
															<CollapsibleTrigger asChild>
																<Button
																	variant="ghost"
																	className={cn(
																		'w-full justify-between px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-orange-50 hover:text-orange-500',
																		openMenu === submenuItem.category
																			? 'text-orange-500'
																			: 'text-gray-700',
																	)}
																>
																	{submenuItem.category}
																	<ChevronDown
																		className={cn(
																			'w-4 h-4',
																			openMenu === submenuItem.category ? 'text-orange-500' : '',
																		)}
																	/>
																</Button>
															</CollapsibleTrigger>
															<CollapsibleContent className="ml-4">
																{submenuItem.items.map((subItem) => (
																	<Link
																		key={subItem.title}
																		href={subItem.url}
																		onClick={closeSheet}
																		className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
																	>
																		{subItem.title}
																	</Link>
																))}
															</CollapsibleContent>
														</Collapsible>
													))}
												</CollapsibleContent>
											</Collapsible>
										) : (
											<Link
												href={item.url}
												onClick={closeSheet}
												className="flex items-center px-4 py-3 text-base text-gray-800 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
											>
												{item.title}
											</Link>
										)}
									</div>
								))}
								<div className="border-t border-gray-100 px-4 py-6 space-y-6">
									<Link href="/free-strategy-session" onClick={closeSheet}>
										<button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition duration-300 ease-in-out flex items-center justify-center gap-2">
											<Calendar className="w-4 h-4" />
											Free Strategy Session
										</button>
									</Link>

									<div className="space-y-4">
										<Image src={FooterLogo} alt="logo" className="w-32 mx-auto" />

										<div className="space-y-3">
											<a
												href="#"
												className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
											>
												<MapPin className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
												<span className="text-sm">
													74 Northeastern Blvd #12a Ste 101 Nashua, NH 03062
												</span>
											</a>
											<a
												href="mailto:hello@primemarketingexperts.com"
												className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
											>
												<Mail className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
												<span className="text-sm">hello@primemarketingexperts.com</span>
											</a>
											<a
												href="tel:617-651-1457"
												className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
											>
												<Phone className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
												<span className="text-sm">617-651-1457</span>
											</a>
										</div>

										<div className="flex items-center justify-center gap-3">
											{[
												{ icon: Facebook, href: 'https://www.facebook.com/primemarketingexperts' },
												{ icon: Twitter, href: 'https://twitter.com/primeexperts' },
												{
													icon: Linkedin,
													href: 'https://www.linkedin.com/company/prime-marketing-experts',
												},
												{
													icon: Instagram,
													href: 'https://www.instagram.com/primemarketingexperts/',
												},
												{
													icon: PinterestIcon,
													href: 'https://www.pinterest.com/primemarketingexperts',
												},
											].map((social, index) => (
												<Link
													key={index}
													href={social.href}
													className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-orange-500 hover:text-white transition-all duration-300"
												>
													<social.icon className="w-5 h-5" />
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* Footer Section */}
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
