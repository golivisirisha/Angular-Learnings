

// destructring mean unoacking values from an array or objects into seperate variables.

let numbers=[2,6,8];
let [x,y,z]=numbers;
console.log(x);
console.log(y);
console.log(z);

// object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
      city: 'New York',
      country: 'USA'
  }
};

// Destructuring with objects
const { firstName, lastName, age } = person;
const { city, country } = person.address;

// Using the destructured variables
console.log(firstName); 
console.log(lastName);  
console.log(age);       

console.log(city);      
console.log(country);   

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  features: {
      engine: 'V6',
      transmission: 'Automatic'
  }
};

// Renaming variables during destructuring
const { make: manufacturer, model: modelName, features: { engine } } = car;

console.log(manufacturer); 
console.log(modelName);    
console.log(engine);      


    //nested array destructring
    let arr=[1,2,[3,4]];
    let[i, ,[j,k]]=arr;
    console.log(i,j,k);
