import React from 'react';
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
}

const BlogPage = async () => {
    let data = await fetch('https://nextblog-backend.onrender.com/api/posts');
    let response = await data.json();
    let posts: Post[] = response.posts;
    
    return (
      <ul className='flex flex-col justify-between items-center space-y-4'>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/blog/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    );
}

export default BlogPage;
