import Head from 'next/head'
import React, { useState } from 'react'
import Router from 'next/router'

const Draft = () => {
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

  return (
    <div className="m-auto p-20 flex align-center justify-center">
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
        <input
          disabled={!content || !title}
          type="submit"
          value="Create"
          className="cursor-pointer disabled:cursor-default text-black inline-block p-3 my-3 mx-1 border-2 rounded border-black"
        />
        <span
          href="#"
          onClick={() => Router.push('/')}
          className="cursor-pointer"
        >
          or Cancel
        </span>
      </form>
    </div>
  )
}

export default Draft
