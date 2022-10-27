import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg7_8SJE56RCYVelm-DbZvqVTlYzF6Z0k",
  authDomain: "react-complete-7acc6.firebaseapp.com",
  projectId: "react-complete-7acc6",
  storageBucket: "react-complete-7acc6.appspot.com",
  messagingSenderId: "981134463099",
  appId: "1:981134463099:web:89e261493feffeea7692de",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInGoogleWithPopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
// export const getDocument = getDoc()
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // userSnapshot.exits()
  if (userSnapshot.exists()) {
    return userSnapshot;
  } else {
    const { email, displayName } = userAuth;
    const createAt = new Date();
    try {
      //   const createdUserSnapshot =
      await setDoc(userDocRef, {
        email,
        displayName,
        createAt,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
