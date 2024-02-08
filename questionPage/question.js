const savedHtmlApiString = localStorage.getItem("htmlApi");
const savedHtmlApi = JSON.parse(savedHtmlApiString);

const savedCssApiString = localStorage.getItem("cssApi");
const savedCssApi = JSON.parse(savedCssApiString);

const savedJsApiString = localStorage.getItem("jsApi");
const savedJsApi = JSON.parse(savedJsApiString);

const savedAccesApiString = localStorage.getItem("accesApi");
const savedAccesApi = JSON.stringify(savedAccesApiString);

// Iterate over each object in the results array
let currentQuestionIndex = 0;
const buttonAnswer = document.querySelectorAll(".common-btn");
const answerBackground = document.querySelector(".variant-btn");
const submitBtn = document.querySelector(".submit");

let selectedAnswer = null;
let questionObj = null;
const erroSvg = document.querySelector(".commonError-svg");
const correctSvg = document.querySelector(".commonCorrect-svg");
const nextBtn = document.querySelector(".next-btn");
const submitError = document.querySelector(".submit-error");
// display question
const questionBox = document.querySelector(".question");
questionBox.textContent = "";
function displayQuestion(questionIndex) {
  submitBtn.style.display = "block";
  questionObj = savedHtmlApi.results[questionIndex];
  questionBox.textContent = `${questionObj.question}`;

  //spraid answers in one array
  const answers = [
    ...questionObj.incorrect_answers,
    questionObj.correct_answer,
  ];
  const shuffledAnswers = shuffleArray(answers);
  //loop shuffledAnswers amd give content to dives

  buttonAnswer.forEach((button, index) => {
    button
      .querySelector(".question-section")
      .querySelector(".answers").textContent = shuffledAnswers[index];
    // Handle answer selection

    button.addEventListener("click", () => {
      if (selectedAnswer) {
        selectedAnswer
          .querySelector(".question-section")
          .querySelector(".variant-btn").style.backgroundColor = "#F4F6FA";
        selectedAnswer.style.border = "none";
      }

      selectedAnswer = button;
      button
        .querySelector(".question-section")
        .querySelector(".variant-btn").style.backgroundColor = "#A729F5";
      button.style.border = "3px solid  #A729F5";
    });
  });
}

submitBtn.addEventListener("click", () => {
  if (selectedAnswer) {
    if (
      selectedAnswer
        .querySelector(".question-section")
        .querySelector(".answers").textContent == questionObj.correct_answer
    ) {
      answerBackground.style.backgroundColor = "#26D782";
      selectedAnswer.style.border = "3px solid  #26D782";
      correctSvg.style.display = "block";
      submitBtn.textContent = "Next Question";
      console.log(2);
    } else {
      answerBackground.style.backgroundColor = "#EE5454";
      selectedAnswer.style.border = "3px solid  #EE5454";
      erroSvg.style.display = "block";
      submitBtn.textContent = "Next Question";
      console.log("false");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < savedHtmlApi.results.length) {
      submitBtn.style.display = "none";
      nextQuestionBtn();
    } else {
      console.log("End of questions");
    }
  } else {
    submitError.style.display = "block";
  }
});
//next question button
let nextQuestionBtn = () => {
  nextBtn.style.display = "block";
  nextBtn.addEventListener("click", () => {
    displayQuestion(currentQuestionIndex);
  });
};

displayQuestion(currentQuestionIndex);
//write fuction witch will shuffle a answers
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
