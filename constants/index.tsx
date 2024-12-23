import { BiBookContent } from 'react-icons/bi'
import { BsGraphUp } from 'react-icons/bs'
import { FaLaptop, FaBullhorn, FaChartLine, FaCogs } from 'react-icons/fa'
import { GiAutomaticSas } from 'react-icons/gi'
import { MdBrandingWatermark, MdMarkEmailUnread, MdBarChart } from 'react-icons/md'
import { PiTrainBold } from 'react-icons/pi'
import {
	Users,
	Globe,
	BarChart3,
	Zap,
	MessageCircle,
	Search,
	RefreshCw,
	Database,
	Target,
} from 'lucide-react'

interface MenuItem {
	title: string
	url: string
	icon?: React.ReactNode
	children?: {
		title: string
		url: string
	}[]
}

export enum INPUT_TYPES {
	NUMBER = 'number',
	EMAIL = 'email',
	PASSWORD = 'password',
	TEXT = 'text',
	CHECKBOX = 'checkbox',
	RADIO = 'radio',
	DATE = 'date',
	FILE = 'file',
	SELECT = 'select',
}

export const businessData = [
	{
		title: 'Market Research',
		url: '/business/market-research',
	},
	{
		title: 'Operational Assessment',
		url: '/business/operational-assessment',
	},
	{
		title: 'Professional Business Plans',
		url: '/business/professional-business-plans',
	},
	{
		title: 'Business Model Transformation',
		url: '/business/business-model-transformation',
	},
	{
		title: 'Event Management',
		url: '/business/event-management',
	},
]

export const marketingData = [
	{
		title: 'Local SEO',
		url: '/marketing/local-seo',
	},
	{
		title: 'SEO Web Design',
		url: '/marketing/seo-web-design',
	},
	{
		title: 'Video SEO',
		url: '/marketing/video-seo',
	},
	{
		title: 'Social Media Marketing',
		url: '/marketing/social-media-marketing',
	},
	{
		title: 'Content Marketing',
		url: '/marketing/content-marketing',
	},
	{
		title: 'Google Shopping Campaigns',
		url: '/marketing/google-shopping-campaigns',
	},
	{
		title: 'Google Grant Management',
		url: '/marketing/google-grant-management',
	},
	{
		title: 'Email Marketing',
		url: '/marketing/email-marketing',
	},
	{
		title: 'Branding',
		url: '/marketing/branding',
	},
	{
		title: 'Text Message Marketing',
		url: '/marketing/text-message-marketing',
	},
	{
		title: 'Marketing Automation',
		url: '/marketing/marketing-automation',
	},
	{
		title: 'Marketing Plans',
		url: '/marketing/marketing-plans',
	},
	{
		title: 'Inbound Marketing',
		url: '/marketing/inbound-marketing-services',
	},
	{
		title: 'E-Commerce Services',
		url: '/marketing/e-commerce-digital-marketing-services',
	},
]

export const TechnologyData = [
	{
		title: 'Website Development',
		url: '/Technology/chatbot-development',
	},
	{
		title: 'Chatbot Development',
		url: '/Technology/chatbot-development',
	},
	{
		title: 'Mobile Application Development',
		url: '/Technology/mobile-app-development',
	},
	{
		title: 'Website Accessibility',
		url: '/Technology/website-accessibility',
	},
]

