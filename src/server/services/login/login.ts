import { auth } from '../../../db';
import { IStatusWithMessage } from '../../models/request';

export const LoginService = {
  createUserWithEmailAndPassword: async (email: string, password: string): Promise<IStatusWithMessage> => {
    let res: IStatusWithMessage = { status: true, message: ''};
    await auth.createUserWithEmailAndPassword(email, password).catch((err: any) => {
      console.log(`registerWithEmailAndPassword: Error ${err.message}`);
      res = { status: false, message: err.message };
    });
    return res;
  },

  signInWithEmailAndPassword: async (email: string, password: string): Promise<IStatusWithMessage> => {
    let res: IStatusWithMessage = { status: true, message: ''};
    await auth.signInWithEmailAndPassword(email, password).catch( async (err: any) => {
      console.log(`loginWithUserNameAndPassword: Error ${err.message}`);
      res = { status: false, message: err.message };

    });
    return res;
  },

  sendPasswordRecoveryEmail: async (email: string) => {
    let res: IStatusWithMessage = { status: true, message: ''};
    await auth.sendPasswordResetEmail(email).catch((err) => {
      console.log(`sendPasswordRecoveryEmail: Error ${err.message}`);
      res = { status: false, message: err.message };
    });
    return res;
  },
};
