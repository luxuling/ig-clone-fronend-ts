import apiMock from '@lib/helper/apiMock';
import * as React from 'react';

interface IUserData {
  userData: {
    data: {
      data: object;
    };
  };
}
export default function useAuth() {
  const [userData, setUserData] = React.useState<null | IUserData>();
  React.useEffect(() => {
    const validateUser = async () => {
      try {
        const response = await apiMock.post('/auth/me');
        setUserData(response.data.data);
      } catch (error: any) {
        setUserData(null);
      }
    };
    validateUser();
  }, []);
  return userData;
}
