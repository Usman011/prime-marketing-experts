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
		title: 'SEO',
		url: 'undefined',
		children: [
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
		],
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
		title: 'Search Engine Advertising',
		url: 'undefined',
		children: [
			{
				title: 'Google Shopping Campaigns',
				url: '/marketing/google-shopping-campaigns',
			},
			{
				title: 'Google Grant Management',
				url: '/marketing/google-grant-management',
			},
		],
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

export const 

TechnologyData = [
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



export const mobileMenu = [
	{
		title:'Home',
		url:'/',
		},	
      
		{
			title:'Business',
			url:'undefined',
			children:[
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
		},
	{
		title: 'Market Research',
		url: 'https://www.primemarketingexperts.com/market-research-services/',
	},
	{
		title: 'Operational Assessment',
		url: 'https://www.primemarketingexperts.com/operational-assessment/',
	},
	{
		title: 'Professional Business Plans',
		url: 'https://www.primemarketingexperts.com/professional-business-plans/',
	},
	{
		title: 'Business Model Transformation',
		url: 'https://www.primemarketingexperts.com/business-model-transformation/',
	},
	{
		title: 'Event Management',
		url: 'https://www.primemarketingexperts.com/event-management-services/',
	},
	{
		title: 'SEO',
		url: 'https://www.primemarketingexperts.com/search-engine-optimization/',
		children: [
			{
				title: 'Local SEO',
				url: 'https://www.primemarketingexperts.com/local-seo/',
			},
			{
				title: 'SEO Web Design',
				url: 'https://www.primemarketingexperts.com/seo-web-design/',
			},
			{
				title: 'Video SEO',
				url: 'https://www.primemarketingexperts.com/video-seo/',
			},
		],
	},
	{
		title: 'Social Media Marketing',
		url: 'https://www.primemarketingexperts.com/social-media-marketing/',
	},
	{
		title: 'Content Marketing',
		url: 'https://www.primemarketingexperts.com/content-marketing-services/',
	},
	{
		title: 'Search Engine Advertising',
		url: 'https://www.primemarketingexperts.com/search-engine-advertising/',
		children: [
			{
				title: 'Google Shopping Campaigns',
				url: 'https://www.primemarketingexperts.com/google-shopping-campaign-services/',
			},
			{
				title: 'Google Grant Management',
				url: 'https://www.primemarketingexperts.com/google-grant-management/',
			},
		],
	},
	{
		title: 'Email Marketing',
		url: 'https://www.primemarketingexperts.com/email-marketing-services/',
	},
	{
		title: 'Branding',
		url: 'https://www.primemarketingexperts.com/branding/',
	},
	{
		title: 'Text Message Marketing',
		url: 'https://www.primemarketingexperts.com/text-message-marketing/',
	},
	{
		title: 'Marketing Automation',
		url: 'https://www.primemarketingexperts.com/marketing-automation-services/',
	},
	{
		title: 'Marketing Plans',
		url: 'https://www.primemarketingexperts.com/marketing-plan-services/',
	},
	{
		title: 'Inbound Marketing',
		url: 'https://www.primemarketingexperts.com/inbound-marketing-services/',
	},
	{
		title: 'E-Commerce Services',
		url: 'https://www.primemarketingexperts.com/e-commerce-digital-marketing-services/',
	},

	{
		title:'Technology',
		url:'undefined',
		children:[
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
	},

	{
		title:'Blog',
		url:'/blog',
	},

	{
		title:'Contact',
		url:'/contact'
	},

	
]
