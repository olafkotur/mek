import { auth } from '../api/db';
import { IStatusWithCode } from '../../models/request';
import { SlackService } from '../api/slack';

export const LoginService = {
  createUserWithEmailAndPassword: async (email: string, password: string): Promise<IStatusWithCode> => {
    let res: IStatusWithCode = { status: true, code: ''};
    await auth.createUserWithEmailAndPassword(email, password)
    .then(() => SlackService.sendMessage('`register` a new user has joined MEK! :rocket:', 'report'))
    .catch((err: any) => {
      console.log(`registerWithEmailAndPassword: Error ${err.code}`);
      res = { status: false, code: err.code };
    });
    return res;
  },

  signInWithEmailAndPassword: async (email: string, password: string): Promise<IStatusWithCode> => {
    let res: IStatusWithCode = { status: true, code: ''};
    await auth.signInWithEmailAndPassword(email, password).catch((err: any) => {
      console.log(`loginWithUserNameAndPassword: Error ${err.code}`);
      res = { status: false, code: err.code };

    });
    return res;
  },

  sendPasswordRecoveryEmail: async (email: string) => {
    let res: IStatusWithCode = { status: true, code: ''};
    await auth.sendPasswordResetEmail(email).catch((err) => {
      console.log(`sendPasswordRecoveryEmail: Error ${err.code}`);
      res = { status: false, code: err.code };
    });
    return res;
  },
};
