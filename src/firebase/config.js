import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAdP3pXiSIK2687sfXXVPAq59xvYH3yKJo',
  authDomain: 'thepmsite-8b29b.firebaseapp.com',
  projectId: 'thepmsite-8b29b',
  storageBucket: 'thepmsite-8b29b.appspot.com',
  messagingSenderId: '718938165909',
  appId: '1:718938165909:web:4d0709dd3629468003c19c',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
