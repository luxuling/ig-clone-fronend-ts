import React, { type ReactElement } from 'react';
import Footer from '@components/footer';
import RegisterForm from '@components/input/register-form';
import HomePageLayout from 'layouts/homepage';

export default function Register(): ReactElement {
  return (
    <HomePageLayout>
      <div>
        <RegisterForm />
        <Footer />
      </div>
    </HomePageLayout>
  );
}
