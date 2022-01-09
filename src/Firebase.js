import { initializeApp } from "firebase/app";
import {
    getFirestore}
    from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2UJvTQXsVc_7wyD3Q-sCFrrhOj9qaZY",
  authDomain: "cart-d1bbf.firebaseapp.com",
  projectId: "cart-d1bbf",
  storageBucket: "cart-d1bbf.appspot.com",
  messagingSenderId: "717412428232",
  appId: "1:717412428232:web:d99a8c32ca9fc19d1178fd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db=getFirestore();

export default db