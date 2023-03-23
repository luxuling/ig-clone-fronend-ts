import React, { type ReactElement } from 'react';
import LoginForm from './login-form';
import Footer from './footer';
import BannerImage from './banner-image';

export default function Home(): ReactElement {
  return (
    <>
      <div className="flex gap-[140px] justify-center items-center">
        <BannerImage />
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}
