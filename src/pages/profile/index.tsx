import withAuth from '@components/hoc/withAuth';
import BottomNavbar from '@components/navbar/BottomNavbar';
import NavbarProfile from '@components/navbar/profile/NavbarProfile';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import UserCard from './user_card';

function Profile() {
  const user = useSelector((state: RootState) => state.auth.userData);
  return (
    <div className="min-h-screen bg-black md:py-0 md:flex md:flex-row-reverse md:justify-between md:relative">
      <NavbarProfile user={user} />
      <section className="pt-[45px]">
        {/* user card */}
        <UserCard user={user} />
        {/* bio section */}
        <div className="px-[13px]">
          <p className="text-white">
            {user?.profile.bio} Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            voluptate.
          </p>
        </div>
        {/* info account */}
        <div className="flex items-center w-full px-[13px] border-b border-t border-darkGrey h-[61px] mt-10">
          <div className="flex flex-col items-center flex-1">
            <p className="text-sm font-semibold text-white">{user?.profile.followed}</p>
            <p className="text-sm text-lightGrey">kiriman</p>
          </div>
          <div className="flex flex-col items-center flex-1">
            <p className="text-sm font-semibold text-white">{user?.profile.followers}</p>
            <p className="text-sm text-lightGrey">pengikut</p>
          </div>
          <div className="flex flex-col items-center flex-1">
            <p className="text-sm font-semibold text-white">{user?.profile.followed}</p>
            <p className="text-sm text-lightGrey">diikuti</p>
          </div>
        </div>
      </section>
      <BottomNavbar />
    </div>
  );
}

export default withAuth(Profile);
