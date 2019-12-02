import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBr04QGkJSFU3NS8RqrqujOZ7aEm_Ve6sU",
  authDomain: "fitness-club-5af54.firebaseapp.com",
  databaseURL: "https://fitness-club-5af54.firebaseio.com",
  projectId: "fitness-club-5af54",
  storageBucket: "fitness-club-5af54.appspot.com",
  messagingSenderId: "891651244876",
  appId: "1:891651244876:web:e4472d17212a7d4b5b05e9",
  measurementId: "G-1520WVK9TV"
};

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  export default firebase;