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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  // console.log(firestore.doc("/users/IIhmvPk8XhJYz2Vgg5yc"));
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(`Error creating user ${error}`);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
