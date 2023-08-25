// Firestore
import {
  collection,
  getCountFromServer,
  doc,
  setDoc,
  getDocs
} from "firebase/firestore";
// Events
import { saveData } from "./events";
// Firebase utilities
import { login } from "./firebase";
// Date
import { thisYear } from "./date";
// Components
import { db } from "components/App";

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

function setDialogStyles(dialog) {
  dialog.style.display = "flex";
  dialog.style.flexDirection = "column";
  dialog.style.justifyContent = "space-evenly";
  dialog.style.alignItems = "center";
}

function setDialogContent({id, dialog, textContent, btnContent}) {
  const textHandler = 
    id === "dialog" ? "dialog-text" : 
    id === "dialog-login" ? "dialog-login-text" : 
    id === "dialog-event" ? "dialog-event-text" :
    id === "dialog-success" ? "dialog-success-text" : "";

  const btnHandler =
    id === "dialog" ? ".dialog-btn" :
    id === "dialog-login" ? ".dialog-login-btn" :
    id === "dialog-event" ? ".dialog-event-btn" :
    id === "dialog-success" ? ".dialog-success-btn" : "";

  dialog.style.borderColor = 
    id === "dialog" || id === "dialog-login" ? "red" : "green";

  const textTarget = document.getElementById(textHandler);
  if (textTarget !== null) textTarget.innerText = textContent;

  const btnTarget = document.querySelector(btnHandler);
  if (btnTarget !== null) btnTarget.innerText = btnContent;
}

export function showDialog(id) {
  try {
    const dialog = document.getElementById(id);
    setDialogStyles(dialog);
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
  } catch (error) {
    console.log("⚠️ Error showing dialog");
    console.error(error)
  }
}

async function getEvents(db, verificationNumber) {
  try {
    const snapshot = await getCountFromServer(
      collection(db, verificationNumber)
    );
    const documentCount = snapshot.data().count;

    if (documentCount === 0)
      await setDoc(doc(db, verificationNumber, "Christmas"), {
        name: "Christmas",
        date: `${thisYear}-12-25`,
        description: "A time for living, a time for believing",
      });

    let events = [];
    const querySnapshot = await getDocs(collection(db, verificationNumber));
    querySnapshot.forEach(document => events.push(document.data()));

    showDialog("dialog-event");

    const name = document.getElementById("events-name");
    name.innerText = events[0].name;
    const date = document.getElementById("events-date");
    date.innerText = events[0].date;
    const description = document.getElementById("events-description");
    description.innerText = events[0].description;
    const count = document.getElementById("events-count");
    count.innerText = `You are browsing 1/${documentCount} event.`;  

  } catch (error) {
    console.log("⚠️ Failed to add the first event");
    console.error(error);
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
          dialog.style.display = "none";
        });
    } catch (error) {
      console.log("⚠️ Error closing dialog");
    }
  });
}

export function awaitRedirect(auth) {
  window.addEventListener("DOMContentLoaded", function () {
    try {
      const btn = document.querySelector(".dialog-login-btn");
      if (btn !== null) btn.addEventListener("click", login(auth));
    } catch (error) {
      console.log("⚠️ Error awaiting redirect");
    }
  });
}

export const displayName = window.innerWidth < 1100 ? 
  "Mamaia" : "Mamaia Countdowns";
