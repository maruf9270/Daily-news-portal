// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbwz55p4yie4XkyHSkjgxN0atAkj2ZLvw",
  authDomain: "daily-news-portal-60a57.firebaseapp.com",
  projectId: "daily-news-portal-60a57",
  storageBucket: "daily-news-portal-60a57.appspot.com",
  messagingSenderId: "465356632196",
  appId: "1:465356632196:web:16f09928f8df1b437a12d1",
  measurementId: "G-BFJWV6JDY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporting the app for letter use for authentication
export default app;