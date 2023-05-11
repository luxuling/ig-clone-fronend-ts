import BottomNavbar from '@components/navbar/BottomNavbar';
import HomeNavbar from '@components/navbar/HomeNavbar';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-black">
      <HomeNavbar />
      <BottomNavbar />
    </div>
  );
}
