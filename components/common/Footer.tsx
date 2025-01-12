import Link from 'next/link'
import FooterLogo from '../../public/logo.png'
import { FaFacebookF } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FaPinterestP } from 'react-icons/fa6'
import Image from 'next/image'

const Service = [
	{ name: 'Marketing Automation', href: '/marketing/marketing-automation' },
	{ name: 'Search Engine Optimization – SEO', href: '/marketing/local-seo' },
	{ name: 'Search Engine Advertising', href: '/marketing/google-shopping-campaigns' },
	{ name: 'Inbound Marketing Services', href: '/marketing/inbound-marketing-services' },
	{ name: 'Marketing Plan Services', href: '/marketing/marketing-plans' },
	{ name: 'Social Media Marketing', href: '/marketing/social-media-marketing' },
	{ name: 'Content Marketing Services Old', href: '/marketing/content-marketing' },
	{ name: 'Email Marketing Services', href: '/marketing/email-marketing' },
	{ name: 'Event Management Services', href: '/business/event-management' },
	{ name: 'Text Message Marketing', href: '/marketing/text-message-marketing' },
	{ name: 'Chatbot Development Services', href: '/Technology/chatbot-development' },
]

export const Footer = () => {
	return (
		<footer className="flex flex-col text-white bg-blue-950">
			<div className="flex flex-col lg:flex-row container  w-full gap-6 lg:gap-40 pt-10 px-4 lg:px-10">
				<div className="flex w-full lg:w-80 flex-col gap-4 lg:gap-10">
					<Image src={FooterLogo} alt="logo" className="w-40 md:w-32 lg:w-40" />
					<p className="text-xs md:text-sm lg:text-base">
						Prime Marketing Experts is a full-service marketing and website development agency that
						offers customized services that help you more effectively attract, convert, and retain
						customers. We scale our services to help independent consultants, small businesses, or
						augment an existing enterprise marketing team.
					</p>
				</div>

				<div className="flex flex-col gap-4 lg:gap-6">
					<h1 className="mt-4 font-bold text-lg lg:text-2xl">Services</h1>
					<ul className="mt-2 lg:mt-6 text-xs md:text-sm lg:text-base list-disc list-inside">
						{Service.map((service, index) => (
							<Link
								key={index}
								href={service.href}
								className="block hover:underline underline-offset-1 hover:text-blue-500"
							>
								<div className="mb-2">{service.name}</div>
							</Link>
						))}
					</ul>
				</div>

				<div className="flex flex-col w-full lg:w-60 gap-4 lg:gap-6">
					<h1 className="pt-4 font-bold text-lg lg:text-2xl">Contact</h1>
					<p className="text-xs md:text-sm lg:text-lg">
						<span className="font-bold">Address:</span> 74 Northeastern Blvd #12a Ste 101 Nashua, NH
						03062
					</p>
					<p className="text-xs md:text-sm lg:text-lg">
						<span className="font-bold">Email:</span> hello@primemarketingexperts.com
					</p>
					<p className="text-xs md:text-sm lg:text-lg">
						<span className="font-bold">Phone:</span> 617-651-1457
					</p>
					<ul className="flex items-center justify-start gap-3 lg:gap-5">
						<li className="w-8 md:w-10 rounded-full p-2 border hover:bg-blue-600 hover:text-white bg-white text-blue-950">
							<Link href="https://www.facebook.com/primemarketingexperts">
								<FaFacebookF />
							</Link>
						</li>
						<li className="w-8 md:w-10 rounded-full p-2 border hover:bg-cyan-400 hover:text-white bg-white text-blue-950">
							<Link href="https://twitter.com/primeexperts">
								<CiTwitter />
							</Link>
						</li>
						<li className="w-8 md:w-10 rounded-full p-2 border hover:bg-cyan-400 hover:text-white bg-white text-blue-950">
							<Link href="https://www.linkedin.com/company/prime-marketing-experts">
								<FaLinkedinIn />
							</Link>
						</li>
						<li className="w-8 md:w-10 rounded-full p-2 border hover:bg-red-500 hover:text-white bg-white text-blue-950">
							<Link href="https://www.instagram.com/primemarketingexperts/">
								<FaInstagram />
							</Link>
						</li>
						<li className="w-8 md:w-10 rounded-full p-2 border hover:bg-red-500 hover:text-white bg-white text-blue-950">
							<Link href="https://www.pinterest.com/primemarketingexperts">
								<FaPinterestP />
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row h-auto items-center justify-between mt-10 gap-4 lg:gap-40 border-t border-blue-500 py-4">
				<p className="text-xs md:text-sm text-center lg:text-left">
					Terms of use | Privacy Environmental Policy
				</p>
				<p className="text-xs md:text-sm text-center lg:text-right">
					Copyright © 2024 Prime Marketing Experts. All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}
