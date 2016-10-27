// Author: Ryan Carson
// Contact: ryan@teamtreehouse.com

// Checked project in Google Chrome Version 54.0.2840.71 (64-bit)

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// TODO Background color of page changes each time a new quote is displayed

// TODO Quotes change automatically after certain amount of time passes

// Global array to store our quotes
var quotes = [
  {
    quote : "Once you discover one simple fact: everything around you that you call life, was made up by people that were no smarter than you. Once you learn that, you’ll never be the same.",
    source: "Steve Jobs",
    citation: "youtube.com/watch?v=UvEiSa6_EPA",
    year: 1994,
    category: "motivation"
  },
  {
    quote : "Treat other people like you want to be treated.",
    source: "Jesus of Nazareth",
    citation: "Luke 6:31",
    category: "truth"
  },
  {
    quote : "Do whatever you can, with whatever you have, wherever you are, RIGHT NOW.",
    source: "Mark Horstman",
    year: 2015,
    category: "motivation"
  },
  {
    quote : "44444",
    source: "Jesus of Nazareth",
    citation: "Luke 6:31",
    category: "motivation"
  },
  {
    quote : "55555",
    source: "Jesus of Nazareth",
    citation: "Luke 6:31",
    category: "motivation"
  },
  {
    quote : "66666",
    source: "Jesus of Nazareth",
    citation: "Luke 6:31",
    category: "motivation"
  }
];

// function to return a random quote
function getRandomQuote (quote_array) {

  // TODO function does not return a duplicate quote until all quotes have been returned once

  return quote_array[Math.floor(Math.random() * quote_array.length)];
}

// function to build out the HTML string, which is then inserted into the page
function printQuote () {

  // Get a random quote from the quotes array
  var selected_quote = getRandomQuote(quotes);

  // start building the HTML string
  var html_string = '<p class="quote">' + selected_quote.quote + '</p> <p class="source">' + selected_quote.source;

  // If there's a citation, add it to the HTML string
  if (selected_quote.citation) {
    html_string += '<span class="citation">' + selected_quote.citation + '</span>';
    // For debugging
    console.log("Citation exists");
  }

  // If there's a year, add it to the HTML string
  if (selected_quote.year) {
    html_string += '<span class="year">' + selected_quote.year + '</span>';
    // For debugging
    console.log("Year exists");
  }

  // Close the HTML string
  html_string +=  '</p>';

  // Insert the HTML string into the page
  document.getElementById('quote-box').innerHTML = html_string;
}
