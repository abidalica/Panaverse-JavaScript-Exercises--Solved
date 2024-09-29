// start writing your code here. When you are done, try saving it into assignment20.js file.

let countries = ["Canada", "Japan", "Brazil", "Australia", "Germany", "South Africa", "India", "France", "Mexico", "Italy"];

console.log("List of 10 Countries:\n");

for (let country of countries.entries()) {
    console.log(`${country[0] + 1}\t${country[1]}`);
}

