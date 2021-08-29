import Head from 'next/head'
import React, { useState } from 'react'
import { useSession } from 'next-auth/client'
import Router from 'next/router'

const Draft = () => {
  const [session] = useSession()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const submitData = async (e) => {
    e.preventDefault()
    try {
      const body = { title, content }
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/blog/drafts')
    } catch (error) {
      console.error(error)
    }
  }

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
        <title>Create Post | Blog | Rowan-Paul Flynn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={submitData}>
        <h1>New Draft</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
          className="block my-3 p-1 text-black border-2 rounded border-black"
        />
        <textarea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
          className="block my-3 p-1 text-black border-2 rounded border-black"
        />
        <button
          disabled={!content || !title}
          type="submit"
          className="disabled:text-gray-500 bg-white cursor-pointer disabled:cursor-default text-black inline-block p-2 my-3 mx-1 border-2 rounded border-black"
        >
          Submit
        </button>
        <span
          href="#"
          onClick={() => Router.push('/drafts')}
          className="cursor-pointer ml-5"
        >
          Cancel
        </span>
      </form>
    </div>
  )
}

export default Draft
