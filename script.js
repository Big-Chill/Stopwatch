// JavaScript functionality
var timerElement = document.querySelector(".timer");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerElement.textContent = "00:00:00";
  elapsedTime = 0;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  var formattedTime = formatTime(elapsedTime);
  timerElement.textContent = formattedTime;
}

function formatTime(time) {
  var date = new Date(time);
  var hours = date.getUTCHours().toString().padStart(2, "0");
  var minutes = date.getUTCMinutes().toString().padStart(2, "0");
  var seconds = date.getUTCSeconds().toString().padStart(2, "0");
  var milliseconds = Math.floor(date.getUTCMilliseconds() / 10)
    .toString()
    .padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener("click", function() {
  // Start button click event
  startButton.classList.add('clicked');
  startTimer();
});

stopButton.addEventListener("click", function() {
  // Stop button click event
  stopButton.classList.add('clicked');
  stopTimer();
});

resetButton.addEventListener("click", function() {
  // Reset button click event
  resetButton.classList.add('clicked');
  resetTimer();
});

// Remove the clicked class after the animation completes
var buttons = document.querySelectorAll('.controls button');
buttons.forEach(function(button) {
  button.addEventListener('animationend', function() {
    button.classList.remove('clicked');
  });
});
