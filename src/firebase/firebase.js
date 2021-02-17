import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyArC1cJtHlPUrk2O_d8gMREkaJNKlBSV38",
  authDomain: "netflix-3cc53.firebaseapp.com",
  projectId: "netflix-3cc53",
  storageBucket: "netflix-3cc53.appspot.com",
  messagingSenderId: "260804516359",
  appId: "1:260804516359:web:18b93772269ea84977a8a2",
  measurementId: "G-0MBS15CGGD"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = firebaseApp.auth()