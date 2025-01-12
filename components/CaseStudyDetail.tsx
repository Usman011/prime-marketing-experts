'use client'

import { CaseStudyType } from '@/types'
import firebaseService from '@/utils/firebase.utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CaseStudyDetail = ({ id }: { id: string }) => {
	const [caseStudy, setCaseStudy] = useState<CaseStudyType | null>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getBlogById = async () => {
			setLoading(true)
			try {
				const data = await firebaseService.getDocumentById('case-studies', id)
				setCaseStudy(data as CaseStudyType)
			} catch (err: any) {
				console.log(err)
			} finally {
				setLoading(false)
			}
		}
		getBlogById()
	}, [id])

	return (
		<div>
			<div className="bg-gradient-to-r from-orange-50 to-red-50 py-8 md:py-16 w-full">
				<div className="container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight md:leading-tight text-center">
						{caseStudy?.title || 'Case Study Details'}
					</h1>
					<p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-relaxed text-center max-w-2xl mx-auto">
						{caseStudy?.description ||
							'Explore how we helped our client achieve their business goals through innovative solutions and strategic planning.'}
					</p>
				</div>
			</div>
			{!loading && caseStudy ? (
				<div className="text-black container mx-auto px-4 max-w-5xl mt-10">
					<div className="pt-5">
						{/* <div className=" text-base md:text-lg text-gray-500 mt-2">{`By ${caseStudy.authorName || ''}`}</div> */}
					</div>
					{caseStudy?.imageUrl && (
						<div className="w-full flex justify-center items-center">
							<Image
								src={caseStudy?.imageUrl || ''}
								alt={'No Image'}
								width={1000}
								height={800}
								className="w-full object-cover max-h-[500px] rounded-lg"
							/>
						</div>
					)}
					<div className=" text-xl md:text-3xl font-bold  mt-5">{caseStudy.title || ''}</div>
					<div className="editor-content py-10">
						<div
							className="mt-1 text-sm text-gray-700"
							dangerouslySetInnerHTML={{ __html: caseStudy?.content || '' }}
						/>
					</div>
				</div>
			) : (
				<div className="container py-20 text-2xl text-center">Case Study Not Found</div>
			)}
		</div>
	)
}

export default CaseStudyDetail
