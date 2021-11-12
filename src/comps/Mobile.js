import { useState } from 'react';
import Name from "../items/Name";
import Contact from "../items/Contact";
import Button from "../items/Button";
import { refresh } from '../libraries/reusable';

// ? Initialise event counter on first load:

try {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('totalNumber') === null) {
            localStorage.setItem('totalNumber', 1);
            localStorage.setItem('event0name', "The event 's name will show up here when you submit it.");
            localStorage.setItem('event0date', "Your date will show up here when you submit it.");
            localStorage.setItem('event0description', "Additional information about the event will show up here when you submit it.");
        }
    }
} catch(error) {
    throw new Error(error);
}

let emailInput = document.getElementsByClassName('email');
let nameInput = document.getElementsByClassName('text-input');
let descriptionInput = document.getElementsByClassName('message');

const handleSubmit = () => {
    try {
        if (typeof window !== 'undefined') {
            // ? Save the new number of events to the local storage:

            let currentNumber = parseInt(localStorage.getItem('totalNumber'));
            localStorage.setItem("totalNumber", ++currentNumber);

            // ? Save all of the new data to the local storage:

            let newEventNumber = localStorage.getItem('totalNumber') - 1;
            localStorage.setItem('event' + newEventNumber + 'name', nameInput[1].value);
            localStorage.setItem('event' + newEventNumber + 'date', 'This event will happen on ' + emailInput[1].value);
            localStorage.setItem('event' + newEventNumber + 'description', descriptionInput[1].value);

            alert('Your event has been saved!');
        }
    } catch(error) {
        throw new Error(error);
    }
}

const Mobile = () => {
    let [eventNumber, update] = useState(0);

    const validate = () => {
        try {
            emailInput[1].value === '' || nameInput.value === '' || descriptionInput.value === '' ? alert('Please, fill in all the information requested.') : handleSubmit();
        } catch(error) {
            throw new Error(error);
        }
    }

    const correctState = (direction) => {
        try {
            if (typeof window !== 'undefined') {
                // ? Check if the current event number is valid, correct it if it is not:

                let valid = true;

                if (eventNumber < 0) {
                    valid = false;
                }

                if (eventNumber > localStorage.getItem('totalNumber') - 1) {
                    valid = false;
                }

                if (!valid) {
                    if (direction === 'right') {
                        update(--eventNumber);
                    }

                    if (direction === 'left') {
                        update(++eventNumber);
                    }
                }
            }
        } catch(error) {
            throw new Error(error);
        }
    }

    let renderedName = localStorage.getItem('event' + eventNumber + 'name') || '';
    let renderedDate = localStorage.getItem('event' + eventNumber + 'date') || '';
    let renderedDescription = localStorage.getItem('event' + eventNumber + 'description') || '';

    return (
        <div className="mobile-container">

            <header className="fixed-header" onClick={refresh}>
                <Name />
            </header>

            <main className="mobile-content">

                <article className="contact-form-container">
                    <Contact 
                        firstInput='What is this event?'
                        secondInput='When does it start?'
                        secondInputType = 'date'
                        thirdInput='What additional information do you have?'
                    />
                    <span onClick={validate}>
                        <Button message="Set a Countdown!" />
                    </span>
                </article>

                <article className="saved-countdowns">

                    <h1 className="heading" id='events-name'>{renderedName}</h1>
                    <p className="description" id='events-date'>{renderedDate}</p>
                    <p className="description" id='events-description'>{renderedDescription}</p>

                    <section className="btn-container">
                        <button className="arrow-btn" onClick={() => {update(--eventNumber); correctState('left');}}><i className="fas fa-long-arrow-alt-left"></i></button>
                        <button className="arrow-btn" onClick={() => {update(++eventNumber); correctState('right');}}><i className="fas fa-long-arrow-alt-right"></i></button>
                    </section>

                </article>
            </main>
        </div>
    )
}

export default Mobile; 
