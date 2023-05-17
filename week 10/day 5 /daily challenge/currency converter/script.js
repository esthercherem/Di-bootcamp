
// Instructions
// You will create a currencies converter:


// In this application we’re going receive data from two asynchronous sources.

// You will use :

// This documentation
// Create your own API key by signing up - you will be able to make more requests :)


// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.






const apiKey = "349c9b42e2cecb69a2b799c1";
const convertBtn = document.getElementById("convertBtn");
const switchBtn = document.getElementById("switchBtn");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", switchCurrencies);

async function convertCurrency() {
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const convertedAmount = data.conversion_result.toFixed(2);
    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

function switchCurrencies() {
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;

  document.getElementById("from").value = toCurrency;
  document.getElementById("to").value = fromCurrency;
  resultDiv.textContent = "";
}

// https://app.exchangerate-api.com/
// https://www.exchangerate-api.com/docs/supported-codes-endpoint
