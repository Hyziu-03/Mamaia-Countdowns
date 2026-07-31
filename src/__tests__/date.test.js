const { getTodaysDate, getDifference, thisYear } = require("../scripts/date"); 

describe("getTodaysDate", () => {
  // Mock the current date to ensure consistent test results
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-07-23T00:00:00Z")); // Fixed date for tests
  });

  afterAll(() => {
    jest.useRealTimers(); // Restore real timers
  });

  test("returns date in YYYY-MM-DD format", () => {
    const result = getTodaysDate();
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/); // Regex for format
  });

  test("pads single-digit day/month with leading zero", () => {
    // Simulate a date with single-digit day/month (e.g., January 5)
    jest.setSystemTime(new Date("2026-01-05T00:00:00Z"));
    expect(getTodaysDate()).toBe("2026-01-05");
  });

  test("handles December (month 12) correctly", () => {
    jest.setSystemTime(new Date("2026-12-31T00:00:00Z"));
    expect(getTodaysDate()).toBe("2026-12-31");
  });

  test("returns undefined on error (e.g., mocked Date error)", () => {
    const originalDate = global.Date;
    global.Date = jest.fn(() => {
      throw new Error("Mocked error");
    });
    const result = getTodaysDate();
    expect(result).toBeUndefined();
    global.Date = originalDate; // Restore
  });
});

describe("getDifference", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-07-23T00:00:00Z")); // Today is 2026-07-23
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("returns 0 for same-day event", () => {
    const result = getDifference("2026-07-23");
    expect(result).toBe(0);
  });

  test("returns positive days for future event", () => {
    const result = getDifference("2026-07-30");
    expect(result).toBe(7); // 7 days later
  });

  test("returns negative days for past event", () => {
    const result = getDifference("2026-07-20");
    expect(result).toBe(-3); // 3 days ago
  });

  test("handles invalid date input (returns NaN)", () => {
    const result = getDifference("invalid-date");
    expect(result).toBeNaN();
  });

  test("handles empty/undefined input (returns NaN)", () => {
    const result1 = getDifference("");
    const result2 = getDifference(undefined);
    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
  });

  test("returns undefined on error (e.g., mocked Date error)", () => {
    const originalDate = global.Date;
    global.Date = jest.fn(() => {
      throw new Error("Mocked error");
    });
    const result = getDifference("2026-07-23");
    expect(result).toBeUndefined();
    global.Date = originalDate; // Restore
  });
});

describe("thisYear", () => {
  test("matches the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(thisYear).toBe(currentYear);
  });
});
