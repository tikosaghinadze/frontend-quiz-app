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
const button = document.querySelectorAll(".answers");
const answerBackground = document.querySelector(".variant-btn");
const submitBtn = document.querySelector(".submit");

function displayQuestion(questionIndex) {
  const questionObj = savedHtmlApi.results[questionIndex];
  const questionBox = document.querySelector(".question");
  questionBox.textContent = `${questionObj.question}`;
  //spraid answers in one array
  const answers = [
    ...questionObj.incorrect_answers,
    questionObj.correct_answer,
  ];
  const shuffledAnswers = shuffleArray(answers);
  //loop shuffledAnswers amd give content to dives
  button.forEach((button, index) => {
    button.textContent = shuffledAnswers[index];
    // Handle answer selection
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const borderSelectedAnswer = document.querySelector(".common-btn");
      const selectedAnswer = button.textContent;
      const erroSvg = document.querySelector(".commonError-svg");
      const correctSvg = document.querySelector(".commonCorrect-svg");
      answerBackground.style.backgroundColor = "#A729F5";
      borderSelectedAnswer.style.border = "3px solid  #A729F5";
      submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (selectedAnswer == questionObj.correct_answer) {
          answerBackground.style.backgroundColor = "#26D782";
          borderSelectedAnswer.style.border = "3px solid  #26D782";
          correctSvg.style.display = "block";
          submitBtn.textContent = "Next Question";
          console.log(2);
        } else {
          answerBackground.style.backgroundColor = "#EE5454";
          borderSelectedAnswer.style.border = "3px solid  #EE5454";
          erroSvg.style.display = "block";
          submitBtn.textContent = "Next Question";
          console.log("false");
        }
      });

      currentQuestionIndex++;
      if (currentQuestionIndex < savedHtmlApi.results.length) {
        displayQuestion(currentQuestionIndex);
      } else {
        console.log("End of questions");
      }
    });
  });
}
displayQuestion(currentQuestionIndex);
//write fuction witch will shuffle a answers
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
