import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAlGg9lw-e69qxW-iwMB6PuBlR6mLG9I9M",
  authDomain: "crwn-db-af567.firebaseapp.com",
  databaseURL: "https://crwn-db-af567.firebaseio.com",
  projectId: "crwn-db-af567",
  storageBucket: "crwn-db-af567.appspot.com",
  messagingSenderId: "481546405964",
  appId: "1:481546405964:web:e99b2b19c5ffe0cb3acce9",
  measurementId: "G-S4MZ43K586",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
