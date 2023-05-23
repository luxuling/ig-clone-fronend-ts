import axios from 'axios';

const apiMock = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'Application/json',
  },
});

export default apiMock;
