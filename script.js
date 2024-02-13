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
