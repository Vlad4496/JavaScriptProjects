let button = document.querySelector("input[type='button']")
button.addEventListener("click", newMessage)

function newMessage() {
    let text = document.getElementById("text").value
    let output = document.getElementById("output")
    output.innerText = text.toUpperCase()
}