import { LoginService } from '../services/login/login';
import { IStatusWithCode } from '../models/request';

export const LoginController = {
  createUserWithEmailAndPassword: async (email: string, password: string): Promise<IStatusWithCode> => {
    return await LoginService.createUserWithEmailAndPassword(email, password);
  },

  signInWithEmailAndPassword: async (email: string, password: string): Promise<IStatusWithCode> => {
    return await LoginService.signInWithEmailAndPassword(email, password);
  },

  sendPasswordRecoveryEmail: async (email: string): Promise<IStatusWithCode> => {
    return await LoginService.sendPasswordRecoveryEmail(email);
  },

  attemptAutomaticSignIn: async (): Promise<IStatusWithCode> => {
    return await LoginService.attemptAutomaticSignIn();
  },
};
