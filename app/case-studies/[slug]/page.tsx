import CaseStudyDetail from '@/components/CaseStudyDetail'

const page = ({ params }: { params: { slug: string } }) => {
	const id = params.slug.split('-').pop()
	return <CaseStudyDetail id={id as string} />
}

export default page
