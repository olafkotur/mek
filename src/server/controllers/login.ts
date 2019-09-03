import { LoginService } from '../services/login/login';

export const LoginController = {
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    return await LoginService.createUserWithEmailAndPassword(email, password);
  },

  signInWithEmailAndPassword: async (email: string, password: string) => {
    return await LoginService.signInWithEmailAndPassword(email, password);
  },

  sendPasswordRecoveryEmail: async (email: string) => {
    return await LoginService.sendPasswordRecoveryEmail(email);
  },
};
