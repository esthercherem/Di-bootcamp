      // Quotes array
      let quotes = [
        {
          id: 0,
          author: "Albert Einstein",
          quote: "Try not to become a man of success, but rather try to become a man of value."
        },
        {
          id: 1,
          author: "Oscar Wilde",
          quote: "To live is the rarest thing in the world. Most people exist, that is all."
        },
        {
          id: 2,
          author: "Walt Disney",
          quote: "The way to get started is to quit talking and begin doing."
        },
        {
          id: 3,
          author: "Eleanor Roosevelt",
          quote: "No one can make you feel inferior without your consent."
        },
        {
          id: 4,
          author: "Albert Einstein",
          quote: "It takes a touch of genius and a lot of courage to move in the opposite direction."
        },
        {
          id: 5,
          author: "Albert Einstein",
          quote: "Imagination is more important than knowledge."
        },
        {
          id: 6,
          author: "Steve Jobs",
          quote: "Innovation distinguishes between a leader and a follower."
        },
        {
          id: 7,
          author: "Steve Jobs",
          quote: "Your time is limited, so don't waste it living someone else's life."
        },
        {
          id: 8,
          author: "Walt Disney",
          quote: "All our dreams can come true, if we have the courage to pursue them."
        },
        {
          id: 9,
          author: "Unknown",
          quote: "The best way to predict the future is to create it."
        },
        {
          id: 10,
          author: "Oscar Wilde",
          quote: "Be yourself; everyone else is already taken."
        }
      ];
      
      // DOM elements
      const quoteContainer = document.getElementById("quote-container");
      const quoteEl = document.getElementById("quote");
      const authorEl = document.getElementById("author");
      const newQuoteBtn = document.getElementById("new-quote");
      const numCharsBtn = document.getElementById("num-chars");
      const numCharsNoSpaceBtn = document.getElementById("num-chars-nospace");
      const numWordsBtn = document.getElementById("num-words");
      const likeBtn = document.getElementById("like");
      const addQuoteForm = document.querySelector("form");
      const quoteInput = document.getElementById("quote-input");
      const authorInput = document.getElementById("author-input");
      const addQuoteBtn = document.getElementById("add-quote");
      
      // Get random quote
      function getRandomQuote() {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      }
      
      // Display quote
      function displayQuote(quote) {
        quoteEl.textContent = quote.quote;
        authorEl.textContent = `- ${quote.author}`;
      }
      
      // Number of characters (with spaces)
      function getNumChars(str) {
        return str.length;
      }
      
      // Number of characters (without spaces)
      function getNumCharsNoSpace(str) {
        return str.replace(/\s/g, "").length;
      }
      
      // Number of words
      function getNumWords(str) {
        return str.split(" ").length;
      }
      
      // Add like to quote
      function addLike(quote) {
        if (!quote.likes) {
          quote.likes = 1;
        } else {
          quote.likes++;
        }
        likeBtn.textContent = `Like (${quote.likes})`;
      }
      
      // Generate a new quote on button click
      newQuoteBtn.addEventListener("click", function() {
      let quote = getRandomQuote();
      // Check if quote is already displayed
      while (quoteEl.textContent === quote.quote) {
      quote = getRandomQuote();
      }
      displayQuote(quote);
      likeBtn.textContent = `Like (${quote.likes})`;
      });
      
      // Add a like to the current quote
      likeBtn.addEventListener("click", function() {
      const currentQuote = quotes.find(q => q.quote === quoteEl.textContent);
      addLike(currentQuote);
      });
      
      // Display number of characters (with spaces)
      numCharsBtn.addEventListener("click", function() {
      const quoteText = quoteEl.textContent;
      const numChars = getNumChars(quoteText);
      alert(`Number of characters (spaces included): ${numChars}`);
      });
      
      // Display number of characters (without spaces)
      numCharsNoSpaceBtn.addEventListener("click", function() {
      const quoteText = quoteEl.textContent;
      const numCharsNoSpace = getNumCharsNoSpace(quoteText);
      alert(`Number of characters (spaces not included): ${numCharsNoSpace}`);
      });
      
      // Display number of words
      numWordsBtn.addEventListener("click", function() {
      const quoteText = quoteEl.textContent;
      const numWords = getNumWords(quoteText);
      alert(`Number of words: ${numWords}`);
      });
      
      // Add a new quote
      addQuoteForm.addEventListener("submit", function(event) {
      event.preventDefault();
      addNewQuote();
      });
      
      // Add a new quote
      function addNewQuote() {
        const newQuote = {
          id: quotes.length,
          author: authorInput.value,
          quote: quoteInput.value
        };
        quotes.push(newQuote);
        displayQuote(newQuote);
      }
      
      addQuoteBtn.addEventListener("click", function(event) {
        event.preventDefault();
        addNewQuote();
      });
      
      // Filter quotes by author
      const filterForm = document.querySelector("form:last-of-type");
      const authorFilterInput = document.getElementById("author-filter");
      const filterBtn = document.getElementById("filter");
      
      let filteredQuotes = [];
      
      filterForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const authorFilter = authorFilterInput.value.trim();
      if (!authorFilter) {
      return;
      }
      filteredQuotes = quotes.filter(q => q.author === authorFilter);
      if (!filteredQuotes.length) {
      alert(`No quotes found for author ${authorFilter}`);
      return;
      }
      currentQuoteIndex = 0;
      displayQuote(filteredQuotes[currentQuoteIndex]);
      });
      
      // Display previous or next quote from filtered quotes
      let currentQuoteIndex = 0;
      
      document.getElementById("previous-quote").addEventListener("click", function() {
      if (filteredQuotes.length === 0) {
      return;
      }
      currentQuoteIndex--;
      if (currentQuoteIndex < 0) {
      currentQuoteIndex = filteredQuotes.length - 1;
      }
      displayQuote(filteredQuotes[currentQuoteIndex]);
      });
      
      document.getElementById("next-quote").addEventListener("click", function() {
      if (filteredQuotes.length === 0) {
      return;
      }
      currentQuoteIndex++;
      if (currentQuoteIndex >= filteredQuotes.length) {
      currentQuoteIndex = 0;
      }
      displayQuote(filteredQuotes[currentQuoteIndex]);
      });
      
      