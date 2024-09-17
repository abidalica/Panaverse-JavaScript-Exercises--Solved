// start writing your code here. When you are done, try saving it into assignment24.js file.

let st1 = "test string";
let st2 = "TEST STRING";
let myNum = 10;
let myRange = 100;

console.log("Normal Check:")
if (st1 === st2) {
    console.log("yes they are equal.");
} else {
    console.log("No. they are not equal.")
}

console.log("\ntoLowerCase check:")
if (st1.toLowerCase() === st2.toLowerCase()) {
    console.log("yes they are equal.");
} else {
    console.log("No. they are not equal.")
}

console.log("\nNumber check:")
if (myNum > 0) {
    console.log("The number is positive.")
} else if (myNum < 0 ) {
    console.log("The number is negative.")
} else if (myNum == 0) {
    console.log("The Number is 0.")
}


console.log("\nRange Check:");
if (myRange >= 1 && myRange <= 50) {
    console.log("The number is between 1 and 50;");
} else if (myRange >= 51 && myRange <= 100) {
    console.log("The number is between 51 and 100")
} else {
    console.log("Invalid range.")
}