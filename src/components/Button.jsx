import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCmNk2q3k4i3dV9ZG2ZfZeTKnum70UaVas',
    authDomain: 'mamaia-countdowns.firebaseapp.com',
    projectId: 'mamaia-countdowns',
    storageBucket: 'mamaia-countdowns.appspot.com',
    messagingSenderId: '616823378468',
    appId: '1:616823378468:web:dc9e7312d9c95f94b1feb1',
    measurementId: 'G-NZJKV7EEZM'
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const db = getFirestore(app);

const googleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider)
        .catch((error) => console.error(error.message));
}

const handleGoogleLogin = (src) => {
    if (src === 'secondary') googleLogin();
}

const Button = (props) => {
    const classes = 'btn hover touch-target ' + props.className;

    return (
        <button className={classes} tabIndex='-1' type='submit' onClick={handleGoogleLogin(props.src)}>{props.message}</button>
    );
};

export default Button;
