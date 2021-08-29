import Head from 'next/head'
import React from 'react'
import { useSession, getSession } from 'next-auth/client'
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

export default function Draft(props) {
  const [session] = useSession()

  if (!session) {
    return (
      <div className="m-auto p-20">
        <Head>
          <title>Blog | Rowan-Paul Flynn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </div>
    )
  }

  return (
    <div className="m-auto p-20">
      <Head>
        <title>Blog | Rowan-Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>My Drafts</h1>
      <main>
        {props.drafts.map((post) => (
          <div key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </main>
    </div>
  )
}
