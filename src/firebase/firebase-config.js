// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-thzFz47d1YvnzxCvLKtSThl8DhLoQA",
  authDomain: "rs-notes.firebaseapp.com",
  projectId: "rs-notes",
  storageBucket: "rs-notes.appspot.com",
  messagingSenderId: "702940054474",
  appId: "1:702940054474:web:7cf055794b9ec991fe8533",
  measurementId: "G-FJHH8G2RT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
