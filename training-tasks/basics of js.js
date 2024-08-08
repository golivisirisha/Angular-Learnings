//data types by using let, const,var

//numbers
//initialisation using let
let age=20;
console.log(age);

//checking the type of variable by using type of function
console.log(typeof(age));

// reassigning by using let keyword
age=40;
console.log(age);// we can reassign the values to the variable by using let 

//initialisation using const
const birthyear=2003;
console.log(birthyear);
console.log(typeof(birthyear));


// re assiging value to the variable by using const key word
/*
birthyear=2005;
console.log(birthyear);// it's giving an error soo by using const keyword we can't able reassign the values to the variable 
*/


// initialization uisng var
var year=2005;
console.log(year);
//reassigning by using var keyword
year=2008;
console.log(year);

//strings
const fruit="apple";
console.log(fruit);
console.log(typeof(fruit));

//booleans

let hasdrivinglicense=true;
console.log(hasdrivinglicense);
console.log(typeof(hasdrivinglicense));

//template literals
console.log(`my name is siri and present my age is ${age} and my i am adding the some values here ${2+7}`);// here we v=can easily write expressions directly in the sentence and also we can directly accece the variables.

//if else statements

let age1=30;
if(age1>=18){
    console.log("you can allowed vote");
} else{
    console.log("not allowed to vote");
}

let voter=age1=>18;
if(voter){
    console.log("allowed");
}else{
    console.log("not allowed");
}

//type conversions 

let inputyear="1994";
console.log(Number(inputyear),inputyear);
console.log(Number(inputyear)+inputyear); // here inputyear is not compltely converted into the number only where we have mention the number key that time only changed .

//type coersion

//here we can concatenate numbers and strings together
console.log("I am "+ 20 + " year old");

console.log("20"+1);// here 1 is number and 20 is in string soo the additionj will not happen just it will combine 1 and 20  like 201

console.log("20"+"20");

console.log("20"-"10");// here when the two string having a values of numbers it will done substractions and other operations other than addition.

let num=1;
num=num+"20";
console.log(num-20);
console.log(num-"30");

console.log(num*2);
console.log(num*"1");
console.log(num/"2");

//truthy and falsy values
console.log(Boolean(0));/// in boolean 0 refers to the false 
console.log(Boolean(1));// in boolean 1 refers to the true 

console.log(Boolean("jessy"));// boolean of something will also give true beacause there is something in it right ex:string
console.log(Boolean({}));
console.log(Boolean(undefined));//
console.log(Boolean(''));//



//strict equality and loose equality

let num1=18;
/*if(num1===18){console.log("your an adult now");
}*/

//if(num1=="18"){console.log("your adult now");} here the values are same but datatypes are different but it is giving true and display the output soo it is loos equality 

if (num1==="18"){console.log("your aadult now")}; // actually it will not give output beacause it will give false


//arrays equal or not 

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    arr1.sort();
    arr2.sort();

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// Example usage
const array1 = [1, 2, 3, 4];
const array2 = [4, 3, 2, 1];

console.log(arraysAreEqual(array1, array2)); 




