// Define TypeScript types
interface Sublink {
    name: string;
    link: string;
  }
  
  interface Mysublink {
    Head: string;
    sublink: Sublink[];
  }
  
  interface LinkItem {
    name: string;
    submenu: boolean;
    sublinks: Mysublink[];
  }
  
  // Define the data with type annotations
  export const links: LinkItem[] = [
    {
      name: "Business",
      submenu: true,
      sublinks: [
        {
          Head: "Business Services",
          sublink: [
            { name: "Market Research", link: "/business/market-research" },
            { name: "Operational Assessment", link: "/business/operational-assessment" },
            { name: "Professional Business Plans", link: "/business/professional-business-plans" },
            { name: "Business Model Transformation", link: "/business/business-model-transformation" },
            { name: "Event Management", link: "/business/event-management" },
          ],
        },
      ],
    },
    {
      name: "Marketing",
      submenu: true,
      sublinks: [
        {
          Head: "Search Engine Advertising",
          sublink: [
            { name: "Google Grant Management", link: '/marketing/google-grant-management' },
            { name: "Google Shopping Campaigns", link: "/marketing/google-shopping-campaigns" },
          ],
        },
        {
          Head: "SEO",
          sublink: [
            { name: "SEO Web Design", link: "/marketing/seo-web-design" },
            { name: "Video SEO", link: "/marketing/video-seo" },
            { name: "Local SEO", link: "/marketing/local-seo" },
          ],
        },
        {
          Head: "Marketing Services",
          sublink: [
            { name: "Branding", link: "/marketing/branding" },
            { name: "Social Media Marketing", link: "/marketing/social-media-marketing" },
            { name: "Content Marketing", link: "/marketing/content-marketing" },
            { name: "Email Marketing", link: "/marketing/email-marketing" },
            { name: "Text Message Marketing", link: "/marketing/text-message-marketing" },
            { name: "Marketing Automation", link: "/marketing/marketing-automation" },
            { name: "Marketing Plans", link: "/marketing/marketing-plans" },
            { name: "Inbound Marketing", link: "/marketing/inbound-marketing-services" },
            { name: "E-Commerce Services", link: "/marketing/e-commerce-digital-marketing-services" },
          ],
        },
        
      ],
    },
    {
      name: "Technology",
      submenu: true,
      sublinks: [
        {
          Head: "Web & Mobile App Development",
          sublink: [
            { name: "Web Development", link: "/Technology/web-development" },
            { name: "Chatbot Development", link: "/Technology/chatbot-development" },
            { name: "Mobile App Development", link: "/Technology/mobile-app-development" },
            { name: "Website Accessibility", link: "/Technology/website-accessibility" },
          ],
        },
       
       
      ],
    },
  ];
  