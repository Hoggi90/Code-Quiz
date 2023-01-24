const startQuiz = document.getElementById("start");
const timerEl = document.getElementById("time");
const startScreen = document.getElementById("start-screen");
const questions = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const initials = document.getElementById("initials");
const submitButton = document.getElementById("submit");
let secondsLeft = 30;
let incorrectSfx = new Audio("assets/sfx/incorrect.wav");
let correctSfx = new Audio("assets/sfx/correct.wav");
let arrayIndex = 0;
let score = 0;
let finalScore = document.getElementById("final-score");

startQuiz.addEventListener("click", function() {
    displayQuestion()
    startScreen.classList.add("hide");
    const intervalId = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;


        if(secondsLeft === 0) {
            clearInterval(intervalId);
            displayEndScreen();
        }
    }, 1000);
});

function displayQuestion() {
    questions.classList.remove("hide");
    questionTitle.textContent = allQuestions[arrayIndex];
    const choicesList = document.createElement("ul");
    choices.appendChild(choicesList);
    let message = document.createElement("p");
    choices.appendChild(message);

    allAnswers[arrayIndex].sort(function() {
        return 0.5 - Math.random();
    });

    allAnswers[arrayIndex].forEach(function(answer){
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = answer;
        li.appendChild(button);
        choicesList.appendChild(li);
    
        button.addEventListener("click", function(){
            if(button.textContent !== rightAnswers[arrayIndex] && secondsLeft > 5) {
                secondsLeft -= 5;
                timerEl.textContent = secondsLeft;
                message.textContent = "Wrong Answer! - 5 seconds!";
                incorrectSfx.play();
            }
            if(button.textContent === rightAnswers[arrayIndex]){
                score += 5;
                message.textContent = "Correct Answer - Next Question...!";
                correctSfx.play();
                setTimeout(function(){
                    arrayIndex++;
                    message.textContent = "";
                    if(arrayIndex < allQuestions.length) {
                        displayQuestion();
                    } else {
                        displayEndScreen();
                    }
                    
                }, 1000);
                choicesList.remove();
            }
        });
    });
}


function displayEndScreen() {
    questions.classList.add("hide");
    endScreen.classList.remove("hide");
    timerEl.classList.add("hide");
    finalScore.textContent = score;
}

// Create event for submit button to save score and initals
submitButton.addEventListener("click", function() {
    const entry = { initials: initials.value, score: score };
    localStorage.setItem('newEntry', JSON.stringify(entry));
    window.location.href = "highscores.html";
  }
);

