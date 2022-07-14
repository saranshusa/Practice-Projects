import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQYTveQuIZ81BE-3XFY8bg1JolSrNS4ak",
  authDomain: "canada-4e37a.firebaseapp.com",
  projectId: "canada-4e37a",
  storageBucket: "canada-4e37a.appspot.com",
  messagingSenderId: "926496644703",
  appId: "1:926496644703:web:168d45e2f4af233eeec5ea",
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
