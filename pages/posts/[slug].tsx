import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';

interface Post {
  title: string;
  date: string;
}

const getPosts = () => {
  const files = fs.readdirSync(path.join('posts'));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      data
    };
  });

  return allPostsData;
};

const getPost = (slug: string) => {
  const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data,
    content
  };
};

function Post({ data, content }: any) {
  return (
    <div className="min-h-screen bg-primary dark:bg-dark-grey-500 font-primary text-text dark:text-primary p-5">
      <div className="container m-auto max-w-3xl">
        <h1 className="font-bold text-7xl mt-24 mb-4">{data.title}</h1>
        <div className="text-gray-500 dark:text-gray-400 italic">{data.date}</div>
        <div className="prose lg:prose-xl dark:prose-invert mt-12">
          <MDXRemote {...content} />
        </div>
        <Link href="/posts">
          <a className="text-blue-600 dark:text-blue-500 mt-8 mb-2 block">Back to overview</a>
        </Link>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params?.slug as string);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      data: post.data,
      content: mdxSource
    }
  };
};

export default Post;
