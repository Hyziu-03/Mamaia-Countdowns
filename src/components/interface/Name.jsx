// Utilities
import { displayName } from "scripts/utilities";
// Icons
import EventNote from "components/icons/material/EventNote";

export default function Name() {
    return (
        <a href="/">
            <h1 className="name hover touch-target" tabIndex="0">
                <EventNote />
                &nbsp;{displayName}&trade;    
            </h1>
        </a>
    );
}
