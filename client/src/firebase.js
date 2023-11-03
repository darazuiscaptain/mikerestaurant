// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lucky-reactor-404005.firebaseapp.com",
  projectId: "lucky-reactor-404005",
  storageBucket: "lucky-reactor-404005.appspot.com",
  messagingSenderId: "745614203657",
  appId: "1:745614203657:web:695b5438fbac7f06a451d8",
  measurementId: "G-0G7XLC0Q53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);