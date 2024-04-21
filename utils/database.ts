import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwHmIirTEBBSsYcE00UiqQaeqWI4eVBOg",
    authDomain: "newstech-f3066.firebaseapp.com",
    projectId: "newstech-f3066",
    storageBucket: "newstech-f3066.appspot.com",
    messagingSenderId: "39910636659",
    appId: "1:39910636659:web:d1dd857ecba53b8059fe06"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export {database};