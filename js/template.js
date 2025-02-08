function getEndScreenTemplate() {
  return `
    <div class="text-center">
      <h1 class="mt-4 mb-4">QUIZ BEENDET</h1>
      <p class="mb-4">Du hast <b>${rightAnswers}</b> von <b>${questions.length}</b> Fragen richtig beantwortet.</p>
      <button class="btn btn-primary mb-4" onclick="restartQuiz()">Neu starten</button>
    </div>
    `;
}

function getStartScreenTemplate() {
  return `
  <img src="./assets/img/quiz.jpg" class="card-img-top" id="top-img" alt="Quiz" />

        <!-- Progress Bar -->
        <div class="progress">
          <div
            class="progress-bar"
            id="progress-bar"
            role="progressbar"
            aria-label="Example with label"
            style="width: 0%"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            0%
          </div>
        </div>
        <!-- Progress Bar -->

        <div class="card-body">
          <h5 class="card-title pb-3 pt-2" id="question"></h5>

          <!-- Answers -->
          <div class="card card-answer mb-2" onclick="checkAnswer('answer_1')">
            <div class="card-body" id="answer_1"></div>
          </div>
          <div class="card card-answer mb-2" onclick="checkAnswer('answer_2')">
            <div class="card-body" id="answer_2"></div>
          </div>
          <div class="card card-answer mb-2" onclick="checkAnswer('answer_3')">
            <div class="card-body" id="answer_3"></div>
          </div>
          <div class="card card-answer mb-2" onclick="checkAnswer('answer_4')">
            <div class="card-body" id="answer_4"></div>
          </div>
          <!-- Answers -->

          <div class="question-footer pb-3">
            <span><b id="current-question-number"></b> von <b id="number-of-questions"></b> Fragen</span>
            <button class="btn btn-primary" id="next-btn" disabled onclick="nextQuestion()">nächste Frage</button>
          </div>
        </div>
  `;
}
