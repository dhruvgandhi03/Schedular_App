// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaOMPn6eeYzgJPQ8KoyDo5N2uA3r0QoV4",
  authDomain: "schedular-c0529.firebaseapp.com",
  projectId: "schedular-c0529",
  storageBucket: "schedular-c0529.appspot.com",
  messagingSenderId: "48900866162",
  appId: "1:48900866162:web:5d3ae488fb59a58ecdc2eb",
  measurementId: "G-XTFELTYVFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
