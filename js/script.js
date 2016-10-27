// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Global array to store our quotes
var quotes = [
  {
    quote : "first quote",
    source: "Bob jones",
    citation: "http://www.abc.com",
    year: 1977
  },
  {
    quote : "second quote",
    source: "Mother Teresa",
    citation: "http://wikipedia.com",
    year: 1981
  },
  {
    quote : "third quote",
    source: "Clinton",
    citation: "http://bbc.co.uk",
    year: 2016
  }
];

// function to return a random quote
function getRandomQuote (quote_array) {
  return quote_array[Math.floor(Math.random() * quote_array.length)];
}

function printQuote () {
  var selected_quote = getRandomQuote(quotes);
  var html_string = '<p class="quote">' + selected_quote.quote + '</p> <p class="source">' + selected_quote.source;
  if (selected_quote.citation) {
    html_string += '<span class="citation">' + selected_quote.citation + '</span>';
  }
  if (selected_quote.year) {
    html_string += '<span class="year">' + selected_quote.year + '</span>';
  }
  html_string +=  '</p>';
  document.getElementById('quote-box').innerHTML = html_string;
}
