import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className="text-blue-600 font-semibold hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
