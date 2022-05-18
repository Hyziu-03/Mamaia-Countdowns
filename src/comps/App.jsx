import Name from '../items/Name';
import Contact from '../items/Contact';
import Button from '../items/Button';
import { useState } from 'react';
import { refresh } from '../libraries/reusable';

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
        
        let newEventNumber = localStorage.getItem('totalNumber') - 1;
        localStorage.setItem('event' + newEventNumber + 'name', document.getElementsByClassName('text-input')[0].value);
        localStorage.setItem('event' + newEventNumber + 'date', 'This event will happen on ' + document.getElementsByClassName('email')[0].value);
        localStorage.setItem('event' + newEventNumber + 'description', document.getElementsByClassName('message')[0].value);
        
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

initialiseStorage()

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
                <Name />
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
                        <button className='arrow-btn' onClick={() => {update(--eventNumber); correctState('left');}}><i className='fas fa-long-arrow-alt-left'></i></button>
                        <button className='arrow-btn' onClick={() => {update(++eventNumber); correctState('right');}}><i className='fas fa-long-arrow-alt-right'></i></button>
                    </section>
                </article>
            </main>
        </section>
    )
}

export default App; 
