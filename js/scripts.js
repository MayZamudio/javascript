// //Work with Fritz since I missed Day 4- In class

let faveMovieOne = ["The Great Gatsby" , "Gatsby"];
let faveMovieTwo = ["Wolf Of Wall Street" , "Leo"];
let faveMovieThree = ["Avatar" , "BlueChick"];
let faveMovieList = [];
faveMovieList.push(faveMovieOne);
faveMovieList.push(faveMovieTwo);
faveMovieList.push(faveMovieThree);
console.log(faveMovieList.toString());
alert(faveMovieList[0][0] +", "+ faveMovieList[1][0] +", "+ faveMovieList[2][0]);
alert("My Favorite movie is" +": "+ faveMovieList[1][0]+ ", "+"My least Favorite Movie is" +": " +faveMovieList[2][0]);

faveMovieList.push(faveMovieOne, faveMovieTwo, faveMovieThree);

let i = 0;

// while (i < faveMovieList.length){
//   console.log(i);
//   console.log(faveMovieList[i][0]);
//   i++;
// }

for (let i = 0; i < faveMovieList.length; i++) {
  if(faveMovieList[i][0] === "Wolf Of Wall Street"){
    alert(faveMovieList[i][0], faveMovieList[i][2]);
  }
}
//Rest of Day 4 on Day 5
let shoppingList = [];

let item1 = "Detergent";
let item2 = "cheese";
let item3 = "crackers";
let item4 = "wine";

shoppingList.push(item1, item2, item3, item4);

console.log(shoppingList);

//multi dimensional array
let favoriteMovie = ['Star Wars VI', '1983'];
let secondFavorite = ['Return of the King', '2003'];
let thirdFavorite = ['Equilibrium', '2002'];
let myFavoriteMovies = [];
myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);

console.log(myFavoriteMovies);

console.log(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
//Result:;
