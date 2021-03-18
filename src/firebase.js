import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCF3oB4bSMEbDn6AffjZHsP_8InfrkztEY',
  authDomain: 'instashop-27b78.firebaseapp.com',
  projectId: 'instashop-27b78',
  storageBucket: 'instashop-27b78.appspot.com',
  messagingSenderId: '248112165915',
  appId: '1:248112165915:web:7ead5c45a88f75ba0b74be',
  measurementId: 'G-F4WKJGTW2B',
});

const auth = firebase.auth();

export { auth };
