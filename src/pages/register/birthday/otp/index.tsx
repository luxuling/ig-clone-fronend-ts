import HaveAccount from '@components/button/haveAccount';
import LoginInput from '@components/input/loginInput';
import HomePageLayout from 'layouts/homepage';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export default function Otp(): React.ReactElement {
  const [otpValue, setOtpValue] = React.useState('');
  const otpInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\s/g, '');
    setOtpValue(e.target.value);
  };
  const submitOtpHandler = () => {
    console.log(otpValue);
  };
  return (
    <HomePageLayout title="Register-OTP">
      <>
        <div className="px-[28px] text-[14px] text-center flex flex-col items-center md:border md:border-lineGrey md:w-[350px] md:mx-auto md:mt-3 md:pb-[35px]">
          <Image
            alt="birthday logo"
            src="/assets/images/otpIcon.png"
            width={73}
            height={80}
            priority
          />
          <h1 className="text-[16px] font-semibold mt-2">Satu langkah lagi</h1>
          <p className="text-[14px] mt-3">Masukan 6-digit yang kami kirimkan ke: 09099090998.</p>
          <div className="mt-3">
            <LoginInput
              type="text"
              placeholder="######"
              id="otp-input"
              handler={otpInputHandler}
              maxLength={6}
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="h-[32px] w-[265px] bg-igBlue text-white text-[14px] font-semibold text-center rounded-[8px]"
              onClick={submitOtpHandler}
            >
              Konfirmasi
            </button>
          </div>
          <div className="flex items-center gap-2 justify-center mt-8">
            <Link href="/option/change/number" className="font-semibold text-igBlue">
              Ganti nomor
            </Link>
            <span className="h-[14px] w-[1.6px] bg-black block" />
            <Link href="/option/change/number" className="font-semibold text-igBlue">
              Minta Kode Baru
            </Link>
          </div>
        </div>
        <div className="md:w-[350px] md:mx-auto">
          <HaveAccount haveAccount={true} />
        </div>
      </>
    </HomePageLayout>
  );
}
