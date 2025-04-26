import Link from 'next/link';
import { BlogPost } from '@/types/blogPost';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64 object-cover" src={post.imageUrl} alt={post.title} />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className="text-indigo-600 hover:underline">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
