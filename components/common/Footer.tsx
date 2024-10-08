import Link from 'next/link'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

const footerNavItems = [
	{ name: 'Privacy Policy', href: '/privacy' },
	{ name: 'Terms of Service', href: '/terms' },
	{ name: 'Contact Us', href: '/contact' },
]

const socialLinks = [
	{ name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
	{ name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
	{ name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
	{ name: 'GitHub', icon: Github, href: 'https://github.com' },
]

export const Footer = () => {
	return (
		<footer className="bg-background border-t">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="md:flex md:items-center md:justify-between">
					<div className="flex justify-center space-x-6 md:order-2">
						{socialLinks.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-muted-foreground hover:text-foreground"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon className="h-6 w-6" aria-hidden="true" />
							</Link>
						))}
					</div>
					<div className="mt-8 md:mt-0 md:order-1">
						<p className="text-center text-base text-muted-foreground">
							&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
						</p>
					</div>
				</div>
				<div className="mt-8 flex justify-center space-x-6">
					{footerNavItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}
