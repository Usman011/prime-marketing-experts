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
	}, [])

	return (
		<div>
			<div className="  py-10 bg-gray-100 ">
				<div className="container h-96 flex items-center justify-center">
					<div className=" text-3xl md:text-4xl font-bold ">Blog Details</div>
				</div>
			</div>
			{!loading && caseStudy ? (
				<div className="container">
					<div className="pt-5">
						<div className=" text-xl md:text-3xl font-bold  mt-5">{caseStudy.title || ''}</div>
						<div className=" text-base md:text-lg text-gray-500 mt-2">{`By ${caseStudy.authorName || ''}`}</div>
					</div>
					{caseStudy?.imageUrl && (
						<div className="flex justify-center items-center">
							<Image
								src={caseStudy?.imageUrl || ''}
								alt={'No Image'}
								width={800}
								height={800}
								className="object-contain max-h-96 aspect-square "
							/>
						</div>
					)}
					<div className="editor-content py-10">
						<div
							className="mt-1 text-sm text-gray-700 border p-5 rounded-2xl"
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
