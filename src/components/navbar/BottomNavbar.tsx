/* eslint-disable operator-linebreak */
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
import Image from 'next/image';

export default function BottomNavbar() {
  const path = useRouter().pathname;
  const defaultButtonStyle =
    'w-[48px] h-[48px] items-center justify-center lg:w-auto lg:text-white lg:flex lg:gap-4';
  return (
    <div className="fixed md:sticky md:top-0 bottom-0 h-[60px] w-full bg-black flex justify-between items-center px-6 z-[99] md:flex-col md:h-[100vh] md:w-[73px] md:justify-start md:border-r border-r-[#363636] gap-1 md:pt-[25px] lg:w-[240px] lg:items-start lg:gap-[10px]">
      <button
        type="button"
        className="hidden md:flex w-[48px] h-[48px] text-white justify-center items-center text-[25px] lg:w-full lg:justify-start"
      >
        <Icon icon="mdi:instagram" className="lg:hidden" />
        <Image
          src="/assets/images/instagram.png"
          alt="logo instagram"
          width={600}
          height={400}
          className="w-[100px] hidden lg:block"
        />
      </button>
      <button type="button" className={`flex md:mt-[20px] ${defaultButtonStyle}`}>
        {path === '/' ? <HomeFillIcon /> : <HomeRegularIcon />}
        <h1 className="hidden lg:inline">Beranda</h1>
      </button>
      <button type="button" className={`hidden text-white md:flex ${defaultButtonStyle}`}>
        <Icon icon="bx:search" className="text-2xl" />
        <h1 className="hidden lg:inline">Cari</h1>
      </button>
      <button type="button" className={`flex ${defaultButtonStyle}`}>
        {path === '/explore' ? <ExploreFillIcon /> : <ExploreRegularIcon />}
        <h1 className="hidden lg:inline">Jelajahi</h1>
      </button>
      <button type="button" className={`flex ${defaultButtonStyle}`}>
        {path === '/rels' ? <RelsFillIcon /> : <RelsRegularIcon />}
        <h1 className="hidden lg:inline">Reels</h1>
      </button>
      <button type="button" className={`flex ${defaultButtonStyle}`}>
        {path === '/inbox' ? <MessageFillIcon /> : <MessageRegularIcon />}
        <h1 className="hidden lg:inline">Pesan</h1>
      </button>
      <button type="button" className={`hidden md:flex ${defaultButtonStyle}`}>
        <Icon
          icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
          className="text-[24px] text-white
          "
        />
        <h1 className="hidden lg:inline">Notifikasi</h1>
      </button>
      <button type="button" className={`hidden md:flex ${defaultButtonStyle}`}>
        {path === '/post' ? <PostFillIcon /> : <PostRegularIcon />}
        <h1 className="hidden lg:inline">Buat</h1>
      </button>
      <button type="button" className={`flex ${defaultButtonStyle}`}>
        <Icon
          icon="material-symbols:person"
          className="text-[24px] text-bgGrey rounded-full border border-white
          "
        />
        <h1 className="hidden lg:inline">Profil</h1>
      </button>
      <button type="button" className={`flex ${defaultButtonStyle}`}>
        <Icon
          icon="iconamoon:menu-burger-horizontal"
          className="text-[24px] text-white
          "
        />
        <h1 className="hidden lg:inline">Lainya</h1>
      </button>
    </div>
  );
}
