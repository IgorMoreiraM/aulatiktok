import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCKh4RcVpoEbLm7damPwX36t5rVr76PEbs",
  authDomain: "tiktok-jornada-7c5a0.firebaseapp.com",
  projectId: "tiktok-jornada-7c5a0",
  storageBucket: "tiktok-jornada-7c5a0.appspot.com",
  messagingSenderId: "23233093299",
  appId: "1:23233093299:web:441d87f681bc685e599ac6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;