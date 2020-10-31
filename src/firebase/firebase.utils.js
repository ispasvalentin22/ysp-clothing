import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCNpEBIEhryQAM-SF1vH29dzXsyl-GfcXA",
  authDomain: "ysp-db.firebaseapp.com",
  databaseURL: "https://ysp-db.firebaseio.com",
  projectId: "ysp-db",
  storageBucket: "ysp-db.appspot.com",
  messagingSenderId: "109181167417",
  appId: "1:109181167417:web:17638c9f6464adfdfc6ae8",
  measurementId: "G-4C85RWKX45"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;