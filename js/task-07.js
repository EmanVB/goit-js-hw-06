let fontResizer = document.getElementById("font-size-control");
let msg = document.getElementById("text");
console.log(msg.style.fontSize);

function resizeFont() {
    console.log(fontResizer.value);
    msg.style.fontSize = `${fontResizer.value}px`
}
fontResizer.addEventListener("change", resizeFont)