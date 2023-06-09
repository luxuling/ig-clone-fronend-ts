import React, { type ReactElement } from 'react';
import RegisterForm from '@components/input/register-form';
import HomePageLayout from 'layouts/CreateAccount';

export default function Register(): ReactElement {
  return (
    <HomePageLayout title="Register">
      <div>
        <RegisterForm />
      </div>
    </HomePageLayout>
  );
}
