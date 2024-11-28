import React from 'react';
import BlogDetails from '@/components/BlogDetails';

// Define the type for the page props, ensuring `params.id` matches the dynamic route `[id]`
type PageProps = {
  params: {
    id: string; // Matches the `[id]` dynamic segment
  };
};

// Dynamic route page component
const page = ({ params }: PageProps) => {
  // Pass the dynamic route ID to the `BlogDetails` component
  return <BlogDetails id={params.id} />;
};

// Export the page component
export default page;

// If using generateMetadata for dynamic SEO (Optional):
export async function generateMetadata({ params }: PageProps) {
  const { id } = params;

  // Customize metadata dynamically
  return {
    title: `Blog Post ${id}`,
    description: `Details for blog post with ID: ${id}.`,
  };
}
