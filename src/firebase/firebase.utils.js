import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuLH0rFpJ1VkMMSscyzxwa_n-YEWq_EEE",
  authDomain: "crown-db123.firebaseapp.com",
  databaseURL: "https://crown-db123.firebaseio.com",
  projectId: "crown-db123",
  storageBucket: "",
  messagingSenderId: "309430077226",
  appId: "1:309430077226:web:fb0b216c94de5307"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
