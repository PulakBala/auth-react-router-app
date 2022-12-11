// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOv9Qve63Il_AzNrMVOACcWthUgMPvID8",
  authDomain: "auth-router-context-b6f4c.firebaseapp.com",
  projectId: "auth-router-context-b6f4c",
  storageBucket: "auth-router-context-b6f4c.appspot.com",
  messagingSenderId: "646985971100",
  appId: "1:646985971100:web:24e1ea3504c36cfa628459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default(app);