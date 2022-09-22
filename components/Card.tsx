import Link from 'next/link';

function Card({ title, date, description, slug }: any) {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-2xl my-4">{title}</h2>
      <div className="text-gray-500 dark:text-gray-400">{date}</div>
      <div className="mt-4 italic">{description}</div>

      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        <a className="text-blue-600 dark:text-blue-500 mt-8 mb-2 block ">Read the entire post</a>
      </Link>
    </div>
  );
}

export default Card;
