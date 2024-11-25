'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Loader2 } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import firebaseService from '@/utils/firebase.utils'
import Link from 'next/link'
import Image from 'next/image'
import { CaseStudyType } from '@/types'

export default function CaseStudiesList({ showAll }: { showAll?: boolean }) {
	const [hoveredId, setHoveredId] = useState<string | null>(null)
	const [caseStudy, setCaseStudy] = useState<CaseStudyType[]>([])
	const [loading, setLoading] = useState(true)
	const allCaseStudy = showAll ? caseStudy : caseStudy.slice(0, 3)

	useEffect(() => {
		setLoading(true)
		const getBlogs = async () => {
			const data = await firebaseService.getDocuments('case-studies')
			setCaseStudy(data)
			setLoading(false)
		}
		getBlogs()
	}, [])

	return (
		<div className="container py-16 bg-blue-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2 className="text-4xl font-extrabold text-center text-gray-900 pb-10 md:pb-14">
					{showAll ? 'All Case Studies' : 'Our Case Studies'}
				</motion.h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{loading ? (
						<div className="h-60 w-full flex justify-center items-center md:col-span-2 lg:col-span-3 ">
							<Loader2 className="w-10 h-10 ml-2 animate-spin" />
						</div>
					) : (
						allCaseStudy.map((caseStudy) => (
							<motion.div
								key={caseStudy.documentId}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								whileHover={{ y: -5 }}
								onHoverStart={() => setHoveredId(caseStudy.documentId)}
								onHoverEnd={() => setHoveredId(null)}
								className=" cursor-pointer"
							>
								<Card className="overflow-hidden h-full flex flex-col bg-white/80 backdrop-blur-sm border-none shadow-lg">
									<div className="relative">
										{caseStudy.imageUrl ? (
											<Image
												width={800}
												height={800}
												src={caseStudy.imageUrl}
												alt={caseStudy.title}
												className="w-full h-60 object-cover"
											/>
										) : (
											<div className="bg-gray-300 h-60 w-full flex justify-center items-center">
												<div className="text-white text-4xl font-bold">400 x 400</div>
											</div>
										)}
										<Badge className="absolute top-4 left-4 py-2 bg-primary text-primary-foreground">
											{caseStudy.category || 'Category'}
										</Badge>
									</div>
									<CardContent className="flex-grow p-6">
										<h3 className="text-xl font-bold mb-2 line-clamp-2">{caseStudy.title || ''}</h3>
										<p className="text-muted-foreground mb-4 line-clamp-3">
											{caseStudy.description || ''}
										</p>
									</CardContent>
									<CardFooter className="border-t p-6 bg-gray-50">
										<div className="flex items-center justify-center w-full">
											{/* <div className="flex items-center space-x-2">
												<Avatar>
													<AvatarImage src="/placeholder.svg" alt={caseStudy.authorName} />
													<AvatarFallback>{caseStudy.authorName.charAt(0)}</AvatarFallback>
												</Avatar>
												<span className="text-sm font-medium">{caseStudy.authorName || ''}</span>
											</div> */}
											{/* <AnimatePresence>
												{hoveredId === caseStudy.documentId && (
													<motion.div
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														exit={{ opacity: 0, x: -20 }}
														transition={{ duration: 0.2 }}
													>
														<Link href={`/case-studies/${caseStudy.documentId}`}>
															<Button variant="ghost" size="sm" className="text-primary">
															<span className="absolute inset-0 w-full h-full border-b-2 border-orange-600 transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
															<span className="relative">Read More</span>
																<ChevronRight className="ml-2 h-4 w-4" />
															</Button>
														</Link>
													</motion.div>
												)}
											</AnimatePresence> */}
											<Link href={`/case-studies/${caseStudy.documentId}`}>
											<button className="relative inline-flex items-center justify-center px-4 py-2 text-orange-600 font-medium group">
						                    <span className="absolute inset-0 w-full h-full border-b-2 border-orange-600 transform scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
						                    <span className="relative">Read More</span>
					                        </button>
											</Link>
										</div>
									</CardFooter>
								</Card>
							</motion.div>
						))
					)}
				</div>
				{!showAll && (
					<Link href={'/case-studies'}>
						<div className="flex justify-center mt-10 md:mt-14 ">
							<Button className="bg-gradient-main hover:bg-[#ff962c]">Read More</Button>
						</div>
					</Link>
				)}
			</div>
		</div>
	)
}
