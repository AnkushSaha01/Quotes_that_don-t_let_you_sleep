import quotes from "./quotes.js";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function(){
  const randomQuoteNo = Math.floor(Math.random()*201);
  quote.textContent = `"${quotes[randomQuoteNo].quote}"`;
  author.textContent = "~" + quotes[randomQuoteNo].author;
})