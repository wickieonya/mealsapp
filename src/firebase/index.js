import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7HNa56cVX7bqp2zYMc_I4HfATUhqsGdk",
    authDomain: "mealsapp-b5d49.firebaseapp.com",
    databaseURL: "https://mealsapp-b5d49-default-rtdb.firebaseio.com",
    projectId: "mealsapp-b5d49",
    storageBucket: "mealsapp-b5d49.appspot.com",
    messagingSenderId: "950859660393",
    appId: "1:950859660393:web:f1937d543c72d1652476f8",
    measurementId: "G-07CH832CRC"
};

const firebase = initializeApp(firebaseConfig);
const database = getFirestore(firebase);
// const database = firebase.firestore();

export {firebase, database}
