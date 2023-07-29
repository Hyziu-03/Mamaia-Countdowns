import { getDifference, getTodaysDate } from "./date";
import { collection, getDocs, query, addDoc } from "firebase/firestore";
import DOMPurify from "dompurify";

export function populateEvents(currentEvent) {
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
    const dataReceived = currentEvent !== undefined;
    if (elementsRendered && dataReceived) {
      eventName.innerHTML = currentEvent.name;
      eventDate.innerHTML = currentEvent.date;
      eventDistance.innerHTML = logDifference(currentEvent);
      eventDescription.innerHTML = currentEvent.description;
    }
  } catch (error) {
    console.error(error);
  }
}

export function logDifference(currentEvent) {
  try {
    const event = currentEvent.date;
    const difference = getDifference(event);
    if (difference === 0) {
      notify(currentEvent);
      return "This event is happening today!";
    } else if (difference > 0)
      return `This event is ${difference} days from today!`;
    else return `This event happened ${Math.abs(difference)} days ago!`;
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
}

export async function getEvents(db, id) {
  try {
    const data = query(collection(db, id));
    const events = [];
    const snapshot = await getDocs(data);
    snapshot.forEach((doc) => events.push(doc.data()));
    return events;
  } catch (error) {
    console.error(error);
  }
}

export function loadDifference(currentEvent) {
  try {
    const millisecondsPerDay = 86400000;
    const today = new Date(getTodaysDate());
    const eventsDate = new Date(today.getFullYear(), 11, 25);
    const difference = (eventsDate - today) / millisecondsPerDay;
    if (difference === 0) {
      notify(currentEvent);
      return "Christmas is happening today!";
    } else if (difference > 0)
      return `It is ${Math.round(difference)} days from today!`;
    else return `It happened ${Math.abs(difference)} days ago!`;
  } catch (error) {
    console.error(error);
  }
}

export async function saveData(db, id) {
  try {
    const eventName = DOMPurify.sanitize(
      document.querySelector(".text-input").value
    );
    const eventDate = DOMPurify.sanitize(
      document.querySelector(".email").value
    );
    const eventDescription = DOMPurify.sanitize(
      document.querySelector(".message").value
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
}
