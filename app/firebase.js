// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3YQqWpjUqrwdxII3jJJVXYMbWUEpCgis",
  authDomain: "practica-77a9c.firebaseapp.com",
  projectId: "practica-77a9c",
  storageBucket: "practica-77a9c.appspot.com",
  messagingSenderId: "192025631857",
  appId: "1:192025631857:web:fb97978231498517878fd0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
