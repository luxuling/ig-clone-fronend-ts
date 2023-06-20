import apiMock from '@lib/helper/apiMock';
import { UserData } from 'interfaces/redux/user_data';
import * as React from 'react';

export default function useAuth() {
  const [userData, setUserData] = React.useState<null | UserData>();
  React.useEffect(() => {
    const validateUser = async () => {
      try {
        const response = await apiMock.get('/auth/me');
        setUserData(response.data.data);
      } catch (error: any) {
        setUserData(null);
      }
    };
    validateUser();
  }, []);
  return userData;
}
