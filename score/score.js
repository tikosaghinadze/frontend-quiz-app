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
