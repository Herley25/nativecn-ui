import {useCallback} from 'react';
import {
  GetUniqueLoginProps,
  LoginModelProtocol,
  LoginResult,
  useLoginModelRaw,
} from './types/loginModel';
import {RemoteService} from '../../services/RemoteService';
import {GenericError} from '../../types';

export const useLoginModel = (): LoginModelProtocol => {
  const getUniqueLogin = useCallback(
    async ({
      service,
    }: GetUniqueLoginProps): Promise<useLoginModelRaw | undefined> => {
      if (service === 'remote') {
        try {
          const response = await RemoteService.request<LoginResult>({
            module: 'login',
            method: 'GET',
            resource: '/session',
          });
          console.log(
            'Chegou no Model ==',
            JSON.stringify(response?.data, null, 2),
          );
          return response?.data.data;
        } catch (err) {
          const error = err as GenericError;
          throw new Error(error.message);
        }
      }
    },
    [],
  );

  return {
    getUniqueLogin,
  };
};
