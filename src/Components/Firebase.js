import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_iaBFuxKktk_04FQ3bK2MRkWaN1JICNo",
  authDomain: "site-17cff.firebaseapp.com",
  projectId: "site-17cff",
  storageBucket: "site-17cff.appspot.com",
  messagingSenderId: "446210335266",
  appId: "1:446210335266:web:0e1d2cabad840bed80e07b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export  { app , auth};