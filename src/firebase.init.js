// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzv1mnFluWGPTa32Ugauv3nIue_TJmKYg",
  authDomain: "wear-house.firebaseapp.com",
  projectId: "wear-house",
  storageBucket: "wear-house.appspot.com",
  messagingSenderId: "66706678553",
  appId: "1:66706678553:web:433b413f024bd4e9455b88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
