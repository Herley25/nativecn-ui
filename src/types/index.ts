export type Environments = 'dev' | 'uat' | 'prod';

export type EnvironmentModule = 'login';

export type EnvironmentByEnvironmentModule = {
  [module in EnvironmentModule]: {
    [env in Environments]: string;
  };
};

export type ServiceType = 'remote' | 'local';

export interface GenericError {
  message: string;
}
