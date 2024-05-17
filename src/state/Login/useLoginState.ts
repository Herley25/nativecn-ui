import {create} from 'zustand';

export interface LoginProps {
  email: string;
  password: string;
  date: string;
}

export interface LoginPropsError {
  message?: string;
  code?: string;
}

interface LoginPropsState {
  loading: boolean;
  error?: LoginPropsError;
  loginPropsData: LoginProps;
  setLoading: (loading: boolean) => void;
  setError: (error?: LoginPropsError) => void;
  setLoginPropsData: (loginPropsData: LoginProps) => void;
}

export const useLoginState = create<LoginPropsState>(set => ({
  loading: false,
  error: undefined,
  loginPropsData: {} as LoginProps,
  setLoading: (loading: boolean) => set({loading}),
  setError: (error?: LoginPropsError) => set({error}),
  setLoginPropsData: (loginPropsData: LoginProps) => {
    return set(() => ({loginPropsData}));
  },
}));
