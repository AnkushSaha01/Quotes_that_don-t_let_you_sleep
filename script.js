import quotes from "./quotes.js";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextBtn = document.getElementById("nextBtn");

function displayRandomQuote() {
  const randomQuoteNo = Math.floor(Math.random() * quotes.length);
  quote.textContent = `"${quotes[randomQuoteNo].quote}"`;
  author.textContent = "~ " + quotes[randomQuoteNo].author;
}

nextBtn.addEventListener("click", displayRandomQuote);

// Show a quote on load
displayRandomQuote();