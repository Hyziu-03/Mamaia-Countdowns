// React
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// 3rd party libraries
import { refresh } from "isola/browser";
import DOMPurify from "dompurify";

// Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
} from "firebase/firestore";

// Components
import Name from "components/interface/Name.jsx";
import Contact from "components/interface/Contact.jsx";
import Button from "components/interface/Button.jsx";

// Scripts
import {
    getTodaysDate,
    thisYear,
} from "scripts/date";
import {
    firebaseConfig,
    id
} from "scripts/firebase";
import {
    currentEventIndex, 
    populateEvents, 
    notify
} from "scripts/index";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
auth.languageCode = "pl";

function App() {
    let [data, updateData] = useState([]);

    function receiveEvents() {
        getEvents()
            .then((result) => updateData(result))
            .catch((error) => console.error(error));
        ReactDOM.render(
            <div className="arrow-navigation-container">
                <button className="arrow-btn" onClick={decrementEventIndex}>
                    <span className="icon arrow">arrow_back</span>
                </button>
                <button className="arrow-btn" onClick={incrementEventIndex}>
                    <span className="icon arrow">arrow_forward</span>
                </button>
            </div>,
            document.getElementsByClassName("btn-container")[0]
        );
    }

    useEffect(() => populateEvents(data[currentEventIndex]), [data]);

    function incrementEventIndex() {
        try {
            const lastEventIndex = data.length - 1;
            const newEventIndex = (currentEventIndex += 1);
            let isTooMuch = false;
            if (newEventIndex > lastEventIndex) isTooMuch = true;
            if (isTooMuch) currentEventIndex = 0;
            else currentEventIndex = newEventIndex;
        } catch (error) {
            console.error(error);
        }
    }

    function decrementEventIndex() {
        try {
            const lastEventIndex = data.length - 1;
            const newEventIndex = (currentEventIndex -= 1);
            let isTooLittle = false;
            if (newEventIndex < 0) isTooLittle = true;
            if (isTooLittle) currentEventIndex = lastEventIndex;
            else currentEventIndex = newEventIndex;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="mobile-container">
            <header className="fixed-header">
                <Name onClick={refresh} />
            </header>
            <main className="mobile-content">
                <article className="contact-form-container">
                    <Contact
                        firstInput="What is this event?"
                        secondInput="When does it start?"
                        secondInputType="date"
                        thirdInput="What additional information do you have?" 
                    />
                    <span onClick={inspectInputs}>
                        <Button message="Set a Countdown!" id="app-form-btn" />
                    </span>
                </article>
                <article className="saved-countdowns">
                    <h1 className="heading" id="events-name">
                        Christmas
                    </h1>
                    <p className="description" id="events-date">
                        This event will happen on {thisYear}-12-25
                    </p>
                    <p className="description" id="events-distance">
                        {loadDifference(data[currentEventIndex])}
                    </p>
                    <p className="description" id="events-description">
                        A time for living, a time for believing
                    </p>
                    <section className="btn-container" onClick={receiveEvents}>
                        <Button message="Pull data from the database " />
                    </section>
                </article>
            </main>
        </section>
    );
}

// Functions
async function getEvents() {
    try {
        const data = query(collection(db, id));
        const events = [];
        const snapshot = await getDocs(data);
        snapshot.forEach(doc => events.push(doc.data()));
        return events;
    } catch (error) {
        console.error(error);
    }
}
async function saveData() {
    try {
        const eventName = DOMPurify.sanitize(
            document.getElementsByClassName("text-input")[0].value
        );
        const eventDate = DOMPurify.sanitize(
            document.getElementsByClassName("email")[0].value
        );
        const eventDescription = DOMPurify.sanitize(
            document.getElementsByClassName("message")[0].value
        );
        // eslint-disable-next-line no-unused-vars
        const newEvent = await addDoc(collection(db, id), {
            name: eventName,
            date: eventDate,
            description: eventDescription,
        });
        alert("Your event has been saved!");
    } catch (error) {
        throw new Error(error);
    }
}
function inspectInputs() {
    try {
        const emailIsEmpty =
            document.getElementsByClassName("email")[0].value === "";
        const dateIsEmpty =
            document.getElementsByClassName("text-input")[0].value === "";
        const informationIsEmpty =
            document.getElementsByClassName("message")[0].value === "";
        const condition =
            emailIsEmpty || dateIsEmpty || informationIsEmpty;
        condition
            ? alert("Please, fill in all the information requested.")
            : saveData();
    } catch (error) {
        throw new Error(error);
    }
}

function loadDifference(currentEvent) {
    try {
        const millisecondsPerDay = 86400000;
        const today = new Date(getTodaysDate());
        const eventsDate = new Date(today.getFullYear(), 11, 25);
        const difference = (eventsDate - today) / millisecondsPerDay;
        if (difference === 0) {
            notify(currentEvent);
            return "Christmas is happening today!";
        } else if (difference > 0)
            return `It is ${Math.round(difference)} days from today!`;
        else
            return `It happened ${Math.abs(difference)} days ago!`;
    } catch (error) {
        console.error(error);
    }
}

export default App;
