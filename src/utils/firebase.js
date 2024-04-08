// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZaVf9y6sQEEOjEbVfHyv4qDf_ZdsEEU",
  authDomain: "netflixgpt-7faff.firebaseapp.com",
  projectId: "netflixgpt-7faff",
  storageBucket: "netflixgpt-7faff.appspot.com",
  messagingSenderId: "487393028077",
  appId: "1:487393028077:web:3e85060f818ce8a316e9e4",
  measurementId: "G-SF3W3G2WS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);


export const auth = getAuth();