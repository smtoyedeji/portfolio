console.log(234)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA64Pt5QgmkaYxPLOWPUFRGHsp3JL1r1sw",
  authDomain: "myportfolio-e85c6.firebaseapp.com",
  projectId: "myportfolio-e85c6",
  storageBucket: "myportfolio-e85c6.appspot.com",
  messagingSenderId: "541793888057",
  appId: "1:541793888057:web:878a36bea22d820be12ae8",
  measurementId: "G-PVWWXEEB96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();