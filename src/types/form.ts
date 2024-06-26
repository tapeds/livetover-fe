import { RegisterOptions } from 'react-hook-form';

export type InputProps = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  validation?: RegisterOptions;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type RegisterProps = {
  username: string;
  name: string;
  email: string;
  password: string;
};

export type loginResponse = {
  accessToken: string;
  refreshToken: string;
  resultCode: string;
};

export type registerResponse = {
  resultMessage: {
    en: string;
  };
  resultCode: string;
};
