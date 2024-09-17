// start writing your code here. When you are done, try saving it into assignment29.js file.

let favorite_fruits = ["mango","banana","apple"];

console.log(`Fruits list: ${[favorite_fruits]}`)

console.log("\ncheck for mango")
if ( favorite_fruits.indexOf("mango") >= 0 ) {
    console.log(`yes, I like ${favorite_fruits[favorite_fruits.indexOf("mango")]}.`);
}
console.log("\ncheck for apple")
if ( favorite_fruits.indexOf("apple") >= 0 ) {
    console.log(`yes, I like ${favorite_fruits[favorite_fruits.indexOf("apple")]}.`);
}

console.log("\ncheck for banana")
if ( favorite_fruits.indexOf("banana") >= 0 ) {
    console.log(`yes, I like ${favorite_fruits[favorite_fruits.indexOf("banana")]}.`);
}