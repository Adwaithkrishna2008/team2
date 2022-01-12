import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAvM0yWq8twR8OYHYKz4dpclmKh6qSFDcA",
    authDomain: "vote-c-60.firebaseapp.com",
    databaseURL: "https://vote-c-60-default-rtdb.firebaseio.com",
    projectId: "vote-c-60",
    storageBucket: "vote-c-60.appspot.com",
    messagingSenderId: "566774748499",
    appId: "1:566774748499:web:9aa7c2bd39409b0d217da6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();