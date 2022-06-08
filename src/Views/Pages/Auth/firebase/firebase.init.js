import { initializeApp } from "firebase/app";

import {firebaseConfig} from './firebase.config'

// Initialize Firebase
const initializeFirebaseApp = () => {
  initializeApp(firebaseConfig);
}
export default initializeFirebaseApp