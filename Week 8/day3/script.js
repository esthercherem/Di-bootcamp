// destructuring arrays creates a new variable instead of doing this:
const arr = ["red", "blue", "green"]

const lava = arr[0];
const sky = arr[1];
const tree = arr[2];

//DO THIS

const arr = ["red", "blue", "green"];
const [lava, sky, tree] =arr;

console.log(lava); //output: "red"
console.log(sky); // output: "blue"
console.log(tree); // output : "green"

//OR CONSOLE LOG ALL AT ONCE:

// console.log(arr);

console.log(`lava: ${lava}, sky: ${sky}, tree: ${tree} `);



// second EXAMPLE dot notation 

const obj ={
    apple: "red",
    banana: "yellow",
    grape: "purple"
}

const apple = obj.apple;
const banana = obj.banana;
const grape = obj.grape;


//USE THIS INSTEAD

const {apple, banana, grape}= obj

//const {apple,...rest} =obj

console.log(obj.apple);



const person = {
    name: `john doe`,
    age: 25,
}
 console.log(`i am ${person.name} and i am ${person.age} years old`)
 //i am john doe and i am 25 years old.




//OBJECT DESTRUCTURING 

const person = { 
    name: 'jhon doe',
    age: 25,

}

const {name, age, x=25} = person;// properties of objects are extracted and assigned as unique
console.log(`i am ${name} and i am ${age} years old ${x}.`);
//i am john doe and i am 25 years old.


// EXAMPLE 2 // Adding variables to destructuring variable

const person = {
    fname: "dominic",
    age: 21
   
    // if we add gender: "male" this will override unknown
}

let {fname, age, gender = "Unknown"} = person;

console.log(fname);
console.log(age);
console.log(gender);

// alternately we could create a function

function printDetails(person) {
    person.fname, person.age
}

// OR

function printDetails ({name, age }) {
    console.log(`the name is ${name} and ${age} years old`);
}
printDetails(person);




// ARRAY DESTRUCTURING JAVASCRIPT

let numbers = [1, 2, 3, 4, 5];

let [one, two, three] = numbers;

console.log (one);
console.log(two);
console.log(three);


// Alternately we can do this

let numbers = [1, 2];

let [one, two, three = 90] = numbers;

console.log(one);
console.log(two);
console.log(three);



//EXAMPLE 3 ARRAY DESTRUCTURING USING FUNCTIONS

function bottle() {
    return["bottle", "water"] 
}

let [red, blue] = bottle();

console.log(red);
console.log(blue);



//CLASSES
//class = A blueprint for creating objects. define porperties and or methods.

// we create the class with drive and brake ,ethods

class Car {
    drive() {
        console.log("Youre driving the car!");
    }
    brake() {
        console.log("you step on the brakes!");
    } 
}

// we create a car object that can drive and brake
let car1 = new Car();
let car2 = new Car();

//Invoke the car object with its methods
car1.drive();


// or
car2.brake();


//constructor is a special method for assingning properties.
// it is automatically called when creating an object.

class Car {
    constructor (maker, model, year, color) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.color= color;

    }


drive() {
    console.log("you drive the car!");
}
brake() {
    console.log("you step on the brakes!")
}
}

let car1 = new Car("ford", "mustang", 2022, "red")
let car2 = new Car ("chevy", "corvette", 2021, "blue")

console.log(car1.maker);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

// OR CONSOLE LOG ALL AT ONCE

console.log(`make: ${car1.maker}, model: ${car1.model}, year: ${car1.year}, color: ${car1.color}`);
car1.brake();



//EXCERCISE DESTRUCTURE 
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// let person1 = new Person("John", 30);
// person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."


// SOLUTION

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      const { name, age } = this; // Destructuring the object
      console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
  }
  
  let person1 = new Person("John", 30);
  person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."



  // // INHERITANCE EXERCISE WITH SUPER

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // calling the superclass constructor using super
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let dog1 = new Dog("Buddy", "Labrador");
  console.log(dog1.name); // Output: "Buddy"
  console.log(dog1.breed); // Output: "Labrador"
  dog1.speak(); // Output: "Buddy barks."


  // #4 EXCERCISE

  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      const { name } = this; // destructuring to access properties
      console.log(`${name} barks.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // setting the property directly without calling superclass constructor
      this.breed = breed;
    }
  }
  
  let dog1 = new Dog("Buddy", "Labrador");
  dog1.speak(); // Output: "Buddy barks."
  
  let dog2 = new Animal("Larry")
  dog2.speak();


