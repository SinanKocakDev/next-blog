import React from 'react'
import Link from 'next/link'

interface Post {
  id: string;
  title: string;
  date: string;
}

const BlogPage = async () => {
    let data = await fetch('https://api.vercel.app/blog')
    let posts: Post[] = await data.json();
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>
        ))}
      </ul>
    )
}

export default BlogPage