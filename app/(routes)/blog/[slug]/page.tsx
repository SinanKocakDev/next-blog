import React from 'react';

interface BrowseDetailPageProps {
  params: {
    slug: string;
  };
}

interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
  author: string;
}

const BrowseDetailPage = async ({ params }: BrowseDetailPageProps) => {
  let data = await fetch(`https://api.vercel.app/blog/${params.slug}`);
  let post: Post = await data.json();
  
  return (
    <div>
      <span key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <span>{post.author}</span>
        <span>{post.date}</span>
      </span>
    </div>
  );
};

export default BrowseDetailPage;
