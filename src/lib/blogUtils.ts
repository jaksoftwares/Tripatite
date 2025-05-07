import { blogPosts } from '@/constants/blogPosts';

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};
