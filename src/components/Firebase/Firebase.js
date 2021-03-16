import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './Firebase.config';

export const initializeLogInFrameWork = () => {
    firebase.initializeApp(firebaseConfig);
};

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((res) => {
            const { displayName, email, photoUR } = res.user;
            return {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoUR,
                success: true,
                error: '',
            };
        })
        .catch((err) => {
            const errMessage = err.message;
            return { error: errMessage };
        });
};
