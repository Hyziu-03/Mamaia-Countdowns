import { saveData } from "./events";

export function inspectInputs(db, id) {
  try {
    const emailIsEmpty = document.querySelector(".email").value === "";
    const dateIsEmpty = document.querySelector(".text-input").value === "";
    const informationIsEmpty = document.querySelector(".message").value === "";
    const condition = emailIsEmpty || dateIsEmpty || informationIsEmpty;
    condition
      ? showDialog()
      : saveData(db, id);
  } catch (error) {
    throw new Error(error);
  }
}

function showDialog() {
  const dialog = document.getElementById("dialog");
  dialog.style.display = "block";
  dialog.showModal();
}

function closeDialog() {
  window.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("dialog");
    const closeButton = document.querySelector(".dialog-close");
    closeButton.addEventListener("click", function () {
      dialog.close();
      dialog.style.display = "none";
    });
  });
}

closeDialog();
