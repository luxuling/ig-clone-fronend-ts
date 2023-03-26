/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default class AuthClient {
  static async Register(
    registerWith: string,
    value: string,
    fullName: string,
    userName: string,
    password: string,
  ): Promise<any> {
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        [registerWith]: value,
        userName,
        fullName,
        password,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
