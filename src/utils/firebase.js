// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWeaVCHvR6QKY2zh2ngAcxRwceUfAbA1Q",
  authDomain: "my-portfolio-a40cb.firebaseapp.com",
  projectId: "my-portfolio-a40cb",
  storageBucket: "my-portfolio-a40cb.appspot.com",
  messagingSenderId: "367463550789",
  appId: "1:367463550789:web:7fc88802d07dc9c593382c",
  measurementId: "G-MMGQ93FTZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
