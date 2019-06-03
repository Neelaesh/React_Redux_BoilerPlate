// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAw4LdyupChlTX1GhkCR74labFV73z3aXo",
  authDomain: "photowall-da5d0.firebaseapp.com",
  databaseURL: "https://photowall-da5d0.firebaseio.com",
  projectId: "photowall-da5d0",
  storageBucket: "",
  messagingSenderId: "1011693189118",
  appId: "1:1011693189118:web:dc592eea86a352c7"
};
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database};