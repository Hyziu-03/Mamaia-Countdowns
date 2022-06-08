import Name from './Name.jsx';
import Contact from './Contact.jsx';
import Button from './Button.jsx';
import { refresh } from '../scripts/scripts';
import DOMPurify from 'dompurify';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

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
const db = getFirestore(app);

const auth = getAuth();
auth.languageCode = 'pl';

const login = () => {
    const user = auth.currentUser; 
    
    if(user === null) {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .catch((error) => console.error(error));
    }
}

const authenticate = (user) => {
    try {
        const icon = document.getElementById('icon');

        let result = user ? 'done' : 'close';
        if (result === 'close') login();

        if (result === 'done') {
            icon.classList.add('done');
            icon.classList.remove('close');
            icon.innerText = 'done';
        }
        else {
            icon.classList.add('close');
            icon.classList.remove('done');
            icon.innerText = 'close';
        }
    } catch(error) {
        console.error(error);
    }
}

const saveData = async() => {
    try {
        const id = auth.currentUser.uid;
        // eslint-disable-next-line no-unused-vars
        const newEvent = await addDoc(collection(db, id), {
            name: DOMPurify.sanitize(document.getElementsByClassName('text-input')[0].value),
            date: DOMPurify.sanitize(document.getElementsByClassName('email')[0].value),
            description: DOMPurify.sanitize(document.getElementsByClassName('message')[0].value)
        });
        alert('Your event has been saved!');
    } catch (error) {
        throw new Error(error);
    }
}

const inspectInputs = () => {
    try {
        const emailIsEmpty = document.getElementsByClassName('email')[0].value === '';
        const dateIsEmpty = document.getElementsByClassName('text-input')[0].value === '';
        const informationIsEmpty = document.getElementsByClassName('message')[0].value === '';
        const condition = emailIsEmpty || dateIsEmpty || informationIsEmpty;
        condition ? alert('Please, fill in all the information requested.') : saveData();
    } catch (error) {
        throw new Error(error);
    }
}

const readData = async () => {
    try {
        let events = [];
        const id = '65sx06pnuWh020P0Or7NEPWwZHo1';
        const querySnapshot = await getDocs(collection(db, id));
        querySnapshot.forEach((event) => events.push(event.data()));
    } catch(error) {
        console.error(error);
    }
}

const App = () => {
    return (
        <section className='mobile-container'>
            <header className='fixed-header'>
                <Name onClick={refresh}/> <span onClick={authenticate} id='icon' className='indicator icon close'>close</span>
            </header> 
            <main className='mobile-content'>
                <article className='contact-form-container'>
                    <Contact 
                        firstInput='What is this event?'
                        secondInput='When does it start?'
                        secondInputType = 'date'
                        thirdInput='What additional information do you have?'
                    />
                    <span onClick={inspectInputs}>
                        <Button message='Set a Countdown!' />
                    </span>
                </article>
                <article className='saved-countdowns'>
                    <h1 className='heading' id='events-name'></h1>
                    <p className='description' id='events-date'></p>
                    <p className='description' id='events-description'></p>
                    <section className='btn-container'>
                        <button className='arrow-btn'><span className='icon arrow'>arrow_back</span></button>
                        <button className='arrow-btn'><span className='icon arrow'>arrow_forward</span></button>
                    </section>
                </article>
            </main>
        </section>
    )
}

export default App; 
