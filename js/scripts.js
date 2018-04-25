//Method, type of function
console.log("Hello World!")
// You call a function and the function returns a value (printed string in the console)

function sayHello(name, greeting){  //FUNCTION DEFINITION
  return `Hello ${name}, ${greeting}!`;
}

let myGreeting = sayHello("Mayra","You're the best!");   //CALL SITE

alert(myGreeting);

//FUNCTION EXPRESSION:
var logStuff = function(param) {
   console.log(`${param} was passed in`);
};

//FUNCTION DECLARATION
function multiply(num, secondNum) {
    return num * secondNum;
};
//****IMPORTANT: Function hoisting only works with function declaration and not with function expression.


var fav = "cheese"
