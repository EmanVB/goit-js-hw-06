function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let colorBtn = document.querySelector(".change-color");
let htmlBody = document.querySelector("body");
let colorMsg = document.querySelector(".color");

function setColor() {
  let colorSet = getRandomHexColor();
  htmlBody.style.backgroundColor = colorSet;
  colorMsg.textContent = `${colorSet}`;
}

colorBtn.addEventListener("click", setColor);