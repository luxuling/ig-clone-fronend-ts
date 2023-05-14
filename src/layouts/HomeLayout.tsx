import BottomNavbar from '@components/navbar/BottomNavbar';
import HomeNavbar from '@components/navbar/HomeNavbar';
import * as React from 'react';

interface IHomeLayout {
  children: React.ReactElement;
}
export default function HomeLayout({ children }: IHomeLayout) {
  return (
    <div className="bg-black pt-[60px]">
      <HomeNavbar />
      {children}
      <BottomNavbar />
    </div>
  );
}
