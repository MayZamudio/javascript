
  var myName = "Ryeker";

  alert('Hello, ' + myName + '!'); //ES5

  alert(`Hello, ${myName}!`); //ES6-style string interpolation

  for (let i = 0; i < 10; i++) {  //where do I start, where do I end, and in what increments
    console.log(i);
  }

  for (let i = 0; i < 10; i++) {
    if(!(i%2==0)){// if i is odd then console log
      console.log(i);
    }
  }
//
//In your day 3 in-class app.js file:

//Declare a var and set it equal to any string.
var favoriteMovie = "The Great Gatsby";
//Declare a second var and call new String() on the same string (this will create an instance of a JS string object.)
var aMovie = "The Great Gatsby";
//Use the logical operators and a third var to determine if they are strictly equal.
var isEqual = (favoriteMovie == aMovie);//loose equals checks for type
console.log(isEqual);
var isEqual = (favoriteMovie === aMovie);//strict equals checks for value and type
console.log(isEqual);

var yourName = prompt(`What's your name?`);
console.log(!yourName);// !-is checking for falsey so console.log will return a true because it is saying that yes, it is a falsey

//Now use the logical operators and a fourth var to determine if they are loosely equal.
//Why did you get the result you got?


let obj1 = {
  name: "Mayra"
};

let obj2 = {
  name: "Mayra"
};

console.log(obj1 === obj2);//this will always equal false because obj is a pointer


//check the TYPE of Line 49
console.log(typeof("three" * 15));


console.log(isNaN("three" * 15));// True because "three" * 15 is NOT A NUMBER

let myNumber = prompt("Give me a number!!");
//parseInt will try to change into a number
alert((parseInt(myNumber) / 2));//wrap in parenthesis PEMDAS


let string = prompt("Tell me your favorite number!");

string.toString(); //will converta number to a string

alert(`Your favorite number is ${string}`);

//prompt user for a NUMBER
let theirValue = prompt("Tell me your favorite number!");
//convert return value to integer
theirValue = parseInt(theirValue);
//Return values for
console.log(returnValue + 42);
//a.) their value + 42
console.log(returnValue - 42);
//a.) their value - 42
console.log(returnValue * 42);
//a.) their value * 42
console.log(returnValue / 42);
//a.) their value / 42
