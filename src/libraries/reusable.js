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

export const refresh = () => window.location.reload(false);

// ? LocalStorageMock was created by Chiedo and is available on https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests!

class LocalStorageMock {
    constructor() {
        this.store = {}
    }

    clear() {
        this.store = {}
    }

    getItem(key) {
        return this.store[key] || null
    }

    setItem(key, value) {
        this.store[key] = value
    }

    removeItem(key) {
        delete this.store[key]
    }
}

export const localStorageMock = new LocalStorageMock();
