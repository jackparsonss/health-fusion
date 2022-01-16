// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChjCS2hXTB6OBYAM_PLb49uvU4taSNpIw",
    authDomain: "health-fusion.firebaseapp.com",
    projectId: "health-fusion",
    storageBucket: "health-fusion.appspot.com",
    messagingSenderId: "630308695888",
    appId: "1:630308695888:web:2142a38f3445d5cfcd4655",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Authentication
const auth = getAuth();

// Firestore Database
const db = getFirestore();

export { auth, db };
