// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXHFnxArRZ0cOxdiR4L7FCsXMglcQsXNg",
  authDomain: "project-4e681.firebaseapp.com",
  projectId: "project-4e681",
  storageBucket: "project-4e681.appspot.com",
  messagingSenderId: "1062505377263",
  appId: "1:1062505377263:web:4580c9e3045b831124da1a",
  measurementId: "G-CR41JPVH0J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
