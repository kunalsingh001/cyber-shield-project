import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRiTQzAtFNYFKYwUGnxvtMtmeUxrsCsBg",
  authDomain: "cyber-shield-6cd3b.firebaseapp.com",
  projectId: "cyber-shield-6cd3b",
  storageBucket: "cyber-shield-6cd3b.firebasestorage.app",
  messagingSenderId: "191686457942",
  appId: "1:191686457942:web:3078cb04a88c66b67c99f7",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
