import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, // TODO
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyCl_yYqrsTztlW7lb3hsRA3v3LeSCZ1alI",
  authDomain: "to-do-react-app-9d97b.firebaseapp.com",
  projectId: "to-do-react-app-9d97b",
  storageBucket: "to-do-react-app-9d97b.appspot.com",
  messagingSenderId: "725124762165",
  appId: "1:725124762165:web:7fc87292ef1c1201cc3f7c",
  measurementId: "G-KNQ05GMWG6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