export const mobileMenu: MenuItem[] = [
	{
		title: 'Home',
		url: '/',
	},

	{
		title: 'About',
		url: '/about',
	},

	{
		title: 'Who We Serve',
		url: '/weserve',
		children: [
			{
				title: 'Tourism',
				url: '/industry/tourism',
			},
			{
				title: 'Automotive',
				url: '/industry/automotive',
			},
			{
				title: 'Restaurant',
				url: '/industry/restaurant',
			},
			{
				title: 'Retail',
				url: '/industry/retail',
			},
			{
				title: 'Cleaning Companies',
				url: '/industry/cleaning-companies',
			},
			{
				title: 'Gyms',
				url: '/industry/gyms',
			},
			{
				title: 'Construction',
				url: '/industry/construction',
			},
			{
				title: 'Real Estate',
				url: '/industry/real-estate',
			},
			{
				title: 'Healthcare',
				url: '/industry/healthcare',
			},
			{
				title: 'Event Management',
				url: '/business/event-management/',
			},
		],
	},

	{
		title: 'Business',
		url: 'undefined',
		children: [
			{
				title: 'Market Research',
				url: '/business/market-research/',
			},
			{
				title: 'Operational Assessment',
				url: '/business/operational-assessment/',
			},
			{
				title: 'Professional Business Plans',
				url: '/business/professional-business-plans/',
			},
			{
				title: 'Business Model Transformation',
				url: '/business/business-model-transformation/',
			},
			{
				title: 'Event Management',
				url: '/business/event-management/',
			},
		],
	},

	{
		title: 'Marketing',
		url: 'undefined',
		children: [
			{
				title: 'Social Media Marketing',
				url: '/marketing/social-media-marketing',
			},
			{
				title: 'Content Marketing',
				url: '/marketing/content-marketing/',
			},
			{
				title: 'Local SEO',
				url: '/marketing/local-seo/',
			},
			{
				title: 'SEO Web Design',
				url: '/marketing/seo-web-design/',
			},
			{
				title: 'Video SEO',
				url: '/marketing/video-seo/',
			},
			{
				title: 'Google Shopping Campaigns',
				url: '/marketing/google-shopping-campaigns/',
			},
			{
				title: 'Google Grant Management',
				url: '/marketing/google-grant-management/',
			},
			{
				title: 'Email Marketing',
				url: '/marketing/email-marketing/',
			},
			{
				title: 'Branding',
				url: '/marketing/branding/',
			},
			{
				title: 'Social Media Marketing',
				url: '/marketing/social-media-marketing/',
			},
			{
				title: 'Text Message Marketing',
				url: '/marketing/text-message-marketing/',
			},
			{
				title: 'Marketing Automation',
				url: '/marketing/marketing-automation/',
			},
			{
				title: 'Marketing Plans',
				url: '/marketing/marketing-plans/',
			},
			{
				title: 'Inbound Marketing',
				url: '/marketing/inbound-marketing-services/',
			},
			{
				title: 'E-Commerce Services',
				url: '/marketing/e-commerce-digital-marketing-services/',
			},
		],
	},

	{
		title: 'Technology',
		url: 'undefined',
		children: [
			{
				title: 'Website Development',
				url: '/Technology/chatbot-development',
			},
			{
				title: 'Chatbot Development',
				url: '/Technology/chatbot-development',
			},
			{
				title: 'Mobile Application Development',
				url: '/Technology/mobile-app-development',
			},
			{
				title: 'Website Accessibility',
				url: '/Technology/website-accessibility',
			},
		],
	},

	{
		title: 'Blog',
		url: '/blog',
	},

	{
		title: 'Contact',
		url: '/contact',
	},
]

