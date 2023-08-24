// React
import { useState } from "react";
// Firebase
import { initializeApp } from "firebase/app";
// Firestore
import { getFirestore } from "firebase/firestore";
// Authentication
import { onAuthStateChanged, getAuth } from "firebase/auth";
// Date
import { thisYear } from "scripts/date";
// Firebase utilities
import { firebaseConfig } from "scripts/firebase";
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

export default function App() {
    let [status, setStatus] = useState("");

    onAuthStateChanged(auth, function (user) {
        try {
            user ? setStatus("✅") : setStatus("⚠️") && awaitRedirect(auth);
        } catch (error) {
            console.log("⚠️ Failed to determine login state");
        }
    });

    return (
        <section className="mobile-container">
            <Dialog type="text" />
            <Dialog type="login" />
            <Dialog type="success" />
            <header className="fixed-header">
                <Name /> <span className="status">{status}</span>
            </header>
            <main className="mobile-content">
                <article className="contact-form-container">
                    <Contact
                        firstInput="What is this event?"
                        secondInput="When does it start?"
                        secondInputType="date"
                        thirdInput="What additional information do you have?"
                    />
                    <span onClick={() => inspectInputs(db, auth.currentUser.uid)}>
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
                        onClick={() => verifyLoginState(
                            auth, auth.currentUser.uid
                        )}
                    >
                        <Button message="Pull data from the database" />
                    </section>
                </article>
            </main>
        </section>
    );
}
