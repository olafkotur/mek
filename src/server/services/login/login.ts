import { auth } from '../../../db';

export const LoginService = {
  loginWithUserNameAndPassword: (email: string, password: string) => {
    console.log(`Logging user in with ${email} and ${password}`);
    auth.signInWithEmailAndPassword(email, password).catch((err: any) => {
      if (err.code === 'auth/user-not-found') {
        console.log('NEED TO CREATE NEW ACC');
        return true;
      }
      console.log(`loginWithUserNameAndPassword: Error ${err.message}`);
    });
    const res = true; // TODO: Add firebase authentication
    return res;
  },

  sendPasswordRecoveryEmail: (email: string) => {
    console.log(`Sending password recovery email to ${email}`);
    const res = true; // TODO: Add firebase password recovery
    return res;
  },
};
