// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
.then(values => console.log(values))
.catch(error => console.error(error));


//the promise1.all method accepts an array of proises and returns a new promise thaat resolves with an 
//array of the resolved values of the input promises. if any of the input promises  are rejected, the  
//returned promise will be rejected with the reason of the first promise that was rejected.





// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242


const form = document.querySelector('#cityForm');
      const resultDiv = document.querySelector('#result');

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const parisLat = document.querySelector('#parisLat').value;
        const parisLong = document.querySelector('#parisLong').value;
        const nyLat = document.querySelector('#nyLat').value;
        const nyLong = document.querySelector('#nyLong').value;

        const url1 = `https://api.sunrise-sunset.org/json?lat=${parisLat}&lng=${parisLong}&date=today`;
        const url2 = `https://api.sunrise-sunset.org/json?lat=${nyLat}&lng=${nyLong}&date=today`;

        try {
          const [parisData, nyData] = await Promise.all([
            fetch(url1).then(res => res.json()),
            fetch(url2).then(res => res.json())
          ]);

          const parisSunrise = parisData.results.sunrise;
          const nySunrise = nyData.results.sunrise;

          resultDiv.innerHTML = `
            <p>Paris Sunrise: ${parisSunrise}</p>
            <p>New York Sunrise: ${nySunrise}</p>
          `;
        } catch (error) {
          console.error(error);
        }
      });