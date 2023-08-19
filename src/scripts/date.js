export const getTodaysDate = () => {
  try {
    const date = new Date();
    let day = date.getDate();
    if (day < 10) day = "0" + day;
    let month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;
    const year = date.getFullYear();
    const today = year + "-" + month + "-" + day;
    return today;
  } catch (error) {
    console.log("⚠️ Error getting today's date");
  }
};

export const getDifference = (event) => {
  try {
    const millisecondsPerDay = 86400000;
    const today = new Date(getTodaysDate());
    const eventsDate = new Date(event);
    const difference = (eventsDate - today) / millisecondsPerDay;
    return difference;
  } catch (error) {
    console.log("⚠️ Error getting difference between dates");
  }
};

export const thisYear = new Date().getFullYear();
