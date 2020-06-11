import firebase from 'firebase';

const config  = {
    apiKey: "AIzaSyAbKa_5B5XYvnYAvHi76iB9h9Y_fH6KIzo",
    authDomain: "trello-71bd7.firebaseapp.com",
    databaseURL: "https://trello-71bd7.firebaseio.com",
    projectId: "trello-71bd7",
    storageBucket: "trello-71bd7.appspot.com",
    messagingSenderId: "411109624812",
    appId: "1:411109624812:web:958d1050e6875d4a648ec9",
    measurementId: "G-MGXB72F8PB"
};

firebase.initializeApp(config);
export default firebase;