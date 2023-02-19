import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {

    apiKey: "AIzaSyD8PrhLaB_EvwHG5p3lDY75NsDBUcvxAVA",

    authDomain: "northern-herpetoculture-2cb73.firebaseapp.com",

    projectId: "northern-herpetoculture-2cb73",

    storageBucket: "northern-herpetoculture-2cb73.appspot.com",

    messagingSenderId: "439823067096",

    appId: "1:439823067096:web:db0369d39347c59e7134ad",

    measurementId: "G-FDNCLY852G"

};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =  await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

