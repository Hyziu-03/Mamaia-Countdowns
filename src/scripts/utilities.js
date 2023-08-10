import { saveData } from "./events";

export function inspectInputs(db, id) {
  try {
    const emailIsEmpty = document.querySelector(".email").value === "";
    const dateIsEmpty = document.querySelector(".text-input").value === "";
    const informationIsEmpty = document.querySelector(".message").value === "";
    const condition = emailIsEmpty || dateIsEmpty || informationIsEmpty;
    condition
      ? showDialog("dialog")
      : saveData(db, id);
  } catch (error) {
    throw new Error(error);
  }
}

function showDialog(id) {
  const dialog = document.getElementById(id);
  dialog.style.display = "flex";
  dialog.style.flexDirection = "column";
  dialog.style.justifyContent = "space-evenly";
  dialog.style.alignItems = "center";
  dialog.showModal();
}

function closeDialog(id) {
  window.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById(id);
    const closeButton = document.querySelector(".dialog-close");
    closeButton.addEventListener("click", function () {
      dialog.close();
      dialog.style.display = "none";
    });
  });
}

closeDialog("dialog");
