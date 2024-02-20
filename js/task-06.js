let inputBox = document.querySelector("input");

function colorBorder() {
    if (inputBox.value.length == inputBox.dataset.length) {
        inputBox.className = "valid";
    } else inputBox.className = "invalid";

}
inputBox.addEventListener("blur", colorBorder);
console.log(inputBox.id);