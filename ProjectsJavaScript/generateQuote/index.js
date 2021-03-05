let button = document.querySelector(".btn")
let quote = document.querySelector(".quoteText")
let author = document.querySelector(".author")
const quotes = [{
    quote: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: "Oprah"
},
{
    quote: "I am happiest when I'm right next to you.",
    author: "Vlad Raul Merisor"
},
{
    quote: "Discover happiness in little things",
    author: "Razvan Vasiliu"
},
{
    quote: "What's coming is better than what is gone.",
    author: "Bogdan Popescu"
}]

button.addEventListener("click", changeQuote)
function changeQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[randomQuote].quote;
    author.innerHTML = quotes[randomQuote].author;
}