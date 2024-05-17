import {LoginProps, LoginPropsError} from '../../../state/Login/useLoginState';

export interface useLoginProtocol {
  loginData: LoginProps;
  loginLoading?: boolean;
  loginError?: LoginPropsError;
  getLogin: () => void;
  setLoginError: (error?: LoginPropsError) => void;
}
