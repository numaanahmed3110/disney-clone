import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCi_0l7Lg3v14jsjzwJFILZRjXXW-wYQ6w",
  authDomain: "yt-disney-clone-8c6bc.firebaseapp.com",
  projectId: "yt-disney-clone-8c6bc",
  storageBucket: "yt-disney-clone-8c6bc.appspot.com",
  messagingSenderId: "448999464090",
  appId: "1:448999464090:web:0bd3c7877984e99be2d323",
  measurementId: "G-L9DDLJV0JK",
};

// Initialize Firebase:
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
