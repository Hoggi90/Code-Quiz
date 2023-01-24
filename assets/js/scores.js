const highscores = document.getElementById("highscores");
const clearBtn = document.getElementById("clear");

// Get the entry from local storage
const scoreString = localStorage.getItem('newEntry');
if (scoreString) {
  const scoreEntry = JSON.parse(scoreString);
  const newScoreEntry = document.createElement("li");
  newScoreEntry.textContent = `${scoreEntry.initials} - ${scoreEntry.score}`;  
  highscores.appendChild(newScoreEntry);
}

function clearData() {
    localStorage.clear();
    highscores.innerHTML = "";
}

clearBtn.addEventListener("click", clearData)