document.addEventListener("DOMContentLoaded", function () {
    // Function to format and update the current time
    function updateCurrentTime() {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        document.querySelector('.hours').textContent = hours;
        document.querySelector('.minutes').textContent = minutes;
    }

    // Update the current time initially and set up interval
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);


    // Function to get formatted day of the week
    function getFormattedDayOfWeek() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[new Date().getDay()];
    }

    // Function to get formatted month
    function getFormattedMonth() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[new Date().getMonth()];
    }

    // Function to update HTML element with formatted date and time
    function updateCurrentDateTime() {
        const dayOfWeek = getFormattedDayOfWeek();
        const month = getFormattedMonth();
        const dayOfMonth = new Date().getDate();

        const formattedDateTime = `${dayOfWeek}, ${month} ${dayOfMonth}`;

        document.getElementById('currentDateTime').innerText = formattedDateTime;
    }

    // Call the update function to initialize
    updateCurrentDateTime();


});