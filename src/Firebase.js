// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHD-ez_2p2LbHUIMOBKkt9l6ZS1lAqfC8",
//   authDomain: "adminproject-26d75.firebaseapp.com",
//   projectId: "adminproject-26d75",
//   storageBucket: "adminproject-26d75.appspot.com",
//   messagingSenderId: "1071874739647",
//   appId: "1:1071874739647:web:1139c921f72caf6d7fe50a",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
// import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHD-ez_2p2LbHUIMOBKkt9l6ZS1lAqfC8",
  authDomain: "adminproject-26d75.firebaseapp.com",
  projectId: "adminproject-26d75",
  storageBucket: "adminproject-26d75.appspot.com",
  messagingSenderId: "1071874739647",
  appId: "1:1071874739647:web:1139c921f72caf6d7fe50a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore
const provider = new GoogleAuthProvider();
export { auth, provider };
// export const firestore = firebase.firestore();
// export const analytics = firebase.analytics();
