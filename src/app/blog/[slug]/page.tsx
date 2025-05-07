"use client";

import { getBlogPostBySlug } from '@/lib/blogUtils';
import { BlogPost } from '@/types/blogPost';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post: BlogPost | undefined = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound(); // If the blog post is not found, show a 404 page.
  }

  return (
    <div className="container mx-auto p-6">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
          <p className="text-gray-600 mt-2">{post.date}</p>
        </header>
        <Image src={post.imageUrl} alt={post.title} 
        width={100}
        height={96}
        
        className="w-full h-96 object-cover mb-8" />
        <div className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
