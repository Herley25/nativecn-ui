import {EnvironmentModule} from '../../../types';

export type HTTPMethods =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATH'
  | 'OPTIONS';

export type AxiosRequestHeaders = {
  [x: string]: string | number | boolean;
};

export interface RequestProps {
  module: EnvironmentModule;
  method: HTTPMethods;
  resource: string;
  params?: Record<string, unknown>;
  body?: unknown;
  headers?: AxiosRequestHeaders;
}
