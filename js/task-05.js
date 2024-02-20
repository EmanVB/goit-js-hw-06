let inputVal = document.getElementById("name-input");
let outputVal = document.getElementById("name-output");

inputVal.addEventListener("input", updateValue);
inputVal.addEventListener("focusout", anonymize);

function anonymize() {
    if (inputVal.value === "") {
        outputVal.innerText = "Anonymous";
    }
}

function updateValue () {
    outputVal.innerText = inputVal.value;
}
console.log(inputVal.value);

