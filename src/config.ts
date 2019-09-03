interface IConfig {
  firebase: object;
}

export const config: IConfig = {
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'mekk-66142.firebaseapp.com',
    databaseURL: 'https://mekk-66142.firebaseio.com',
    projectId: 'mekk-66142',
    storageBucket: '',
    messagingSenderId: '435920612426',
    appId: '1:435920612426:web:4936d5c4232df07d',
  },
};
