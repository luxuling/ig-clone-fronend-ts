import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface Params {
  haveAccount: boolean;
}
export default function HaveAccount({ haveAccount }: Params): ReactElement {
  const hrefLink = haveAccount ? '/' : '/register';
  return (
    <>
      <div className="flex justify-center mt-14 lg:border lg:border-lineGrey lg:h-[65px] lg:items-center lg:mt-3">
        {haveAccount ? (
          <span className="text-[14px]">
            Punya akun?{' '}
            <Link href={hrefLink} className="text-igBlue font-semibold">
              Masuk
            </Link>
          </span>
        ) : (
          <span className="text-[14px]">
            Tidak punya akun?{' '}
            <Link href={hrefLink} className="text-igBlue font-semibold">
              Buat akun
            </Link>
          </span>
        )}
      </div>
      <div className="mt-[35px] lg:mt-2 text-[13px]">
        <h4 className="text-center py-3">Dapaatkan Aplikasi</h4>
        <div className="flex justify-center items-center gap-2">
          <button type="button" className="w-[132px]">
            <Image
              alt="google store btn image"
              src="/assets/images/google-store.png"
              height={50}
              width={200}
            />
          </button>
          <button type="button" className="w-[110px]">
            <Image
              alt="microsoft store btn image"
              src="/assets/images/microsoft.png"
              height={50}
              width={200}
            />
          </button>
        </div>
      </div>
    </>
  );
}
