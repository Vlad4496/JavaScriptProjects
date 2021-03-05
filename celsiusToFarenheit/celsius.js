let button = document.querySelector("#button")
button.addEventListener("click", converter)

function converter() {
    let celsius = document.querySelector("#celsius").value
    let formula = (celsius * 9/5) + 32
    document.querySelector("#farenheit").value = formula
}