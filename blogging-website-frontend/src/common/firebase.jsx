import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuG_eDnSvFHGYveU9tJrAjCZIJL0YhqH0",
  authDomain: "react-js-blog-website-d0c74.firebaseapp.com",
  projectId: "react-js-blog-website-d0c74",
  storageBucket: "react-js-blog-website-d0c74.firebasestorage.app",
  messagingSenderId: "542346353034",
  appId: "1:542346353034:web:869980b175a43ac6289073"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user;
    })
    .catch((err) => {
        console.log(err);
    })

    return user;
}
