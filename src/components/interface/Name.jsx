const displayName = window.innerWidth < 1100 ? "Mamaia" : "Mamaia Countdowns";

export default function Name() {
    return (
        <a href="/">
            <h1 className="name hover touch-target" tabIndex="0">
                <span className="icon">event_note</span>
                &nbsp;{displayName}&trade;    
            </h1>
        </a>
    );
}
