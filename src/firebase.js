import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCY12IlCNS-NthXFsiKwrCkShjjeXMs5zo",
  authDomain: "monkey-argentina.firebaseapp.com",
  projectId: "monkey-argentina",
  storageBucket: "monkey-argentina.appspot.com",
  messagingSenderId: "320029403982",
  appId: "1:320029403982:web:4bd585f9f2498a9b5ecc1f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;