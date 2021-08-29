import Head from 'next/head'
import Router from 'next/router'
import Post from '../../components/post'
import prisma from '../../lib/prisma'

export async function getServerSideProps({ params }) {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })

  return {
    props: { posts: posts },
  }
}

export default function BlogPost(props) {
  return (
    <div className="m-auto md:p-20">
      <Head>
        <title>Blog | Rowan-Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Blog posts</h1>
      {props.posts[0] ? (
        props.posts.map((post) => (
          <div key={post.id}>
            <Post post={post} />
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  )
}
