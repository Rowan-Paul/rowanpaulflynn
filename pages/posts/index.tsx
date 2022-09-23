import { useState } from 'react';
import Head from 'next/head';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import Card from '../../components/Card';

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

const PostsOverview = ({ posts }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 20;
  const totalPages = Math.ceil(posts.length / pageSize);

  return (
    <>
      <Head>
        <title>Posts | Rowan Paul Flynn</title>
      </Head>

      <div className="min-h-screen bg-primary dark:bg-dark-grey-500 font-primary text-text dark:text-primary p-5">
        <div className="container m-auto max-w-3xl">
          <h1 className="mt-24 mb-12 font-bold text-3xl">Latest Posts</h1>
          {posts.length > 0 ? (
            posts
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((post: any) => (
                <Card
                  key={post.slug}
                  title={post.data.title}
                  date={post.data.date}
                  description={post.data.description}
                  slug={post.slug}
                />
              ))
          ) : (
            <div>No posts yet...</div>
          )}
          {totalPages > 1 && (
            <div className="cursor-pointer mt-8 mb-2">
              {currentPage > 1 && (
                <div onClick={() => setCurrentPage(currentPage - 1)} className="inline-block mr-4">
                  Go to previous page
                </div>
              )}
              {currentPage < totalPages && (
                <div onClick={() => setCurrentPage(currentPage + 1)} className="inline-block">
                  Go to next page
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts().sort((a, b): any => {
    if (Date.parse(a.data.date) > Date.parse(b.data.date)) {
      return -1;
    }
  });

  return {
    props: {
      posts
    }
  };
};

export default PostsOverview;
