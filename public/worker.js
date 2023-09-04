function closeDialog(id) {
  addEventListener("DOMContentLoaded", () => {
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
  }, { passive: true });
}

addEventListener("message", event => {
  const source = event.data;
  if (source === "dialog") {
    closeDialog("dialog");
    closeDialog("dialog-login");
    closeDialog("dialog-success");
    closeDialog("dialog-event");
    closeDialog("dialog-error");
  }
}, { passive: true });
