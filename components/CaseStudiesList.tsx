'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Loader2, ArrowRightIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import firebaseService from '@/utils/firebase.utils'
import Link from 'next/link'
import Image from 'next/image'
import { CaseStudyType } from '@/types'

export default function CaseStudiesList({ showAll }: { showAll?: boolean }) {
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
		<div className="py-16">
			<div className="container">
				{!showAll && (
					<h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Case Studies</h2>
				)}

				{loading ? (
					<div className="flex justify-center items-center h-60">
						<Loader2 className="w-8 h-8 animate-spin text-primary" />
					</div>
				) : (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{allCaseStudy.map((study) => (
							<Link key={study.documentId} href={`/case-studies/${study.documentId}`}>
								<article className="overflow-hidden rounded-lg border transition-all duration-300 bg-white">
									<div className="relative aspect-[16/9]">
										{study.imageUrl ? (
											<Image
												src={study.imageUrl}
												alt={study.title}
												fill
												className="object-cover transition duration-300 hover:scale-105"
											/>
										) : (
											<div className="w-full h-full bg-gray-100 flex items-center justify-center">
												<span className="text-gray-400">No image</span>
											</div>
										)}
									</div>

									<div className="p-6">
										<div className="flex justify-between items-start">
											<div className="flex-1 pr-4">
												<h3 className="text-xl font-bold mb-4 text-gray-900 line-clamp-2 leading-[32px]">
													{study.title}
												</h3>
												<p className="text-gray-600 line-clamp-3 text-sm leading-[24px]">
													{study.description}
												</p>
											</div>
										</div>

										<div className="text-sm font-semibold w-full text-orange-600 flex justify-end items-center gap-3">
											Read More <ArrowRightIcon className="w-4 h-4" />
										</div>
									</div>
								</article>
							</Link>
						))}
					</div>
				)}

				{!showAll && (
					<div className="text-center mt-12">
						<Link href="/case-studies">
							<Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-colors px-6 py-4 rounded-lg">
								View All Case Studies
								<ChevronRight className="w-5 h-5 ml-2" />
							</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}
