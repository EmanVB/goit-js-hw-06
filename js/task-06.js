let inputBox = document.querySelector("input");

inputBox.addEventListener("blur", colorBorder);

function colorBorder() {
    if (inputBox.value.length == 6) {
        inputBox.id = "validation-input.valid";
    } inputBox.id = "validation-input.invalid";
 
}
console.log(inputBox.id);