import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCD-h5ayUAyGIUx_2iUOoqVTluBibAUFQY",
  authDomain: "crown-clothing-e45ae.firebaseapp.com",
  projectId: "crown-clothing-e45ae",
  storageBucket: "crown-clothing-e45ae.appspot.com",
  messagingSenderId: "483012479201",
  appId: "1:483012479201:web:8335c946d4c0b0888b8fa0",
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
