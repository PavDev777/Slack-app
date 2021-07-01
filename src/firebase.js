import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUFYb1nVg1s6DF-Eyvg0_-rEdiMHlzr88",
  authDomain: "slack-clone-ff376.firebaseapp.com",
  projectId: "slack-clone-ff376",
  storageBucket: "slack-clone-ff376.appspot.com",
  messagingSenderId: "390314737482",
  appId: "1:390314737482:web:63798959aee227a6714bb3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };
