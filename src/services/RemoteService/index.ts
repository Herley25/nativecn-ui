import {AxiosError} from 'axios';
import {getAxiosInstance} from '../axios/getAxiosInstance';
import {RequestProps} from './types/remoteServiceProps';

export class RemoteService {
  static async request<T>({method, module, resource}: RequestProps) {
    const axios = getAxiosInstance({module});

    switch (method) {
      default:
      case 'GET':
        try {
          return await axios.get<T>(resource);
        } catch (err) {
          const error = err as AxiosError;
          if (error.code !== 'ERR_NETWORK') {
            throw new Error(JSON.stringify(error.response));
          } else {
            throw new Error(JSON.stringify(error));
          }
        }
      case 'POST':
        try {
          return await axios.post<T>(resource);
        } catch (err) {
          const error = err as AxiosError;
          if (error.code !== 'ERR_NETWORK') {
            throw new Error(JSON.stringify(error.response));
          } else {
            throw new Error(JSON.stringify(error));
          }
        }
      case 'PUT':
        try {
          return await axios.put<T>(resource);
        } catch (err) {
          throw new Error(JSON.stringify((err as AxiosError).response));
        }
      case 'PATH':
        try {
          return await axios.put<T>(resource);
        } catch (err) {
          throw new Error(JSON.stringify((err as AxiosError).response));
        }
    }
  }
}
