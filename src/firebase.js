import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHZde5Z1qTsv6nsVvgqXBbe7KnaqU3vcU",
  authDomain: "disney-plus-ntcoder.firebaseapp.com",
  projectId: "disney-plus-ntcoder",
  storageBucket: "disney-plus-ntcoder.appspot.com",
  messagingSenderId: "1076193284760",
  appId: "1:1076193284760:web:59c44022e6da70395736ed",
  measurementId: "G-D1DXV9JMPR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
