let button = document.querySelector("input[type='button']")
button.addEventListener("click", converter)

function converter() {
    let farenheit = document.getElementById("farenheit").value
    let formula = (farenheit - 32) * 5/9
    document.getElementById("celsius").value = formula
}