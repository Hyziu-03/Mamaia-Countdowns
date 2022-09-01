import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import DOMPurify from "dompurify";
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
} from "firebase/firestore";

import { refresh } from "scripts/scripts";
import Name from "components/Name.jsx";
import Contact from "components/Contact.jsx";
import Button from "components/Button.jsx";

const firebaseConfig = {
    apiKey: "AIzaSyCmNk2q3k4i3dV9ZG2ZfZeTKnum70UaVas",
    authDomain: "mamaia-countdowns.firebaseapp.com",
    projectId: "mamaia-countdowns",
    storageBucket: "mamaia-countdowns.appspot.com",
    messagingSenderId: "616823378468",
    appId: "1:616823378468:web:dc9e7312d9c95f94b1feb1",
    measurementId: "G-NZJKV7EEZM",
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);

const auth = getAuth();
auth.languageCode = "pl";

let id = null;
const getUserId = () => {
    try {
        return auth.currentUser === null ? undefined : auth.currentUser.uid;
    } catch (error) {
        console.error(error);
    }
};

const login = () => {
    try {
        const user = auth.currentUser;
        if (user === null) {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        }
    } catch (error) {
        console.error(error);
    }
};

const displayIcon = (type) => {
    try {
        const icon = document.getElementById("icon");
        if (type === "done") {
            icon.classList.add("done");
            icon.classList.remove("close");
            icon.innerText = "done";
        } else {
            icon.classList.add("close");
            icon.classList.remove("done");
            icon.innerText = "close";
        }
    } catch (error) {
        console.error(error);
    }
};

const authenticate = async (user) => {
    try {
        id = await getUserId();
        let result = user ? "done" : "close";
        result === "close" && login();
        displayIcon(result);
    } catch (error) {
        console.error(error);
    }
};

const saveData = async () => {
    try {
        const eventName = DOMPurify.sanitize(
            document.getElementsByClassName("text-input")[0].value
        );
        const eventDate = DOMPurify.sanitize(
            document.getElementsByClassName("email")[0].value
        );
        const eventDescription = DOMPurify.sanitize(
            document.getElementsByClassName("message")[0].value
        );
        // eslint-disable-next-line no-unused-vars
        const newEvent = await addDoc(collection(db, id), {
            name: eventName,
            date: eventDate,
            description: eventDescription,
        });
        alert("Your event has been saved!");
    } catch (error) {
        throw new Error(error);
    }
};

const inspectInputs = () => {
    try {
        const emailIsEmpty = document.getElementsByClassName("email")[0].value === "";
        const dateIsEmpty = document.getElementsByClassName("text-input")[0].value === "";
        const informationIsEmpty = document.getElementsByClassName("message")[0].value === "";
        const condition = emailIsEmpty || dateIsEmpty || informationIsEmpty;
        condition
            ? alert("Please, fill in all the information requested.")
            : saveData();
    } catch (error) {
        throw new Error(error);
    }
};

const getEvents = async () => {
    try {
        const data = query(collection(db, id));
        const events = [];
        const snapshot = await getDocs(data);
        snapshot.forEach((doc) => events.push(doc.data()));
        return events;
    } catch (error) {
        console.error(error);
    }
};

let currentEventIndex = 0;

