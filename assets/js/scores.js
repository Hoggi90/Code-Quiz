const highscores = document.getElementById("highscores");

// Get the last entry from local storage
const scoreString = localStorage.getItem('newEntry');

if (scoreString) {
  const scoreEntry = JSON.parse(scoreString);
  
  // Create a new list item element
  const newScoreEntry = document.createElement("li");
  
  // Set the text content of the list item element to the initials and final score
  newScoreEntry.textContent = `${scoreEntry.initials} - ${scoreEntry.score}`;
  
  // Append the list item element to the highscores element
  highscores.appendChild(newScoreEntry);
}
