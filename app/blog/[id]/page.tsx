import BlogDetails from '@/components/BlogDetails'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
	return <BlogDetails id={params.id} />
}

export default page
