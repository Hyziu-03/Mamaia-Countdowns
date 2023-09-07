// React
import { useState, useEffect, useContext, lazy, Suspense } from "react";
// Firestore
import { db } from "components/App";
// Utilities
import { populateEvent } from "scripts/utilities";
import { getEvents } from "scripts/events";
// Events
import { deleteEvent, copy } from "scripts/events";
// Context
import { AuthContext } from "context/AuthContext";
import { CountContext } from "context/CountContext";
// Icons
import ArrowBack from "components/icons/material/ArrowBack";
import ArrowForward from "components/icons/material/ArrowForward";
import Tag from "components/icons/material/Tag";
import SMS from "components/icons/material/SMS";
import Distance from "components/icons/material/Distance";
import CalendarMonth from "components/icons/material/CalendarMonth";

const DialogBlueprint = lazy(() => import("./DialogBlueprint"));
const Button = lazy(() => import("./Button"));

const worker = new Worker("worker.js");
worker.postMessage(["dialog"]);

export default function Dialog(props) {
    const id = useContext(AuthContext);
    const { type } = props;
    let dialog = null;

    if (type === "login") dialog = (
        <Suspense fallback={<div>Loading...</div>}>
            <DialogBlueprint 
                id="dialog"
                p="dialog-text"
                btn="dialog-btn"
            />
        </Suspense>
    );
    if (type === "text") dialog = (
        <Suspense fallback={<div>Loading...</div>}>
            <DialogBlueprint 
                id="dialog-login"
                p="dialog-login-text"
                btn="dialog-login-btn"
            />
        </Suspense>
    );
    if(type === "success") dialog = (
        <Suspense fallback={<div>Loading...</div>}>
            <DialogBlueprint
                id="dialog-success"
                p="dialog-success-text"
                btn="dialog-success-btn"
            />
        </Suspense>
    );
    if(type === "error") dialog = (
        <Suspense fallback={<div>Loading...</div>}>
            <DialogBlueprint
                id="dialog-error"
                p="dialog-error-text"
                btn="dialog-error-btn"
            />
        </Suspense>
    );
    if(type === "share") dialog = (
        <Suspense fallback={<div>Loading...</div>}>
            <DialogBlueprint
                id="dialog-share"
                p="dialog-share-text"
                btn="dialog-share-btn"
            />
        </Suspense>
    );

    // Events dialog

    const [numeral, setNumeral] = useState(0);
    const documentCount = useContext(CountContext);

    function decrementNumeral() {
        if (numeral !== 0)
            setNumeral(numeral - 1);
    }
    function incrementNumeral() {
        if (numeral !== documentCount - 1)
            setNumeral(numeral + 1);
    }

    useEffect(() => {
        const eventList = getEvents(db, id);
        populateEvent(eventList, numeral)
    }, [numeral, id]);

    if(type === "event") dialog = (
        <dialog id="dialog-event" className="dialog dialog-event">
            <div onClick={function () {
                deleteEvent(numeral, id);
                const dialog = document.getElementById("dialog-event");
                dialog.close();
            }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Button message="Delete" id="delete-btn" />
                </Suspense>
            </div>
            <div onClick={function () {
                const name = 
                    document.querySelector("#events-name").innerText;
                const date = 
                    document.querySelector("#events-date").innerText;
                const description = 
                    document.querySelector("#events-description").innerText;
                
                copy(name, date, description);
            }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Button message="Share" id="share-btn" />
                </Suspense>
            </div>

            <h1 className="heading" id="events-name"> </h1>

            <section className="event-line">
                <span className="icon"><CalendarMonth /></span>
                <p className="description" id="events-date"></p>
            </section>

            <section className="event-line">
                <span className="icon"><Distance /></span>
                <p className="description" id="events-distance"></p>
            </section>

            <section className="event-line">
                <span className="icon"><SMS /></span>
                <p className="description" id="events-description"></p>
            </section>

            <section className="event-line">
                <span className="icon"><Tag /></span>
                <p className="description" id="events-count">
                    You are browsing {numeral + 1}/{documentCount} event
                </p>
            </section>

            <div className="arrow-navigation-container">
                <button className="arrow-btn" onClick={decrementNumeral}>
                    <span className="icon arrow"><ArrowBack/></span>
                </button>
                <button className="arrow-btn" onClick={incrementNumeral}>
                    <span className="icon arrow"><ArrowForward /></span>
                </button>
            </div>
            
            <form method="dialog">
                <button
                    className="dialog-close btn dialog-event-btn"
                ></button>
            </form>
        </dialog>
    );

    return (
        <div className="dialog-container">{dialog}</div>
    );
}
