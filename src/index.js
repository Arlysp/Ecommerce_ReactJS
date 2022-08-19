import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATsNY4tDH41iBIkeZgNpaete54VE4lreg",
  authDomain: "coderhouse-ecommerce-474f1.firebaseapp.com",
  projectId: "coderhouse-ecommerce-474f1",
  storageBucket: "coderhouse-ecommerce-474f1.appspot.com",
  messagingSenderId: "399807419799",
  appId: "1:399807419799:web:044be9dde611194a3a20d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);








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
