import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD5CqzwW07RCrYpG8xi4ipqowxn6h7bXdQ",
  authDomain: "colon-51fe9.firebaseapp.com",
  projectId: "colon-51fe9",
  storageBucket: "colon-51fe9.appspot.com",
  messagingSenderId: "137962430904",
  appId: "1:137962430904:web:b56c1ee8e0fff2d7b46f4d",
  measurementId: "G-DQ0M55TWPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };