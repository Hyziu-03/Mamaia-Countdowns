// React
import { useState, useEffect, useContext } from "react";
// Firestore
import { db } from "components/App";
// Utilities
import { closeDialog, fetchEvents, populateEvent } from "scripts/utilities";
// Components
import DialogBlueprint from "./DialogBlueprint";
// Context
import { AuthContext } from "context/AuthContext";
import { CountContext } from "context/CountContext";
import { deleteEvent } from "scripts/events";
import Button from "./Button";

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
            <h1 className="heading" id="events-name"> </h1>
            <p className="description" id="events-date"></p>
            <p className="description" id="events-distance"></p>
            <p className="description" id="events-description"></p>
            <p className="description" id="events-count">
                You are browsing {numeral + 1}/{documentCount} event
            </p>

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
