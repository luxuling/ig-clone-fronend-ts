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
    <div className="fixed bottom-0 h-[60px] w-full bg-black flex justify-between items-center px-6">
      <div>{path === '/' ? <HomeFillIcon /> : <HomeRegularIcon />}</div>
      <div>{path === '/explore' ? <ExploreFillIcon /> : <ExploreRegularIcon />}</div>
      <div>{path === '/rels' ? <RelsFillIcon /> : <RelsRegularIcon />}</div>
      <div className="hidden">{path === '/post' ? <PostFillIcon /> : <PostRegularIcon />}</div>
      <div>{path === '/inbox' ? <MessageFillIcon /> : <MessageRegularIcon />}</div>
      <div>
        <Icon
          icon="material-symbols:person"
          className="text-[24px] text-bgGrey rounded-full border border-white
        "
        />
      </div>
    </div>
  );
}
