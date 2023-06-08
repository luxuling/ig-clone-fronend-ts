import React from 'react';
import '@splidejs/react-splide/css';
import PostCard from '../../cards/post-card';

export default function ShowAllPost() {
  const exampleImages = [
    '/assets/images/post/Instagram post - 1.png',
    '/assets/images/post/Instagram post - 2.png',
    '/assets/images/post/Instagram post - 3.png',
    '/assets/images/post/Instagram post - 4.png',
  ];
  return (
    <div className="flex flex-col items-center pb-3 text-white">
      <PostCard images={exampleImages as []} />
      <PostCard images={exampleImages as []} />
      <PostCard images={exampleImages as []} />
    </div>
  );
}
