import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD8ObIoEG4gML_68eEtxFIa8jM8o01zHvI",
    authDomain: "disneyplus-clone-d4b86.firebaseapp.com",
    projectId: "disneyplus-clone-d4b86",
    storageBucket: "disneyplus-clone-d4b86.appspot.com",
    messagingSenderId: "911576700007",
    appId: "1:911576700007:web:3db4a073f46ef3dd0230c2",
    measurementId: "G-MTV7SRG4YQ"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
  
export { auth, provider, storage };
export default db;