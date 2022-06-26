import { refresh } from "../scripts/scripts";

const displayName = window.innerWidth < 950 ? "Mamaia" : "Mamaia Countdowns";

const Name = () => {
    console.log("Name.jsx");

    return (
        <h1 onClick={refresh} className="name hover touch-target" tabIndex="0"><span className="icon">event_note</span>&nbsp;{displayName}&trade;</h1>
    );
}

export default Name;
