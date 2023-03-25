import React, { type ReactElement } from 'react';
import Footer from '@components/footer';
import RegisterForm from './register-form';

export default function Register(): ReactElement {
  return (
    <div>
      <RegisterForm />
      <Footer />
    </div>
  );
}