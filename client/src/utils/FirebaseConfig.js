import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDK9_Jhq1WqiJQqmkVr6kEkveBic9K8WQs",
    authDomain: "conversify-pro.firebaseapp.com",
    projectId: "conversify-pro",
    storageBucket: "conversify-pro.appspot.com",
    messagingSenderId: "488384990585",
    appId: "1:488384990585:web:9795ceef2e13fbb9c933a8",
    measurementId: "G-TGDBM9V9DK"
  };
  
  const app = initializeApp(firebaseConfig);
 export const firebaseAuth = getAuth(app);