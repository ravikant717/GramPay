// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrZ9wPE8MMr9DdYoFA2gc_dvjF60hBiRw",
  authDomain: "grampay-f3559.firebaseapp.com",
  projectId: "grampay-f3559",
  storageBucket: "grampay-f3559.firebasestorage.app",
  messagingSenderId: "941197818044",
  appId: "1:941197818044:web:e726b06a9863dd328638b9",
  measurementId: "G-0QZ3WESRCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);