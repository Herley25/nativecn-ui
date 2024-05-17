import {ServiceType} from '../../../types';

export interface useLoginModelRaw {
  email: string;
  password: string;
  date: string;
}

export interface LoginResult {
  data: useLoginModelRaw;
  statusCode: number;
  message: string;
}

export interface GetUniqueLoginProps {
  service: ServiceType;
}

export interface LoginModelProtocol {
  getUniqueLogin: ({
    service,
  }: GetUniqueLoginProps) => Promise<useLoginModelRaw | undefined>;
}
