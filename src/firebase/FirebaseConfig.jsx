// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_9k1BEqXNz_rtqn4T4z2dpUVPrytJoLQ",
  authDomain: "prisma-digital-a9a53.firebaseapp.com",
  projectId: "prisma-digital-a9a53",
  storageBucket: "prisma-digital-a9a53.appspot.com",
  messagingSenderId: "834148987557",
  appId: "1:834148987557:web:5660dc67a8ca3feee2134c",
  measurementId: "G-BDBF1EJQS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);