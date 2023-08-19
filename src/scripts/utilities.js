// Firestore
import {
  collection,
  getCountFromServer,
  doc,
  setDoc,
} from "firebase/firestore";
// Events
import { saveData } from "./events";
// Firebase utilities
import { login } from "./firebase";
// Date
import { thisYear } from "./date";
// Components
import { db } from "components/App";

export function inspectInputs(db, id) {
  try {
    const emailIsEmpty = document.querySelector(".email").value === "";
    const dateIsEmpty = document.querySelector(".text-input").value === "";
    const informationIsEmpty = document.querySelector(".message").value === "";
    const condition = emailIsEmpty || dateIsEmpty || informationIsEmpty;
    condition ? showDialog("dialog") : saveData(db, id);
  } catch (error) {
    console.log("⚠️ Error inspecting inputs");
  }
}

export function showDialog(id) {
  try {
    const dialog = document.getElementById(id);
    dialog.style.display = "flex";
    dialog.style.flexDirection = "column";
    dialog.style.justifyContent = "space-evenly";
    dialog.style.alignItems = "center";
    dialog.showModal();

    if (id === "dialog") {
      const text = document.getElementById("dialog-text");
      const btn = document.querySelector(".dialog-btn");
      text.innerText = "Please, fill in all the information requested.";
      btn.innerText = "Confirm";
    }
    if (id === "dialog-login") {
      const text = document.getElementById("dialog-login-text");
      const btn = document.querySelector(".dialog-login-btn");
      text.innerText = "You will now be redirected to login with Google.";
      btn.innerText = "Proceed";
    }
  } catch (error) {
    console.log("⚠️ Error showing dialog");
  }
}

async function getEvents(db) {
  try {
    const snapshot = await getCountFromServer(collection(db, "events"));
    const documentCount = snapshot.data().count;

    if (documentCount === 0)
      await setDoc(doc(db, "events", "Christmas"), {
        name: "Christmas",
        date: `${thisYear}-12-25`,
        description: "A time for living, a time for believing",
      });
  } catch (error) {
    console.log("⚠️ Failed to add the first event");
  }
}

export function verifyLoginState(auth) {
  try {
    if (!auth.currentUser) showDialog("dialog-login");
    else getEvents(db);
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
