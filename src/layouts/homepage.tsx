import Footer from '@components/footer';
import React, { ReactElement } from 'react';

interface Children {
  children: ReactElement;
}
export default function HomePageLayout({ children }: Children) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
