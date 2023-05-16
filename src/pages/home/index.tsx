import ShowAllPost from '@components/cards/show-all-post';
import StoryAccountSlider from '@components/slider/story';
import HomeLayout from 'layouts/HomeLayout';
import React from 'react';

export default function Home() {
  return (
    <HomeLayout>
      <div className="md:flex-1 md:w-[697px]">
        <StoryAccountSlider />
        <ShowAllPost />
      </div>
    </HomeLayout>
  );
}
