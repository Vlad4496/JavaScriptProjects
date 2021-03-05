let button = document.querySelector(".btn")
let body = document.querySelector("body")
body.style.backgroundColor = 'violet'
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

button.addEventListener("click", changeColor)

function changeColor() {
    let randomColor = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomColor]
}