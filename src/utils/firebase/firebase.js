import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
  writeBatch,
  query,
  getDocs,
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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInGoogleWithPopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();
// export const getDocument = getDoc()
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
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
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const createAuthUserWithSignUpForm = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithPlainCredentials = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutFromFirebase = async () => signOut(auth);

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

/**
 * firebase storage
 */

export const createCollectionAndDocument = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batchExec = writeBatch(db);
  objectsToAdd.forEach((item) => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batchExec.set(docRef, item);
  });
  await batchExec.commit();
};

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  // compose query
  const qSnapshot = await getDocs(q);

  const cateMap = qSnapshot.docs.reduce((acc, doc) => {
    const { title, items } = doc.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return cateMap;
};
