// React
import { useState, useContext, useEffect } from "react";
// Firebase
import { initializeApp } from "firebase/app";
// Firestore
import { getFirestore } from "firebase/firestore";
// Authentication
import { onAuthStateChanged, getAuth } from "firebase/auth";
// Firebase utilities
import { firebaseConfig } from "scripts/firebase";
// Other utilities
import { 
    inspectInputs, 
    verifyLoginState, 
    awaitRedirect 
} from "scripts/utilities";
// Events
import { notifyAll } from "scripts/events";
// Context
import { AuthContext } from "context/AuthContext";
import { CountContext } from "context/CountContext";
// Components
import Name from "components/interface/Name.jsx";
import Contact from "components/interface/Contact.jsx";
import Button from "components/interface/Button.jsx";
import Dialog from "components/interface/Dialog.jsx";
// Images
import Messages from "images/Messages.png";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export default function App() {
    let [status, setStatus] = useState("");
    const id = useContext(AuthContext);
    const documentCount = useContext(CountContext)

    onAuthStateChanged(auth, function (user) {
        try {
            user ? setStatus("✅") : setStatus("⚠️") && awaitRedirect(auth);
        } catch (error) {
            console.log("⚠️ Failed to determine login state");
        }
    });

    useEffect(() => notifyAll(id, documentCount), [id, documentCount]);

    return (
        <section className="mobile-container">
            <Dialog type="text" />
            <Dialog type="login" />
            <Dialog type="success" />
            <Dialog type="event" />
            <Dialog type="error" />
            <Dialog type="share" />
            <header className="fixed-header">
                <Name /> 
                <span 
                    className="status" 
                    title="Showing if you are logged in or not, to login pull data from the database."
                >
                    {status}
                </span>
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
                    <img src={Messages}alt="" className="app-image"/>
                    <section 
                        className="btn-container" 
                        onClick={() => verifyLoginState(auth, id)}
                    >
                        <Button message="Pull data from the database" />
                    </section>
                </article>
            </main>
        </section>
    );
}
