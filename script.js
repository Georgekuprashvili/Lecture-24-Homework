let day = prompt("შეიყვანეთ დღე");
let hour = prompt("შეიყვანეთ საათი:");
let minute = prompt("შეიყვანეთ წუთი");
let second = prompt("შეიყვანეთ წამი");

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let interval = setInterval(() => {
  second--;
  if (second < 0) {
    second = 59;
    minute--;
    if (minute < 0) {
      minute = 59;
      hour--;
      if (hour < 0) {
        hour = 23;
        day--;
        if (day < 0) {
          clearInterval(interval);
        }
      }
    }
  }
  days.textContent = day;
  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second;
}, 1000);
