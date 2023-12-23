import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKvVeAHDdGWIt5ObRGwgoOrKC-8yDU-uE",
  authDomain: "nwitter-reloaded-16b57.firebaseapp.com",
  projectId: "nwitter-reloaded-16b57",
  storageBucket: "nwitter-reloaded-16b57.appspot.com",
  messagingSenderId: "718462825667",
  appId: "1:718462825667:web:c7ed81f6e89f8a4e9d9e76",
  measurementId: "G-QJEVSC9DYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
