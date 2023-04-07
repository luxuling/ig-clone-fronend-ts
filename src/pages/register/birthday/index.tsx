import HaveAccount from '@components/button/haveAccount';
import BirthDayInput from '@components/input/birtday-input';
import HomePageLayout from 'layouts/homepage';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setBirthDate } from 'redux/features/register-data';

export default function BirthDay(): React.ReactElement {
  const router = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    day: '',
    month: '',
    year: '',
  });

  const birthdayInputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const nextButton = () => {
    dispatch(
      setBirthDate({
        birthDate: `${state.day}-${state.month}-${state.year}`,
      })
    );
    router.push('/register/birthday/otp');
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
              className="h-[32px] w-[265px] bg-igBlue text-white text-[14px] font-semibold text-center rounded-[8px]"
              onClick={nextButton}
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
      </>
    </HomePageLayout>
  );
}
