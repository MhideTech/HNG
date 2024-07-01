document.addEventListener("DOMContentLoaded", function () {
  // Display the current time in UTC
  function updateTime() {
    const currentTimeElement = document.querySelector(
      '[data-testid="currentTimeUTC"]'
    );
    const currentTime = new Date().toUTCString();
    currentTimeElement.textContent = `Current Time (UTC): ${currentTime}`;
  }

  // Display the current day of the week
  function updateDay() {
    const currentDayElement = document.querySelector(
      '[data-testid="currentDay"]'
    );
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[new Date().getUTCDay()];
    currentDayElement.textContent = `Current Day: ${currentDay}`;
  }

  updateTime();
  updateDay();
  setInterval(updateTime, 60000); // Update time every minute
});
