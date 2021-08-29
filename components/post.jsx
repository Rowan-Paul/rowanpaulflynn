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
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content?.split('\n')[0]} />
    </div>
  )
}

export default Post
