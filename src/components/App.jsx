// React
import { useState, useContext } from "react";
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
// Context
import { AuthContext } from "context/AuthContext";
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
    const id = useContext(AuthContext);
    let statusMessage = "";

    onAuthStateChanged(auth, function (user) {
        try {
            user ? setStatus("✅") : setStatus("⚠️") && awaitRedirect(auth);
            status === "✅" ? 
                statusMessage = "Everything is fine, you are logged in" : 
                statusMessage = "You will need to log in to set a countdown";
        } catch (error) {
            console.log("⚠️ Failed to determine login state");
        }
    });

    return (
        <section className="mobile-container">
            <Dialog type="text" />
            <Dialog type="login" />
            <Dialog type="success" />
            <Dialog type="event" />
            <Dialog type="error" />
            <header className="fixed-header">
                <Name /> 
                <span className="status" title={statusMessage}>{status}</span>
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
                    <img 
                        src="images/notification.webp" 
                        className="app-image" 
                        alt="" 
                    />
                    <section 
                        className="btn-container" 
                        onClick={() => verifyLoginState(
                            auth, id
                        )}
                    >
                        <Button message="Pull data from the database" />
                    </section>
                </article>
            </main>
        </section>
    );
}
