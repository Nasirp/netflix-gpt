/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQW4Td2zBepzkecieGTYBZ_bTfWITCjEk",
  authDomain: "netflix-gpt-a5313.firebaseapp.com",
  projectId: "netflix-gpt-a5313",
  storageBucket: "netflix-gpt-a5313.appspot.com",
  messagingSenderId: "372501337080",
  appId: "1:372501337080:web:442a1328f330c2fbe7fc0d",
  measurementId: "G-2DQYCB35KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();