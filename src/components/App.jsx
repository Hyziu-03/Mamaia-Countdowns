// Firebase
import { initializeApp } from "firebase/app";
// Firestore
import { getFirestore } from "firebase/firestore";
// Authentication
import { onAuthStateChanged, getAuth } from "firebase/auth";
// Date
import { thisYear } from "scripts/date";
// Firenase utilities
import { firebaseConfig, id } from "scripts/firebase";
// Other utilities
import { 
    inspectInputs, 
    verifyLoginState, 
    awaitRedirect 
} from "scripts/utilities";
// Events
import { loadDifference } from "scripts/events";
// Components
import Name from "components/interface/Name.jsx";
import Contact from "components/interface/Contact.jsx";
import Button from "components/interface/Button.jsx";
import Dialog from "components/interface/Dialog.jsx";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

onAuthStateChanged(auth, function (user) {
    try {
        user ? console.log("✅ You are logged in!") : awaitRedirect(auth);
    } catch (error) {
        console.log("⚠️ Failed to determine login state");
    }
});

export default function App() {
    return (
        <section className="mobile-container">
            <Dialog type="text" />
            <Dialog type="login" />
            <div className="login-dialog-container">
                <dialog id="login-dialog" className="login-dialog">
                    <p className="login-dialog-text">
                        You need to authenticate to add your events 
                        to Mamaia Countdowns.
                    </p>
                    <p className="login-dialog-text">
                        Please, click the button below.
                    </p>
                    <form method="dialog">
                        <button className="dialog-close btn">
                            Login with Google
                        </button>
                    </form>
                </dialog>
            </div>
            <header className="fixed-header">
                <Name />
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
                        {loadDifference()}
                    </p>
                    <p className="description" id="events-description">
                        A time for living, a time for believing
                    </p>
                    <section 
                        className="btn-container" 
                        onClick={() => verifyLoginState(auth)}
                    >
                        <Button message="Pull data from the database" />
                    </section>
                </article>
            </main>
        </section>
    );
}
