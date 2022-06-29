import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { refresh } from "../scripts/scripts";
import DOMPurify from "dompurify";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query } from "firebase/firestore";
import Name from "./Name.jsx";
import Contact from "./Contact.jsx";
import Button from "./Button.jsx";

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
        return auth.currentUser.uid;    
    } catch(error) {
        console.error(error);
    }
}

const login = () => {
    try {
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
        id = await getUserId();
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
        // eslint-disable-next-line no-unused-vars
        const newEvent = await addDoc(collection(db, id), {
            name: DOMPurify.sanitize(document.getElementsByClassName("text-input")[0].value),
            date: DOMPurify.sanitize(document.getElementsByClassName("email")[0].value),
            description: DOMPurify.sanitize(document.getElementsByClassName("message")[0].value)
        });
        console.log("Your event has been saved!");
    } catch (error) {
        throw new Error(error);
    }
}

const inspectInputs = () => {
    try {
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
        const data = query(collection(db, id));
        const events = [];
        const snapshot = await getDocs(data);
        snapshot.forEach((doc) => events.push(doc.data()));
        return events;
    } catch(error) {
        console.error(error);
    }
} 

let currentEventIndex = 0;

const App = () => { 
    let [data, updateData] = useState([]);

    const receiveEvents = () => {
        getEvents()
            .then(result => updateData(result))
            .catch(error => console.error(error));

        const btnContainer = document.getElementsByClassName('btn-container')[0];
        ReactDOM.render(appNavigation, btnContainer);
    }

    useEffect(() => {}, [data]);

    const getCurrentEventIndex = (button) => {
        console.log('currentEventIndex: ', currentEventIndex);

        const lastEventIndex = data.length - 1;
        console.log('lastEventIndex: ', lastEventIndex)

        let isTooLittle = false;
        if (currentEventIndex < 0) isTooLittle = true;
        console.log('isTooLittle: ', isTooLittle)

        let isTooMuch = false;
        if(currentEventIndex > lastEventIndex) isTooMuch = true;
        console.log('isTooMuch: ', isTooMuch)

        if(button === 'increment') currentEventIndex += 1;
        if(button === 'decrement') currentEventIndex -= 1;
        console.log('currentEventIndex: ', currentEventIndex);

        console.log('');
    }

    const appNavigation = <div className="arrow-navigation-container"><button className="arrow-btn" onClick={getCurrentEventIndex('decrement')}><span className="icon arrow">arrow_back</span></button><button className="arrow-btn" onClick={getCurrentEventIndex('increment')}><span className="icon arrow">arrow_forward</span></button></div>;

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
                    <section className="btn-container" onClick={receiveEvents}>
                        <Button message="Pull data from the database "/>
                    </section>                    
                </article>
            </main>
        </section>
    );
}

export default App; 
