import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './Firebase.config';

export const initializeLogInFrameWork = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();

export const handleSignIn = (provider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            const { displayName, email, photoURL } = res.user;
            return {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true,
                error: '',
            };
        })
        .catch((err) => {
            return { error: err.message };
        });
};
