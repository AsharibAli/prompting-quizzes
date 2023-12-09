const quizData = [
  {
    question: "What is a prompt in AI?",
    a: "A special message to tell the AI what to do.",
    b: "A long article.",
    c: "A type of computer program.",
    d: "A new language.",
    correct: "a",
  },
  {
    question: "Why is prompt engineering important for AI?",
    a: "To make AI work without any instructions.",
    b: "To make AI understand what humans want.",
    c: "To make AI ignore human instructions.",
    d: "To make AI create mistakes.",
    correct: "b",
  },

  // End of the quizzes
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="window.location.href='https://certificate-nu.vercel.app/'">Now Generate Certificate.</button>

            `;
    }
  }
});
