import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_SECRET_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_SECRET_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_SECRET_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_SECRET_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SECRET_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_SECRET_APPID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp