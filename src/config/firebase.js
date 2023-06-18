import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDQXFoGpcM2ZXfjPxGfO8oGMPR7tT6Vcmo",
  authDomain: "tiktok---jornada-f4ee7.firebaseapp.com",
  projectId: "tiktok---jornada-f4ee7",
  storageBucket: "tiktok---jornada-f4ee7.appspot.com",
  messagingSenderId: "459625339425",
  appId: "1:459625339425:web:8e7ba53188aa7b1cc7a160"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;