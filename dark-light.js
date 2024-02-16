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
  } else {
    // Apply light mode styles
    // Reset styles to default

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
  }
});
