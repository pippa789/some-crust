import firebase from 'firebase'


const firebaseConfig = {

    apiKey: "AIzaSyBS49ZX2JH3o1nzafdz24AGfM5TUcXqEdI",
    authDomain: "dorethy-s-somecrust.firebaseapp.com",
    projectId: "dorethy-s-somecrust",
    storageBucket: "dorethy-s-somecrust.appspot.com",
    messagingSenderId: "968918896014",
    appId: "1:968918896014:web:92842ec3fb56fcc74f68df"
  
  };

  firebase.initializeApp(firebaseConfig);
  export { firebase }