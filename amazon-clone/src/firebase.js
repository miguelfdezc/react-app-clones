import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDh780mldzodsETgchhqGgZ_84YT62hJ2Q",
  authDomain: "challenge-dc26d.firebaseapp.com",
  databaseURL: "https://challenge-dc26d.firebaseio.com",
  projectId: "challenge-dc26d",
  storageBucket: "challenge-dc26d.appspot.com",
  messagingSenderId: "392366272374",
  appId: "1:392366272374:web:273b970db5a32862845457",
  measurementId: "G-116S89GVLF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };