const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function() {
    let initials = document.getElementById("initials").value;
    let finalScore = document.getElementById("final-score").textContent;
    localStorage.setItem("initials", initials);
    localStorage.setItem("finalScore", finalScore);
    window.location.href = "highscores.html";
  });
  

  let highscores = document.getElementById("highscores");
  let initials = localStorage.getItem("initials");
  let finalScore = localStorage.getItem("finalScore");
  highscores.textContent = initials + " - " + finalScore;
  




