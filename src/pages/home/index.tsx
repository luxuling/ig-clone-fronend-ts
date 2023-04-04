import React, { type ReactElement } from 'react';
import Footer from '@components/footer';
import LoginForm from '@components/input/login-form';
import BannerImage from '@components/banner/banner-image';

export default function Home(): ReactElement {
  return (
    <>
      <div className="flex gap-[110px] justify-center items-center">
        <BannerImage />
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}
