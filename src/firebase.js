import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCcaDRAfly2Sxgg-bzShN4BhuB94G8D6YI",
  authDomain: "mychat-c4144.firebaseapp.com",
  projectId: "mychat-c4144",
  storageBucket: "mychat-c4144.appspot.com",
  messagingSenderId: "319901457446",
  appId: "1:319901457446:web:a978d4303e9dc6eef35ae7"
  }).auth();