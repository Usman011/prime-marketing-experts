/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['kinfah-prod.s3.eu-north-1.amazonaws.com'],
	},
	experimental: {
		dynamicIO: true,
	},
}

export default nextConfig
