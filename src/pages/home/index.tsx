import React, { type ReactElement } from 'react';
import Footer from '@components/footer';
import LoginForm from '@components/input/login-form';
import BannerImage from '@components/banner/banner-image';
import HomePageLayout from 'layouts/homepage';

export default function Home(): ReactElement {
  return (
    <HomePageLayout>
      <div className="flex gap-[110px] justify-center items-center">
        <BannerImage />
        <LoginForm />
      </div>
    </HomePageLayout>
  );
}
