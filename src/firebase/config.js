import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBySNvowIzp7GT74-xJXvDW2zhp4ccziH8",
    authDomain: "syncup-d4db2.firebaseapp.com",
    projectId: "syncup-d4db2",
    storageBucket: "syncup-d4db2.appspot.com",
    messagingSenderId: "368355332386",
    appId: "1:368355332386:web:709c9562e2ecb86de1157b"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };