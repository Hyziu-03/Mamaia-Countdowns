import Name from "./Name.jsx";
import Contact from "./Contact.jsx";
import Button from "./Button.jsx";
import AppNavigation from "./AppNavigation.jsx";
import ReactDOM from "react-dom";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import { refresh } from "../scripts/scripts";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmNk2q3k4i3dV9ZG2ZfZeTKnum70UaVas",
    authDomain: "mamaia-countdowns.firebaseapp.com",
    projectId: "mamaia-countdowns",
    storageBucket: "mamaia-countdowns.appspot.com",
    messagingSenderId: "616823378468",
    appId: "1:616823378468:web:dc9e7312d9c95f94b1feb1",
    measurementId: "G-NZJKV7EEZM"
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);

const auth = getAuth();
auth.languageCode = "pl";

let id = null;
const getUserId = () => {
    try {
        console.log("getUserId()");

        return auth.currentUser.uid;
    } catch(error) {
        console.error(error);
    }
}

const login = () => {
    try {
        console.log("login()");

        const user = auth.currentUser;
        if (user === null) {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        }
    } catch(error) {
        console.error(error);
    }
}

const authenticate = async (user) => {
    try {
        console.log("authenticate()");

        id = await getUserId()
        console.log(`User ID @ authenticate(): ${id}`);

        const icon = document.getElementById("icon");
        let result = user ? "done" : "close";
        result === "close" && login();
        if (result === "done") {
            icon.classList.add("done");
            icon.classList.remove("close");
            icon.innerText = "done";
        }
        else {
            icon.classList.add("close");
            icon.classList.remove("done");
            icon.innerText = "close";
        }
    } catch(error) {
        console.error(error);
    }
}

const saveData = async() => {
    try {
        console.log("saveData()");

        // eslint-disable-next-line no-unused-vars
        const newEvent = await addDoc(collection(db, id), {
            name: DOMPurify.sanitize(document.getElementsByClassName("text-input")[0].value),
            date: DOMPurify.sanitize(document.getElementsByClassName("email")[0].value),
            description: DOMPurify.sanitize(document.getElementsByClassName("message")[0].value)
        });
        alert("Your event has been saved!");
    } catch (error) {
        throw new Error(error);
    }
}

const inspectInputs = () => {
    try {
        console.log("inspectInputs()");

        const emailIsEmpty = document.getElementsByClassName("email")[0].value === "";
        const dateIsEmpty = document.getElementsByClassName("text-input")[0].value === "";
        const informationIsEmpty = document.getElementsByClassName("message")[0].value === "";
        const condition = emailIsEmpty || dateIsEmpty || informationIsEmpty;
        condition ? alert("Please, fill in all the information requested.") : saveData();
    } catch (error) {
        throw new Error(error);
    }
}

const getEvents = async() => {
    try {
        console.log("getEvents()");

        console.log(`User ID @ getEvents(): ${id}`);
        const data = query(collection(db, id));
        const events = [];
        const snapshot = await getDocs(data);
        snapshot.forEach((doc) => events.push(doc.data()));
        return events;
    } catch(error) {
        console.error(error);
    }
}

let userEvents = [];
const receiveEvents = () => {
    console.log("receiveEvents()");
    
    console.log(`User ID @ receiveEvents(): ${id}`);
    getEvents()
        .then(result => userEvents = result)
        .catch(error => console.error(error));
}

const displayEvents = () => {
    try {
        console.log("displayEvents()");

        console.log(`User ID @ displayEvents(): ${id}`);
        const btnContainer = document.querySelector(".btn-container");
        ReactDOM.render(<AppNavigation />, btnContainer);
        receiveEvents().then(() => { return userEvents }); 
    } catch(error) {
        console.error(error);
    }
}

const App = () => { 
    console.log("App.jsx");

    useEffect(() => {
        try {
            document.querySelector("#icon").click();
        } catch(error) {
            console.log(error);
        }
    }, []);  

    onAuthStateChanged(auth, (user) => {
        try {
            user && document.querySelector("#icon").click()
        } catch(error) {
            console.error(error);
        }
    }); 

    return (
        <section className="mobile-container">
            <header className="fixed-header">
                <Name onClick={refresh}/> <span onClick={authenticate} id="icon" className="indicator icon close">close</span>
            </header> 
            <main className="mobile-content">
                <article className="contact-form-container">
                    <Contact 
                        firstInput="What is this event?"
                        secondInput="When does it start?"
                        secondInputType="date"
                        thirdInput="What additional information do you have?"
                    />
                    <span onClick={inspectInputs}><Button message="Set a Countdown!" id="app-form-btn"/></span>
                </article>
                <article className="saved-countdowns">
                    <h1 className="heading" id="events-name">The event’s name will show up here when you pull it from the database.</h1>
                    <p className="description" id="events-date">The date will show up here when you pull it from the database.</p>
                    <p className="description" id="events-description">Additional information about the event will show up here if you pull it from the database.</p>
                    <section className="btn-container" onClick={displayEvents}>
                        <Button message="Pull data from the database "/>
                    </section>                    
                </article>
            </main>
        </section>
    );
}

export default App; 
