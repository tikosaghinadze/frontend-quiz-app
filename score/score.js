const lenght0fArray = document.querySelector(".outOfNum");
const scoreOfAnswers = document.querySelector(".result-score");

const result = localStorage.getItem("score");
const savedLEngth0fArray = localStorage.getItem("savedLength");

const startAgain = document.querySelector(".playAgain");

scoreOfAnswers.textContent = result;
lenght0fArray.textContent = savedLEngth0fArray;

// back to the main page
startAgain.addEventListener("click", () => {
  window.location.href = "../index.html";
});
const htmlBtn = document.querySelector("#html-btn");
const cssBtn = document.querySelector("#css-btn");
const jsBtn = document.querySelector("#js-btn");
const accessBtn = document.querySelector("#accessibility");

const htmlBtnByClass = document.querySelector(".html-btn");
const cssBtnByClass = document.querySelector(".css-btn");
const jsBtnByClass = document.querySelector(".js-btn");
const accessBtnByClass = document.querySelector(".accessibility");
// get end point of url
const categoryValue = localStorage.getItem("categoryValue");

// display clicked category svg and title
switch (categoryValue) {
  case "22":
    htmlBtn.style.display = "block";
    htmlBtnByClass.style.display = "block";
    break;
  case "23":
    cssBtn.style.display = "block";
    cssBtnByClass.style.display = "block";
    break;
  case "11":
    jsBtn.style.display = "block";
    jsBtnByClass.style.display = "block";
    break;
  case "18":
    accessBtn.style.display = "block";
    accessBtnByClass.style.display = "block";
    break;
}
//get elements
const categorytitle = document.querySelectorAll(".common-title");
const scoreDiv = document.querySelector(".score-div");
const quizCompleted = document.querySelector(".quiz-completed");
const uScored = document.querySelector(".u-scored");
const outOf = document.querySelector(".outOf");
// Change styles when dark mode is toggled
if (isDarkMode) {
  categorytitle.forEach((title) => {
    title.style.color = "#fff";
  });
  scoreDiv.style.backgroundColor = "#3B4D66";
  quizCompleted.style.color = "#fff";
  uScored.style.color = "#fff";
  scoreOfAnswers.style.color = "#fff";
  outOf.style.color = "#ABC1E1";
} else {
  categorytitle.forEach((title) => {
    title.style.color = "";
  });
  scoreDiv.style.backgroundColor = "";
  quizCompleted.style.color = "";
  uScored.style.color = "";
  scoreOfAnswers.style.color = "";
  outOf.style.color = "";
}
darkMode.addEventListener("click", () => {
  if (isDarkMode) {
    categorytitle.forEach((title) => {
      title.style.color = "#fff";
    });
    scoreDiv.style.backgroundColor = "#3B4D66";
    quizCompleted.style.color = "#fff";
    uScored.style.color = "#fff";
    scoreOfAnswers.style.color = "#fff";
    outOf.style.color = "#ABC1E1";
  } else {
    categorytitle.forEach((title) => {
      title.style.color = "";
    });
    scoreDiv.style.backgroundColor = "";
    quizCompleted.style.color = "";
    uScored.style.color = "";
    scoreOfAnswers.style.color = "";
    outOf.style.color = "";
  }
});
console.log(scoreDiv);
