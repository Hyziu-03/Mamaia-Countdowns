import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { refresh } from "isola/browser";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Name from "components/interface/Name.jsx";
import Contact from "components/interface/Contact.jsx";
import Button from "components/interface/Button.jsx";
import { thisYear } from "scripts/date";
import { firebaseConfig, id } from "scripts/firebase";
import { inspectInputs } from "scripts/utilities";
import {
    populateEvents, 
    loadDifference,
    getEvents
} from "scripts/events";

let currentEventIndex = 0;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
auth.languageCode = "pl";

export default function App() {
    let [data, updateData] = useState([]);

    function receiveEvents() {
        getEvents(db, id)
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
            document.querySelector(".btn-container")
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
                    <span onClick={() => inspectInputs(db, id)}>
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
