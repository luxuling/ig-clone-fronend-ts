import BottomNavbar from '@components/navbar/BottomNavbar';
import * as React from 'react';

interface IHomeLayout {
  children: React.ReactElement;
}
export default function UniversalLayout({ children }: IHomeLayout) {
  return (
    <div className="bg-black py-[60px] md:py-0 md:flex md:flex-row-reverse md:justify-between md:relative">
      {children}
      <BottomNavbar />
    </div>
  );
}
