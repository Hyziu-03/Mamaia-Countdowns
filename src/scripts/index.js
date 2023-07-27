import { getDifference } from "./date";

export let currentEventIndex = 0;

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
