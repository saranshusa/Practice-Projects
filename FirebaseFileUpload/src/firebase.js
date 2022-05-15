import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpkJtBDVxN6X6pRGpmcwFkuEKwU3MKKPY",
  authDomain: "fir-file-upload-2ab0c.firebaseapp.com",
  projectId: "fir-file-upload-2ab0c",
  storageBucket: "fir-file-upload-2ab0c.appspot.com",
  messagingSenderId: "220476346696",
  appId: "1:220476346696:web:999d0ea263759ea5f9237d",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
