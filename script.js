const htmlBtn = document.getElementById("html-btn");
const cssBtn = document.getElementById("css-btn");
const jsBtn = document.getElementById("js-btn");
const accesBtn = document.getElementById("accessibility");

htmlBtn.addEventListener("click", async () => {
  try {
    const response = await fetch();
    const htmlApi = await response.json();
  } catch (error) {
    console.log(error);
  }
});

cssBtn.addEventListener("click", async () => {
  try {
    const response = await fetch();
    const cssApi = await response.json();
  } catch (error) {
    console.log(error);
  }
});

jsBtn.addEventListener("click", async () => {
  try {
    const response = await fetch();
    const jsApi = await response.json();
  } catch (error) {
    console.log(error);
  }
});

accesBtn.addEventListener("click", async () => {
  try {
    const response = await fetch();
    const accesApi = await response.json();
  } catch (error) {
    console.log(error);
  }
});
