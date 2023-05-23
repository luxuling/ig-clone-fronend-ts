import HaveAccount from '@components/button/haveAccount';
import LoginInput from '@components/input/loginInput';
import apiMock from '@lib/helper/apiMock';
import HomePageLayout from 'layouts/CreateAccount';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUserSuccess, selectUserId } from 'redux/features/auth-slice';
import { RootState } from 'redux/store';
import toast from 'react-hot-toast';
import { RaceBy } from '@uiball/loaders';
import { useRouter } from 'next/router';

export default function Otp(): React.ReactElement {
  const userId = useSelector((state: RootState) => selectUserId(state));
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const [otpValue, setOtpValue] = React.useState('');
  const otpInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\s/g, '');
    setOtpValue(e.target.value);
  };

  const submitOtpHandler = async () => {
    try {
      setIsLoading(true);
      const response = await apiMock.post('/auth/otp/validate', {
        userId,
        otp: otpValue,
      });
      toast.success('Your otp has been validated', {
        position: 'top-right',
      });
      dispatch(
        registerUserSuccess({
          userId: response.data.id,
          token: response.data.token,
        })
      );
      setIsLoading(false);
      router.push('/login');
    } catch (error: any) {
      toast.error(`${error?.response?.data.message}`, {
        position: 'top-right',
      });
      setIsLoading(false);
    }
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
              className={`h-[32px] w-[265px] ${
                otpValue.length === 0 ? 'bg-igBlue/40' : 'bg-igBlue'
              } text-white text-[14px] font-semibold text-center rounded-[8px] flex justify-center items-center`}
              onClick={submitOtpHandler}
            >
              {isLoading ? <RaceBy color="white" /> : <>Konfirmasi</>}
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
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
          <HaveAccount haveAccount />
        </div>
      </>
    </HomePageLayout>
  );
}
