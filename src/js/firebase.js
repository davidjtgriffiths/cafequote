
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI4iGkihCng35-uhSYgj8u9o1zYTZ90iA",
  authDomain: "cafequote-93782.firebaseapp.com",
  projectId: "cafequote-93782",
  storageBucket: "cafequote-93782.appspot.com",
  messagingSenderId: "852354867335",
  appId: "1:852354867335:web:7bb238c873ee1637b7d822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}