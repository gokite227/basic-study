// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSXuaC6UtdEPPotfsTPouxOEf3o1nZCew",
  authDomain: "mwiter-2042d.firebaseapp.com",
  projectId: "mwiter-2042d",
  storageBucket: "mwiter-2042d.appspot.com",
  messagingSenderId: "294919860619",
  appId: "1:294919860619:web:ffbd81af6a438367af7f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();