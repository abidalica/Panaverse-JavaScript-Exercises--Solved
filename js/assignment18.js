// start writing your code here. When you are done, try saving it into assignment18.js file.

let myFavPlaces = ["Tokyo", "Paris", "Cairo", "Sydney", "New York"];
// original order
console.log(`${myFavPlaces}`);
// sort alphabetically without changing the array
console.log(`${[...myFavPlaces].sort()}`);
// array still in original order
console.log(`${myFavPlaces}`);
// sort reverse alphabetically without changing the array
console.log(`${[...myFavPlaces].sort().reverse()}`);
// array still in original order
console.log(`${myFavPlaces}`);
// actually change the array in reverse order
myFavPlaces.reverse();
// show, the array has changed
console.log(`${myFavPlaces}`);
// reverse again, go back to original order
myFavPlaces.reverse();
// show it is back to original order
console.log(`${myFavPlaces}`);
// sort in alphabetical order
myFavPlaces.sort();
// show that the order has changed
console.log(`${myFavPlaces}`);
// sort in reverse alphabetical order
myFavPlaces.sort().reverse();
// show that the order has changed
console.log(`${myFavPlaces}`);