const App = () => {
    let [data, updateData] = useState([]);

    const getTodaysDate = () => {
        try {
            const date = new Date();
            let day = date.getDate();
            if (day < 10) day = "0" + day;
            let month = date.getMonth() + 1;
            if (month < 10) month = "0" + month;
            const year = date.getFullYear();
            const today = year + "-" + month + "-" + day;
            return today;
        } catch (error) {
            console.error(error);
        }
    };

    const getEventsDate = () => {
        try {
            return data[currentEventIndex].date;
        } catch (error) {
            console.error(error);
        }
    };

    const getDifference = () => {
        try {
            const millisecondsPerDay = 86400000;
            const today = new Date(getTodaysDate());
            const eventsDate = new Date(getEventsDate());
            const difference = (eventsDate - today) / millisecondsPerDay;
            return difference;
        } catch (error) {
            console.error(error);
        }
    };

    const notify = () => {
        try {
            if (!("Notification" in window)) return;
            const title = `${data[currentEventIndex].name} is happening today!`;
            const options = {
                body: `Here is what you said about it: ${data[currentEventIndex].description}`,
            };
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") new Notification(title, options);
            });
        } catch (error) {
            console.error(error);
        }
    };

    const loadDifference = () => {
        try {
            const millisecondsPerDay = 86400000;
            const today = new Date(getTodaysDate());
            const eventsDate = new Date(today.getFullYear(), 11, 25);
            const difference = (eventsDate - today) / millisecondsPerDay;
            if (difference === 0) {
                notify();
                return "Christmas is happening today!";
            } else if (difference > 0)
                return `It is ${Math.round(difference)} days from today!`;
            else 
                return `It happened ${Math.abs(difference)} days ago!`;
        } catch (error) {
            console.error(error);
        }
    };

    const logDifference = () => {
        try {
            const difference = getDifference();
            if (difference === 0) {
                notify();
                return "This event is happening today!";
            } else if (difference > 0)
                return `This event is ${difference} days from today!`;
            else return `This event happened ${Math.abs(difference)} days ago!`;
        } catch (error) {
            console.error(error);
        }
    };

    const populateEvents = () => {
        try {
            const eventName = document.getElementById("events-name");
            const eventDate = document.getElementById("events-date");
            const eventDescription = document.getElementById("events-description");
            const eventDistance = document.getElementById("events-distance");
            const elementsRendered = !(
                eventName === null ||
                eventDate === null ||
                eventDescription === null ||
                eventDistance === null
            );
            const dataReceived = data[currentEventIndex] !== undefined;
            if (elementsRendered && dataReceived) {
                eventName.innerHTML = data[currentEventIndex].name;
                eventDate.innerHTML = data[currentEventIndex].date;
                eventDistance.innerHTML = logDifference();
                eventDescription.innerHTML = data[currentEventIndex].description;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const receiveEvents = () => {
        getEvents()
            .then((result) => updateData(result))
            .catch((error) => console.error(error));
        const btnContainer = document.getElementsByClassName("btn-container")[0];
        ReactDOM.render(appNavigation, btnContainer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => populateEvents(), [data]);

    const incrementEventIndex = () => {
        try {
            const lastEventIndex = data.length - 1;
            const newEventIndex = (currentEventIndex += 1);
            let isTooMuch = false;
            if (newEventIndex > lastEventIndex) isTooMuch = true;
            if (isTooMuch) currentEventIndex = 0;
            else currentEventIndex = newEventIndex;
        } catch (error) {
            console.error(error);
        }
    };

    const decrementEventIndex = () => {
        try {
            const lastEventIndex = data.length - 1;
            const newEventIndex = (currentEventIndex -= 1);
            let isTooLittle = false;
            if (newEventIndex < 0) isTooLittle = true;
            if (isTooLittle) currentEventIndex = lastEventIndex;
            else currentEventIndex = newEventIndex;
        } catch (error) {
            console.error(error);
        }
    };

    const appNavigation = (
        <div className="arrow-navigation-container">
            <button className="arrow-btn" onClick={decrementEventIndex}>
                <span className="icon arrow">arrow_back</span>
            </button>
            <button className="arrow-btn" onClick={incrementEventIndex}>
                <span className="icon arrow">arrow_forward</span>
            </button>
        </div>
    );

    useEffect(() => {
        try {
            document.querySelector("#icon").click();
        } catch (error) {
            console.error(error);
        }
    }, []);

    onAuthStateChanged(auth, (user) => {
        try {
            user && document.querySelector("#icon").click();
        } catch (error) {
            console.error(error);
        }
    });

    const thisYear = new Date().getFullYear();

    return (
        <section className="mobile-container">
            <header className="fixed-header">
                <Name onClick={refresh} />
                <div className="extra-information">
                    <span
                        onClick={authenticate}
                        id="icon"
                        className="indicator icon close"
                    >
                    close
                    </span>
                </div>
            </header>
            <main className="mobile-content">
                <article className="contact-form-container">
                    <Contact
                        firstInput="What is this event?"
                        secondInput="When does it start?"
                        secondInputType="date"
                        thirdInput="What additional information do you have?"
                    />
                    <span onClick={inspectInputs}>
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
                    <section className="btn-container" onClick={receiveEvents}>
                        <Button message="Pull data from the database " />
                    </section>
                </article>
            </main>
        </section>
    );
};

export default App;
