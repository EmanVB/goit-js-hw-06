let inputVal = document.getElementById("name-input");
let outputVal = document.getElementById("name-output");

inputVal.addEventListener ("input", updateValue);

function updateValue () {
    outputVal.innerText = inputVal.value;
}
console.log(inputVal.value);

