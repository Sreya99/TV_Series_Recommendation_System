import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBynvAO64nQTiFHhL9_MNgCIDPTsk7J3R0",
    authDomain: "authentication-tutorial-de25a.firebaseapp.com",
    projectId: "authentication-tutorial-de25a",
    storageBucket: "authentication-tutorial-de25a.appspot.com",
    messagingSenderId: "645551150488",
    appId: "1:645551150488:web:4b2fc689fc53057af807ed",
    measurementId: "G-CRC39FDDT4"
  };

const app= initializeApp(firebaseConfig);

export  const auth = getAuth(app);