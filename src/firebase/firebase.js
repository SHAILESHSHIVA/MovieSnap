import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "movieapp-d3f39.firebaseapp.com",
  projectId: "movieapp-d3f39",
  storageBucket: "movieapp-d3f39.appspot.com",
  messagingSenderId: "1033028166996",
  appId: "1:1033028166996:web:75128f7603c0964ae754c1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;