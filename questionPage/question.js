const savedItemApiString = localStorage.getItem("selectedItem");
const savedItemApi = JSON.parse(savedItemApiString);
console.log(savedItemApi);
// Iterate over each object in the results array
let currentQuestionIndex = 0;
const buttonAnswer = document.querySelectorAll(".common-btn");
const answerBackground = document.querySelector(".variant-btn");
const submitBtn = document.querySelector(".submit");
const showResultBtn = document.querySelector(".showresult-btn");

let selectedAnswer = null;
let questionObj = null;
let countCorrect = 0;
const purpleRect = document.querySelector(".purple-rect");
const questionRectangle = document.querySelector(".question-rectangle");

const lengthOfArray = savedItemApi.results.length;
// Calculate the width of the purple rectangle based on the number of questions
// const purpleRectWidth =
//   (questionRectangle.offsetWidth / lengthOfArray) * currentQuestionIndex;
// Get the width of the question rectangle
const questionRectangleWidth = questionRectangle.offsetWidth - 8;

const erroSvg = document.querySelector(".commonError-svg");
const correctSvg = document.querySelector(".commonCorrect-svg");
const nextBtn = document.querySelector(".next-btn");
const submitError = document.querySelector(".submit-error");
let lengthArray = document.querySelector(".lenght-arr");
let currentNum = document.querySelector(".current-num");
// get category items
const htmlBtn = document.querySelector("#html-btn");
const cssBtn = document.querySelector("#css-btn");
const jsBtn = document.querySelector("#js-btn");
const accessBtn = document.querySelector("#accessibility");
// get end point of url
const categoryValue = localStorage.getItem("categoryValue");

// display question
const questionBox = document.querySelector(".question");
questionBox.textContent = "";
function displayQuestion(questionIndex) {
  buttonAnswer.forEach((disabledBtn) => {
    disabledBtn.disabled = false;
  });
  submitBtn.style.display = "flex";
  nextBtn.style.display = "none";
  // display clicked category svg and title
  switch (categoryValue) {
    case "22":
      htmlBtn.style.display = "block";
      break;
    case "23":
      cssBtn.style.display = "block";
      break;
    case "11":
      jsBtn.style.display = "block";
      break;
    case "18":
      accessBtn.style.display = "block";
      break;
  }

  // Update the width of the purple rectangle
  const purpleRectWidth =
    (questionRectangle.offsetWidth / lengthOfArray) * currentQuestionIndex;
  purpleRect.style.width = `${purpleRectWidth}px`;

  localStorage.setItem("savedLength", lengthOfArray);

  lengthArray.textContent = `${lengthOfArray}`;
  currentNum.textContent = `${currentQuestionIndex + 1}`;
  questionObj = savedItemApi.results[questionIndex];
  questionBox.innerHTML = `${questionObj.question}`;

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
        selectedAnswer
          .querySelector(".question-section")
          .querySelector(".variant-btn").style.color = "#626C7F";
      }

      selectedAnswer = button;
      button
        .querySelector(".question-section")
        .querySelector(".variant-btn").style.backgroundColor = "#A729F5";
      button
        .querySelector(".question-section")
        .querySelector(".variant-btn").style.color = "#fff";
      button.style.border = "3px solid  #A729F5";
    });
  });
}

submitBtn.addEventListener("click", () => {
  if (selectedAnswer) {
    submitError.style.display = "none";
    buttonAnswer.forEach((disabledBtn) => {
      disabledBtn.disabled = true;
    });
    if (
      selectedAnswer
        .querySelector(".question-section")
        .querySelector(".answers").textContent == questionObj.correct_answer
    ) {
      countCorrect++;
      selectedAnswer
        .querySelector(".question-section")
        .querySelector(".variant-btn").style.backgroundColor = "#26D782";
      selectedAnswer.style.border = "3px solid  #26D782";
      selectedAnswer.querySelector(".commonCorrect-svg").style.display =
        "block";
    } else {
      selectedAnswer
        .querySelector(".question-section")
        .querySelector(".variant-btn").style.backgroundColor = "#EE5454";
      selectedAnswer.style.border = "3px solid  #EE5454";
      selectedAnswer.querySelector(".commonError-svg").style.display = "block";
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
      submitBtn.style.display = "none";
      showResultBtn.style.display = "flex";
      // If it's the last question, set the width of the purple rectangle to the width of the question rectangle
      purpleRect.style.width = `${questionRectangleWidth}px`;
      localStorage.setItem("score", countCorrect);
      showResultBtn.addEventListener("click", () => {
        window.location.href = "../score/score.html";
      });
    }
  } else {
    submitError.style.display = "block";
  }
});
//next question button
let nextQuestionBtn = () => {
  selectedAnswer = null;
  nextBtn.style.display = "flex";
  nextBtn.addEventListener("click", () => {
    buttonAnswer.forEach((borderBtn) => {
      borderBtn.style.border = "none";
      borderBtn
        .querySelector(".question-section")
        .querySelector(".variant-btn").style.backgroundColor = "#F4F6FA";
      borderBtn
        .querySelector(".question-section")
        .querySelector(".variant-btn").style.color = "#626C7F";
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
// Change styles when dark mode is toggled
//get elements
const countQuestion = document.querySelector(".count-questions");
const answers = document.querySelectorAll(".answers");
const commontitle = document.querySelectorAll(".common-title");
if (isDarkMode) {
  // Apply dark mode style
  countQuestion.style.color = "#ABC1E1";
  questionBox.style.color = "#fff";
  answers.forEach((ans) => {
    ans.style.color = "#fff";
  });
  commontitle.forEach((title) => {
    title.style.color = "#fff";
  });
} else {
  countQuestion.style.color = "";
  questionBox.style.color = "";
  answers.forEach((ans) => {
    ans.style.color = "";
  });
  commontitle.forEach((title) => {
    title.style.color = "";
  });
}

darkMode.addEventListener("click", () => {
  if (isDarkMode) {
    // Apply dark mode style
    countQuestion.style.color = "#ABC1E1";
    questionBox.style.color = "#fff";
    answers.forEach((ans) => {
      ans.style.color = "#fff";
    });
    commontitle.forEach((title) => {
      title.style.color = "#fff";
    });
  } else {
    countQuestion.style.color = "";
    questionBox.style.color = "";
    answers.forEach((ans) => {
      ans.style.color = "";
    });
    commontitle.forEach((title) => {
      title.style.color = "";
    });
  }
});
