export const integrateTabIndex = () => {
    document.addEventListener("keydown", (event) => {
        try {
            event.key === 13 && document.activeElement.click();
        } catch (exception) {
            throw new Error(exception);
        }
    });
};

export const refresh = () => {
    try {
        window.location.reload(false);
    } catch(error) {
        console.error(error);
    }
};
