import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAux5UCLlZ2opYTlehCD1evJgqB2btwAjQ",
  authDomain: "chat-application-60b09.firebaseapp.com",
  databaseURL: "https://chat-application-60b09-default-rtdb.firebaseio.com",
  projectId: "chat-application-60b09",
  storageBucket: "chat-application-60b09.appspot.com",
  messagingSenderId: "818980315486",
  appId: "1:818980315486:web:e23759989501431e446fcf",
  measurementId: "G-70VBJVGPQS"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// https://chat-application-60b09-default-rtdb.firebaseio.com/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
