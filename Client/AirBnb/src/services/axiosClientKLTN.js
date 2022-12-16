import axios from 'axios';
import { localStorageService } from './localStorageService';

export const TOKEN = process.env.REACT_APP_TOKEN;

export const httpsKLTN = axios.create({
  baseURL: process.env.REACT_APP_API_KLTN,
  headers: {
    // TokenCybersoft: TOKEN,
    Token: localStorageService.get('accessToken'),
    // Accept: 'multipart/form-data',
  },
});

// Add a request interceptor
httpsKLTN.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpsKLTN.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
