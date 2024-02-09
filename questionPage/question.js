const savedItemApiString = localStorage.getItem("selectedItem");
const savedItemApi = JSON.parse(savedItemApiString);

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
  buttonAnswer.forEach((disabledBtn) => {
    disabledBtn.disabled = false;
  });
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
  questionObj = savedItemApi.results[questionIndex];
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
    buttonAnswer.forEach((disabledBtn) => {
      disabledBtn.disabled = true;
    });
    if (
      selectedAnswer
        .querySelector(".question-section")
        .querySelector(".answers").textContent == questionObj.correct_answer
    ) {
      answerBackground.style.backgroundColor = "#26D782";
      selectedAnswer.style.border = "3px solid  #26D782";
      correctSvg.style.display = "block";
    } else {
      answerBackground.style.backgroundColor = "#EE5454";
      selectedAnswer.style.border = "3px solid  #EE5454";
      erroSvg.style.display = "block";
      let answersBtn = document.querySelectorAll(".answers");
      answersBtn.forEach((findCorrect) => {
        if (findCorrect.textContent == questionObj.correct_answer) {
          const parentDiv = findCorrect.parentElement;
          const findCorrectSvg = parentDiv.nextElementSibling;
          findCorrectSvg.style.display = "block";
        }
      });
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < savedItemApi.results.length) {
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
  selectedAnswer = null;
  nextBtn.style.display = "block";
  nextBtn.addEventListener("click", () => {
    buttonAnswer.forEach((borderBtn) => {
      borderBtn.style.border = "none";
      borderBtn
        .querySelector(".question-section")
        .querySelector(".variant-btn").style.backgroundColor = "#F4F6FA";
      borderBtn.querySelector(".commonCorrect-svg").style.display = "none";
      borderBtn.querySelector(".commonError-svg").style.display = "none";
    });
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
