// Author: Ryan Carson
// Contact: ryan@teamtreehouse.com

// Checked project in Google Chrome Version 54.0.2840.71 (64-bit)

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Global array for background colors
var bg_colors = [
  "Red",
  "Orange",
  "Green",
  "Blue",
  "Indigo",
  "Violet"
]

// Global array to keep track of unique quotes that have been used
var unique_quotes_used = [];

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
    quote : "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa",
    citation: "brainyquote.com/quotes/authors/m/mother_teresa.html",
    category: "love"
  },
  {
    quote : "Education is not preparation for life; education is life itself.",
    source: "John Dewey",
    citation: "brainyquote.com/quotes/topics/topic_education.html",
    category: "education"
  },
  {
    quote : "Education is the most powerful weapon which you can use to change the world.",
    source: "Nelson Mandela",
    citation: "brainyquote.com/quotes/topics/topic_education.html",
    category: "education"
  }
];

// function to return a random quote
// It does not return a duplicate quote until all quotes have been returned once
function getRandomQuote (quote_array) {

  var new_quote = quote_array[Math.floor(Math.random() * quote_array.length)];

  if (unique_quotes_used.length <= quote_array.length) {
    while (unique_quotes_used.indexOf(new_quote) != -1) {
      new_quote = quote_array[Math.floor(Math.random() * quote_array.length)];
    }
    unique_quotes_used.push(new_quote);
  }

  return quote_array[Math.floor(Math.random() * quote_array.length)];
}

// Return a random color from the bg_color array
function getRandomColor () {

  return bg_colors[Math.floor(Math.random() * bg_colors.length)];

}

// function to build out the HTML string, which is then inserted into the page
function printQuote () {

  // Background color of page changes each time a new quote is displayed
  document.body.style.background = getRandomColor();

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
