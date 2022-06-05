import Name from './Name.jsx';
import Contact from './Contact.jsx';
import Button from './Button.jsx';
import { useState } from 'react';
import { refresh } from '../scripts/scripts';
import DOMPurify from 'dompurify';
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

const initialiseStorage = () => {
    try {
        if (localStorage.getItem('totalNumber') !== null) return;

        localStorage.setItem('totalNumber', 1);
        localStorage.setItem('event0name', "The event 's name will show up here when you submit it.");
        localStorage.setItem('event0date', 'Your date will show up here when you submit it.');
        localStorage.setItem('event0description', 'Additional information about the event will show up here when you submit it.');
    } catch (error) {
        throw new Error(error);
    }
}

const saveData = () => {
    try {
        let currentNumber = parseInt(localStorage.getItem('totalNumber'));
        localStorage.setItem('totalNumber', ++currentNumber);
        
        let eventName = DOMPurify.sanitize(document.getElementsByClassName('text-input')[0].value);;
        let eventDate = DOMPurify.sanitize(document.getElementsByClassName('email')[0].value);
        let eventDescription = DOMPurify.sanitize(document.getElementsByClassName('message')[0].value);

        let newEventNumber = localStorage.getItem('totalNumber') - 1;
        localStorage.setItem('event' + newEventNumber + 'name', eventName);
        localStorage.setItem('event' + newEventNumber + 'date', 'This event will happen on ' + eventDate);
        localStorage.setItem('event' + newEventNumber + 'description', eventDescription);
        
        alert('Your event has been saved!');
    } catch (error) {
        throw new Error(error);
    }
}

const inspectInputs = () => {
    try {
        document.getElementsByClassName('email')[0].value === '' || document.getElementsByClassName('text-input')[0].value === '' || document.getElementsByClassName('message')[0].value === '' ? alert('Please, fill in all the information requested.') : saveData();
    } catch (error) {
        throw new Error(error);
    }
}

initialiseStorage();

const App = () => {
    let [eventNumber, update] = useState(0);

    const correctState = (direction) => {
        try {
            let valid = true;

            if (eventNumber < 0)  valid = false;
            if (eventNumber > localStorage.getItem('totalNumber') - 1)  valid = false;
            
            if (valid) return;

            if (direction === 'right') update(--eventNumber);
            if (direction === 'left') update(++eventNumber);
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <section className='mobile-container'>
            <header className='fixed-header' onClick={refresh}>
                <Name /> <span className='indicator icon done'>done</span>
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
                    <h1 className='heading' id='events-name'>
                        {localStorage.getItem('event' + eventNumber + 'name')}
                    </h1>
                    <p className='description' id='events-date'>
                        {localStorage.getItem('event' + eventNumber + 'date')}
                    </p>
                    <p className='description' id='events-description'>
                        {localStorage.getItem('event' + eventNumber + 'description')}
                    </p>
                    <section className='btn-container'>
                        <button className='arrow-btn' onClick={() => { update(--eventNumber); correctState('left'); }}><span className='icon arrow'>arrow_back</span></button>
                        <button className='arrow-btn' onClick={() => { update(++eventNumber); correctState('right'); }}><span className='icon arrow'>arrow_forward</span></button>
                    </section>
                </article>
            </main>
        </section>
    )
}

export default App; 
