// start writing your code here. When you are done, try saving it into assignment34.js file.

let pizzasList = ["Margherita", "Pepperoni", "BBQ Chicken", "Hawaiian", "Vegetarian"];

console.log("Pizza names:");

pizzasList.forEach(pizza => {
    console.log(`${pizza}`);
})

console.log("\nPizza names with a statement:");
pizzasList.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`)
});

console.log(`\nList of Pizza Types I Like:`)
pizzasList.forEach(pizza => {
    console.log(`I really like ${pizza} pizza.`)
});
console.log(`I really love pizza`);