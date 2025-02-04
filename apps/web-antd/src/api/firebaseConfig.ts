import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNxg2PRNYTgpU8PU-wwE-DxyYWJcIRD7k",
    authDomain: "app-stream-dealer.firebaseapp.com",
    projectId: "app-stream-dealer",
    storageBucket: "app-stream-dealer.appspot.com",
    messagingSenderId: "407219674746",
    appId: "1:407219674746:web:5d1551605baedce65525c3",
    measurementId: "G-YFZSY88BSG"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };