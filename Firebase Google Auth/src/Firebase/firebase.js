import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuLQfwKdDpPjfePoceRm7CRO6a5se3vB0",
  authDomain: "react-2e3e6.firebaseapp.com",
  projectId: "react-2e3e6",
  storageBucket: "react-2e3e6.appspot.com",
  messagingSenderId: "386554875125",
  appId: "1:386554875125:web:38d0b17a14a08e3d7849bc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
