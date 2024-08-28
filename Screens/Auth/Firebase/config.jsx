import { initializeApp } from "firebase/app";
import { getAuth,initializeAuth, getReactNativePersistence  } from "firebase/auth";
import {getFirestore} from  'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDitUvd5aRqAZZTgglgAtzbLmwRaZsaocY",
    authDomain: "eduai-e697a.firebaseapp.com",
    projectId: "eduai-e697a",
    storageBucket: "eduai-e697a.appspot.com",
    messagingSenderId: "194791811455",
    appId: "1:194791811455:web:db5962deafb8e6cdc2924a",
    measurementId: "G-KYN78R71LX"
  };
const app = initializeApp(firebaseConfig);

const persistence = getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, { persistence });

const db = getFirestore(app);

const storage = getStorage(app);

export { auth, db, storage };