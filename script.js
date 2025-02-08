let currentQuestion = 0;
let rightAnswers = 0;
let progress = 0;
let AUDIO_CORRECT = new Audio("./assets/sounds/correct.mp3");
let AUDIO_WRONG = new Audio("./assets/sounds/wrong.mp3");

function init() {
  showNumberOfQuestions();
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("current-question-number").innerHTML = currentQuestion + 1;
  document.getElementById("question").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function checkAnswer(answer) {
  let question = questions[currentQuestion];
  const rightAnswer = question["right_answer"];

  enableNextButton();
  disableAnswerOptions();
  updateProgress();
  modifyBtnIfEndOfQuiz();

  if (answer === rightAnswer) {
    showCorrectAnswer(answer);
  } else {
    showWrongAnswer(answer, rightAnswer);
  }
}

function showCorrectAnswer(answer) {
  AUDIO_CORRECT.play();
  rightAnswers++;
  document.getElementById(answer).style.backgroundColor = "#309365";
  document.getElementById(answer).style.color = "#fff";
}

function showWrongAnswer(answer, rightAnswer) {
  AUDIO_WRONG.play();
  document.getElementById(answer).style.backgroundColor = "#ee9aa2";
  document.getElementById(rightAnswer).style.backgroundColor = "#309365";
  document.getElementById(rightAnswer).style.color = "#fff";
}

function nextQuestion() {
  currentQuestion++;
  disableNextButton();

  if (quizIsOver()) {
    showEndScreen();
  } else {
    resetAnswerButtons();
    showQuestion();
  }
}

function showEndScreen() {
  document.getElementById("top-img").src = `./assets/img/award.jpg`;
  document.querySelector(".progress").style.display = "none";
  document.querySelector(".card-body").innerHTML = getEndScreenTemplate();
}

function resetAnswerButtons() {
  const answers = document.querySelectorAll(".card-answer");
  answers.forEach((element) => {
    element.children[0].style.backgroundColor = "";
    element.children[0].style.color = "";
    element.children[0].disabled = false;
    element.classList.remove("unclickable");
  });
}

function updateProgress() {
  const progressStep = 100 / questions.length;
  progress += progressStep;
  document.getElementById("progress-bar").style.width = `${Math.round(progress)}%`;
  document.getElementById("progress-bar").ariaValueNow = `${Math.round(progress)}`;
  document.getElementById("progress-bar").innerHTML = `${Math.round(progress)}%`;
}

function disableAnswerOptions() {
  const answers = document.querySelectorAll(".card-answer");
  answers.forEach((element) => {
    element.classList.add("unclickable");
  });
}

function modifyBtnIfEndOfQuiz() {
  if (currentQuestion + 1 >= questions.length) {
    document.getElementById("next-btn").innerHTML = "Resultat anzeigen";
  }
}

function enableNextButton() {
  return (document.getElementById("next-btn").disabled = false);
}

function disableNextButton() {
  return (document.getElementById("next-btn").disabled = true);
}

function quizIsOver() {
  return currentQuestion >= questions.length;
}

function showNumberOfQuestions() {
  return (document.getElementById("number-of-questions").innerHTML = questions.length);
}

function restartQuiz() {
  currentQuestion = 0;
  rightAnswers = 0;
  progress = 0;
  document.querySelector(".card").innerHTML = getStartScreenTemplate();
  init();
}
