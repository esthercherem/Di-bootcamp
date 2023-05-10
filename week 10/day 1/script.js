function getWeather() {
    return new Promise(function(resolve, reject){
        resolve('Sunny')
        // resolve('Sunny')
    })
}

function onSuccess(data) {
    console.log(`Success ${data}`)
}

function onError(error) {
    console.log(`Error: ${error}`)
}

getWeather().then(onSuccess, onError)


// write a function that returns a promise that resolves after a given number
//of miliseconds.

//solution :

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// example usage:
wait(5000).then(() => console.log('5 seconds have passed!'));



// excercise: write a function that returns a promise that resolves 
//with a random number after a given number of miliseconds.

function waitAndRandomize(ms) {
    return new Promise { resolve => {
        setTimeout(() => {
            const randomNumber = math.floor(Math.random() * 10) + 1;
            resolve(randomNumber);
        }, ms);
    }};
}


// example usage:
waitAndRandomize(1000).then(randomNumber => console.log
    (`random number: ${randomNumber}`));




    //Exercise: Write a function that returns a promise that resolves with the result of 
  //multiplying two 
  //numbers after a given number of milliseconds, but rejects if either number is negative.
    



    function multiplyNumbers(num1, num2, ms) {
        return new Promise((resolve, reject) => {
            if(num1 < 0 || num2 < 0) {
                reject('numbers must be positive!');
            } else {
                setTimeout(() => {
                    const result = num1 * num2;
                    resolve(result);
                }, ms);
            }
        });
    }


    // example usage:
    multiplyNumbers(5, 7, 1000)
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.log(`Error: ${error}`));





    // example of promise dividing two numbers


    function divideNumbers(number1, number2) {
        return new Promise((resolve, reject) => {
            try{
                if (number2 === 0) {
                    throw new Error('Cannot divide by zero!');

                }
                const outcome = number1 / number2;
                resolve(outcome);
            } catch (error) {
                reject(error);
            }
        });
    }

    // example usage:

    divideNumbers(10, 2)
    .then(outcome => console.log(`result: ${outcome}`))
    .catch(error => console.log(`error: ${error}`));




// excercise 6 :

    const datos = [{
        id: 1,
        title: 'Iron Man',
        year: 2008
    },
    {
        id: 2,
        title: 'Spiderman Homecoming',
        year: 2017
    },
    {
        id: 3,
        title: 'Avengers: Endgame',
        year: 2019
    }];



    // WITHOUT PROMISE

    const getDatos = () => {
        return datos;
    }

    console.log(getDatos());




    // WITH PROMISE

    const getDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(datos);
            }, 1500);
        });
    }

    getDatos().then((datos) => console.log(datos));

    


    //WITH PROMISE ASYNC / AWAIT

    const getDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(datos);
            }, 1500);
        });
    }

    async function fetchingData () {
        const datosFetched = await getDatos();
        console.log(datosFetched);
    }

    fetchingData();






   