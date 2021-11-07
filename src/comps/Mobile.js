import Name from "../items/Name";
import Contact from "../items/Contact";
import Button from "../items/Button";
import { refresh } from '../libraries/reusable';

let events = [];

const loadEvents = () => {
    // ? Initialise the number of events when there aren't any of them:

    if(localStorage.getItem('totalNumber') === null) {
        localStorage.setItem('totalNumber', 1);
        localStorage.setItem('event0name', 'Your date will show up here when you submit it.');
        localStorage.setItem('event0date', "The event's name will show up here when you submit it.");
        localStorage.setItem('event0description', "Additional information about the event will show up here when you submit it.");
    }

    // ? Read all of the events from local storage: 

    if(parseInt(localStorage.getItem('totalNumber')) > 0) {

        for(let counter = 1; counter < localStorage.getItem('totalNumber'); counter += 1) {

            let eventObj = {
                name: localStorage.getItem('event' + counter + 'name'),
                date: localStorage.getItem('event' + counter + 'date'),
                description: localStorage.getItem('event' + counter + 'description')
            }

            events.push(eventObj);
        }

        console.table(events);
    }

}

let emailInput = document.getElementsByClassName('email');
let nameInput = document.getElementsByClassName('text-input');
let descriptionInput = document.getElementsByClassName('message');

const handleSubmit = () => {
    // ? Save the new number of events in the local storage:

    let currentNumber = parseInt(localStorage.getItem('totalNumber'));
    localStorage.setItem("totalNumber", ++currentNumber);

    // ? Save all of the new data in the local storage:

    let newEventNumber = localStorage.getItem('totalNumber');
    localStorage.setItem('event' + newEventNumber + 'name', nameInput[1].value);
    localStorage.setItem('event' + newEventNumber + 'date', emailInput[1].value);
    localStorage.setItem('event' + newEventNumber + 'description', descriptionInput[1].value);

    alert('Your event has been saved!');
}

loadEvents();

const Mobile = () => {
    let eventNumeral = 0;
    let iterator = Math.abs(eventNumeral % localStorage.getItem('totalNumber'));

    const validate = () => emailInput[1].value === '' || nameInput.value === '' || descriptionInput.value === '' ? alert('Please, fill in all the information requested.') : handleSubmit();

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

                    <h1 className="heading" id='events-name'>{events[iterator].name}</h1>
                    <p className="description" id='events-date'>{events[iterator].date}</p>
                    <p className="description" id='events-description'>{events[iterator].description}</p>

                    <section className="btn-container">
                        <button className="arrow-btn" onClick={() => console.log(Math.abs(iterator -= 1))}><i className="fas fa-long-arrow-alt-left"></i></button>
                        <button className="arrow-btn" onClick={() => console.log(Math.abs(iterator += 1))}><i className="fas fa-long-arrow-alt-right"></i></button>
                    </section>

                </article>
            </main>
        </div>
    )
}

export default Mobile; 
