import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

export default function HomeNavbar() {
  return (
    <nav className="h-[60px] w-full flex items-center justify-between px-[16px] text-white fixed top-0 left-0 z-[99] bg-black">
      <Image
        src="/assets/images/instagram.png"
        alt="instagram banner"
        width={200}
        height={40}
        className="hidden"
      />
      <div className="relative h-[36px] w-[236px] rounded-md bg-darkGrey flex">
        <div className="absolute flex items-center text-ligthGrey h-full gap-3 px-2">
          <Icon icon="uil:search" />
          <span>Cari</span>
        </div>
        <input type="text" className="w-full outline-none bg-transparent" />
      </div>
      <Icon
        icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
        className="text-xl"
      />
    </nav>
  );
}
