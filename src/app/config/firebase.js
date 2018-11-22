import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBYNgLBGGaHsG_BXNfgbU7GIzY64f8PDE8",
  authDomain: "dankokun-cb5f0.firebaseapp.com",
  databaseURL: "https://dankokun-cb5f0.firebaseio.com",
  projectId: "dankokun-cb5f0",
  storageBucket: "dankokun-cb5f0.appspot.com",
  messagingSenderId: "12058523392"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
