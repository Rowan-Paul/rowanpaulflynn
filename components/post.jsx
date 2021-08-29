import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

const Post = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <div
      onClick={() => Router.push('/blog/posts/[id]', `/blog/posts/${post.id}`)}
      className="cursor-pointer my-5"
    >
      <h1>{post.title}</h1>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content} />
    </div>
  )
}

export default Post
