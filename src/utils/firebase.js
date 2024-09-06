// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIO_gJIC4w9pyIn7FIAJl4OifYRKhh5bs",
  authDomain: "netflix-gpt-522da.firebaseapp.com",
  projectId: "netflix-gpt-522da",
  storageBucket: "netflix-gpt-522da.appspot.com",
  messagingSenderId: "853286557102",
  appId: "1:853286557102:web:15b71b327801d1480ca43f",
  measurementId: "G-WQJKXRDZG0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
