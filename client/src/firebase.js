// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-57c3b.firebaseapp.com",
  projectId: "mern-estate-57c3b",
  storageBucket: "mern-estate-57c3b.appspot.com",
  messagingSenderId: "37159199442",
  appId: "1:37159199442:web:7db4a82da8cc17f550c30b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
