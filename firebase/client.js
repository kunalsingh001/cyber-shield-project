// firebase/client.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRiTQzAtFNYFKYwUGnxvtMtmeUxrsCsBg",
  authDomain: "cyber-shield-6cd3b.firebaseapp.com",
  projectId: "cyber-shield-6cd3b",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
