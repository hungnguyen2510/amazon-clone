import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfOBk6o-TrsLwfvyyueJq7yyD_c9wijz4",
  authDomain: "clone-31185.firebaseapp.com",
  projectId: "clone-31185",
  storageBucket: "clone-31185.appspot.com",
  messagingSenderId: "836518314968",
  appId: "1:836518314968:web:577879e6f8ba27f77328ad",
  measurementId: "G-3EHN5D1V7K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
