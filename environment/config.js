import * as firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBALxCHhYq5MT7gE4wB-U-yT-haGmwswe0",
  authDomain: "mothmystics.firebaseapp.com",
  projectId: "mothmystics",
  storageBucket: "mothmystics.appspot.com",
  messagingSenderId: "945076045976",
  appId: "1:945076045976:web:35b863f679952cd14368ed",
  measurementId: "G-8D4LXM272V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);