// Date
import { getTodaysDate } from "./date";
// Utilities
import { showDialog, fetchEvents } from "./utilities";
// Firestore
import { setDoc, doc, deleteDoc} from "firebase/firestore";
import { db } from "components/App";

export function populateEvents(currentEvent) {
  try {
    const eventName = document.getElementById("events-name");
    const eventDate = document.getElementById("events-date");
    const eventDescription = document.getElementById("events-description");
    const eventDistance = document.getElementById("events-distance");

    const dataReceived = currentEvent !== undefined;
    const elementsRendered = !(
      eventName === null ||
      eventDate === null ||
      eventDescription === null ||
      eventDistance === null
    );
    
    if (elementsRendered && dataReceived) {
      eventName.innerHTML = currentEvent.name;
      eventDate.innerHTML = currentEvent.date;
      eventDistance.innerHTML = loadDifference(currentEvent);
      eventDescription.innerHTML = currentEvent.description;
    }
  } catch (error) {
    console.log("⚠️ Error populating events");
  }
}

export function notify(currentEvent) {
  try {
    if (!("Notification" in window)) return;
    const title = `${currentEvent.name} is happening today!`;
    const options = { body: currentEvent.description };
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") new Notification(title, options);
    });
  } catch (error) {
    console.log("⚠️ Error notifying user")
  }
}

export async function getEvents(db, id) {
  const events = await fetchEvents(db, id);
  return events;
}

export async function notifyAll(id, eventCount) {
  const millisecondsPerDay = 86400000;
  const events = await fetchEvents(db, id);
  const today = new Date(getTodaysDate());

  for(let i = 0; i < eventCount; i += 1) {
    const eventsDate = new Date(events[i].date);
    const difference = (eventsDate - today) / millisecondsPerDay; 
  
    if(difference === 0) 
      notify(events[i]);
  }
}

export async function deleteEvent(currentEventNumber, verificationNumber) {
  try {
    const events = await fetchEvents(db, verificationNumber);
    const eventName = events[currentEventNumber].name;
    await deleteDoc(doc(db, verificationNumber, eventName));
  } catch (error) {
    console.log("⚠️ Error deleting event")
  }
}

export function loadDifference(event) {
  try {
    const millisecondsPerDay = 86400000;
    const today = new Date(getTodaysDate());
    const eventsDate = new Date(event.date);
    const difference = (eventsDate - today) / millisecondsPerDay;

    if (difference === 0) {
      notify(event);
      return "It is happening today!";
    }
    else if (difference > 0)
      return `It is ${Math.round(difference)} days from today!`;
    else 
      return `It happened ${Math.abs(difference)} days ago!`;
  } catch (error) {
    console.log("⚠️ Error loading difference between dates")
  }
}

export async function saveData(db, verificationNumber) {
  try {
    const eventName = document.querySelector(".text-input").value;
    const eventDate = document.querySelector(".email").value;
    const eventDescription = document.querySelector(".message").value;

    // eslint-disable-next-line no-unused-vars
    const newEvent = await setDoc(doc(db, verificationNumber, eventName), {
      name: eventName,
      date: eventDate,
      description: eventDescription,
    });
    showDialog("dialog-success");
  } catch (error) {
    console.log("⚠️ Error saving data")
    showDialog("dialog-error");
  }
}

export function copy(name, date, description) {
  try {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      const permissionGranted =
        result.state === "granted" || result.state === "prompt";
      if (!permissionGranted) return;

      const text = `${name} is happening on ${date}. ${description}`;
      navigator.clipboard.writeText(text).then(
        () => showDialog("dialog-share"),
        () => console.log("⚠️ Error copying event information")
      );
    });
  } catch(error) {
    console.log("⚠️ Error sharing event")
  }
}