// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?  

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// solution 
// I am john doe from vancouver, canada. latitude(49.2827), longitude(-123.1207)


// 🌟 Exercise 2: Display Student Info
// Instructions

 function displayStudentInfo(objUser){
     //destructuring the objUser parameter to extract first and last porperties

     const {first, last} = objUser;

//returning the string with the extracted values
     return `your full name is ${first} ${last}`;
 }

 //example usage
 console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// your full name is Ellie Schoppik

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'


// 🌟 Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


const users = {user1: 18273, user2: 92833, user3: 90315};

//step 1: convert the users object anto an array of key-value pairs

const usersArray = Object.entries(users);

console.log(usersArray);
//output: [['user1, 18273], ['user2', 92833], ['user3, 90315]]

//step2: multiply the users ID by 2
const usersArrayModified = usersArray.map (([user, id]) => [user, id *2]);


console.log(usersArrayModified);

//output [['user1, 36546], ['user2', 185666], ['user3, 180630]]


// in this solution, object.entries() i used to convert the users ibject into n array of key-value pairs.
// then, the map() method is used to itinerate over he array and multiply the ID array of key value pairs.
 






//Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);


// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


// the number 4


// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}


// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

//solution:
// object2.number =4
//object1.number = 4
//object3.number=5






// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …



// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white



class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type= type;
        this.color= color;
    }
}

class Mammal extends Animal {
    sound(sound) {
        return `mooo im a ${this.type}, named ${this.name} and im ${this.color}. ${sound}`;
    }
}

const farmerCow = new Mammal(`lily`, `cow`, `brown and white`);
 console.log(farmerCow.sound("moooo"));

