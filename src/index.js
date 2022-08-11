import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaGR8wIMZZLURawNS55LzZG55ViLkXjcw",
  authDomain: "tiendaweb-marianomoyano-c22f3.firebaseapp.com",
  projectId: "tiendaweb-marianomoyano-c22f3",
  storageBucket: "tiendaweb-marianomoyano-c22f3.appspot.com",
  messagingSenderId: "524223790705",
  appId: "1:524223790705:web:b339937c2f3350c0a5a5d0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
