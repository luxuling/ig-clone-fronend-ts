/* eslint-disable react/jsx-props-no-spreading */
import useAuth from 'hooks/authorize';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from 'redux/features/auth-slice';

export default function withAuth<P extends object>(Page: React.ComponentType<P>) {
  function AuthHOC(props: P) {
    const router = useRouter();
    const dispatch = useDispatch();
    const isAuthenticate = useAuth() as object;
    React.useEffect(() => {
      if (isAuthenticate === null) {
        router.push('/login');
      }
      dispatch(setUserData({ userData: isAuthenticate }));
    }, [isAuthenticate]);

    return isAuthenticate ? <Page {...props} /> : null;
  }
  return AuthHOC;
}
