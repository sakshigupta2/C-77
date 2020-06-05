import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBIb9jpPcimECpnbV2Kc-9Br3xCvJtlcBk",
    authDomain: "booksanta-e35f2.firebaseapp.com",
    databaseURL: "https://booksanta-e35f2.firebaseio.com",
    projectId: "booksanta-e35f2",
    storageBucket: "booksanta-e35f2.appspot.com",
    messagingSenderId: "718441511898",
    appId: "1:718441511898:web:ebbd97242a8a87d4f49ee3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();