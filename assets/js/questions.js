let question1 = "What is the syntax for a variable in JavaScript?";
let question2 = "What is the syntax for a string in JavaScript?";
let question3 = "What is the syntax for a number in JavaScript?";
let question4 = "What is the syntax for an array in JavaScript?";
let question5 = "What is the syntax for a function in JavaScript?";

let allQuestions = [question1, question2, question3, question4, question5]
let rightAnswers = ["var", "quotation marks", "no quotation marks", "[]", "function"];
let wrongAnswers = [[1, 2, 3], [4, 5, 6], [7 , 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]]

const startQuiz = document.getElementById("start");
const timerEl = document.getElementById("time");
const startScreen = document.getElementById("start-screen");
const questions = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");


let secondsLeft = 30;

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

let incorrectSfx = new Audio("assets/sfx/incorrect.wav");
let correctSfx = new Audio("assets/sfx/correct.wav");

let currentQuestionIndex = 0;
let answers = [rightAnswers[currentQuestionIndex],...wrongAnswers[currentQuestionIndex]];
    shuffle(answers);
function displayQuestion() {
    questions.classList.remove("hide");
    questionTitle.textContent = allQuestions[currentQuestionIndex];
    const choicesList = document.createElement("ul");
    choices.appendChild(choicesList);
    let message = document.createElement("p");
    choices.appendChild(message);

    wrongAnswers[currentQuestionIndex].forEach(function(answer){
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = answer;
        li.appendChild(button);
        choicesList.appendChild(li);
        
        button.addEventListener("click", function(){
            if(button.textContent !== rightAnswers[currentQuestionIndex] && secondsLeft > 5) {
                secondsLeft -= 5;
                timerEl.textContent = secondsLeft;
                message.textContent = "Wrong!";
                incorrectSfx.play();
            }
        });
    });
    let rightLi = document.createElement("li");
    let rightButton = document.createElement("button");
    rightButton.textContent = rightAnswers[currentQuestionIndex];
    rightLi.appendChild(rightButton);
    choicesList.appendChild(rightLi);

    rightButton.addEventListener("click", function(){
        message.textContent = "Correct!";
        correctSfx.play();
        setTimeout(function(){
          currentQuestionIndex++;
          message.textContent = "";
          if(currentQuestionIndex < allQuestions.length) {
            displayQuestion();
          } else {
            displayEndScreen();
          }
        }, 1000); // delay of 1 second
        choicesList.remove();
    });
}

function displayEndScreen() {
    questions.classList.add("hide");
    endScreen.classList.remove("hide");
    timerEl.classList.add("hide");


}






