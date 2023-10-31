import Link from 'next/link';

function Card({ title, date, description, slug }: any) {
  return (
    <div className="py-4 my-4 border-b">
      <h2 className="my-4 text-2xl font-bold">{title}</h2>
      <div className="text-gray-500 dark:text-gray-400">{date}</div>
      <div className="mt-4 italic">{description}</div>

      <Link href="/posts/[slug]" as={`/posts/${slug}`} className="block mt-8 mb-2 text-blue-600 dark:text-blue-500 ">
        Read the entire post
      </Link>
    </div>
  );
}

export default Card;
