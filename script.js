const allBtn = document.querySelectorAll(".common-btn");
allBtn.forEach((btn) => {
  btn.addEventListener("click", async (event) => {
    const clickedBtn = event.target.id;
    try {
      let apiUrl;
      let clickedBtnSvg, clickedBtnTitle;
      switch (clickedBtn) {
        case "html-btn":
        case "css-btn":
        case "js-btn":
        case "accessibility":
          clickedBtnSvg = btn
            .querySelector(".category-btn")
            .querySelector("svg")
            .cloneNode(true);
          clickedBtnTitle = btn
            .querySelector(".category-btn")
            .querySelector("div").textContent;
          localStorage.setItem("clickedButtonSvg", clickedBtnSvg);
          localStorage.setItem("clickedButtonTitle", clickedBtnTitle);
          apiUrl = `https://opentdb.com/api.php?amount=10&category=${getCategory(
            clickedBtn
          )}`;
          const categoryValue = getCategory(clickedBtn);
          localStorage.setItem("categoryValue", categoryValue);

          break;
      }
      const response = await fetch(apiUrl);
      const selectedItem = await response.json();
      localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
      window.location.href = "./questionPage/question.html";
    } catch (error) {
      console.log(error);
    }
  });
});

function getCategory(btnId) {
  switch (btnId) {
    case "html-btn":
      return 22;
    case "css-btn":
      return 23;
    case "js-btn":
      return 11;
    case "accessibility":
      return 18;
    default:
      return 0;
  }
}

const darkMode = document.querySelector(".svg-turn-div");
const darkModeBall = document.querySelector(".svg-turn");
const bodyElement = document.body;
const darkCommonBtn = document.querySelectorAll(".common-btn");
const darkSun = document
  .querySelector(".header-icons")
  .querySelector(".dark-sun");
const lightSun = document
  .querySelector(".header-icons")
  .querySelector(".light-sun");
const darkMoon = document
  .querySelector(".header-icons")
  .querySelector(".dark-moon");
const lightMoon = document
  .querySelector(".header-icons")
  .querySelector(".light-moon");
const wellcome = document.querySelector(".wellcome-h1");
const frontendQuiz = document.querySelector(".frontend-quiz");
const pick = document.querySelector(".pick");
const categoryCommonTitle = document.querySelectorAll(".common-title");

//To achieve toggling between light and dark modes

let isDarkMode = false;

// Function to change background photo based on screen size
function changeBackgroundPhoto() {
  if (window.innerWidth >= 1440) {
    bodyElement.style.backgroundImage =
      "url(/images/pattern-background-desktop-dark.svg)";
  } else if (window.innerWidth >= 768) {
    bodyElement.style.backgroundImage =
      "url(/images/pattern-background-tablet-dark.svg)";
  } else {
    bodyElement.style.backgroundImage =
      "url(./images/pattern-background-mobile-dark.svg";
  }
}

// Toggle dark mode when darkMode button is clicked
darkMode.addEventListener("click", () => {
  // Call the function initially to set the background photo based on the current screen size
  changeBackgroundPhoto();

  // Call the function whenever the window is resized to update the background photo accordingly
  window.addEventListener("resize", changeBackgroundPhoto);
  // Toggle dark mode state
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    // Apply dark mode styles
    wellcome.style.color = "#fff";
    frontendQuiz.style.color = "#fff";
    pick.style.color = "#ABC1E1";

    darkMode.style.justifyContent = "flex-end";
    darkMode.style.transition =
      "transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    bodyElement.style.backgroundColor = "#313E51";

    darkSun.style.display = "block";
    lightSun.style.display = "none";
    darkMoon.style.display = "block";
    lightMoon.style.display = "none";

    darkCommonBtn.forEach((btn) => {
      btn.style.backgroundColor = "#3B4D66";
      btn.style.boxShadow = "none";
    });

    categoryCommonTitle.forEach((title) => {
      title.style.color = "#fff";
    });
  } else {
    // Apply light mode styles
    // Reset styles to default
    wellcome.style.color = "";
    frontendQuiz.style.color = "";
    pick.style.color = "";

    darkMode.style.justifyContent = "";
    darkMode.style.transition = "";
    bodyElement.style.backgroundImage = ""; // Reset background image
    bodyElement.style.backgroundColor = ""; // Reset background color

    darkSun.style.display = "none";
    lightSun.style.display = "block";
    darkMoon.style.display = "none";
    lightMoon.style.display = "block";

    darkCommonBtn.forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.boxShadow = "";
    });

    categoryCommonTitle.forEach((title) => {
      title.style.color = "";
    });
  }
});
