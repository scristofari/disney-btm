import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDiHd5WgcdgPAKhfN5-1VoweaC_tsvX3Zw",
    authDomain: "socialtv-4e099.firebaseapp.com",
    databaseURL: "https://socialtv-4e099.firebaseio.com",
    storageBucket: "socialtv-4e099.appspot.com",
    messagingSenderId: "357983380946"
};

export const firebaseApp = firebase.initializeApp(config)
export const firebaseAuth = firebaseApp.auth()
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
 