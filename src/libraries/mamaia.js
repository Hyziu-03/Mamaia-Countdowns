export const integrateTabIndex = () => {
    document.addEventListener('keydown', (event) => {
        try {
            if (event.key === 13) {
                document.activeElement.click();
            }
        } catch (exception) {
            throw new Error(exception);
        }
    });
};
