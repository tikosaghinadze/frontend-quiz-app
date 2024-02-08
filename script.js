const allBtn = document.querySelectorAll(".common-btn");
allBtn.forEach((btn) => {
  btn.addEventListener("click", async (event) => {
    const clickedBtn = event.target.id;
    try {
      let apiUrl;
      switch (clickedBtn) {
        case "html-btn":
          apiUrl = "https://opentdb.com/api.php?amount=10&category=22";
          break;
        case "css-btn":
          apiUrl = "https://opentdb.com/api.php?amount=10&category=23";
          break;
        case "js-btn":
          apiUrl = "https://opentdb.com/api.php?amount=10&category=11";
          break;
        case "accessibility":
          apiUrl = "https://opentdb.com/api.php?amount=10&category=18";
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
