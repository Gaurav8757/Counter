const current = document.querySelector(".current");
const next = document.querySelector(".next");
function startCounter() {
  const countdownInput = document.querySelector(".form-control");
  const countdownValue = parseInt(countdownInput.value);

  if (isNaN(countdownValue) || countdownValue < 1 || countdownValue > 9) {
    alert("Please enter a number between 1 and 9.");
    return;
  }
  let count = countdownValue;
  var interval = setInterval(() => {
    animate();
    current.innerText = count;
    next.innerText = current.innerText;
    current.innerText = "";
    count--;
    if (count < 0) {
      clearInterval(interval);
    }
  }, 1500);
}

function animate() {
  //current.classList.add("animate");
  next.classList.add("animate");
  setTimeout(() => {
    next.classList.remove("animate");
    current.classList.remove("animate");
  }, 1000);
}