export const servicesData = [
	{
		icon: <FaLaptop className="text-orange-600" size={60} />,
		title: 'Website Development',
		description:
			'Our full-service website development services fit the unique needs of each business and is planned to maximize your results of other marketing initiatives.',
		link: '/Technology/web-development',
	},
	{
		icon: <RefreshCw className="text-orange-600" size={60} />,
		title: 'Marketing Automation',
		description:
			'We increase your sales productivity by using an integrated technology platform with synergistic marketing initiatives to spark your sales growth.',
		link: '/marketing/marketing-automation',
	},
	{
		icon: <FaCogs className="text-orange-600" size={60} />,
		title: 'Google Shopping Campaign Services',
		description:
			'We deploy ROI-maximizing processes to strategically implement and manage your Search Engine Advertising Campaigns.',
		link: '/marketing/google-shopping-campaigns',
	},
	{
		icon: <FaChartLine className="text-orange-600" size={60} />,
		title: 'SEO Services',
		description:
			'We deploy an integrated, comprehensive strategy to help you raise your search engine rankings for your targeted keywords.',
		link: '/marketing/video-seo',
	},
	{
		icon: <FaBullhorn className="text-orange-600" size={60} />,
		title: 'Social Media Marketing',
		description:
			'We provide social media posting and sponsored ad management services. Our AI-assisted system ensures that we post the right content at the right time!',
		link: 'marketing/social-media-marketing',
	},
	{
		icon: <MdBarChart className="text-orange-600" size={60} />,
		title: 'Text Message Marketing',
		description:
			'Our full-service text message marketing solution that efficiently reaches your customers, as an average of 98% of them are read.',
		link: '/marketing/text-message-marketing',
	},
	{
		icon: <BiBookContent className="text-orange-600" size={60} />,
		title: 'Content Marketing',
		description:
			'We understand a comprehensive content marketing strategy is important for building brand authority, brand awareness, and lead generation.',
		link: '/marketing/content-marketing',
	},
	{
		icon: <MdBrandingWatermark className="text-orange-600" size={60} />,
		title: 'Branding',
		description:
			' Branding is an effective strategy designed by the enterprises to help their audience quickly identify and experience their brand.',
		link: '/marketing/branding',
	},
	{
		icon: <MdMarkEmailUnread className="text-orange-600" size={60} />,
		title: 'Email Marketing',
		description:
			'Email Marketing program or managing your ongoing campaigns, our team can tackle each aspect of your email efforts.',
		link: '/marketing/email-marketing/',
	},
	{
		icon: <BsGraphUp className="text-orange-600" size={60} />,
		title: 'Marketing Plans',
		description:
			'A business with no marketing plan fetches you nothing except a haphazard, start-stop journey with wastage of money, time, and other resources.',
		link: '/marketing/marketing-plans',
	},
	{
		icon: <PiTrainBold className="text-orange-600" size={60} />,
		title: 'Inbound Marketing',
		description:
			' While outbound marketing interrupts your audience with unwanted content, inbound marketing forms the connections with visitors and solves the problems.',
		link: '/marketing/inbound-marketing-services',
	},
]

export const ourSolutionsData = [
	{
		title: 'Generate More Sales-Qualified Leads',
		description:
			'Boost your revenue with our customized marketing tactics designed to generate high-quality sales leads and increase overall sales performance.',
		features: [
			{ icon: Users, text: 'Increase qualified leads', color: 'text-blue-500' },
			{ icon: Zap, text: 'Enhance sales team productivity', color: 'text-green-500' },
			{ icon: BarChart3, text: 'Grow online market revenue', color: 'text-red-500' },
		],
		category: 'Lead Generation',
	},
	{
		title: 'Attract More Website Visitors',
		description:
			'Transform your website into a lead-generating powerhouse with our tailored digital marketing strategies and cutting-edge web development services.',
		features: [
			{ icon: Target, text: 'Optimize your sales pipeline', color: 'text-yellow-500' },
			{ icon: Users, text: 'Connect with your ideal audience', color: 'text-teal-500' },
			{ icon: MessageCircle, text: 'Increase meaningful conversations', color: 'text-pink-500' },
		],
		category: 'Web Traffic',
	},
	{
		title: 'Streamline Marketing and Sales Data',
		description:
			'Harness the power of integrated marketing automation and CRM technology to align your sales and marketing efforts, maximizing ROI for each qualified lead.',
		features: [
			{ icon: RefreshCw, text: 'Synchronize sales and marketing data', color: 'text-orange-500' },
			{
				icon: Database,
				text: 'Leverage real-time data for lead prioritization',
				color: 'text-purple-500',
			},
			{ icon: Search, text: 'Enhance conversion rates', color: 'text-green-500' },
		],
		category: 'Data Integration',
	},
	{
		title: 'Boost Your Online Presence',
		description:
			"Elevate your website's visibility and attract more visitors with our customized SEO services and targeted social media and search engine advertising strategies.",
		features: [
			{ icon: Globe, text: 'Improve search engine rankings', color: 'text-blue-500' },
			{ icon: Zap, text: 'Develop thought leadership content', color: 'text-yellow-500' },
			{ icon: Users, text: 'Expand your online audience', color: 'text-red-500' },
		],
		category: 'Digital Presence',
	},
]
