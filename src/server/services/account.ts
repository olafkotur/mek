import { IStatusWithCode } from '../models/request';
import { DbService } from './db';

export const AccountService = {
  updateUserPassword: async (password: string): Promise<IStatusWithCode> => {
    let res: IStatusWithCode = { status: true, code: ''};
    await DbService.auth.currentUser.updatePassword(password)
    .catch((err: any) => {
      console.log(`updateUserPassword: Error ${err.code}`);
      res = { status: false, code: err.code };
    });
    return res;
  },
};
