// start writing your code here. When you are done, try saving it into assignment21.js file.

let car = {
    make: "Honda",
    model: "Accord",
    year: 2024,
    color: "Navy Blue"
};

console.log("Car Details:");

Object.keys(car).forEach(key => {
    console.log(`${key}:\t${car[key]}`)
})
