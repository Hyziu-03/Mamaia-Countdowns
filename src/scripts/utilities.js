// Firestore
import {
  collection,
  getCountFromServer,
  doc,
  setDoc,
  getDocs
} from "firebase/firestore";
// Events
import { loadDifference, saveData } from "./events";
// Firebase utilities
import { login } from "./firebase";
// Date
import { thisYear } from "./date";
// Components
import { db, auth } from "components/App";

export function inspectInputs(db, verificationNumber) {
  try {
    const emailIsEmpty = document.querySelector(".email").value === "";
    const dateIsEmpty = document.querySelector(".text-input").value === "";
    const informationIsEmpty = document.querySelector(".message").value === "";
    const condition = emailIsEmpty || dateIsEmpty || informationIsEmpty;
    condition ? showDialog("dialog") : saveData(db, verificationNumber);
  } catch (error) {
    console.log("⚠️ Error inspecting inputs");
  }
}

function setDialogContent({id, dialog, textContent, btnContent}) {
  const textHandler = 
    id === "dialog" ? "dialog-text" : 
    id === "dialog-login" ? "dialog-login-text" : 
    id === "dialog-event" ? "dialog-event-text" :
    id === "dialog-success" ? "dialog-success-text" : 
    id === "dialog-error" ? "dialog-error-text" : "";

  const btnHandler =
    id === "dialog" ? ".dialog-btn" :
    id === "dialog-login" ? ".dialog-login-btn" :
    id === "dialog-event" ? ".dialog-event-btn" :
    id === "dialog-success" ? ".dialog-success-btn" : 
    id === "dialog-error" ? ".dialog-error-btn" : "";

  dialog.style.borderColor = 
    id === "dialog" || id === "dialog-login" || id === "dialog-error" ? 
      "red" : "green";

  const textTarget = document.getElementById(textHandler);
  if (textTarget !== null) textTarget.innerText = textContent;

  const btnTarget = document.querySelector(btnHandler);
  if (btnTarget !== null) btnTarget.innerText = btnContent;
}

export function showDialog(id) {
  try {
    const dialog = document.getElementById(id);
    console.log(dialog)
    dialog.showModal();

    if (id === "dialog") setDialogContent({
      id: id,
      dialog: dialog,
      textContent: "Please, fill in all the information requested.",
      btnContent: "Confirm",
    });
  
    if (id === "dialog-login") setDialogContent({
      id: id,
      dialog: dialog,
      textContent: "You will now be redirected to login with Google.",
      btnContent: "Proceed",
    });

    if (id === "dialog-success") setDialogContent({
      id: id,
      dialog: dialog,
      textContent: "Your event has been added successfully!",
      btnContent: "Close",
    });

    if(id === "dialog-event") setDialogContent({
      id: id,
      dialog: dialog,
      textContent: "",
      btnContent: "Exit",
    });

    if(id === "dialog-error") setDialogContent({
      id: id,
      dialog: dialog,
      textContent: "You will need to log in to set a countdown",
      btnContent: "Close",
    });
  } catch (error) {
    console.log("⚠️ Error showing dialog");
    console.error(error)
  }
}

export async function getDocumentCount(db, verificationNumber) {
  const snapshot = await getCountFromServer(
    collection(db, verificationNumber)
  );
  return snapshot.data().count;
}

async function getEvents(db, verificationNumber) {
  try {
    const documentCount = await getDocumentCount(db, verificationNumber);

    if (documentCount === 0)
      await setDoc(doc(db, verificationNumber, "Christmas"), {
        name: "Christmas",
        date: `${thisYear}-12-25`,
        description: "A time for living, a time for believing",
      });

    showDialog("dialog-event");

    const events = await fetchEvents(db, verificationNumber);
    populateEvent(events, 0);
  } catch (error) {
    console.log("⚠️ Failed to add the first event");
    console.error(error);
  }
}

export async function fetchEvents(db, verificationNumber) {
  let events = [];
  const querySnapshot = await getDocs(collection(db, verificationNumber));
  querySnapshot.forEach((document) => events.push(document.data()));
  return events;
}

export async function populateEvent(events, number) {
  try {
    const list = await events;

    const name = document.getElementById("events-name");
    name.innerText = list[number].name;

    const date = document.getElementById("events-date");
    date.innerText = list[number].date;

    const description = document.getElementById("events-description");
    description.innerText = list[number].description;

    const distance = document.getElementById("events-distance");
    distance.innerText = loadDifference(list[number]);
  } catch(error) {
    console.log("⚠️ Error populating the first event"); 
  }
}

export function verifyLoginState(auth, verificationNumber) {
  try {
    if (!auth.currentUser) showDialog("dialog-login");
    else getEvents(db, verificationNumber);
  } catch (error) {
    console.log("⚠️ Error verifying login state");
  }
}

export function closeDialog(id) {
  window.addEventListener("DOMContentLoaded", () => {
    try {
      const dialog = document.getElementById(id);
      const closeButton = document.querySelector(".dialog-btn");
      if (closeButton !== null)
        closeButton.addEventListener("click", function () {
          dialog.close();
        });
    } catch (error) {
      console.log("⚠️ Error closing dialog");
    }
  });
}

export function awaitRedirect(auth) {
  try {
    const btn = document.querySelector(".dialog-login-btn");
    if (btn !== null) btn.addEventListener("click", login(auth));
  } catch (error) {
    console.log("⚠️ Error awaiting redirect");
  }
}

export const displayName = window.innerWidth < 1100 ? 
  "Mamaia" : "Mamaia Countdowns";

export function checkOrigin(origin) {
  if (origin === "dialog-login") awaitRedirect(auth);
}
