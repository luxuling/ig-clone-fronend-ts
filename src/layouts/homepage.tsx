import Footer from '@components/footer';
import Head from 'next/head';
import React, { ReactElement } from 'react';

interface Children {
  children: ReactElement;
  title: string;
}
export default function HomePageLayout({ children, title }: Children) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <Footer />
    </>
  );
}
