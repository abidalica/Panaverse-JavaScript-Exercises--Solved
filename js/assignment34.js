// start writing your code here. When you are done, try saving it into assignment34.js file.

let pizzasList = ["Margherita", "Pepperoni", "BBQ Chicken", "Hawaiian", "Vegetarian"];

console.log("Pizza names:");
for (let i = 0; i < pizzasList.length; i++) {
    console.log(`${pizzasList[i]}`);    
}

console.log("\nPizza names with a statement:");
for (let i = 0; i < pizzasList.length; i++) {
    console.log(`I like ${pizzasList[i]} pizza.`);    
}

console.log("\nStatement about pizzas:");
console.log(`List of Pizza Types I Like:
I really like Margherita pizza.
I really like Pepperoni pizza.
I really like BBQ Chicken pizza.
I really like Hawaiian pizza.
I really like Vegetarian pizza.
I really love pizza`);