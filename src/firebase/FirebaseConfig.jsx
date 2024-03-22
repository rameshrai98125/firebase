import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCptgSd5217RjUVha0MTUaouLWkwkOVU9o",
  authDomain: "authdemo-d454e.firebaseapp.com",
  projectId: "authdemo-d454e",
  storageBucket: "authdemo-d454e.appspot.com",
  messagingSenderId: "19926214242",
  appId: "1:19926214242:web:19970da55994327f68933b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const fireDB = getFirestore(app);
