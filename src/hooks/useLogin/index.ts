import {useCallback} from 'react';
import {useLoginModel} from '../../models/useLoginModel';
import {LoginProps, useLoginState} from '../../state/Login/useLoginState';
import {useLoginProtocol} from './types/useLoginProtocol';
import {useLoginModelRaw} from '../../models/useLoginModel/types/loginModel';
import {GenericError} from '../../types';

export const useLogin = (): useLoginProtocol => {
  const {
    loginPropsData: loginData,
    setLoginPropsData,
    loading: loginLoading,
    setLoading,
    error: loginError,
    setError: setLoginError,
  } = useLoginState();

  const {getUniqueLogin} = useLoginModel();

  const loginMapper = useCallback(
    ({email, password, date}: useLoginModelRaw): LoginProps => {
      return {
        email,
        password,
        date,
      };
    },
    [],
  );

  const getLogin = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getUniqueLogin({
        service: 'remote',
      });
      if (response) {
        const Mapper = loginMapper(response);
        setLoginPropsData(Mapper);
        setLoginError(undefined);
      }
      console.log('Chegou no Hook ==', JSON.stringify(response, null, 2));
    } catch (err) {
      const error = err as GenericError;
      setLoginError({
        code: 'REQUEST_ERROR',
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  }, [
    getUniqueLogin,
    loginMapper,
    setLoading,
    setLoginError,
    setLoginPropsData,
  ]);

  return {loginData, getLogin, setLoginError, loginLoading, loginError};
};
