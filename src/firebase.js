// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyADurrXDonAoMM8CN1XBoiONkzsRsXKCaY",
  authDomain: "clone-6dda6.firebaseapp.com",
  projectId: "clone-6dda6",
  storageBucket: "clone-6dda6.appspot.com",
  messagingSenderId: "144183319062",
  appId: "1:144183319062:web:c81d00b423d25cd830b337",
  measurementId: "G-PPWTNT6MTL",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
