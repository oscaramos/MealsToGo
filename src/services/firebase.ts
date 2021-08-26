import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxzLd_YaINJT_dx5T4QUpedHyEL0uoOw4",
  authDomain: "mealstogo-eeb03.firebaseapp.com",
  projectId: "mealstogo-eeb03",
  storageBucket: "mealstogo-eeb03.appspot.com",
  messagingSenderId: "277824969573",
  appId: "1:277824969573:web:3405cadd13c603ad969f8c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
