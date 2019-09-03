import * as firebase from 'firebase';
import 'firebase/firestore';
import { config } from './config';

firebase.initializeApp(config.firebase);

export const db = firebase.firestore();
