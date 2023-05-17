
// 1. Awaiting A Promise Within An Await
// It waits for the promise to be fulfilled and returns 
// the value. In this case, the function waits for the 
// getUsername to get the value and then prints it.


function getUsername() {
    return new Promise((resolve, reject) => {
      resolve("John")
    });
  }
  
  async function case1() {
    let x = await getUsername();
    console.log(x)
  }
  
  case1();



//   2. Promise Rejection
// In case the Promise is rejected, the rejected value is returned.

// The following code shows how this value can be displayed:

async function case2() {
  try {
    let z = await Promise.reject(20);
  } 
  catch(e) {
    console.error("in the catch", e); 
  }
}

case2();



// excercise 1

function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  async function getRandomNumber() {
    await delay(1000);
    const randomNum = Math.floor(Math.random() * 10) + 1;
    return randomNum;
  }
  
  (async function() {
    try {
      const num = await getRandomNumber();
      console.log(`Random number is ${num}`);
    } catch (err) {
      console.error(err);
    }
  })();


  // excercise 2 

  function getRandomNumber() {
    return new Promise(resolve => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        resolve(randomNum);
      }, 1000);
    });
  }
  
  getRandomNumber()
    .then(num => console.log(`Random number is ${num}`))
    .catch(err => console.error(err));


    // excercise 3

    const fetchSunRise = async (endpoint) => {
        try {
            const response = await fetch(endpoint);
            if (response.status == 400) {
                throw new Error("Something went wrong")
            } else {
                console.log("response", response)
                hey; // undefined variable
                let data = await response.json();
                console.log("data", data);
                let sunrise = data.results.sunrise;
                console.log(`The hour of the sunrise in Tel Aviv is: ${sunrise}`)
            }
        } catch (err) {
            console.log("In the catch ", err)
        }
    }
    
    fetchSunRise("https://api.sunrise-sunset.org/json?lat=0.0853&lng=0.7818")