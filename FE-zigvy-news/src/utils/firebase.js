import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCAO7COCk9ZtXQbydm7iU9bSNRON77AgI",
  authDomain: "zigvynews.firebaseapp.com",
  databaseURL: "https://zigvynews.firebaseio.com",
  projectId: "zigvynews",
  storageBucket: "zigvynews.appspot.com",
  messagingSenderId: "992620053307",
  appId: "1:992620053307:web:423a75eb230a8e301f2d1e",
  measurementId: "G-P16Z4LPFK7",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
