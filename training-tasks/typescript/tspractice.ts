let num:number=9;


//strings in ts
let firstname:string="siri";
let title:string="web developer";
let profile:string=`I am ${firstname}.
I am ${title}`
console.log(profile);

//boolean 
//not operator
const pending: boolean = true;
const notPending = !pending; // false it convert to true to false because of using not operator
console.log(notPending);

// AND operator
const hasError: boolean = false;
const completed: boolean = true;

// OR operator
let result = completed && hasError; 
console.log(result); // false

let final = completed || hasError; 
console.log(final); // true

//objects 

let details:{
    firstname:string;
    age:Number;
    title:string;
}={
    firstname:"siri",
    age:21,
    title:"webdeveloper"
};
console.log(details);

//empty object

let vacant: {} = {};

console.log(vacant.toString());

//arrays

let skills:string[]=["js","python","css","html"];
let skill=skills[0];
console.log(skill);
console.log(skills.length);
console.log(typeof(skills));

//arrays can use array methods like foreach,map,reduce,filter

let numbers:number[]=[1,2,3,4,5];
let double=numbers.map(x=>x*2);
console.log(numbers,double);

//tuple 
//tuple are like arrays but with fixed size and types are known and there is another feauture which is optional tuple element

let bgcolor,headercolor:[number,number,number,number?];
bgcolor=[0,255,255,0.5];
headercolor=[0,255,235];
console.log(bgcolor);

//enum
//A TypeScript enum is a group of constant values.
/*First, use the enum keyword followed by the name of the enum.
Then, define constant values for the enum.*/
enum Month{
    jan,feb,mar,april,may,june,july,aug,sep,oct,nov,dec
};

function isitsummer(month:Month){
    let issummer:boolean;
    switch(month){
        case Month.june:
        case Month.july:
        case Month.aug:
            issummer=true;
            break;
        default:
            issummer=false;
            break;


    }
    return issummer;
}

console.log(isitsummer(Month.june));

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}



//never type
// never means no value is possible 
//in this function it always throws an error or else never returns a value that can be typed is never
function error():never{
    throw new Error("something is wrong");
}
//error();

//if the loop infiniteloop also can be typed as returning never
function infiniteLoop(): never {
    while (true) {
      // do something
    }
  }
//if a piece of code is unreachable tha type that code can be never(after return and throw statements if we write any code it will not return anything beacause it is never )
function foo(): string {
    return 'hello';
  //  const x:never = 10; // unreachable code
  }

  //union type
  //allows you to store a value of one or several types in a variable.

  function add(x:number|string,y:number|string){
    if(typeof x==="number"&& typeof y==="number"){
        return x+y;
    }
    if(typeof x==="string"&& typeof y==="string"){
        return x.concat(y);
    }
    throw new Error("Parameters must be numbers or strings");
    
  }
  let addsum=add(23,45);
  //let addxy=add("siri",3);
  console.log(addsum);
  //console.log(addxy);

  //type aliases
  // Use type aliases to define new names for existing types.
  //type aliases=existed type;  =>syntax

  type chars=string;
  let sentence:chars="Siri";
  console.log(sentence);
  
//create type aliases for union types
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; 
input = 'Hi'; 
//input = false; //compiler error
console.log(input);

//classes

class person{
    name;
    age;
    details;
    constructor(name,age,details){
        this.name=name;
        this.age=age;
        this.details=details;
    }
    getfullname(){
        return `${this.name} and my age is ${this.age}`
    }

}
let p1=new person("siri",21,"srikakulam");
console.log(p1.getfullname());


//access modifiers 
//private -property or methods can only access inside the class only
class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}

let p2 = new Person('153-07-3130', 'John', 'Doe');
//console.log(p2.ssn); //compiler error //because we are not able access properties or methods outoff the class
console.log(p2.getFullName());

//static methods and properties
//static property is shared among all instances of a class.

// here headcounter is incresed if the instances created are increases
class Myclass{
    static headercount:number=0;
    constructor(private name:string,private age:number){
        Myclass.headercount++;
       
    }


}
let mycls=new Myclass("siri",21);
console.log(Myclass.headercount);

//abstract classes-used to define common behaviors for derived classes to extend.

abstract class Employee{
    constructor(private firstname:string,private lastname:string){
    
    }
    abstract getsalary():number;
    getfullname():string{
        return `${this.firstname}  ${this.lastname}`;
    }
    getcompansation():string{
        return `${this.getsalary()}`;
    }
}
// we are not able create instances by using abstract classes 
//An abstract method must be implemented in the derived class.

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getsalary(): number {
        return this.salary;
    }
}
let john = new FullTimeEmployee('John', 'Doe', 12000);
console.log(john.getfullname());
console.log(john.getcompansation());

//interfaces-blueprint of an object or they specify the shape of the object including properties,methods and types
//here we just write the shape of the object the implementation will written in the function or else with the object

interface human{
    firstname:string;
    lastname:string;
}
function something(person:human){
    return `${person.firstname}  ${person.lastname}`
}
let siri={
    firstname:"siri",
    lastname:"golivi"
}
console.log(something(siri));

//generics-creating a way of reusablity of classes functions which is work with with multiple types of data rather than  a single type

//returns the random element from an array
function getArray<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbersArray = getArray<number>([21, 34, 534, 32, 12]);
console.log(numbersArray);

let stringArray=getArray<string>(["siri","ram","sudheer"]);
console.log(stringArray);


//generic functions with multiple types

function merge<T,U,V>(obj1:T,obj2:U,obj3:V):T&U&V{
    return {...obj1,...obj2,...obj3};
}
interface details{
    name:string;
    age:number;
}
interface address{
    street:string;
    city:string;
}
interface contact{
    email:string;
    phone:string;
}

let Details:details={name:"siri",age:21};
let Address:address={street:"peddaveedhi",city:"lingalavalasa"};
let Contact:contact={email:"sirishagolivi4626@gmail.com",phone:"42467788"};
console.log(merge(Details,Address,Contact));

//genric constrains
// use extends keyword to constrain the type parameter to a specific type.
function merging<T extends object,U extends object>(obj1:T,obj2:U){
    return {...obj1,...obj2};
}
let Man = merging(
    { name: 'John' },
    //25 if you pass number oit throws an error because we have mentioned the type right by using extends otherwise it will not throe any error
    { age:28
    }
);
console.log(Man);

//"extends keyof" is used in generics to constrain a type parameter to be a key of a specific type.
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
  let x={a:1,b:2,c:3};
  console.log(getProperty(x,"a"));
  let str = getProperty({ name: 'John' }, 'name');
  console.log(str);  // if we not use extends keyof it will throws an error to assign the key as a index like Type 'K' cannot be used to index type 'T'

  //generic interfaces- create an interface that can work with different types 
  interface Pair<K, V> {
    key: K;
    value: V;
}
let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(month);

//generic classes

