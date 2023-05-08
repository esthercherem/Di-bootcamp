
  let fruit = {

        apple: red,
   banana: yellow,
    orange: orange
  }


  
  
  
  let keys = Object.keys(fruit);
  console.log(keys);

  let vals = Object.values(fruit);
  console.log(vals);

  let entries = Object.entries(fruit);
  console.log(entries)

  console.log(entries[1][1]);
  
  
  
  
  class Fruit {
    constructor(color) {
        this.color = color;
    }
    
    describe() {
    const {color} = this;
    console.log (`this apple is ${color}`)
  }
  }

  

  class Apple extends Fruit {
    constructor (color) {
        super(color);
    }
  }


  let apple1 = new Apple("red")
  apple1.describe();

  let apple2 = new Apple ("green")
  apple2.describe();