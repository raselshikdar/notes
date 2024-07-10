import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU-thzFz47d1YvnzxCvLKtSThl8DhLoQA",
  authDomain: "rs-notes.firebaseapp.com",
  projectId: "rs-notes",
  storageBucket: "rs-notes.appspot.com",
  messagingSenderId: "702940054474",
  appId: "1:702940054474:web:7cf055794b9ec991fe8533",
  measurementId: "G-FJHH8G2RT7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
