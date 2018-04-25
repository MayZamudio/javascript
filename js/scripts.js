//Method, type of function
console.log("Hello World!")
// You call a function and the function returns a value (printed string in the console)

function sayHello(name, greeting){
  return `Hello ${name}, ${greeting}!`;
}

let myGreeting = sayHello("Humanoid","You're the best!");

alert(myGreeting);

//Take home assignment

let messageToUser;

function prompt_task(iteration) {
  let task_name = prompt("Task "+iteration+" name?");
  let task_duration;
  do {
    task_duration = prompt("How many days?");
  }
while (isNaN(task_duration));
  //Check if valid data
  // if task_duration is a number
  // if task_duration is a date, etc
  task_array = [task_name, task_duration];
  return task_array;
};

let tasks = [];
let task_number = 3;
for ( let i = 0; i < task_number; i++) {
  task = prompt_task(i+1);
  tasks.push(task);
};

document.write(tasks);
console.log(tasks);

let longest_task = ['',0];
let i = 0;
while ( i < tasks.length) {
  if (tasks[i][1] > longest_task[1]) {
    longest_task = tasks[i];
  };
  i++;
};

console.log(longest_task);

i = 0;
do {
  if (tasks[i] != longest_task) {
    tasks[i].push('Done');
  }
  i++;
}
while ( i < tasks.length);

console.log(tasks);
//Creates an array of things you need or want to do this weekend by collecting three todos from the user.
// let tasks = [];
// //Using a for loop, change the items in the array by adding days they should be completed by to each index.
// //Hint: which data type is best suited for your todo items?
// let taskOne = [];
// let taskOne_name = prompt('What do you need to do!');
// let taskOne_duration = prompt('In how many days?');
// let taskTwo = [];
// let taskTwo_name = prompt('What else do you need to do!');
// let taskTwo_duration = prompt('In how many days?');
// let taskThree = [];
// let taskThree_name = prompt('And one more... What do you need to do!');
// let taskThree_duration = prompt('In how many days?');
//
// taskOne.push(taskOne_name, taskOne_duration);
// taskTwo.push(taskTwo_name, taskTwo_duration);
// taskThree.push(taskThree_name, taskThree_duration);
// tasks.push(taskOne, taskTwo, taskThree);
//
// console.log(tasks);
//


//Using a while loop, find the task that will take the longest and log it to the console.


//Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest


//Finally, alert all the tasks that are marked done in the todo array.
