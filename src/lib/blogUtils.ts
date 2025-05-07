// blogUtils.ts
import { blogPosts } from '@/constants/blogPosts';

export const getBlogPostBySlug = async (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};
