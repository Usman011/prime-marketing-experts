import CaseStudyDetail from '@/components/CaseStudyDetail'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
	return <CaseStudyDetail id={params.id} />
}

export default page
