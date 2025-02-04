let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("check").addEventListener("click", function () {
  const guess = parseInt(document.getElementById("guess").value);
  attempts++;

  if (guess === randomNumber) {
    document.getElementById("feedback").textContent = "Grattis! Du gissade rätt!";
    document.getElementById("feedback").style.color = "green";
  } else if (guess < randomNumber) {
    document.getElementById("feedback").textContent = "För lågt! Försök igen.";
    document.getElementById("feedback").style.color = "orange";
  } else {
    document.getElementById("feedback").textContent = "För högt! Försök igen.";
    document.getElementById("feedback").style.color = "orange";
  }

  document.getElementById("attempts").textContent = `Antal försök: ${attempts}`;
});
