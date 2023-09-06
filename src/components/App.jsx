// React
import { useState, useContext, useEffect, lazy, Suspense } from "react";
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

const Name = lazy(() => import("components/interface/Name.jsx"));
const Contact = lazy(() => import("components/interface/Contact.jsx"));
const Button = lazy(() => import("components/interface/Button.jsx"));
const Dialog = lazy(() => import("components/interface/Dialog.jsx"));

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
            <Suspense fallback={<div>Loading...</div>}>
                <Dialog type="text" />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Dialog type="login" />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Dialog type="success" />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Dialog type="event" />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Dialog type="error" />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Dialog type="share" />
            </Suspense>
            <header className="fixed-header">
                <Suspense fallback={<div>Loading...</div>}>
                    <Name /> 
                </Suspense>
                <span 
                    className="status" 
                    title="Showing if you are logged in or not, to login pull data from the database."
                >
                    {status}
                </span>
            </header>
            <main className="mobile-content">
                <article className="contact-form-container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Contact
                            firstInput="What is this event?"
                            secondInput="When does it start?"
                            secondInputType="date"
                            thirdInput="What additional information do you have?"
                        />
                    </Suspense>
                    <span onClick={() => inspectInputs(db, id)}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Button 
                                message="Set a Countdown!" 
                                id="app-form-btn" 
                            />
                        </Suspense>
                    </span>
                </article>
                <article className="saved-countdowns">
                    <img src="images/messages.png" alt="" className="app-image"/>
                    <section 
                        className="btn-container" 
                        onClick={() => verifyLoginState(auth, id)}
                    >
                        <Suspense fallback={<div>Loading...</div>}>
                            <Button 
                                message="Pull data from the database" 
                                className="pull-data"
                            />
                        </Suspense>
                    </section>
                </article>
            </main>
        </section>
    );
}
