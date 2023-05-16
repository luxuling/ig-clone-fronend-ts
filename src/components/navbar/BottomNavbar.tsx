import React from 'react';
import HomeFillIcon from '@public/assets/svg/bottomNavbar/homeFill.svg';
import HomeRegularIcon from '@public/assets/svg/bottomNavbar/homeRegular.svg';
import ExploreRegularIcon from '@public/assets/svg/bottomNavbar/exploreRegular.svg';
import ExploreFillIcon from '@public/assets/svg/bottomNavbar/exploreFill.svg';
import RelsRegularIcon from '@public/assets/svg/bottomNavbar/relsRegular.svg';
import RelsFillIcon from '@public/assets/svg/bottomNavbar/relsFill.svg';
import PostRegularIcon from '@public/assets/svg/bottomNavbar/postRegular.svg';
import PostFillIcon from '@public/assets/svg/bottomNavbar/postFill.svg';
import MessageRegularIcon from '@public/assets/svg/bottomNavbar/msgRegular.svg';
import MessageFillIcon from '@public/assets/svg/bottomNavbar/msgFill.svg';

import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export default function BottomNavbar() {
  const path = useRouter().pathname;

  return (
    <div className="fixed md:sticky md:top-0 bottom-0 h-[60px] w-full bg-black flex justify-between items-center px-6 z-[99] md:flex-col md:h-[100vh] md:w-[73px] md:justify-start md:border-r border-r-[#363636] gap-1 md:pt-[25px]">
      <button
        type="button"
        className="hidden md:flex w-[48px] h-[48px] text-white justify-center items-center text-[25px]"
      >
        <Icon icon="mdi:instagram" />
      </button>
      <button
        type="button"
        className="w-[48px] h-[48px] flex items-center justify-center md:mt-[20px]"
      >
        {path === '/' ? <HomeFillIcon /> : <HomeRegularIcon />}
      </button>
      <button
        type="button"
        className="hidden md:flex w-[48px] h-[48px] text-white justify-center items-center text-[25px]"
      >
        <Icon icon="bx:search" />
      </button>
      <button type="button" className="w-[48px] h-[48px] flex items-center justify-center">
        {path === '/explore' ? <ExploreFillIcon /> : <ExploreRegularIcon />}
      </button>
      <button type="button" className="w-[48px] h-[48px] flex items-center justify-center">
        {path === '/rels' ? <RelsFillIcon /> : <RelsRegularIcon />}
      </button>
      <button
        type="button"
        className="w-[48px] h-[48px] md:flex items-center justify-center hidden"
      >
        {path === '/post' ? <PostFillIcon /> : <PostRegularIcon />}
      </button>
      <button type="button" className="w-[48px] h-[48px] flex items-center justify-center">
        {path === '/inbox' ? <MessageFillIcon /> : <MessageRegularIcon />}
      </button>
      <button type="button" className="w-[48px] h-[48px] flex items-center justify-center">
        <Icon
          icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
          className="text-[24px] text-white
        "
        />
      </button>
      <button type="button" className="w-[48px] h-[48px] flex items-center justify-center">
        <Icon
          icon="material-symbols:person"
          className="text-[24px] text-bgGrey rounded-full border border-white
        "
        />
      </button>
      <button type="button" className="w-[48px] h-[48px] flex items-center justify-center">
        <Icon
          icon="iconamoon:menu-burger-horizontal"
          className="text-[24px] text-white
        "
        />
      </button>
    </div>
  );
}
