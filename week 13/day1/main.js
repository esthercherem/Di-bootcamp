// excercise 1 using: circle.js

const calculateCircleArea = require('./circle.js');
const radius = 5;
const area = calculateCircleArea(radius);

console.log(`the area of the circle with a radius of ${radius} is ${area.toFixed(2)}`);


// excercise 2

const capitalizeString = require('./capitalize.js');

const str = 'hello, world!';
const capitalizedStr = capitalizeString(str);

console.log(capitalizedStr);




