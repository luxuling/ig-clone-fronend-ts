import React, { type ReactElement } from 'react';
import LoginForm from '@components/input/login-form';
import BannerImage from '@components/banner/banner-image';
import HomePageLayout from 'layouts/createAccount';

export default function Login(): ReactElement {
  return (
    <HomePageLayout title="Instagram">
      <div className="flex gap-[110px] justify-center items-center">
        <BannerImage />
        <LoginForm />
      </div>
    </HomePageLayout>
  );
}
