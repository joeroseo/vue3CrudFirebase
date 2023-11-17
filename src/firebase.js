import firebase from "firebase/app";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCEJQ-F3xJsfg7GVTVrt0_-kCo8ZuqzpMM",
  authDomain: "vue3firebase-4bc86.firebaseapp.com",
  projectId: "vue3firebase-4bc86",
  storageBucket: "vue3firebase-4bc86.appspot.com",
  messagingSenderId: "49208601933",
  appId: "1:49208601933:web:13a0ee087b70fd2703db04"
};
firebase.initializeApp(config);

export default firebase.database();
