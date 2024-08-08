/* currying-is a technique where a function with multiple arguments is converted into a sequence of functions, each taking a single argument. 
This allows for partial application of the function.*/

function multiply(a) {
    return function(b) {
        return a * b;
    };
}


const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3)); 

// Another way to call it directly
console.log(multiply(2)(3)); 

//closures-Closures occur when a function "remembers" its lexical scope even when the function is executed outside that scope.
/*A closure is formed when an inner function is defined within an outer function (lexical scope)
 and has access to variables and parameters of the outer function, even after the outer function has returned. 
 This allows the inner function to "remember" and access its lexical scope when it is executed later.*/

 function outerFunction(outerVariable) {
    function innerFunction(innerVariable) {
        console.log(`Outer variable: ${outerVariable}`);
        console.log(`Inner variable: ${innerVariable}`);
    }

    return innerFunction;
}

// Create a closure
const closure = outerFunction('Outer');

// Execute the closure
closure('Inner');

//Using Closure for Private Variables
function counter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = counter();
counter1.increment(); 
counter1.increment(); 
console.log(counter1.getCount()); 

const counter2 = counter();
counter2.increment(); 
console.log(counter2.getCount()); //Each counter instance (counter1, counter2) maintains its own count due to closures, encapsulating state.

