export interface TSignUpData {
  name: string;
  id: string;
  password: string;
  phoneNumber: string;
}

export interface TCheckIDData {
  id: string;
}

import axios from 'axios';
import config from '../config';

export const signUp = async ({ name, id, password, phoneNumber }: TSignUpData) => {
  try {
    const response = await axios.post(`${config.apiBaseUrl}/auth/register`, {
      loginId: id,
      password,
      phoneNumber,
      name,
      agree: true,
      termsAgreed: true,
      locationAgreed: true,
      thirdPartyAgreed: true,
      marketingAgreed: true,
    });

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || '회원가입에 실패했습니다.');
  }
};

// 아이디 중복 확인 API
export const checkID = async ({ id }: TCheckIDData) => {
  try {
    const response = await axios.get(`${config.apiBaseUrl}/auth/check/login-id`, {
      params: {
        loginId: id,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || '아이디 중복 확인에 실패했습니다.');
  }
};
