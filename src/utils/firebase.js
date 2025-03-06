// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5MsPvKWTomzWj3WnnwsdEsLMBHrIPVd0",
  authDomain: "netflix-47288.firebaseapp.com",
  projectId: "netflix-47288",
  storageBucket: "netflix-47288.firebasestorage.app",
  messagingSenderId: "366811318641",
  appId: "1:366811318641:web:d0bb604d2364416c2e8ed0",
  measurementId: "G-RKJFB78HNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();