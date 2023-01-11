import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();