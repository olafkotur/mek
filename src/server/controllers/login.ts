import { LoginService } from '../services/login/login';

export const LoginController = {
  sendPasswordRecoveryEmail: async (email) => {
    return await LoginService.sendPasswordRecoveryEmail(email)
  },

  loginWithUserNameAndPassword: async (email, password) => {
    return await LoginService.loginWithUserNameAndPassword(email, password);
  },
}