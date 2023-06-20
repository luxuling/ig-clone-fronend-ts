import BottomNavbar from '@components/navbar/BottomNavbar';
import HomeNavbar from '@components/navbar/HomeNavbar';
import * as React from 'react';

interface IHomeLayout {
  children: React.ReactElement;
}
export default function HomeLayout({ children }: IHomeLayout) {
  return (
    <>
      <head>
        <title>Instagram Clone</title>
      </head>
      <div className="bg-black py-[60px] md:py-0 md:flex md:flex-row-reverse md:justify-between md:relative">
        <HomeNavbar />
        {children}
        <BottomNavbar />
      </div>
    </>
  );
}
