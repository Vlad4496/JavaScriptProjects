let addBtn = document.getElementById("add")
let lowerBtn = document.getElementById("lower")
let output = document.getElementById("output")

addBtn.addEventListener("click", addCount)

let total = 0;

function addCount() {
    let output = document.getElementById("output")
    total++
    output.innerText = total
}

lowerBtn.addEventListener("click", lowerCount)

function lowerCount() {
    let output = document.getElementById("output")
    total--
    output.innerText = total
}

