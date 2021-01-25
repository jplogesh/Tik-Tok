
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAneEWEhwvL_sZkLd5KuLsHhXzRNi5Z3ys",
    authDomain: "tictoc-clone-8abbe.firebaseapp.com",
    projectId: "tictoc-clone-8abbe",
    storageBucket: "tictoc-clone-8abbe.appspot.com",
    messagingSenderId: "172765133886",
    appId: "1:172765133886:web:387d387e1960783989a56f",
    measurementId: "G-BEXHCH57WP"
  };

  const firebaseApp =
   firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();

   export default db;