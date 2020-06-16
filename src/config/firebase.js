import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crwn-clothing-64732.firebaseapp.com",
  databaseURL: "https://crwn-clothing-64732.firebaseio.com",
  projectId: "crwn-clothing-64732",
  storageBucket: "crwn-clothing-64732.appspot.com",
  messagingSenderId: "504008534346",
  appId: "1:504008534346:web:d2a9408244569a102839b3",
  measurementId: "G-M7TFJ5SEFQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData = {}) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
