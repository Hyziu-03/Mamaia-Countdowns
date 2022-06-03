import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCmNk2q3k4i3dV9ZG2ZfZeTKnum70UaVas',
    authDomain: 'mamaia-countdowns.firebaseapp.com',
    projectId: 'mamaia-countdowns',
    storageBucket: 'mamaia-countdowns.appspot.com',
    messagingSenderId: '616823378468',
    appId: '1:616823378468:web:dc9e7312d9c95f94b1feb1',
    measurementId: 'G-NZJKV7EEZM'
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const Button = (props) => {
    const classes = 'btn hover touch-target ' + props.className;
    
    return (
        <button className={classes} tabIndex='-1'>{props.message}</button>
    );
};

export default Button;
