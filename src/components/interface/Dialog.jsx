// Utilities
import { closeDialog } from "scripts/utilities";
// Events
import { loadDifference } from "scripts/events";
// Components
import ArrowNavigation from "./ArrowNavigation";

closeDialog("dialog");
closeDialog("dialog-login");
closeDialog("dialog-success");
closeDialog("dialog-event");

export default function Dialog(props) {
    const { type } = props;
    
    let dialog = null;

    if (type === "login") dialog = (
        <dialog id="dialog" className="dialog">
            <p id="dialog-text"></p>
            <form method="dialog">
                <button
                    className="dialog-close btn dialog-btn"
                ></button>
            </form>
        </dialog>
    );

    if (type === "text") dialog = (
        <dialog id="dialog-login" className="dialog">
            <p id="dialog-login-text"></p>
            <form method="dialog">
                <button
                    className="dialog-close btn dialog-login-btn"
                ></button>
            </form>
        </dialog>
    );

    if(type === "success") dialog = (
        <dialog id="dialog-success" className="dialog">
            <p id="dialog-success-text"></p>
            <form method="dialog">
                <button
                    className="dialog-close btn dialog-success-btn"
                ></button>
            </form>
        </dialog>
    );

    if(type === "event") dialog = (
        <dialog id="dialog-event" className="dialog dialog-event">
            <h1 className="heading" id="events-name"> </h1>
            <p className="description" id="events-date"></p>
            <p className="description" id="events-distance">
                {loadDifference()}
            </p>
            <p className="description" id="events-description"></p>
            <p className="description" id="events-count"></p>

            <ArrowNavigation />
            
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
