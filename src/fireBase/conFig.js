import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYjinqk74tLaKpqCisAGFZg5iNEy-Eg7c",
    authDomain: "hilda-7e553-2ff05.firebaseapp.com",
    projectId: "hilda-7e553",
    storageBucket: "hilda-7e553.appspot.com",
    messagingSenderId: "142677261288",
    appId: "1:142677261288:web:f9ab65c0c0cb0e803c025d"
  };

//   init firebase 
firebase.initializeApp(firebaseConfig)

// init services 
const projectStorage = firebase.firestore()

export { projectStorage }