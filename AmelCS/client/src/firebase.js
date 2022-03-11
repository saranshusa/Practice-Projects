import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmIikx3PSlYhHRzebwxztz_BAyhS3XqGE",
  authDomain: "amelcs-69118.firebaseapp.com",
  projectId: "amelcs-69118",
  storageBucket: "amelcs-69118.appspot.com",
  messagingSenderId: "189354738784",
  appId: "1:189354738784:web:1fe0635cbe1871ba626f05",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
