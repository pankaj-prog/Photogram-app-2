//  import * as  firebase from 'firebase'
// import {app} from 'firebase';
import firebase from 'firebase/app'
 import 'firebase/storage'
 import 'firebase/firestore';



var firebaseConfig = {
  apiKey: "AIzaSyA1AQvQqi0f5GdF7zH1wh6ZWk4Io65Zl5I",
  authDomain: "photogram-tminus.firebaseapp.com",
  projectId: "photogram-tminus",
  storageBucket: "photogram-tminus.appspot.com",
  messagingSenderId: "736301392294",
  appId: "1:736301392294:web:fd191e3bdd023899c8af67",
  measurementId: "G-Y57KG2XRC2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   export const projectStorage = firebase.storage();
   export  const projectFirestore = firebase.firestore();
   export const timestamp = firebase.firestore.FieldValue.serverTimestamp;



  

  