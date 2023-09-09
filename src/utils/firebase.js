// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4szN6y3MT8uc3WKRW6Ugg_7XuejGQvkw",
  authDomain: "netflixgpt-9ffba.firebaseapp.com",
  projectId: "netflixgpt-9ffba",
  storageBucket: "netflixgpt-9ffba.appspot.com",
  messagingSenderId: "629298365725",
  appId: "1:629298365725:web:53bf9ebf47abadc43ecdf4",
  measurementId: "G-5411VLZK4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();