const htmlBtn = document.getElementById("html-btn");
const cssBtn = document.getElementById("css-btn");
const jsBtn = document.getElementById("js-btn");
const accesBtn = document.getElementById("accessibility");

htmlBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=22"
    );
    const htmlApi = await response.json();
    localStorage.setItem("htmlApi", JSON.stringify(htmlApi));
    window.location.href = "./questionPage/question.html";
    console.log(htmlApi);
  } catch (error) {
    console.log(error);
  }
});

cssBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=23"
    );
    const cssApi = await response.json();
    localStorage.setItem("cssApi", JSON.stringify(cssApi));
    window.location.href = "./questionPage/question.html";
    console.log(cssApi);
  } catch (error) {
    console.log(error);
  }
});

jsBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=11"
    );
    const jsApi = await response.json();
    localStorage.setItem("jsApi", JSON.stringify(jsApi));
    window.location.href = "./questionPage/question.html";
  } catch (error) {
    console.log(error);
  }
});

accesBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18"
    );
    const accesApi = await response.json();
    localStorage.setItem("accesApi", JSON.stringify(accesApi));
    window.location.href = "./questionPage/question.html";
  } catch (error) {
    console.log(error);
  }
});
