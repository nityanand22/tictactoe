// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEmtqsqtU3td1akVZ0Ncka9WasQEo0zCQ",
  authDomain: "e-commerce-deefc.firebaseapp.com",
  projectId: "e-commerce-deefc",
  storageBucket: "e-commerce-deefc.firebasestorage.app",
  messagingSenderId: "655590800785",
  appId: "1:655590800785:web:5b387373f95a6b7557ee30",
  measurementId: "G-JM2X3WJTTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
