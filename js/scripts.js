//Method, type of function
console.log("Hello World!")
// You call a function and the function returns a value (printed string in the console)

function sayHello(name, greeting){
  return `Hello ${name}, ${greeting}!`;
}

let myGreeting = sayHello("Mayra","You're the best!");

alert(myGreeting);
