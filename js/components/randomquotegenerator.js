const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
];

const getNewQuoteBtn = document.getElementById("change-quote-btn");
const quoteDisplay = document.getElementById("quote-display");
const authorDisplay = document.getElementById("author");
const quoteBox = document.querySelector(".quote-box");
getNewQuoteBtn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * quotes.length);
  quoteBox.style.setProperty("background", "black");
  quoteDisplay.textContent = quotes[index].text;
  authorDisplay.textContent = `—${quotes[index].author}—`;
});
