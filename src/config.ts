import { FIREBASE_API_KEY } from 'react-native-dotenv';

interface IConfig {
  firebase: {
    API_KEY: string;
  };
}

export const config: IConfig = {
  firebase: {
    API_KEY: FIREBASE_API_KEY,
  },
};
