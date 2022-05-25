import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCfuBIcUOsKM1MlieV84ssr5vhhVM5OQiA",
  authDomain: "pbf-kuis2-mahasiswa.firebaseapp.com",
  projectId: "pbf-kuis2-mahasiswa",
  storageBucket: "pbf-kuis2-mahasiswa.appspot.com",
  messagingSenderId: "216690813674",
  appId: "1:216690813674:web:3b7f6e3081a908ac024593",
  measurementId: "G-YNP2GNJNNH"

};

firebase.initializeApp(config);
firebase.firestore().settings(settings);
const auth = getAuth();

export default firebase;
export function register(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}
