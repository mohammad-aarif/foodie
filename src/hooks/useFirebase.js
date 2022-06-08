import initializeFirebaseApp from '../Views/Pages/Auth/firebase/firebase.init'
import { getAuth,  signInWithPopup, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userSlice";

initializeFirebaseApp()

const auth = getAuth()

const useFirebase = () => {

    const dispatch = useDispatch()
    const googleProvider = new GoogleAuthProvider()
    // Regisgter With Emain and Password 
    const emailSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        const userData = {
          name: user.displayName,
          email: user.email,
        }
        dispatch(login(userData))
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
    }
    
    // Login with Emain and Password 
    const emailSignIn = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const userData = {
          name: user.displayName,
          email: user.email
        }
        dispatch(login(userData))
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
    }
    const signInGoogle = () => {
      signInWithPopup(auth, googleProvider)
      .then((result) => {

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        const userData = {
          name: user.displayName,
          email: user.email
        }
        dispatch(login(userData))
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
      });
    }

    const logOut = () =>{
      signOut(auth).then(() => {
        
      }).catch((error) => {
        // An error happened.
      });
    }

    return {
        emailSignUp,
        emailSignIn,
        signInGoogle,
        logOut
    }
}

export default useFirebase;
