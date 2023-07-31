import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2H7czjbLCEKRwna-PNCsIGL5p8Z7DYyM",
    authDomain: "music-2a11f.firebaseapp.com",
    projectId: "music-2a11f",
    storageBucket: "music-2a11f.appspot.com",
    appId: "1:434163304125:web:7dc525c2ef6633dfbe19d4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection('users');

export {
    auth,
    db,
    usersCollection
}