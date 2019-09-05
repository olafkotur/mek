import * as firebase from 'firebase';
import 'firebase/firestore';
import { config } from './config';

const firebaseConfig = {
  apiKey: config.firebase.API_KEY,
  authDomain: 'mekk-66142.firebaseapp.com',
  databaseURL: 'https://mekk-66142.firebaseio.com',
  projectId: 'mekk-66142',
  storageBucket: '',
  messagingSenderId: '435920612426',
  appId: '1:435920612426:web:4936d5c4232df07d',
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = firebase.auth();

export const formatErrorMessage = (code: string): string => {
  if (code === 'auth/network-request-failed') {
    return 'We can\'t seem to connect to the internet';
  }
  else if (code === '') {
    return '';
  }
  else {
    return 'Something unexpected happened, please try again';
  }
};
