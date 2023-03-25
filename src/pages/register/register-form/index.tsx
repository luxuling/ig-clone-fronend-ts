/* eslint-disable import/no-extraneous-dependencies */
import LoginInput from '@components//input/loginInput';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { type ReactElement } from 'react';

export default function RegisterForm(): ReactElement {
  return (
    <div className="md:w-[350px] md:mx-auto md:pt-3">
      <div className="px-[40px] md:border-lineGrey md:border md:pb-10">
        <div className="flex justify-center h-[70px] mt-[30px] items-center">
          <Image
            alt="instagram-logo"
            src="/assets/images/instalogo.png"
            height={200}
            width={400}
            className="h-[90px] w-[175px]"
          />
        </div>
        <p className="font-semibold text-slate-500 text-[17px] text-center">Buat akun untuk melihat foto dan video dari teman Anda.</p>
        <a href="http://localhost:5000/auth/facebook" className="h-[34px] w-[265px] rounded-[8px] bg-igBlue flex text-white items-center justify-center gap-1 mx-auto mt-[10px]">
          <Icon icon="ri:facebook-box-fill" className="text-xl" />
          <span className="font-semibold text-[14px]">Masuk dengan Facebook</span>
        </a>
        <div className="flex items-center gap-4 w-[270px] mx-auto mt-4">
          <span className="h-[2px] bg-lineGrey flex-1" />
          <span className="text-slate-500 uppercase text-[13px]">Atau</span>
          <span className="h-[1px] bg-lineGrey flex-1" />
        </div>
        <div className="flex flex-col items-center gap-2 mt-3">
          <LoginInput
            type="text"
            placeholder="Nomor telepon, nama pengguna, atau email"
            handler={() => { console.log('hello'); }}
            id="acc"
          />
          <LoginInput
            type="text"
            placeholder="Nama Lengkap"
            handler={() => { console.log('hello'); }}
            id="password"
          />
          <LoginInput
            type="text"
            placeholder="Nama Pengguna"
            handler={() => { console.log('hello'); }}
            id="password"
          />
          <LoginInput
            type="password"
            placeholder="Kata Sandi"
            handler={() => { console.log('hello'); }}
            id="password"
          />
        </div>
        <div className="mt-3">
          <p className="text-[12px] text-slate-500 text-center">
            Orang yang menggunakan layanan kami mungkin telah
            mengunggah informasi kontak Anda ke Instagram.
            <a href="#/" className="text-[#00376B]">Pelajari Selengkapna</a>
          </p>
        </div>
        <div className="mt-3">
          <p className="text-[12px] text-slate-500 text-center">
            Demgam mendaftar, berarti Anda menyetujui
            {' '}
            <a href="#/" className="text-[#00376B]">Kententuan, Kebijakan Privasi,</a>
            {' '}
            dan
            {' '}
            <a href="#/" className="text-[#00376B]">Kebijakan Cookie</a>
            {' '}
            kami.
          </p>
        </div>
        <div className="mt-3">
          <button type="submit" className="h-[32px] w-[265px] bg-igBlue text-white text-[14px] font-semibold text-center rounded-[8px]">Daftar</button>
        </div>
      </div>
      <div className="flex justify-center mt-14 lg:border lg:border-lineGrey lg:h-[65px] lg:items-center lg:mt-3">
        <span className="text-[14px]">
          Punya akun?
          {' '}
          <Link href="/" className="text-igBlue font-semibold">Masuk</Link>
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
