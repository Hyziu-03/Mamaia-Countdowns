// Utilities
import { closeDialog } from "scripts/utilities";

closeDialog("dialog");
closeDialog("dialog-login");
closeDialog("dialog-success");

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

    return (
        <div className="dialog-container">{dialog}</div>
    );
}
