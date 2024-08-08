//spread operator-spreading elements of iterables (like arrays and strings) into individual elements or for concatenating arrays\

//spreading string characters
const str = 'hello';
const arr = [...str];

console.log(arr); 

//copying arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); 
console.log(arr1 === arr2); // it is give output as false beacause  it is indicating they are separate arrays.

//Concatenating Arrays
const numbers1 = [1, 2, 3];
const numbers2= [4, 5, 6];
const numbers3 = [...numbers1, ...numbers2];

console.log(numbers3); 

//Spreading Elements of an Array
const num1 = [1, 2, 3];
const num2 = [...num1, 4, 5, 6];

console.log(num2); 

/*object.assign-commonly used for merging objects or creating copies of objects (shallow copies).
 It provides a convenient way to combine properties from multiple sources into a target object or to duplicate an object with changed or added properties.*/

 // Creating a target object
const target = { a: 1, b: 2 };

// Creating one or more source objects
const source1 = { b: 4, c: 5 };
const source2 = { c: 6, d: 7 };

// Using Object.assign to copy properties from sources to target
const mergedObject = Object.assign(target, source1, source2);

console.log(mergedObject); 
console.log(target);       // here when it comes to the object.assign it override the previous variables like target after using it the properties in the atrget also became like mergedobject
// but when it compare with spred operator it is not override it's variable soo it is more effective than this









