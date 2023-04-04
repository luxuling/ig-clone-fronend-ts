/* eslint-disable import/no-extraneous-dependencies */
import React, { type ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import LoginInput from '@components//input/loginInput';
import SubmitButton from '@components//button/submit';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function LoginForm(): ReactElement {
  const [state, setState] = useState({
    acc: '',
    password: '',
  });
  const loginHandler = (e: any): void => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(state);
  }, [state]);
  return (
    <div>
      <div className="lg:border lg:border-lineGrey lg:mt-[50px] lg:px-[40px] lg:pb-3">
        <div className="h-[160px] flex justify-center items-center lg:h-[120px]">
          <Image
            alt="instagram-logo"
            src="/assets/images/instalogo.png"
            height={200}
            width={400}
            className="h-[71px] w-[175px]"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <LoginInput
            type="text"
            placeholder="Nomor telepon, nama pengguna, atau email"
            handler={loginHandler}
            id="acc"
          />
          <LoginInput
            type="password"
            placeholder="Kata sandi"
            handler={loginHandler}
            id="password"
          />
        </div>
        <div className="flex justify-center mt-4">
          <SubmitButton
            label="Masuk"
            handler={() => {
              console.log('sdfsdf');
            }}
          />
        </div>
        <div className="flex items-center gap-4 w-[270px] mx-auto mt-4">
          <span className="h-[2px] bg-lineGrey flex-1" />
          <span className="text-slate-500 uppercase text-[13px]">Atau</span>
          <span className="h-[1px] bg-lineGrey flex-1" />
        </div>
        <div className="flex flex-col items-center mt-6">
          <a
            href="http://localhost:5000/auth/facebook"
            target="_blank"
            className="flex items-center text-[14px] text-[#385185] gap-2 font-semibold"
            rel="noreferrer"
          >
            <Icon icon="ant-design:facebook-filled" className="text-xl" />
            <span>Masuk dengan Facebook</span>
          </a>
          <button type="button" className="text-[12px] text-[#00376B] mt-6">
            Lupa kata sandi
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-14 lg:border lg:border-lineGrey lg:h-[65px] lg:items-center lg:mt-3">
        <span className="text-[14px]">
          Tidak punya akun?{' '}
          <Link href="/register" className="text-igBlue font-semibold">
            Buat akun
          </Link>
        </span>
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
    </div>
  );
}
