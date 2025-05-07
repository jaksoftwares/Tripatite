"use client";

import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/constants/blogPosts';

export default function BlogPage() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
