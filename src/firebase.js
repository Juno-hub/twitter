import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5JQdVViLsXL1cPofeEMH68PzQpikmp2Y",
  authDomain: "twitter-clone-f9bbc.firebaseapp.com",
  databaseURL: "https://twitter-clone-f9bbc.firebaseio.com",
  projectId: "twitter-clone-f9bbc",
  storageBucket: "twitter-clone-f9bbc.appspot.com",
  messagingSenderId: "1033290088840",
  appId: "1:1033290088840:web:dc59869baa1f884481ba3d",
};

export default firebase.initializeApp(firebaseConfig);
