// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBtK6WVDcbq7GvdQhI5isD7AF7ZPrxaBzs",
    authDomain: "fir-71313.firebaseapp.com",
    projectId: "fir-71313",
    storageBucket: "fir-71313.appspot.com",
    messagingSenderId: "112085118271",
    appId: "1:112085118271:web:c3b4cb113b0e967cb9378a",
    measurementId: "G-1BF6L59NEP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  export {db,auth}