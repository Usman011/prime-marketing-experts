import type { Metadata } from 'next'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Prime Marketing Experts',
	description: 'Prime Marketing Experts',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} font-poppins`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
