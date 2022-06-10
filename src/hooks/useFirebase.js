import initializeFirebaseApp from '../Views/Pages/Auth/firebase/firebase.init'
import { getAuth,  signInWithPopup, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/reducers/userSlice";
import { useState } from 'react';

initializeFirebaseApp()


const useFirebase = () => {
  
    const auth = getAuth()
    const dispatch = useDispatch()
    const googleProvider = new GoogleAuthProvider()
    const [error, setError] = useState('')


    // Regisgter With Emain and Password 
    const emailSignUp = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const userData = {
          name: user.displayName,
          email: user.email,
        }
        dispatch(login(userData))
      })
      .catch((error) => {
        setError(error.message)
      });
    }
    

    // Login with Emain and Password 
    const emailSignIn = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          name: user.displayName,
          email: user.email
        }
        dispatch(login(userData))
      })
      .catch((error) => {
        setError(error.message);
      });
    }

    // Sign In Using Google 
    const signInGoogle = () => {
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const userData = {
          name: user.displayName,
          email: user.email
        }
        dispatch(login(userData))
      }).catch((error) => {
        setError(error.message)
      });
    }

    // Sing Out 
    const logOut = () =>{
      signOut(auth).then(() => {
        dispatch(logout())
      }).catch((error) => {
        setError(error.message)
      });
    }

    return {
        emailSignUp,
        emailSignIn,
        signInGoogle,
        logOut,
        error,
    }
}

export default useFirebase;
