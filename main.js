function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();


function updateDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' }); // Get full month name
    const year = today.getFullYear();

    const dateString = `${month} ${day}, ${year}`;
    document.getElementById('date').textContent = dateString;
}

// Call updateDate to display today's date immediately
updateDate();
