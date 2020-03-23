import firebase from "firebase/app"
import "firebase/firebase-auth"
import "firebase/firebase-firestore"

const config = {
    apiKey: "AIzaSyBFE1_HWohYUsY_EJxAmC2DVJe-wp4pGq4",
    authDomain: "crwn-db-a87e4.firebaseapp.com",
    databaseURL: "https://crwn-db-a87e4.firebaseio.com",
    projectId: "crwn-db-a87e4",
    storageBucket: "crwn-db-a87e4.appspot.com",
    messagingSenderId: "26991074719",
    appId: "1:26991074719:web:50812ff60f1feb900631aa",
    measurementId: "G-LTMSZ99PWY"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (userAuth, extraparameters) => {
    if (!userAuth) return;

    //userRef give the refrence of the document stored at the given location
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //.get() is one of the crud operations.(Read Operation)
    //It checks for any data with the given user refrence
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...extraparameters
            })
        } catch (err) {
            console.log("error in creating a user", err)
        }
    }
    console.log(userRef)
    return userRef;

}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;