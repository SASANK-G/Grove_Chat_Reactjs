import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBaEtWpM27JI46Q8JKVK29_tXIWb72KIfo",
  authDomain: "grovechat-3b394.firebaseapp.com",
  projectId: "grovechat-3b394",
  storageBucket: "grovechat-3b394.appspot.com",
  messagingSenderId: "1004413831236",
  appId: "1:1004413831236:web:6b215ad15e755f96ead411"
}).auth();