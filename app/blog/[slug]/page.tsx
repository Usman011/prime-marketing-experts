import BlogDetails from '@/components/BlogDetails'

const page = ({ params }: { params: { slug: string } }) => {
	const id = params.slug.split('-').pop()
	return <BlogDetails id={id as string} />
}

export default page
