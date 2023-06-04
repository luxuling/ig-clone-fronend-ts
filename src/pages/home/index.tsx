import withAuth from '@components/hoc/withAuth';
import HomeNavbar from '@components/navbar/HomeNavbar';
import ShowAllPost from '@components/sections/show-all-post';
import Suggestion from '@components/sections/show-suggestion';
import StoryAccountSlider from '@components/slider/story';
import UniversalLayout from 'layouts/UniversalLayout';
import React from 'react';

export function Home() {
  return (
    <UniversalLayout>
      <>
        <HomeNavbar />
        <div className="lg:flex lg:flex-1">
          <div className="md:flex-1 md:w-[697px]">
            <StoryAccountSlider />
            <ShowAllPost />
          </div>
          <Suggestion />
        </div>
      </>
    </UniversalLayout>
  );
}
export default withAuth(Home);
