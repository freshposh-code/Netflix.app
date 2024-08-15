// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Ds3oWm8e6FklljoRncgjaGWelDuc4Ds",
  authDomain: "netflixclone-auth.firebaseapp.com",
  projectId: "netflixclone-auth",
  storageBucket: "netflixclone-auth.appspot.com",
  messagingSenderId: "575076249059",
  appId: "1:575076249059:web:1efd4ed12a08a8eef844d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
