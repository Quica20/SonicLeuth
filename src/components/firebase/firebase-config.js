// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk_Dmb_qs-t4URjr9VEYyrriPcVWpD-Wc",
  authDomain: "sonicleuth.firebaseapp.com",
  projectId: "sonicleuth",
  storageBucket: "sonicleuth.appspot.com",
  messagingSenderId: "119973474088",
  appId: "1:119973474088:web:20ec8ea4550033afe2aa1d",
  measurementId: "G-6HPVERSQDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)