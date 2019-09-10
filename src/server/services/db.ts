import * as firebase from 'firebase';
import 'firebase/firestore';
import { config } from '../../config';
import { SlackService } from './slack';

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: 'mekk-66142.firebaseapp.com',
  databaseURL: 'https://mekk-66142.firebaseio.com',
  projectId: 'mekk-66142',
  storageBucket: '',
  messagingSenderId: '435920612426',
  appId: '1:435920612426:web:4936d5c4232df07d',
};
firebase.initializeApp(firebaseConfig);

export const DbService = {

  db: firebase.firestore(),
  auth: firebase.auth(),

  formatErrorMessage: (code: string): string => {
    if (code === 'auth/network-request-failed') {
      return 'We can\'t seem to connect to the internet';
    }
    else if (code === 'auth/email-already-in-use') {
      return 'This email address is already in use';
    }
    else if (code === 'auth/user-not-found') {
      return 'This email address is not registered';
    }
    else if (code === 'auth/invalid-email') {
      return 'This email seems to be badly formatted';
    }
    else if (code === 'auth/wrong-password') {
      return 'You\'ve entered the wrong password';
    }
    else if (code === 'auth/weak-password') {
      return 'This password is too weak';
    }
    else {
      SlackService.sendMessage(`\`SlackService.formatErrorMessage\` Unexpected error code - ${code}`, 'log');
      return 'Something unexpected happened, a message has been sent to the developers';
    }
  },
};
