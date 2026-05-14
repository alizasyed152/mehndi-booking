import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARyspy0mT5cy6sebgZdqp9YEV8Ian31lg",
  authDomain: "mehndi-booking-491aa.firebaseapp.com",
  projectId: "mehndi-booking-491aa",
  storageBucket: "mehndi-booking-491aa.firebasestorage.app",
  messagingSenderId: "860276778825",
  appId: "1:860276778825:web:de8b91316567269c075c98",
  measurementId: "G-W9ETZR2P5B"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);