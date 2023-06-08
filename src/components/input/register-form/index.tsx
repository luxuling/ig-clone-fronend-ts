import LoginInput from '@components//input/loginInput';
import HaveAccount from '@components/button/haveAccount';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setRegisterState } from 'redux/features/register-data';
import validator from 'validator';
import toast from 'react-hot-toast';
import useFormChecker from 'hooks/form-checker';

export default function RegisterForm(): React.ReactElement {
  const dispatch = useDispatch();
  const router = useRouter();
  const [state, setState] = React.useState({
    account: '',
    fullName: '',
    userName: '',
    password: '',
  });
  const isDisabled = useFormChecker({ state });
  const registerFormHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const nextButton = (): void => {
    const isEmail = validator.isEmail(state.account);
    const isNumber = validator.isMobilePhone(state.account, 'id-ID');
    if (isEmail === (true as boolean)) {
      dispatch(
        setRegisterState({
          loggWith: 'email',
          account: state.account as string,
          fullName: state.fullName as string,
          userName: state.userName as string,
          password: state.password as string,
        })
      );
    } else if (isNumber) {
      dispatch(
        setRegisterState({
          loggWith: 'noHp',
          account: state.account as string,
          fullName: state.fullName as string,
          userName: state.userName as string,
          password: state.password as string,
        })
      );
    } else {
      toast.error('Please input the number or email correctly!', {
        position: 'top-right',
        duration: 3000,
      });
      return;
    }
    router.push('/register/birthday');
  };
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
        <p className="font-semibold text-slate-500 text-[17px] text-center">
          Buat akun untuk melihat foto dan video dari teman Anda.
        </p>
        <a
          href="http://localhost:5000/auth/facebook"
          className="h-[34px] w-[265px] rounded-[8px] bg-igBlue flex text-white items-center justify-center gap-1 mx-auto mt-[10px]"
        >
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
            placeholder="Nomor Ponsel atau Email"
            handler={registerFormHandler}
            id="account"
          />
          <LoginInput
            type="text"
            placeholder="Nama Lengkap"
            handler={registerFormHandler}
            id="fullName"
          />
          <LoginInput
            type="text"
            placeholder="Nama Pengguna"
            handler={registerFormHandler}
            id="userName"
          />
          <LoginInput
            type="password"
            placeholder="Kata Sandi"
            handler={registerFormHandler}
            id="password"
          />
        </div>
        <div className="mt-3">
          <p className="text-[12px] text-slate-500 text-center">
            Orang yang menggunakan layanan kami mungkin telah mengunggah informasi kontak Anda ke
            Instagram.
            <a href="#/" className="text-[#00376B]">
              Pelajari Selengkapna
            </a>
          </p>
        </div>
        <div className="mt-3">
          <p className="text-[12px] text-slate-500 text-center">
            Demgam mendaftar, berarti Anda menyetujui{' '}
            <a href="#/" className="text-[#00376B]">
              Kententuan, Kebijakan Privasi,
            </a>{' '}
            dan{' '}
            <a href="#/" className="text-[#00376B]">
              Kebijakan Cookie
            </a>{' '}
            kami.
          </p>
        </div>
        <div className="flex justify-center mt-3">
          <button
            type="submit"
            disabled={isDisabled}
            className={`h-[32px] w-[265px] ${
              isDisabled ? 'bg-igBlue/40' : 'bg-igBlue'
            } text-white text-[14px] font-semibold text-center rounded-[8px] flex justify-center items-center`}
            onClick={nextButton}
          >
            Daftar
          </button>
        </div>
      </div>
      <HaveAccount haveAccount />
    </div>
  );
}
