import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyBFE1_HWohYUsY_EJxAmC2DVJe-wp4pGq4",
  authDomain: "crwn-db-a87e4.firebaseapp.com",
  databaseURL: "https://crwn-db-a87e4.firebaseio.com",
  projectId: "crwn-db-a87e4",
  storageBucket: "crwn-db-a87e4.appspot.com",
  messagingSenderId: "26991074719",
  appId: "1:26991074719:web:50812ff60f1feb900631aa",
  measurementId: "G-LTMSZ99PWY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (collectionKey, itemToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  //batch all the request and send them together
  const batch = firestore.batch();
  itemToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });

  return await batch.commit();
};

export const createUserProfileDocument = async (userAuth, extraparameters) => {
  if (!userAuth) return;

  //userRef give the refrence of the document stored at the given location
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //.get() is one of the crud operations.(Read Operation)
  //It checks for any data with the given user refrence
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraparameters,
      });
    } catch (err) {
      console.log("error in creating a user", err);
    }
  }
  return userRef;
};

export const convertCollectionSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      unsuscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
