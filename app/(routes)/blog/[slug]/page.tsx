import React from 'react'

interface BrowseDetailPageProps{
    params: {
        slug: string
    }
}

const BrowseDetailPage = async ({params}:BrowseDetailPageProps) => {
  let data = await fetch(`https://api.vercel.app/blog/${params.slug}`)
  let post = await data.json()
  return (
    <div>
      <span>{post.id}</span>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <span>{post.author}</span>
    </div>
  )
}

export default BrowseDetailPage