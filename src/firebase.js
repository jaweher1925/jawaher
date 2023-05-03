// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbtsDKkSsUl9HyktIl_unannHY8GLtBok",
  authDomain: "tigmee-52545.firebaseapp.com",
  projectId: "tigmee-52545",
  storageBucket: "tigmee-52545.appspot.com",
  messagingSenderId: "114583996263",
  appId: "1:114583996263:web:77ae87395331e540eb51c2",
  measurementId: "G-NCDEF32XSC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
