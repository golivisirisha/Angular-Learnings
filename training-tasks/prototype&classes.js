"use strict";

//oop using constructor function

const Person=function(firstname,birthyear){
   this.firstname=firstname;
   this.birthyear=birthyear;
}
const siri=new Person("siri",2003);
console.log(siri);

console.log(siri instanceof Person);

/* we are using prototype insted of constuctor functions because by writing methods in using constrcter function for creating objects
    by creating large amount of objects soo that it is terrible to load each time the methods also soo the performance becomes very low.
*/

//prototypes

Person.prototype.calcAge=function(){
    console.log(2030-this.birthyear);
}// here i have created one method using prototype and attached it to the every single object soo the problem with the methods by creating with constructor functions


siri.calcAge();

console.log(siri);// actually here there is no calcAge function in this object but we are able to use the it beacause of prototype

console.log(siri.__proto__);// prototype of siri object here we can see the method beacause it is prototype of it's constuctor function(person)
console.log(siri.__proto__===Person.prototype);

console.log(Person.prototype.isPrototypeOf(siri));
console.log(Person.prototype.isPrototypeOf(Person));


//properties which are own to the object itself only return when we want to print them other than that any methods are properties are using those are all inherited from the prototypes

Person.prototype.species="Home spieces";
console.log(siri.species);

console.log(siri.hasOwnProperty("firstname"));
console.log(siri.hasOwnProperty("species"));// it is not a siri's own property it was inherited from the prototype of Person constructor function.

console.log(siri.__proto__);
//it is top of the prototype chain (object.prototype)
console.log(siri.__proto__.__proto__);
//soo it's give null
console.log(siri.__proto__.__proto__.__proto__);

const arr=[1,2,3,4,5,6,7,8];
console.log(arr.__proto__);
console.log(arr.__proto__===Array.prototype);

//classes in javascript

/*class experession
const Personcl=class{

}
*/

//class declaration
class Personcl{
    constructor(firstname,lastname,birthyear){
        this.firstname=firstname;
        this.lastname=lastname;
        this.birthyear=birthyear;
    }
//methods // methods added to .prototype property
    calcAge(){
        console.log(2037-this.birthyear);
    }// here the writted methods outside of the constructor function in the class will be the prototype for the objects

}

const ram=new Personcl("ram","golivi",2006);
console.log(ram);
ram.calcAge();

//classes are  not hoisted  we can't use them before declaration.
//classes are excuted in strict mode.
// classes are very effective than constructer functions 

// getter and setter properties 

const account={
    owner:"ram",
    movements:[200,3000,400,3230],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);

    },
};
console.log(account.latest);
account.latest=430;
console.log(account.movements);

// getter and setter methods are used for the  data validation also in classes

