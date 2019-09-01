import LoginService from '../services/login/login';

export default LoginController = {
  sendPasswordRecoveryEmail: async (email) => {
    return await LoginService.sendPasswordRecoveryEmail(email)
  },

  loginWithUserNameAndPassword: async (email, password) => {
    return await LoginService.loginWithUserNameAndPassword(email, password);
  },
}