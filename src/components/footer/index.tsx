/* eslint-disable import/no-extraneous-dependencies */
import { Icon } from '@iconify/react';
import React, { type ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <div className="px-[20px] mt-[80px] pb-[60px] text-center text-[12px] text-slate-500">
      <p className="space-x-5 leading-[25px]">
        <a href="#/">Meta</a> <a href="#/">Tentang</a> <a href="#/">Blog</a>{' '}
        <a href="#/">Pekerjaan</a> <a href="#/">Bantuan</a> <a href="#/">API</a>{' '}
        <a href="#/">Privasi</a> <a href="#/">Ketentuan</a> <a href="#/">Akun Teratas</a>{' '}
        <a href="#/">Lokasi</a> <a href="#/">Instagram Lite</a>{' '}
        <a href="#/">Pengunggahan Kontak & Nomorpengguna</a> <a href="#/">Verifikasi Meta</a>
      </p>
      <p className="flex mt-4 items-center justify-center">
        Bahasa Indonesia
        <Icon icon="material-symbols:keyboard-arrow-down" />© 2023 Instagram from Meta
      </p>
    </div>
  );
}
