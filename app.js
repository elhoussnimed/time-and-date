const time = document.querySelector(".time");
const date = document.querySelector(".date");

function changeTime(time) {
  const hour = time.getHours();
  const minut = time.getMinutes();
  const second = time.getSeconds();

  return `${hour.toString().padStart(2, "0")}:${minut
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
}

function changeDate(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} - ${date.getDate()} ${month} ${year}`;
}

setInterval(() => {
  const newTime = new Date();
  time.textContent = changeTime(newTime);
  date.textContent = changeDate(newTime);
}, 100);
