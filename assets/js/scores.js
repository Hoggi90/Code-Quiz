let highscores = document.getElementById("highscores");
let initials = localStorage.getItem("initials");
let score = localStorage.getItem("score");
let entry = initials + " - " + score;
let item = document.createElement("li");
item.textContent = entry;
highscores.appendChild(item);