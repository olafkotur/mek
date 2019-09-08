import * as SecureStore from 'expo-secure-store';
import { auth } from '../api/db';
import { IStatusWithCode } from '../../models/request';
import { SlackService } from '../api/slack';
import { ICredentials } from '../../models/login';

export const LoginService = {
  createUserWithEmailAndPassword: async (email: string, password: string): Promise<IStatusWithCode> => {
    let res: IStatusWithCode = { status: true, code: ''};
    await auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      SlackService.sendMessage('`register` a new user has joined MEK! :rocket:', 'report');
      LoginService.storeSecureEmailAndPassword(email, password);
    })
    .catch((err: any) => {
      console.log(`registerWithEmailAndPassword: Error ${err.code}`);
      res = { status: false, code: err.code };
    });
    return res;
  },

  signInWithEmailAndPassword: async (email: string, password: string): Promise<IStatusWithCode> => {
    let res: IStatusWithCode = { status: true, code: ''};
    await auth.signInWithEmailAndPassword(email, password)
    .then(() => LoginService.storeSecureEmailAndPassword(email, password))
    .catch((err: any) => {
      console.log(`loginWithUserNameAndPassword: Error ${err.code}`);
      res = { status: false, code: err.code };

    });
    return res;
  },

  storeSecureEmailAndPassword: (email: string, password: string) => {
    SecureStore.setItemAsync('email', email);
    SecureStore.setItemAsync('password', password);
  },

  retrieveSecureEmailAndPassword: async (): Promise<ICredentials> => {
    const credentials: ICredentials = {
      email: await SecureStore.getItemAsync('email'),
      password: await SecureStore.getItemAsync('password'),
    };
    return credentials;
  },

  attemptAutomaticSignIn: async (): Promise<IStatusWithCode> => {
    const credentials: ICredentials | null = await LoginService.retrieveSecureEmailAndPassword();
    if (!credentials.email || !credentials.password) {
      return { status: false, code: '' };
    }
    return await LoginService.signInWithEmailAndPassword(credentials.email, credentials.password);
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
