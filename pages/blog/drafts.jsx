import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useSession, getSession } from 'next-auth/client'
import Router from 'next/router'
import prisma from '../../lib/prisma'
import Post from '../../components/post'

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req })
  if (!session) {
    res.statusCode = 403
    return { props: { drafts: [] } }
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  return {
    props: { drafts },
  }
}

async function publishPost(id) {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push(`/blog/posts/${id}`)
}

export default function Draft(props) {
  const [session] = useSession()

  if (!session || !session.isAdmin) {
    return (
      <div className="m-auto p-5 md:p-20">
        <Head>
          <title>Blog | Rowan-Paul Flynn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Not authenticated</h1>
        <div>You need to be authenticated to view this page.</div>
      </div>
    )
  }

  return (
    <div className="m-auto p-5 md:p-20">
      <Head>
        <title>Blog | Rowan-Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>My Drafts</h1>
      <Link href="/blog/create">
        <a className="border-top-2">Create a new post</a>
      </Link>
      <main>
        {props.drafts[0] ? (
          props.drafts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
              <span onClick={() => publishPost(post.id)} className="cursor-pointer p-2 bg-gray-500 mr-2">
                Publish
              </span>
            </div>
          ))
        ) : (
          <p>
            No drafts found,{' '}
            <Link href="/blog/create">
              <a>create a new draft</a>
            </Link>
          </p>
        )}
      </main>
    </div>
  )
}
