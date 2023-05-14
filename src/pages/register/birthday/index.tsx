import HaveAccount from '@components/button/haveAccount';
import BirthDayInput from '@components/input/birtday-input';
import apiMock from '@lib/helper/apiMock';
import HomePageLayout from 'layouts/CreateAccount';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { getRegisterState } from 'redux/features/register-data';
import { RootState } from 'redux/store';
import { registerUserStart } from 'redux/features/auth-slice';
import { RaceBy } from '@uiball/loaders';
import useFormChecker from 'hooks/form-checker';

export default function BirthDay(): React.ReactElement {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const registerData = useSelector((state: RootState) => getRegisterState(state));
  const [state, setState] = React.useState({
    day: '',
    month: '',
    year: '',
  });
  const isDisabled = useFormChecker({ state });
  const birthdayInputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const nextButton = async () => {
    setLoading(true);
    if (state.day.length === 0 || state.month.length === 0 || state.year.length === 0) {
      toast.error('Please select your birtday', {
        position: 'top-right',
        duration: 3000,
      });
      return;
    }
    try {
      if (registerData.loggWith === 'email') {
        const response = await apiMock.post('/auth/register', {
          userName: registerData.userName,
          fullName: registerData.fullName,
          email: registerData.account,
          birth: `${state.day}-${state.month}-${state.year}`,
          password: registerData.password,
        });
        console.log(response);
        dispatch(registerUserStart({ userId: response.data.id }));
      } else if (registerData.loggWith === 'noHp') {
        const response = await apiMock.post('/auth/register', {
          userName: registerData.userName,
          fullName: registerData.fullName,
          noHp: registerData.account,
          birth: `${state.day}-${state.month}-${state.year}`,
          password: registerData.password,
        });
        dispatch(registerUserStart({ userId: response.data.id }));
      }
      toast.success('Success sending OTP', {
        position: 'top-right',
        duration: 3000,
      });
      router.push('/register/birthday/otp');
    } catch (error: any) {
      toast.error(`${error?.response?.data.message}`, {
        position: 'top-right',
        duration: 3000,
      });
    }
    setLoading(false);
  };
  return (
    <HomePageLayout title="Register-BirthDay">
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
          <BirthDayInput inputHandler={birthdayInputHandler} />
          <p className="text-[12px] text-slate-500 mt-2">Anda harus memasukan tanggal lahir</p>
          <p className="text-[12px] text-slate-500 mt-3">
            Gunakan tanggal lahir Anda sendiri, bahkan jika ini adalah akun untuk bisnis, hewan
            peliharaan, atau yang lainnya
          </p>
          <div className="mt-3">
            <button
              type="submit"
              className={`h-[32px] w-[265px] ${
                isDisabled ? 'bg-igBlue/40' : 'bg-igBlue'
              } text-white text-[14px] font-semibold text-center rounded-[8px] flex justify-center items-center`}
              onClick={nextButton}
            >
              {loading ? (
                <RaceBy size={80} lineWeight={5} speed={1.4} color="white" />
              ) : (
                'Selanjutnya'
              )}
            </button>
          </div>
          <div className="flex justify-center mt-3 lg:h-[65px] lg:items-center lg:mt-0">
            <Link href="/register" className="text-igBlue text-[14px] font-semibold">
              Kembali
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
