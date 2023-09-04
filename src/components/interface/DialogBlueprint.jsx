// Utilities
import { checkOrigin } from "scripts/utilities";

export default function DialogBlueprint(props) {
    const { id, p, btn } = props;

    return (
        <dialog id={id} className="dialog">
            <p id={p}></p>
            <form method="dialog">
                <button 
                    className={`${btn} dialog-close btn`} 
                    onClick={function () {
                        checkOrigin(id);
                        if (id === "dialog-success")
                            document.getElementById("form").reset();
                    }}>
                </button>
            </form>
        </dialog>
    );
}

