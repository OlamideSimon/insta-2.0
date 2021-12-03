// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOAYd22BqLmSVaeEYuQsnBjcZoo7mP99s",
  authDomain: "instagram-68e8e.firebaseapp.com",
  projectId: "instagram-68e8e",
  storageBucket: "instagram-68e8e.appspot.com",
  messagingSenderId: "50270147353",
  appId: "1:50270147353:web:922d56ab4577a8d89b2b88"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }