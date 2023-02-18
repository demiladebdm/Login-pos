// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3hrAh2jfrrvZhlj29LPbtCOdUpzLFt9o",
  authDomain: "formsubmit-ede96.firebaseapp.com",
  projectId: "formsubmit-ede96",
  storageBucket: "formsubmit-ede96.appspot.com",
  messagingSenderId: "778084044062",
  appId: "1:778084044062:web:e46538a81c4a8ad6260d0f",
  measurementId: "G-C4E6MEKHT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
// const auth = firebase.auth();
// export { auth };