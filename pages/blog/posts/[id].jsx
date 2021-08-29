import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'
import { useSession } from 'next-auth/client'
import prisma from '../../../lib/prisma'

export async function getServerSideProps({ params }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  })

  if (post) {
    return {
      props: post,
    }
  } else {
    return {
      props: {},
    }
  }
}

async function publishPost(id) {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push(`/blog/posts/${id}`)
}

async function deletePost(id) {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  })
  Router.push('/')
}

export default function BlogPost(props) {
  const [session, loading] = useSession()
  if (props.title === undefined) {
    return (
      <div className="m-auto md:p-20">
        <Head>
          <title>Not found | Blog | Rowan-Paul Flynn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Blog post not found</h1>
        <Link href="/blog">
          <a>Back to blog overview</a>
        </Link>
      </div>
    )
  }
  if (loading) {
    return (
      <div className="m-auto md:p-20">
        <Head>
          <title>Blog | Rowan-Paul Flynn</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <p>Authenticating...</p>
      </div>
    )
  }
  const userHasValidSession = Boolean(session)
  const postBelongsToUser = session?.user?.email === props.author?.email
  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  return (
    <div className="m-auto md:p-20">
      <Head>
        <title>{title ? `${title} | ` : ''}Blog | Rowan-Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{title}</h1>
      <small>By {props?.author?.name || 'Unknown author'}</small>
      <ReactMarkdown children={props.content} />

      {!props.published && userHasValidSession && postBelongsToUser && (
        <span
          onClick={() => publishPost(props.id)}
          className="cursor-pointer p-2 bg-gray-500 mr-2"
        >
          Publish
        </span>
      )}
      {userHasValidSession && postBelongsToUser && (
        <span
          onClick={() => deletePost(props.id)}
          className="cursor-pointer p-2 bg-gray-500"
        >
          Delete
        </span>
      )}

      <div className="mt-10">
        <Link href="/blog">
          <a className="text-sm">&lt; Back to blog overview</a>
        </Link>
      </div>
    </div>
  )
}
