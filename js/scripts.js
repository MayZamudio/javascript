const button =
document.querySelector('.btn-danger');

button.addEventListener('click',(e) => { alert('test');
});
 const div =
 document.querySelector('.blue');

 div.addEventListener('mouseover',(e) => {
   div.style.backgroundColor = 'red'});

const body =
document.querySelector('body');
const h1 =
document.querySelector('h1');

body.addEventListener('keydown', (e) => {
  //console.log(e);
  if (e.key == 'p'){
    h1.style.color = "green"
    //
  }
});
body.addEventListener('keyup',(ev) => {
  h1.style.color = 'yellow'});


//Employ a function that accepts two arguments: temperature and scale (either celcius or fahrenheit).
var temperature
var scale
//Display the temperature in an h3 with minimal styling.

function replaceTemperature() {//Display the converted temperature in the h3.
  document.querySelector("h3").innerHTML = `${temperature} ${scale}`;
}

function convertTemperature(){
  let tF;
  let tS;
  if ( scale == "C" ){
    tF = temperature * (9/5) + 32;
    tS = 'F';
  } else if ( scale == "F" ) {
    tF = (temperature - 32) / (9/5);
    tS = 'C';
  };
  temperature = tF.toFixed(2);
  scale = tS;
  replaceTemperature();
}

function promptTemperature(){
  let invalid_temp = true;
  do {
    let temp = prompt("What is the temperature? (### scale)");
    let check = 0;
    console.log(temp.split(" "));
    if (temp.split(" ").length == 2) {
      temperature = temp.split(" ")[0];
      if (!isNaN(temperature)) { //If temperature IS a number
        check = 1;
      }
      scale = temp.split(" ")[1].toUpperCase();
      if ( scale == 'C' || scale == 'F') {//This function checks the second and changes it to uppercase
        check += 1;
      }
      if (check == 2) {
        invalid_temp = false;
      }
    }
  } while (invalid_temp);
}

//When the user clicks on the h3, run the function to convert the temperature.
promptTemperature();
replaceTemperature();
document.querySelector("div").addEventListener('click', convertTemperature);

document.addEventListener("keypress", (e) => {
  console.log(e)
  //to run program again
  if (e.key == "n") {
    promptTemperature();
    replaceTemperature();
  }});
