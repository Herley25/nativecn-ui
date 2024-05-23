import {useCallback, useEffect} from 'react';
import {useToast} from '../../components/Toast';
import {useLogin} from '../../hooks/useLogin';
import {ProfileProtocol} from './types/ProfileProtocol';

export const useProfileViewModel = (): ProfileProtocol => {
  const {loginData, getLogin, loginLoading, loginError} = useLogin();
  const {toast} = useToast();

  const handleClick = useCallback(() => {
    toast('Saved');
  }, [toast]);

  useEffect(() => {
    getLogin();
  }, [getLogin]);

  console.log('Email ==', loginData.email);
  console.log('Password ==', loginData.password);
  console.log('Date ==', loginData.date);

  return {
    loading: loginLoading || false,
    error: loginError?.message || '',
    email: loginData.email,
    date: loginData.date,
    password: loginData.password,
    handleClick,
  };
};
