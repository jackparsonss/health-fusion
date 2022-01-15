// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
// let app;
// if (firebase.getApps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app();
// }
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
