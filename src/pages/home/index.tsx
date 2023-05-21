import ShowAllPost from '@components/sections/show-all-post';
import Suggestion from '@components/sections/show-suggestion';
import StoryAccountSlider from '@components/slider/story';
import HomeLayout from 'layouts/HomeLayout';
import React from 'react';

export default function Home() {
  return (
    <HomeLayout>
      <div className="lg:flex lg:flex-1">
        <div className="md:flex-1 md:w-[697px]">
          <StoryAccountSlider />
          <ShowAllPost />
        </div>
        <Suggestion />
      </div>
    </HomeLayout>
  );
}
