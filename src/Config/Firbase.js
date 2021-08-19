import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAyMhMJ2MmdUh2yHSGPly7EbrzKpnYPhT8",
    authDomain: "insta-reels-67a56.firebaseapp.com",
    projectId: "insta-reels-67a56",
    storageBucket: "insta-reels-67a56.appspot.com",
    messagingSenderId: "721649708299",
    appId: "1:721649708299:web:7e0192f5a27214f12fc60e",
    measurementId: "G-0XJP8CZJWR"
  };

let firebaseApp=firebase.initializeApp(firebaseConfig);
export let firebaseAuth=firebaseApp.auth();
export let firebaseStorage=firebaseApp.storage();
export let firebaseDB=firebaseApp.firestore();
export let timeStamp = firebase.firestore.FieldValue.serverTimestamp;