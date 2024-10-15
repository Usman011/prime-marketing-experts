import Link from 'next/link'
import FooterLogo from '../../public/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className="flex flex-col text-white bg-blue-950 border-t">
			<div className='flex flex-col md:flex-row w-full gap-10 md:gap-40 pt-10'>

				<div className='flex w-full md:w-80 pl-4 md:pl-14 flex-col gap-4 md:gap-10'>
					<Image src={FooterLogo} alt="logo"/>
					<p className='text-base'>Prime Marketing Experts is a full-service marketing and website development agency that offers customized services that help you more effectively attract, convert, and retain customers. We scale our services to help independent consultants, small businesses, or augment an existing enterprise marketing team.</p>
				</div>

				<div className='flex flex-col gap-4 md:gap-6'>
					<h1 className='mt-4 font-bold text-xl md:text-2xl'>Services</h1>
					<ul className='mt-4 md:mt-6 text-base list-disc list-inside'>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Marketing Automation</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Search Engine Optimization – SEO</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Search Engine Advertising</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Inbound Marketing Services</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Marketing Plan Services</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Social Media Marketing</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Content Marketing Services Old</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Email Marketing Services</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Event Management Services</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Text Message Marketing</li>
					</Link>
					<Link href="/" className='hover:underline underline-offset-1 hover:text-blue-500'>
						<li>Chatbot Development Services</li>
					</Link>
					
				
					</ul>
				</div>

				<div className='flex flex-col w-full md:w-60 gap-4 md:gap-6'>
					<h1 className='pt-4 font-bold text-xl md:text-2xl'>Contact</h1>
					<p className='text-lg'><span className='text-lg font-bold '>Address:</span>74 Northeastern Blvd #12a Ste 101
					Nashua, NH 03062</p>
					<p className='text-lg'><span className='font-bold'>Email:</span>hello@primemarketingexperts.com</p>
					<p className='text-lg'><span className='font-bold'>Phone:</span>617-651-1457</p>
					<ul className='flex items-center justify-center gap-3  md:gap-5'>
						<li className='w-10 md:w-20 rounded-full pt-2 pl-2 h-8 border hover:bg-blue-600 hover:text-white bg-white text-blue-950'><Link href="https://www.facebook.com/primemarketingexperts"><FaFacebookF/></Link> </li>
						<li className='w-10 md:w-20 rounded-full pt-2 pl-2 h-8 border hover:bg-cyan-400 hover:text-white bg-white text-blue-950'><Link href="https://twitter.com/primeexperts"><CiTwitter/></Link> </li>
						<li className='w-10 md:w-20 rounded-full pt-2 pl-2 h-8 hover:bg-cyan-400 hover:text-white border bg-white text-blue-950'><Link href="https://www.linkedin.com/company/prime-marketing-experts"><FaLinkedinIn/></Link> </li>
						<li className='w-10 md:w-20 rounded-full pt-2 pl-2 h-8 border hover:bg-red-500 hover:text-white bg-white text-blue-950'><Link href="https://www.instagram.com/primemarketingexperts/"><FaInstagram/></Link> </li>
						<li className='w-10 md:w-20 rounded-full pt-2 pl-2 h-8 border hover:bg-red-500 hover:text-white bg-white text-blue-950'><Link href="https://www.pinterest.com/primemarketingexperts"><FaPinterestP/></Link> </li>
					</ul>
				</div>

			</div>
			<div className="flex flex-col md:flex-row h-14 items-center border-blue-500 justify-between mt-10 gap-4 md:gap-96 border-t">
				<p className='pl-4 md:pl-8'>Terms of use | Privacy Environmental Policy</p>
				<p className='pl-4 md:pl-20'>Copyright © 2024 Prime Marketing Experts. All Rights Reserved.</p>
			</div>
		</footer>

	)
}
