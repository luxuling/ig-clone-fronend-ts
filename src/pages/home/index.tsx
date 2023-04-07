import React, { type ReactElement } from 'react';
import LoginForm from '@components/input/login-form';
import BannerImage from '@components/banner/banner-image';
import HomePageLayout from 'layouts/homepage';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { getRegisterState } from 'redux/features/register-data';

export default function Home(): ReactElement {
  return (
    <HomePageLayout title="Instagram">
      <div className="flex gap-[110px] justify-center items-center">
        <BannerImage />
        <LoginForm />
      </div>
    </HomePageLayout>
  );
}
