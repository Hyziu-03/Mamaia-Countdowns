// React
import { useState, useEffect, useContext } from "react";
// Firestore
import { db } from "components/App";
// Utilities
import { closeDialog, fetchEvents, populateEvent } from "scripts/utilities";
// Events
import { deleteEvent, copy } from "scripts/events";
// Components
import DialogBlueprint from "./DialogBlueprint";
import Button from "./Button";
// Context
import { AuthContext } from "context/AuthContext";
import { CountContext } from "context/CountContext";

closeDialog("dialog");
closeDialog("dialog-login");
closeDialog("dialog-success");
closeDialog("dialog-event");
closeDialog("dialog-error");

async function getEvents(db, id) {
    const events = await fetchEvents(db, id);
    return events;
}

export default function Dialog(props) {
    const id = useContext(AuthContext);
    const { type } = props;
    let dialog = null;

    if (type === "login") dialog = (
        <DialogBlueprint 
            id="dialog"
            p="dialog-text"
            btn="dialog-btn"
        />
    );
    if (type === "text") dialog = (
        <DialogBlueprint 
            id="dialog-login"
            p="dialog-login-text"
            btn="dialog-login-btn"
        />
    );
    if(type === "success") dialog = (
        <DialogBlueprint
            id="dialog-success"
            p="dialog-success-text"
            btn="dialog-success-btn"
        />
    );
    if(type === "error") dialog = (
        <DialogBlueprint
            id="dialog-error"
            p="dialog-error-text"
            btn="dialog-error-btn"
        />
    );
    if(type === "share") dialog = (
        <DialogBlueprint
            id="dialog-share"
            p="dialog-share-text"
            btn="dialog-share-btn"
        />
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
                window.location.reload();
            }}>
                <Button message="Delete" id="delete-btn" />
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
                <Button message="Share" id="share-btn" />
            </div>

            <h1 className="heading" id="events-name"> </h1>

            <section className="event-line">
                <span className="icon">calendar_month</span>
                <p className="description" id="events-date"></p>
            </section>

            <section className="event-line">
                <span className="icon">distance</span>
                <p className="description" id="events-distance"></p>
            </section>

            <section className="event-line">
                <span className="icon">sms</span>
                <p className="description" id="events-description"></p>
            </section>

            <section className="event-line">
                <span className="icon">tag</span>
                <p className="description" id="events-count">
                    You are browsing {numeral + 1}/{documentCount} event
                </p>
            </section>

            <div className="arrow-navigation-container">
                <button className="arrow-btn" onClick={decrementNumeral}>
                    <span className="icon arrow">arrow_back</span>
                </button>
                <button className="arrow-btn" onClick={incrementNumeral}>
                    <span className="icon arrow">arrow_forward</span>
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
