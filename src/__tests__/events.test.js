const { populateEvents, getEvents, notify, deleteEvent, loadDifference, saveData } = require("../scripts/events");
const { db, deleteDoc, setDoc } = require("firebase/firestore");

describe("populateEvents", () => {
  const mockCurrentEvent = {
    name: "Test Event",
    date: "2026-07-30",
    description: "Test Description",
  };

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="events-name"></div>
      <div id="events-date"></div>
      <div id="events-description"></div>
      <div id="events-distance"></div>
    `;
  });

  it("should populate DOM elements with event data", () => {
    populateEvents(mockCurrentEvent);
    expect(document.getElementById("events-name").innerHTML).toBe("Test Event");
    expect(document.getElementById("events-date").innerHTML).toBe("2026-07-30");
    expect(document.getElementById("events-description").innerHTML).toBe("Test Description");
  });

  it("should handle missing DOM elements gracefully", () => {
    document.body.innerHTML = "";
    const consoleSpy = jest.spyOn(console, "log");
    console.log(consoleSpy)
    populateEvents(mockCurrentEvent);
    expect(consoleSpy).toHaveBeenCalledWith("⚠️ Error populating events");
    consoleSpy.mockRestore();
  });

  it("should handle undefined currentEvent", () => {
    document.body.innerHTML = `
      <div id="events-name"></div>
      <div id="events-date"></div>
    `;
    populateEvents(undefined);
    expect(document.getElementById("events-name").innerHTML).toBe("");
  });
});

describe("notify", () => {
  const mockEvent = {
    name: "Test Event",
    description: "Test Description",
  };

  beforeEach(() => {
    // Properly mock the entire Notification API
    Object.defineProperty(window, "Notification", {
      value: jest.fn().mockImplementation(() => ({})), // Add constructor
      writable: true,
      configurable: true,
    });
    window.Notification.requestPermission = jest
      .fn()
      .mockResolvedValue("granted");
    window.Notification.permission = "granted";
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should send a notification if permission is granted", async () => {
    const consoleSpy = jest.spyOn(console, "log");
    await notify(mockEvent);
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(window.Notification).toHaveBeenCalledWith(
      `${mockEvent.name} is happening today!`,
      { body: mockEvent.description },
    );
    consoleSpy.mockRestore();
  });

  it("should do nothing if Notification API is not supported", () => {
    delete window.Notification;
    const consoleSpy = jest.spyOn(console, "log");
    notify(mockEvent);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("should log error if notification fails", () => {
    Object.defineProperty(window, "Notification", {
      value: jest.fn().mockImplementation(() => {
        throw new Error("Denied");
      }),
      writable: true,
      configurable: true,
    });
    window.Notification.requestPermission = jest
      .fn()
      .mockRejectedValue(new Error("Denied"));
    const consoleSpy = jest.spyOn(console, "log");
    notify(mockEvent);
    expect(consoleSpy).toHaveBeenCalledWith("⚠️ Error notifying user");
    consoleSpy.mockRestore();
  });
});

// Example: Inject `fetchEvents` as a dependency instead of mocking it
describe("getEvents", () => {
  it("should fetch events from the database", async () => {
    // Define a mock implementation directly (no `jest.mock`)
    const mockFetchEvents = async () => [{ name: "Event 1" }];

    // Pass the mock as a dependency (assuming `getEvents` accepts it)
    const result = await getEvents(db, "123", mockFetchEvents);
    expect(result).toEqual([{ name: "Event 1" }]);
  });

  it("should handle fetch failure", async () => {
    // Define a failing mock
    const failingFetchEvents = async () => {
      throw new Error("Failed");
    };

    // Pass the mock and expect rejection
    await expect(getEvents(db, "123", failingFetchEvents)).rejects.toThrow();
  });
});


describe("notifyAll", () => {
  const testEvents = [
    { name: "Event 1", date: "2026-07-30" },
    { name: "Event 2", date: "2026-07-31" },
  ];

  beforeEach(() => {
    // Reset modules before each test
    jest.resetModules();
  });

  it("should notify for events happening today", async () => {
    // Mock the date module
    jest.doMock("./date", () => ({
      getTodaysDate: () => "2026-07-30",
    }));

    // Mock the utilities module
    jest.doMock("./utilities", () => ({
      fetchEvents: jest.fn().mockResolvedValue(testEvents),
    }));

    const notifySpy = jest.spyOn(global, "notify");
    const { notifyAll } = require("./notifyAll");
    await notifyAll("123", 2);
    expect(notifySpy).toHaveBeenCalledWith(testEvents[0]);
    notifySpy.mockRestore();
  });

  it("should not notify for events not today", async () => {
    // Mock the date module
    jest.doMock("./date", () => ({
      getTodaysDate: () => "2026-07-30",
    }));

    // Mock the utilities module
    jest.doMock("./utilities", () => ({
      fetchEvents: jest.fn().mockResolvedValue(testEvents),
    }));

    const notifySpy = jest.spyOn(global, "notify");
    const { notifyAll } = require("./notifyAll");
    await notifyAll("123", 2);
    expect(notifySpy).not.toHaveBeenCalledWith(testEvents[1]);
    notifySpy.mockRestore();
  });
});

describe("deleteEvent", () => {
  const mockEvents = [{ name: "Event 1" }, { name: "Event 2" }];

  beforeEach(() => {
    jest.mock("firebase/firestore", () => ({
      deleteDoc: jest.fn().mockResolvedValue(undefined),
      doc: jest.fn(),
    }));
    jest.mock("./utilities", () => ({
      fetchEvents: jest.fn().mockResolvedValue(mockEvents),
    }));
  });

  it("should delete the correct event", async () => {
    await deleteEvent(0, "123");
    expect(deleteDoc).toHaveBeenCalled();
  });

  it("should log error if deletion fails", async () => {
    jest.mock("firebase/firestore", () => ({
      deleteDoc: jest.fn().mockRejectedValue(new Error("Failed")),
      doc: jest.fn(),
    }));
    const consoleSpy = jest.spyOn(console, "log");
    await deleteEvent(0, "123");
    expect(consoleSpy).toHaveBeenCalledWith("⚠️ Error deleting event");
    consoleSpy.mockRestore();
  });
});

describe("loadDifference", () => {
  beforeEach(() => {
    jest.mock("./date", () => ({
      getTodaysDate: () => "2026-07-30",
    }));
  });

  it("should return 'It is happening today!' for today's event", () => {
    const mockEvent = { date: "2026-07-30" };
    const notifySpy = jest.spyOn(global, "notify");
    const result = loadDifference(mockEvent);
    expect(result).toBe("It is happening today!");
    expect(notifySpy).toHaveBeenCalledWith(mockEvent);
    notifySpy.mockRestore();
  });

  it("should return days until event if in the future", () => {
    const mockEvent = { date: "2026-08-01" };
    const result = loadDifference(mockEvent);
    expect(result).toBe("It is 2 days from today!");
  });

  it("should return days since event if in the past", () => {
    const mockEvent = { date: "2026-07-28" };
    const result = loadDifference(mockEvent);
    expect(result).toBe("It happened 2 days ago!");
  });

  it("should log error if date parsing fails", () => {
    const mockEvent = { date: "invalid-date" };
    const consoleSpy = jest.spyOn(console, "log");
    loadDifference(mockEvent);
    expect(consoleSpy).toHaveBeenCalledWith(
      "⚠️ Error loading difference between dates",
    );
    consoleSpy.mockRestore();
  });
});

describe("saveData", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <input class="text-input" value="Test Event" />
      <input class="email" value="2026-07-30" />
      <textarea class="message">Test Description</textarea>
    `;
    jest.mock("firebase/firestore", () => ({
      setDoc: jest.fn().mockResolvedValue(undefined),
      doc: jest.fn(),
    }));
    jest.mock("./utilities", () => ({
      showDialog: jest.fn(),
    }));
  });

  it("should save event data to Firestore", async () => {
    await saveData(db, "123");
    expect(setDoc).toHaveBeenCalled();
  });

  it("should show success dialog on success", async () => {
    const showDialogSpy = jest.spyOn(require("./utilities"), "showDialog");
    await saveData(db, "123");
    expect(showDialogSpy).toHaveBeenCalledWith("dialog-success");
    showDialogSpy.mockRestore();
  });

  it("should show error dialog on failure", async () => {
    jest.mock("firebase/firestore", () => ({
      setDoc: jest.fn().mockRejectedValue(new Error("Failed")),
      doc: jest.fn(),
    }));
    const showDialogSpy = jest.spyOn(require("./utilities"), "showDialog");
    await saveData(db, "123");
    expect(showDialogSpy).toHaveBeenCalledWith("dialog-error");
    showDialogSpy.mockRestore();
  });
});