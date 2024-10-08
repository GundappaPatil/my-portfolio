// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI-cmd4XaPZ6cXR1YMZAL_7IsrX0RxgKc",
  authDomain: "my-portfolio-bd034.firebaseapp.com",
  projectId: "my-portfolio-bd034",
  storageBucket: "my-portfolio-bd034.appspot.com",
  messagingSenderId: "447403906528",
  appId: "1:447403906528:web:08c4e560dd77ccce220785",
  measurementId: "G-WGTZE24182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);