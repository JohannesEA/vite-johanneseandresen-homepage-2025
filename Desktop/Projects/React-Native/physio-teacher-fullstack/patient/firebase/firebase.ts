// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQQCZlDvGfZ19U3xiNEFl9iljnFJyws_8",
  authDomain: "physio-teacher.firebaseapp.com",
  projectId: "physio-teacher",
  storageBucket: "physio-teacher.appspot.com",
  messagingSenderId: "152695784814",
  appId: "1:152695784814:web:ae332d761c58ab102aed7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const handleSignUp = async (email: string, password: string) => {
  console.log("Ny bruker");
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user is created: ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error when creating user: ", errorCode, errorMessage);
    });
};

const handleLogin = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user is signed in", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error when signing in: ", errorCode, errorMessage);
    });
};

const handleLogoutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log("Bruker er logget ut");
    })
    .catch((error) => {
      console.log("Feil ved utlogging av bruker: ", error);
    });
};

export { handleLogin, handleSignUp, handleLogoutUser, auth };
