import { saveData } from "./events";

export function inspectInputs(db, id) {
  try {
    const emailIsEmpty = 
        document.querySelector(".email").value === "";
    const dateIsEmpty = 
        document.querySelector(".text-input").value === "";
    const informationIsEmpty =
      document.querySelector(".message").value === "";
    const condition = emailIsEmpty || dateIsEmpty || informationIsEmpty;
    condition
      ? alert("Please, fill in all the information requested.")
      : saveData(db, id);
  } catch (error) {
    throw new Error(error);
  }
}
