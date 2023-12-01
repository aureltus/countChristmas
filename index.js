const countdownDisplay = document.getElementById("countdown-display");
const countdownDispaly = document.querySelector(".countdown-text");

function renderCountdown() {
  const christmas = new Date("Dec 25 00:00:00 2023");
  const today = new Date();
  const christmasDay = Math.round((christmas - today) / 1000);
  const countChristmas = Math.abs(christmasDay);

  let days = Math.floor(countChristmas / (60 * 60 * 24));
  const hours = Math.floor((countChristmas - days * 60 * 60 * 24) / (60 * 60));
  const minutes = Math.floor(
    (countChristmas - (days * 60 * 60 * 24 + hours * 60 * 60)) / 60
  );
  const seconds = Math.floor(
    countChristmas - (days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)
  );

  if (christmasDay <= 0 && christmasDay + 86400 > 0) {
    countdownDisplay.innerText = "It's today!";
    countdownDispaly.innerText = "Yeah!!!";
  } else {
    days = christmasDay < 0 ? days - 1 : days;
    const rest = `${
      days < 10 && days !== 0
        ? "0" + days + " d"
        : days === 0
        ? ""
        : days + " d"
    } ${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
    countdownDisplay.innerText = rest;
  }

  if (christmasDay >= 0 && days < 1) {
    countdownDispaly.innerText = "It's almost Christmas!";
  } else if (christmasDay + 86400 <= 0) {
    countdownDispaly.innerText = "After Christmas!";
  }
}
setInterval(() => {
  renderCountdown();
}, 1000);
