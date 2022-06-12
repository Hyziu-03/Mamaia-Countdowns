export const integrateTabIndex = () => {
    document.addEventListener('keydown', (event) => {
        try {
            event.key === 13 && document.activeElement.click();
        } catch (exception) {
            throw new Error(exception);
        }
    });
};

export const refresh = () => window.location.reload(false);
