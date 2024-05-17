import {environment} from '../../environments/environment';
import {EnvironmentModule} from '../../types';
import axios from 'axios';
import {baseUrls} from './baseUrl';

export interface GetAxiosInstanceProps {
  module: EnvironmentModule;
}

const makeBaseUrl = (module: EnvironmentModule) => {
  if (environment.prod) {
    return baseUrls[module].prod;
  } else if (environment.uat) {
    return baseUrls[module].uat;
  } else {
    baseUrls[module].dev;
  }
};

export const getAxiosInstance = ({module}: GetAxiosInstanceProps) => {
  return axios.create({
    baseURL: makeBaseUrl(module),
  });
};
