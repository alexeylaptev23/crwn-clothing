import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZVLC-XOIZjuKQgKJ3vv5GqO06SfanKr8',
  authDomain: 'crwn-db-2e1dd.firebaseapp.com',
  projectId: 'crwn-db-2e1dd',
  storageBucket: 'crwn-db-2e1dd.appspot.com',
  messagingSenderId: '509257593115',
  appId: '1:509257593115:web:a09791adc26fa1508f23be',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }

  }
  return userRef;  
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
