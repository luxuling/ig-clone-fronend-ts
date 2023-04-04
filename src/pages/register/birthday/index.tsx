import HaveAccount from '@components/button/haveAccount';
import Footer from '@components/footer';
import { Icon } from '@iconify/react';
import DateMaker from '@lib/date-maker';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, type ReactElement, useState } from 'react';

export default function BirthDay(): ReactElement {
  const [optionData, setOptionData] = useState({
    days: [] as number[],
    months: [] as string[],
    years: [] as number[],
  });
  useEffect(() => {
    setOptionData({
      ...optionData,
      days: DateMaker.createDays(),
      months: DateMaker.createMonths(),
      years: DateMaker.createYears(),
    });
  }, []);
  return (
    <>
      <div className="px-[28px] text-[14px] text-center flex flex-col items-center md:border md:border-lineGrey md:w-[350px] md:mx-auto md:mt-3">
        <Image
          alt="birthday logo"
          src="/assets/images/birthday.png"
          width={164}
          height={150}
          priority
        />
        <h1 className="font-semibold mb-[10px]">Tambahkan Tanggal Lahir Anda</h1>
        <p>Ini tidak akan menjadi bagian profil publik Anda</p>
        <p className="text-igBlue">Mengapa saya harus memberikan tanggal lahir?</p>
        <div className="flex gap-2 text-[12px] items-center mx-auto mt-2 relative">
          <Icon
            icon="ic:outline-keyboard-arrow-down"
            className="absolute top-1/2 -translate-y-1/2 left-[55px] text-lg text-slate-500"
          />
          <select
            className="appearance-none w-[78px] h-[36px] border border-lineGrey text-slate-500 px-2 rounded-[4px]"
            title="Bulan:"
          >
            {optionData.months.map((month, index) => (
              <option key={`option-month-${index}`} title={`${month}`} value={month}>
                {month}
              </option>
            ))}
          </select>
          <Icon
            icon="ic:outline-keyboard-arrow-down"
            className="absolute top-1/2 -translate-y-1/2 left-[110px] text-lg text-slate-500"
          />
          <select
            className="appearance-none w-[47px] h-[36px] border border-lineGrey text-slate-500 px-2 rounded-[4px]"
            title="Hari:"
          >
            {optionData.days.map((day, index) => (
              <option key={`option-day-${index}`} title={`${day}`} value={day}>
                {day}
              </option>
            ))}
          </select>
          <Icon
            icon="ic:outline-keyboard-arrow-down"
            className="absolute top-1/2 -translate-y-1/2 left-[180px] text-lg text-slate-500"
          />
          <select
            className="appearance-none w-[60px] h-[36px] border border-lineGrey text-slate-500 px-2 rounded-[4px]"
            title="Tahun:"
          >
            <option title="2023" value="2023">
              2023
            </option>
            {optionData.years.map((year, index) => (
              <option key={`option-day-${index}`} title={`${year}`} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <p className="text-[12px] text-slate-500 mt-2">Anda harus memasukan tanggal lahir</p>
        <p className="text-[12px] text-slate-500 mt-3">
          Gunakan tanggal lahir Anda sendiri, bahkan jika ini adalah akun untuk bisnis, hewan
          peliharaan, atau yang lainnya
        </p>
        <div className="mt-3">
          <button
            type="submit"
            className="h-[32px] w-[265px] bg-igBlue text-white text-[14px] font-semibold text-center rounded-[8px]"
          >
            Selanjutnya
          </button>
        </div>
        <div className="flex justify-center mt-3 lg:h-[65px] lg:items-center lg:mt-0">
          <Link href="/register" className="text-igBlue text-[14px] font-semibold">
            Kembali
          </Link>
        </div>
      </div>
      <div className="md:w-[350px] md:mx-auto">
        <HaveAccount haveAccount={true} />
      </div>
      <Footer />
    </>
  );
}
