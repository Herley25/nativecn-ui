import {AxiosError} from 'axios';
import {getAxiosInstance} from '../axios/getAxiosInstance';
import {RequestProps} from './types/remoteServiceProps';

export class RemoteService {
  static async request<T>({method, module, resource}: RequestProps) {
    const axios = getAxiosInstance({module});

    try {
      switch (method) {
        case 'GET':
          return await axios.get<T>(resource);
        case 'POST':
          return await axios.post<T>(resource);
        case 'PUT':
          return await axios.put<T>(resource);
        case 'PATH':
          return await axios.patch<T>(resource);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    } catch (err) {
      const error = err as AxiosError;
      if (error.code !== 'ERR_NETWORK') {
        throw new Error(JSON.stringify(error.response?.data));
      } else {
        throw new Error(JSON.stringify(error));
      }
    }
  }
}
