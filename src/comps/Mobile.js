import Name from "../items/Name";
import Contact from "../items/Contact";
import Button from "../items/Button";
import { refresh } from '../libraries/mamaia';

const loadEvents = () => {
    // ? Initialise the number of events when there aren't any of them:

    if(localStorage.getItem('totalNumber') === null) {
        localStorage.setItem('totalNumber', 0);
    }

    

    if(parseInt(localStorage.getItem('totalNumber')) > 0) {
        for(let counter = 0; counter < localStorage.getItem('totalNumber'); counter += 1) {
            localStorage.getItem('event' + counter + 'name');
            localStorage.getItem('event' + counter + 'date');
            localStorage.getItem('event' + counter + 'description');
        }
    }
}

let emailInput = document.getElementsByClassName('email');
let nameInput = document.getElementsByClassName('text-input');
let descriptionInput = document.getElementsByClassName('message');

const handleSubmit = () => {
    // ? Put all of the entered data back to the user: 

    document.getElementById('events-name').innerHTML = nameInput[1].value;
    document.getElementById('events-date').innerHTML = 'This event will take place on ' + emailInput[1].value + '!';
    document.getElementById('events-description').innerHTML = descriptionInput[1].value;

    // ? Save the new number of events in the local storage:

    let currentNumber = parseInt(localStorage.getItem('totalNumber'));
    localStorage.setItem("totalNumber", ++currentNumber);

    // ? Save all of the new data in the local storage:

    let newEventNumber = localStorage.getItem('totalNumber');
    localStorage.setItem('event' + newEventNumber + 'name', nameInput[1].value);
    localStorage.setItem('event' + newEventNumber + 'date', emailInput[1].value);
    localStorage.setItem('event' + newEventNumber + 'description', descriptionInput[1].value);
}

const Mobile = () => {
    let date = emailInput.length > 1 && emailInput[1].value ? emailInput[1].value : 'Your date will show up here when you submit it.';
    let name = nameInput.length > 1 && nameInput[1].value ? nameInput[1].value : "The event's name will show up here when you submit it.";
    let description = descriptionInput.length > 1 && descriptionInput[1].value ? descriptionInput[1].value : "Additional information about the event will show up here when you submit it.";
    
    const validate = () => emailInput[1].value === '' || nameInput.value === '' || descriptionInput.value === '' ? alert('Please, fill in all the information requested.') : handleSubmit();

    loadEvents();

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

                    <h1 className="heading" id='events-name'>{name}</h1>
                    <p className="description" id='events-date'>{date}</p>
                    <p className="description" id='events-description'>{description}</p>

                    <section className="btn-container">
                        <button className="arrow-btn"><i className="fas fa-long-arrow-alt-left"></i></button>
                        <button className="arrow-btn"><i className="fas fa-long-arrow-alt-right"></i></button>
                    </section>

                </article>
            </main>
        </div>
    )
}

export default Mobile; 
