import React from 'react'

interface BrowseDetailPageProps{
    params: {
        slug: string
    }
}

interface Post {
  _id: string;
  title: string;
  body: string;
  user: string;
  createdAt: string;
}

const BrowseDetailPage = async ({ params }: BrowseDetailPageProps) => {
  try {
    const data = await fetch(`https://nextblog-backend.onrender.com/api/posts/${params.slug}`);

    if (!data.ok) {
      throw new Error('Veri alınamadı');
    }
    
    const response = await data.json();
    
    if (!response.posts) {
      throw new Error('Post bulunamadı');
    }

    const post: Post = response.posts;

    return (
      <div>
        <span>{post._id}</span>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <span>{post.user}</span>
      </div>
    );
  } catch (error) {
    console.error("Veri alma sırasında hata:", error); // Hatanın detayını konsola yazdır
    return <div>Bir hata oluştu: {String(error)}</div>;
  }
}

export default BrowseDetailPage;
