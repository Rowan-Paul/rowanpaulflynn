import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

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

const Post = ({ data, content }: any) => {
  return (
    <>
      <Head>
        <title>{data.title} | Posts | Rowan Paul Flynn</title>
        <meta name="description" content={data.description} />
      </Head>

      <div className="min-h-screen p-5 bg-primary dark:bg-dark-grey-500 font-primary text-text dark:text-primary">
        <div className="container max-w-3xl m-auto">
          <h1 className="mt-24 mb-4 overflow-hidden text-5xl font-bold md:text-7xl">{data.title}</h1>
          <div className="italic text-gray-500 dark:text-gray-400">{data.date}</div>
          <div className="mt-12 prose lg:prose-xl dark:prose-invert">
            <MDXRemote {...content} />
          </div>
          <Link href="/posts" className="block mt-8 mb-2 text-blue-600 dark:text-blue-500">
            Back to overview
          </Link>
        </div>
      </div>
    </>
  );
};

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
