// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVNBuLuUR-KGKgI0VVb7XY3XDcSOoYTMY",
  authDomain: "litenetflixgpt.firebaseapp.com",
  projectId: "litenetflixgpt",
  storageBucket: "litenetflixgpt.appspot.com",
  messagingSenderId: "350188843693",
  appId: "1:350188843693:web:c1dafac295e7fe39ac0c24",
  measurementId: "G-L427F1S8EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
