import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADsRCdq_MCbJiaGhJFbffjqgxDGNdhQOs",
    authDomain: "ecommece-coder.firebaseapp.com",
    projectId: "ecommece-coder",
    storageBucket: "ecommece-coder.appspot.com",
    messagingSenderId: "89225874128",
    appId: "1:89225874128:web:285bb2947a7d6d13286cd5"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);