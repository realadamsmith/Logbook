import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOaB6dNiQHczUVU51NOxfzJf1uA1fvIgA",
  authDomain: "coordinators-2024.firebaseapp.com",
  projectId: "coordinators-2024",
  storageBucket: "coordinators-2024.appspot.com",
  messagingSenderId: "263405026107",
  appId: "1:263405026107:web:0c8c58a36b6a6e2b61951e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// export const auth = firebaseApp.auth();
// export const storage = firebaseApp.storage();

// export default firebaseApp;