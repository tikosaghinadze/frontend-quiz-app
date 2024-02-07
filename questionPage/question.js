const savedHtmlApiString = localStorage.getItem("htmlApi");
const savedHtmlApi = JSON.parse(savedHtmlApiString);

const savedCssApiString = localStorage.getItem("cssApi");
const savedCssApi = JSON.parse(savedCssApiString);

const savedJsApiString = localStorage.getItem("jsApi");
const savedJsApi = JSON.parse(savedJsApiString);

const savedAccesApiString = localStorage.getItem("accesApi");
const savedAccesApi = JSON.stringify(savedAccesApiString);

// Iterate over each object in the results array
let questionIndex = 0;
const button = document.querySelectorAll(".answers");
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
  });
}
displayQuestion(questionIndex);
//write fuction witch will shuffle a answers
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
