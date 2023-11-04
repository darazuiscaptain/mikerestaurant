// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-restaurant-e24f2.firebaseapp.com",
  projectId: "mern-restaurant-e24f2",
  storageBucket: "mern-restaurant-e24f2.appspot.com",
  messagingSenderId: "259814939669",
  appId: "1:259814939669:web:22085e1c6422218709c21c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);