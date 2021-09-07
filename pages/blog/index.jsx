import Head from 'next/head'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
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
    orderBy: {
      id: 'desc',
    },
  })

  return {
    props: { posts: posts },
  }
}

export default function BlogPost(props) {
  const [session] = useSession()

  return (
    <div className="m-auto p-5 md:p-20">
      <Head>
        <title>Blog | Rowan-Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Blog posts</h1>
      {session && session.isAdmin ? (
        <Link href="/blog/create">
          <a className="border-top-2">Create a new post</a>
        </Link>
      ) : (
        ''
      )}
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
