import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import PostRegularIcon from '@public/assets/svg/bottomNavbar/postRegular.svg';

export default function HomeNavbar() {
  return (
    <nav className="h-[60px] w-full flex items-center justify-start px-[16px] text-white fixed top-0 left-0 z-[99] bg-black md:hidden">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/images/instagram.png"
          alt="instagram banner"
          width={200}
          height={40}
          className="w-[102px]"
        />
        <Icon icon="ic:baseline-arrow-forward-ios" className="rotate-90 text-white" />
      </div>
      <button type="button" className="ml-auto">
        <PostRegularIcon />
      </button>
      <Icon
        icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
        className="text-xl ml-3"
      />
    </nav>
  );
}
